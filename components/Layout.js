// components/Layout.js
import Navbar from './Navbar';
import Footer from './footers';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
