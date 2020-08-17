const Userdesc = (prop) => (
    <div className="user-desc">
        <label id="name">{prop.name}</label>
        <label id="username"><a href={"https://www.instagram.com/" + prop.uname} target="_blank">{ "@" + prop.uname}</a></label>
        <label id="bio">{prop.bio}</label>
        <label id="link"><a href={prop.link} target="_blank">{prop.link}</a></label>
    </div>
);

export default Userdesc;