// import Head from 'next/head';
import Navbar from "./Navbar";
// import '../styles/style.scss';
import Rightblock from './Rightblock';

const Layout = (props) => (
    <div>
        {/*<Head>
            <title>Gramlytics</title>
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            <link rel='icon' href="./assets/logo.png" type='image/x-icon'></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
        </Head> */}
        <div className="container">
            <div className="content-left">
                <Navbar/>
                {props.children}
            </div>
            <div className="content-right">
                <Rightblock/>
            </div>
        </div>
    </div>
);

export default Layout;