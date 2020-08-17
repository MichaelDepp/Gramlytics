import Layout from "../components/Layout";
import Content from "../components/Content";

const Contact = () => (
    <Layout>
        <Content>
            <div className="write-content">
                <h1>Contact</h1>
                <div className="paragraph">
                    <p>Gramlytics Application was developed by myself Michael Depp. I am a Computer Science student who currently pursuing my final year Degree at
                    Management & Science University, Shah Alam, Malaysia. I have a good knowledge on both front-end and backend. I am open for any development based
                freelance projects. You can contact me through the following platforms.</p>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/Michael-Singaram-Murugan/" target="_blank"><img src="./assets/linkedin.png"/></a>
                    <a href="https://github.com/MichaelDepp/" target="_blank"><img src="./assets/github.png"/></a>
                    <a href="https://twitter.com/_michaeldepp" target="_blank"><img src="./assets/twitter.png" /></a>
                </div>
            </div>
        </Content>
    </Layout>
);

export default Contact;