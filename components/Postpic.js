function Postpic(prop) {
    var value;

    if (prop.val > 999999) {
        var sd = (prop.val % 1000000).toString()[0];
        value = parseInt(prop.val / 1000000) + "." + sd + "M";
    } else if (prop.val > 999) {
        var sd = (prop.val % 1000).toString()[0];
        value = parseInt(prop.val / 1000) + "." + sd + "K";
    } else {
        value = prop.val
    }

    return (
        <div className="postpic">
            <a href={prop.link} target="_blank">
                <div className="hover-info" style={{ backgroundImage: "url(" + prop.bg + ")" }}>
                    <div className="overlay"></div>
                    <div className="info">
                        <img src={prop.icon} />
                        <label>{value}</label>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Postpic;