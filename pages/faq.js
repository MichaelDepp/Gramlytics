import Layout from "../components/Layout";
import Content from "../components/Content";

const Faq = () => (
    <Layout>
        <Content>
            <div className="write-content">
                <h1>FAQ</h1>
                <p className="question">1. What is Gramlytics ?</p>
                <p className="answer">Gramlytics is a Instagram Analytics Web Application</p>
                <p className="question">2. Does Gramlytics records my personal information ?</p>
                <p className="answer">Gramlytics doesn't records any of your personal information. It only give you the details of profile you searched.</p>
                <p className="question">3. How reliable is Gramlytics analytics ?</p>
                <p className="answer">Gramlytics actually scrapes the profile information from the profile link. And do the analysis with the data.</p>
                <p className="question">4. Is Gramlytics associated with Instagram or any other companies ?</p>
                <p className="answer">No, Gramlytics doesn't belong to any company.</p>
                <p className="question">5. I don't want Gramlytics to display my data.</p>
                <p className="answer">Gramlytics is just a tool that scrapes information from Instagram, We cant hide or stop displaying your data.</p>
            </div>
        </Content>
    </Layout>
);
  
export default Faq;