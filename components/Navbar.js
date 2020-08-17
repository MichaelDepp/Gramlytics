import Link from 'next/link';

const Navbar = () => (
    <div className="navbar">
        <ul>
            <li><Link href="/"><button><img width="50" src="./assets/logo.png"></img></button></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/faq"><a>FAQ</a></Link></li>
            <li><Link href="/github"><a>Github</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    </div> 
);

export default Navbar;