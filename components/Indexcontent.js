import Layout from "../components/Layout";
import Content from "../components/Content";
import Userinput from "../components/Userinput";
import Typewriter from "typewriter-effect";

const Indexcontent = (prop) => (
    <Layout>
        <Content>
            <div className="welcome">
                <div className="welcome-tag">
                    <h1><Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Zuckerberg is spying on yo')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(800)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                            typewriter.typeString( `Data will talk to you, if you're willing to listen...`)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(1000)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                            typewriter.typeString('Smart Analytics to grow your Instagram.')
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    /></h1>
                </div>
                <div className="search-part">
                    <Userinput
                        label={"Search"}
                        handleAddOption={prop.handleAddOption}
                    />
                    {prop.error ? <h4>{prop.error}</h4> : <h4></h4>}
                </div>
            </div>
        </Content>
    </Layout>
);

export default Indexcontent;