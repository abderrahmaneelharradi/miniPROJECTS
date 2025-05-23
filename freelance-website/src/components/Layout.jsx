import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container my-4">{children}</main>
    <Footer />
  </>
);

export default Layout;