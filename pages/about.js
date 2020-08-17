import Layout from "../components/Layout";
import Content from "../components/Content";

const About = () => (
    <Layout>
        <Content>
            <div className="write-content">
                <h1>About</h1>
                <div className="paragraph">
                    <p>Gramlytics is a Instagram Analytics Web Application. This application search any username profile that exists in Instagram
                    and scrappes the information of that profile and give you a detailed analytics about the profile. Gramlytics can't fetch private profile's
                    information. The application will give you informations like total posts, followers, following, total likes, total comments,
                    average likes, average comments, most liked posts (9 posts), most commented posts (9 posts), and also a bar graph illustrating
                the daily analytics which can indicate the profile's high traffic days and low traffic days.</p>
                </div>
            </div>
        </Content>
    </Layout>
);

export default About;