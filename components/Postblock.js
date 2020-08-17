import Postpic from "../components/Postpic";

const Postblock = (props) => (
    <div className="postblock">
        <div>
            <label>{props.title}</label>
        </div>
        <div className="post-wrapper">
            <div className="row">
                {props.medias[0] ? <Postpic bg={props.medias[0].node.display_url} val={(props.mode == "like") ? props.medias[0].node.edge_liked_by.count : props.medias[0].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[0].node.shortcode}/> : undefined}
                {props.medias[1] ? <Postpic bg={props.medias[1].node.display_url} val={(props.mode == "like") ? props.medias[1].node.edge_liked_by.count : props.medias[1].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[1].node.shortcode}/> : undefined}
                {props.medias[2] ? <Postpic bg={props.medias[2].node.display_url} val={(props.mode == "like") ? props.medias[2].node.edge_liked_by.count : props.medias[2].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[2].node.shortcode}/> : undefined}
            </div>
            <div className="row">
                {props.medias[3] ? <Postpic bg={props.medias[3].node.display_url} val={(props.mode == "like") ? props.medias[3].node.edge_liked_by.count : props.medias[3].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[3].node.shortcode}/> : undefined}
                {props.medias[4] ? <Postpic bg={props.medias[4].node.display_url} val={(props.mode == "like") ? props.medias[4].node.edge_liked_by.count : props.medias[4].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[4].node.shortcode}/> : undefined}
                {props.medias[5] ? <Postpic bg={props.medias[5].node.display_url} val={(props.mode == "like") ? props.medias[5].node.edge_liked_by.count : props.medias[5].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[5].node.shortcode}/> : undefined}
            </div>
            <div className="row">
                {props.medias[6] ? <Postpic bg={props.medias[6].node.display_url} val={(props.mode == "like") ? props.medias[6].node.edge_liked_by.count : props.medias[6].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[6].node.shortcode}/> : undefined}
                {props.medias[7] ? <Postpic bg={props.medias[7].node.display_url} val={(props.mode == "like") ? props.medias[7].node.edge_liked_by.count : props.medias[7].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[7].node.shortcode}/> : undefined}
                {props.medias[8] ? <Postpic bg={props.medias[8].node.display_url} val={(props.mode == "like") ? props.medias[8].node.edge_liked_by.count : props.medias[8].node.edge_media_to_comment.count} icon={props.icon} link={"https://www.instagram.com/p/" +props.medias[8].node.shortcode}/> : undefined}
            </div>
        </div>
    </div>
);

export default Postblock;