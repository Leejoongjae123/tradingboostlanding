import Btn from "./btn";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const HomeMainBanner = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-full bg-grayscale-grayscale-900 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[74px] px-0 pb-0 box-border max-w-full text-center text-xl text-grayscale-grayscale-500 font-pretendard mq750:pt-[31px] mq750:box-border mq1250:pt-12 mq1250:box-border ${className}`}
    >
      
      <div className="home_background my-12 flex-1 flex flex-col items-start justify-start md:py-[20vh] px-[10vw] relative gap-y-12 w-full">

        <div className="w-full mb-10 md:mb-0 rounded-17xl bg-[#2C2C2C] flex flex-col items-center justify-center py-12 px-6 md:px-12 gap-2 z-[2] border-thistle-200 border-[1px] border-solid box-border" >
          <div className="self-stretch flex flex-row items-center justify-center py-0 box-border max-w-full">
            <div className="w-full relative text-sm md:text-md text-center">
              맡기지 말고, 본인 계좌로 직접 자동매매를 시작해보세요
            </div>
          </div>
          <div className="w-full text-deeppink-100 text-2xl md:text-4xl leading-normal font-bold">
            <p className="my-5">
              <span className="text-grayscale-grayscale-0">
                자동매매 프로그램 사용료
              </span>
              <span> “0원"</span>
            </p>
            <p className="mt-0">
              <span>사용자 선택 기반</span>
              <span className="text-grayscale-grayscale-0">
                가상자산 자동매매
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <button className="flex items-center justify-center bg-deeppink-100 text-white font-bold py-1 px-6 rounded-lg hover:bg-deeppink-200 hover:text-deeppink-100 transition duration-300 cursor-pointer">
              <p className="text-[16px]">지금 바로 사용하기</p>
              <FaArrowRight className="mt-1 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

HomeMainBanner.propTypes = {
  className: PropTypes.string,
};

export default HomeMainBanner;
