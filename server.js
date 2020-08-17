const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');
const { getQuickStats } = require("./scrapper");
const instaTouch = require("instatouch")
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const axios = require("axios")

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const nextApp = next({ dir: '.', dev });
  const nextHandler = nextApp.getRequestHandler();

  nextApp.prepare()
    .then(() => {
      const server = express();

      if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function (req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({
              'Strict-Transport-Security': 'max-age=31557600' // one-year
            });
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
      }

      // Static files
      // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
      server.use('/static', express.static(path.join(__dirname, 'static'), {
        maxAge: dev ? '0' : '365d'
      }));

      // Example server-side routing
      server.get('/about', (req, res) => {
        return nextApp.render(req, res, '/about', req.query)
      })

      // Example server-side routing
      server.get('/contact', (req, res) => {
        return nextApp.render(req, res, '/contact', req.query)
      })

      server.get("/check", (req, res) => {

        if (req.query.user) {
          var uname = req.query.user;
          (async () => {
            try {
              let user = await instaTouch.getUserMeta(uname);
              if (user.graphql.user) {
                res.json("exists")
              } else {
                res.json("none")
              }
            } catch (err) {
              res.json("none")
            }
          })();
        }
        else {
          res.json("no user name passed")
        }

      });

      server.get("/profile", (req, res) => {

        if (req.query.user) {
          var uname = req.query.user;
          console.log("from server " + uname)
          let stats = '';
          let totalpost = '';
          let user = '';
          let profileAnalysis = '';
          let days = []

          var desiredNumberOfTopPosts = 9;
          async function load() {
            stats = await getQuickStats(uname, desiredNumberOfTopPosts)
            totalpost = stats.posts;
            try {
              const options = { count: 50, mediaType: 'all' };
              user = await instaTouch.user(uname, options);
              await calcStat(user.collector)
            } catch (error) {
              console.log(error);
            }
          }

          load();

          async function calcStat(posts) {

            let day = {
              posts: 0,
              likes: 0,
              comments: 0,
              avgLikes: 0,
              avgComments: 0
            }

            for (var i = 0; i < 7; i++) {
              days.push(Object.create(day))
            }

            posts.forEach(post => {
              var date = new Date(post.taken_at_timestamp * 1000);

              days[date.getDay()].posts = days[date.getDay()].posts + 1;
              days[date.getDay()].likes = days[date.getDay()].likes + post.likes;
              days[date.getDay()].comments = days[date.getDay()].comments + post.comments;

              if (date.getDay() == 1) {
                days[1].likes = days[1].likes + 1;
              }
            })

            for (var j = 0; j < 7; j++) {
              days[j].avgLikes = days[j].likes / days[j].posts;
              days[j].avgComments = days[j].comments / days[j].posts;
            }

            profileAnalysis = {
              Userinfo: stats,
              Daysinfo: days
            }

            res.json(profileAnalysis);

          }
        }
        else {
          res.json("no user name passed")
        }

      });

      // Default catch-all renders Next app
      server.get('*', (req, res) => {
        // res.set({
        //   'Cache-Control': 'public, max-age=3600'
        // });
        const parsedUrl = url.parse(req.url, true);
        nextHandler(req, res, parsedUrl);
      });

      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Listening on http://localhost:${port}`);
      });
    });
}
