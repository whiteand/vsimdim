import Head from "next/head";
import FirstScreen from "../components/FirstScreen/FirstScreen";
import FourthSlide from "../components/FourthSlide";
import SecondSlide from "../components/SecondSlide";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";
import ThirdSlide from "../components/ThirdSlide";

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
      <ThirdSlide />
      <FourthSlide />
      <Slide5 />
      <Slide6 />
    </>
  );
}
