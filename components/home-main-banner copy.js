import Btn from "./btn";
import PropTypes from "prop-types";

const HomeMainBanner = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[893px] bg-grayscale-grayscale-900 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[74px] px-0 pb-0 box-border max-w-full text-center text-xl text-grayscale-grayscale-500 font-pretendard mq750:pt-[31px] mq750:box-border mq1250:pt-12 mq1250:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[266.5px] pb-[319px] pl-[291px] pr-[290px] box-border relative gap-[71.5px] max-w-full mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-9 mq750:pt-28 mq750:px-[145px] mq750:pb-[135px] mq750:box-border mq1100:pt-[173px] mq1100:pb-[207px] mq1100:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/clip-path-group.svg"
        />
        <div className="self-stretch shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] rounded-17xl bg-deeppink-200 border-gray-400 border-[2px] border-solid box-border flex flex-col items-start justify-start py-[67px] px-[126px] gap-2 max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq1100:pl-[63px] mq1100:pr-[63px] mq1100:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[88px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-11 mq750:pr-11 mq750:box-border">
            <div className="w-[427px] relative tracking-[-0.01em] leading-[150%] font-medium inline-block shrink-0 whitespace-nowrap max-w-full mq450:text-base mq450:leading-[24px]">
              맡기지 말고, 본인 계좌로 직접 자동매매를 시작해보세요
            </div>
          </div>
          <h1 className="m-0 self-stretch h-[132px] relative text-25xl tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block text-deeppink-100 mq450:text-7xl mq450:leading-[40px] mq750:text-16xl mq750:leading-[53px]">
            <p className="m-0">
              <span className="text-grayscale-grayscale-0">
                자동매매 프로그램 사용료
              </span>
              <span> “0원"</span>
            </p>
            <p className="m-0">
              <span className="font-black font-pretendard text-deeppink-100">사용자 선택 기반</span>
              <span className="text-grayscale-grayscale-0">
                가상자산 자동매매
              </span>
            </p>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[303px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1100:pl-[151px] mq1100:pr-[151px] mq1100:box-border">
          <Btn
            propAlignItems="flex-start"
            propJustifyContent="flex-start"
            text="지금 바로 사용하기"
            propWidth="118px"
            tablerarrowLeft="/tablerarrowleft.svg"
          />
        </div>
      </div>
    </section>
  );
};

HomeMainBanner.propTypes = {
  className: PropTypes.string,
};

export default HomeMainBanner;
