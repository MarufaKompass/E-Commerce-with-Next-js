import { Inter } from "next/font/google";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
