import Layout from "../components/Layout";
import Content from "../components/Content";

const Github = () => (
    <Layout>
        <Content>
            <div className="write-content">
                <h1>Github</h1>
                <div className="paragraph">
                    <p>Gramlytics is a Instagram Analytics Web Application. This application is fully build by Michael.
                    This application's frontend was build in Next.js (React Library's Framework). The backend of this application uses
                    Express.js which is a flexible and robust Node.js's web application Framework. The full source code for this application
                    is avaible on Github. You can fork the repository and freely experiment or contribute for this simple project.</p>
                </div>
                <div className="icon">
                    <a href="https://github.com/MichaelDepp/Gramlytics" target="_blank"><img src="./assets/github.png"/></a>
                </div>
            </div>
        </Content>
    </Layout>
);

export default Github;