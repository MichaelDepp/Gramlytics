import Infoblock from "./Infoblock";

const Privateprofile = (prop) => (
    <div>
        <Infoblock
            posts={prop.profile.Userinfo.posts}
            followers={prop.profile.Userinfo.followers}
            following={prop.profile.Userinfo.following}
            totLike={0}
            totComment={0}
            avgLike={0}
            avgComment={0}
        />
        <div className="most-block">
            <div className="not-found">
                <div>
                    <label>It is a private profile</label>
                </div>
                <img src="./assets/not-found.svg" />
            </div>
        </div>
    </div>
)

export default Privateprofile;