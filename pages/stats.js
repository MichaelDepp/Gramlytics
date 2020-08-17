import Layout from "../components/Layout";
import Content from "../components/Content";
import Userpic from "../components/Userpic";
import Userdesc from "../components/Userdesc";
import Publicprofile from "../components/Publicprofile";
import Privateprofile from "../components/Privateprofile";
import { server } from '../config';

const BASE_URL = "/profile?user=";

function Stats(prop) {
    return (
        <Layout>
            <Content>
                <div>
                    <div className="user-brief">
                        <Userpic image={prop.profile.Userinfo.profilePictureUrlHD}></Userpic>
                        <Userdesc name={prop.profile.Userinfo.name} uname={prop.profile.Userinfo.username} bio={prop.profile.Userinfo.bio}  link={prop.profile.Userinfo.website}></Userdesc>
                    </div>
                    {prop.profile.Userinfo.totalComments ? <Publicprofile profile={prop.profile}></Publicprofile> : <Privateprofile profile={prop.profile}></Privateprofile>}
                </div>
            </Content>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    console.log(context.query.user)
    const res = await fetch(`${server}` + BASE_URL + context.query.user)
    const profile = await res.json()

    return {
        props: {
            profile,
        },
    }
}

export default Stats