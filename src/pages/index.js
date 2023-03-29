import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    </>
  );
}
