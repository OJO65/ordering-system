import Navbar from "../shared/components/navbar/Navbar";
import Footer from "../shared/components/footer/Footer";

export function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
