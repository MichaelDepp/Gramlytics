import { useRouter} from "next/router";

function Rightblock() {
    var imgsrc = "./assets/home.png";
    let path = useRouter().pathname
    if (path == "/") {
        imgsrc = "./assets/home.png";
    } else if (path == "/about") {
        imgsrc = "./assets/about.png";
    } else if (path == "/faq") {
        imgsrc = "./assets/faq.png";
    } else if (path == "/github") {
        imgsrc = "./assets/code.png";
    } else if (path == "/contact") {
        imgsrc = "./assets/contact.png";
    } else if (path == "/stats") {
        imgsrc = "./assets/stats.png";
    }else {
        imgsrc = "./assets/home.png";
    }

    return (
        <div className="right-block">
            <div className="art">
                <img src={imgsrc}/>
            </div>
        </div>
    )
};

export default Rightblock;