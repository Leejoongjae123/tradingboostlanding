import HomeMainBanner from "../components/home-main-banner";
import HomeSecondBanner from "../components/home-second-banner";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import FooterWeb from "../components/footer-web";
import LogoMenuWeb from "../components/logo-menu-web";
import HomeThirdBanner from "../components/home-third-banner";
import HomeFourthBanner from "../components/home-fourth-banner";
import HomeFifthBanner from "../components/home-fifth-banner";
import HomeSixthBanner from "../components/home-sixth-banner";
import HomeSeventhBanner from "../components/home-seventh-banner";
import Script from 'next/script'
const HomeWeb = () => {
  return (
    <div className="relative shadow-[0px_0px_20px_rgba(0,_0,_0,_0.1)] w-full flex flex-col items-start justify-start text-left text-[1rem] text-deeppink-100 font-pretendard">
      <HomeMainBanner />
      <HomeSecondBanner />
      <HomeThirdBanner />
      <HomeFourthBanner />
      <HomeFifthBanner />
      <HomeSixthBanner />
      <HomeSeventhBanner />

      {/* <Component3 /> */}
      <FooterWeb />
      {/* <LogoMenuWeb /> */}
      <Script src="/js/uikit.min.js" />
      <Script src="/js/simplebar.js" />
      <Script src="/js/script.js" />
    </div>
  );
};

export default HomeWeb;
