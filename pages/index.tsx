import Head from "next/head";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import FourthSlide from "../components/FourthSlide";
import SecondSlide from "../components/SecondSlide";
import Slide10 from "../components/Slide10";
import Slide11 from "../components/Slide11";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";
import Slide7 from "../components/Slide7";
import Slide8 from "../components/Slide8/Slide8";
import Slide9 from "../components/Slide9";
import Slide3 from "../components/Slide3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstScreen />
      <SecondSlide />
      <Slide3 />
      <FourthSlide />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
    </>
  );
}
