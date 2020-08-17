import Infoblock from "./Infoblock";
import Postblock from "./Postblock";
import Daysgraph from "./Daysgraph";

const Publicprofile = (prop) => (
    <div>
        <Infoblock
            posts={prop.profile.Userinfo.posts}
            followers={prop.profile.Userinfo.followers}
            following={prop.profile.Userinfo.following}
            totLike={prop.profile.Userinfo.totalLikes}
            totComment={prop.profile.Userinfo.totalComments}
            avgLike={prop.profile.Userinfo.averageLikes}
            avgComment={prop.profile.Userinfo.averageComments}
        />
        <div className="most-block">
            <div className="most-like">
                <Postblock title={"Most Liked Posts"} icon={"/assets/heart.png"} medias={prop.profile.Userinfo.mostLikedMedia} mode={"like"} />
            </div>
            <div className="most-comment">
                <Postblock title={"Most Commented Posts"} icon={"/assets/comment.png"} medias={prop.profile.Userinfo.mostCommentedMedia} mode={"comment"} />
            </div>
            <div className="days-graph">
                <Daysgraph post={
                    [Math.round(prop.profile.Daysinfo[0].posts), Math.round(prop.profile.Daysinfo[1].posts), Math.round(prop.profile.Daysinfo[2].posts), Math.round(prop.profile.Daysinfo[3].posts), Math.round(prop.profile.Daysinfo[4].posts), Math.round(prop.profile.Daysinfo[5].posts), Math.round(prop.profile.Daysinfo[6].posts)]
                }
                likes={
                    [Math.round(prop.profile.Daysinfo[0].avgLikes), Math.round(prop.profile.Daysinfo[1].avgLikes), Math.round(prop.profile.Daysinfo[2].avgLikes), Math.round(prop.profile.Daysinfo[3].avgLikes), Math.round(prop.profile.Daysinfo[4].avgLikes), Math.round(prop.profile.Daysinfo[5].avgLikes), Math.round(prop.profile.Daysinfo[6].avgLikes)]
                }
                comments={
                    [Math.round(prop.profile.Daysinfo[0].avgComments), Math.round(prop.profile.Daysinfo[1].avgComments), Math.round(prop.profile.Daysinfo[2].avgComments), Math.round(prop.profile.Daysinfo[3].avgComments), Math.round(prop.profile.Daysinfo[4].avgComments), Math.round(prop.profile.Daysinfo[5].avgComments), Math.round(prop.profile.Daysinfo[6].avgComments)]
                }
                />
            </div>
        </div>
    </div>
)

export default Publicprofile;