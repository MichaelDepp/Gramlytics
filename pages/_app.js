import Head from 'next/head';
import '../styles/style.scss';

function App({ Component, pageProps }) {
    console.log("Hello from APP")
    return (
        <div>
            <Head>
                <title>Gramlytics</title>
                <link rel='icon' href="./assets/logo.png" type='image/x-icon'></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default App;