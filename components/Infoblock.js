import InfoboxOne from "../components/InfoboxOne";
import InfoboxTwo from "../components/InfoboxTwo";

function Infoblock (prop) {

    var postsAdj;
    var followerAdj;
    var followingAdj;
    var totLikeAdj;
    var totCommentAdj;
    var avgLikeAdj;
    var avgCommentAdj;

    if (prop.posts > 999999) {
        var sd = (prop.posts%1000000).toString()[0];
        postsAdj = parseInt(prop.posts / 1000000) + "." +  sd + "M";
    } else if (prop.posts > 999) {
        var sd = (prop.posts%1000).toString()[0];
        postsAdj = parseInt(prop.posts / 1000) + "." +  sd + "K";
    } else {
        postsAdj = prop.posts
    }

    if (prop.followers > 999999) {
        var sd = (prop.followers%1000000).toString()[0];
        followerAdj = parseInt(prop.followers / 1000000) + "." +  sd + "M";
    } else if (prop.followers > 999) {
        var sd = (prop.followers%1000).toString()[0];
        followerAdj = parseInt(prop.followers / 1000) + "." +  sd + "K";
    } else {
        followerAdj = prop.followers
    }

    if (prop.following > 999999) {
        var sd = (prop.following%1000000).toString()[0];
        followingAdj = parseInt(prop.following / 1000000) + "." +  sd + "M";
    } else if (prop.following > 999) {
        var sd = (prop.following%1000).toString()[0];
        followingAdj = parseInt(prop.following / 1000) + "." +  sd + "K";
    } else {
        followingAdj = prop.following
    }

    if (prop.totLike > 999999) {
        var sd = (prop.totLike%1000000).toString()[0];
        totLikeAdj = parseInt(prop.totLike / 1000000) + "." +  sd + "M";
    } else if (prop.totLike > 999) {
        var sd = (prop.totLike%1000).toString()[0];
        totLikeAdj = parseInt(prop.totLike / 1000) + "." +  sd + "K";
    } else {
        totLikeAdj = prop.totLike
    }

    if (prop.totComment > 999999) {
        var sd = (prop.totComment%1000000).toString()[0];
        totCommentAdj = parseInt(prop.totComment / 1000000) + "." +  sd + "M";
    } else if (prop.totComment > 999) {
        var sd = (prop.totComment%1000).toString()[0];
        totCommentAdj = parseInt(prop.totComment / 1000) + "." +  sd + "K";
    } else {
        totCommentAdj = prop.totComment
    }

    if (prop.avgLike > 999999) {
        var sd = (prop.avgLike%1000000).toString()[0];
        avgLikeAdj = parseInt(prop.avgLike / 1000000) + "." +  sd + "M";
    } else if (prop.avgLike > 999) {
        var sd = (prop.avgLike%1000).toString()[0];
        avgLikeAdj = parseInt(prop.avgLike / 1000) + "." +  sd + "K";
    } else {
        avgLikeAdj = prop.avgLike
    }

    if (prop.avgComment > 999999) {
        var sd = (prop.avgComment%1000000).toString()[0];
        avgCommentAdj = parseInt(prop.avgComment / 1000000) + "." +  sd + "M";
    } else if (prop.avgComment > 999) {
        var sd = (prop.avgComment%1000).toString()[0];
        avgCommentAdj = parseInt(prop.avgComment / 1000) + "." +  sd + "K";
    } else {
        avgCommentAdj = prop.avgComment
    }

    return (
        <div className="info-block">
        <div className="upper">
            <InfoboxOne info={"Posts"} val={postsAdj} />
            <InfoboxOne info={"Followers"} val={followerAdj} />
            <InfoboxOne info={"Following"} val={followingAdj} />
        </div>
        <div className="lower">
            <InfoboxTwo info={"Total Likes"} val={totLikeAdj} />
            <InfoboxTwo info={"Total Comments"} val={totCommentAdj} />
            <InfoboxTwo info={"Avg Likes"} val={avgLikeAdj} />
            <InfoboxTwo info={"Avg Comments"} val={avgCommentAdj} />
        </div>
    </div>
    )
}

export default Infoblock;