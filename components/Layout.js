import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({children}) => {
    return ( <>
        <Head>
            <title>Admin Profile</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </> );
}
 
export default Layout;