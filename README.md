# Gramlytics  📷
Gramlytics is a Web Based Instagram Analytics Application, which can be used to track any public profile's information.

Gramlytics Link : https://gramlytics.vercel.app 

The backend of the application was developed using Express Js. For the front-end I used Next Js. The backend basically performs web scrapping of a given username and process the data for the analytics.
Gramlytics provides a detailed information of any public profile you search. It will display information such as, most liked posts, most commented posts, average likes, comments and also bar graphs to give a illustration of the high traffic days and normal engagement of an Instagram account. If it is a private profile, it will display the basic information of that profile.

<p align="center">
  <img width="500" src="/screenshot/ss1.PNG">
  <img width="500" src="/screenshot/ss2.PNG">
</p>
<p align="center">
  <img width="500" src="/screenshot/ss3.PNG">
  <img width="500" src="/screenshot/ss4.PNG">
</p>

The entire application is full responsive. You can view the app in any viewport. This is the sample interface for the mobile view.
<p align="center">
  <img width="200" src="/screenshot/ss9.jpg">
  <img width="200" src="/screenshot/ss91.PNG">
</p>

After development, I deployed the application to Vercel, it is working but unfortunately Instagram is blocking the web scrapper from scraping the data. Anyways, I have provided the GitHub Link of that repository. You can clone and experiment the application.

<p align="left">
  (Make sure, you have Node Js and Npm installed in your machine)
  <br>
  Installation :
</p>
<p align="left">
  <p> 1. git clone https://github.com/MichaelDepp/Gramlytics </p>
  <p> 2. cd Gramlytics </p>
  <p> 3. npm install </p>
  <p> 4. npm run dev </p>
</p>

As I mentioned, this application was deployed to Vercel, but the web scrapping functionality were blocked by Instagram.
<p> So this is the working demo of the application in my localhost : https://bit.ly/Gramlytics-Web </p>
<p> Responsive Mobile Demo of the application in mmy localhot : https://bit.ly/Gramlytics-Mobile </p>
