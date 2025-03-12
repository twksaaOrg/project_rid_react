
import Header from "./home_page/Header.jsx";
import HeaderBar from "./home_page/HeaderBar.jsx";

import HeroBanner from "./home_page/HeroBanner.jsx";
import WelcomeSection from "./home_page/WelcomeSection.jsx";
import RIDOrganization from "./home_page/RIDOrganization.jsx";
import ResearchDiscovery from "./home_page/ResearchDiscovery.jsx";
import NewsLetterSignup from "./home_page/NewsLetterSignup.jsx";
import LatestReadings from "./home_page/latestReadings.jsx";
import Footer from "./home_page/Footer.jsx";
import FooterBottom from "./home_page/FooterBottom.jsx";

function App() {


  return (
    <>
          <Header/>
        <HeaderBar/>
       <HeroBanner/>
        <WelcomeSection/>
        <RIDOrganization/>
        <ResearchDiscovery/>
        <NewsLetterSignup/>
        <LatestReadings/>
        <Footer/>
        <FooterBottom/>
    </>
  )
}

export default App
