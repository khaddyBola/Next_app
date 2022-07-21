import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return ( 
        <>
            <nav>
                <div className="logo">
                    <Image src="/femaleFace.jpeg" width={90} height={90} alt="images"/>
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/admin"><a>Admin page</a></Link>
            </nav>
        </>
    );
}
 
export default Navbar;