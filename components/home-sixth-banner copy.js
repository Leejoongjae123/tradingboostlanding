import Btn from "./btn";
import { FaArrowRight } from "react-icons/fa";

export default function HomeFourthBanner({ className = "" }) {
  return (
    <section
      className={`self-stretch bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-start justify-start pt-[129px] px-[130px] pb-[199px] box-border gap-16 max-w-full text-center text-25xl text-grayscale-grayscale-0 font-pretendard mq450:gap-4 mq450:pt-9 mq450:px-5 mq450:pb-[55px] mq450:box-border mq750:gap-8 mq750:pl-[65px] mq750:pr-[65px] mq750:box-border mq1100:pt-[55px] mq1100:pb-[84px] mq1100:box-border mq1250:pt-[84px] mq1250:pb-[129px] mq1250:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[110px] box-border max-w-full mq450:pb-[71px] mq450:box-border">
        <div className="w-full flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">
          <div className="flex flex-row items-start justify-center py-0 w-full box-border  mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[68px] mq750:pr-[67px] mq750:box-border">
            <h1 className="m-0 w-[383px] relative text-inherit tracking-[-0.01em] leading-[150%] font-black font-[inherit] inline-block shrink-0 whitespace-nowrap max-w-full mq450:text-7xl mq450:leading-[40px] mq750:text-16xl mq750:leading-[53px]">
              <span>왜</span>
              <span className="text-deeppink-100"> 수익률</span>
              <span>이 안보이죠?</span>
            </h1>
          </div>
          <div className="w-full h-[137px] relative tracking-[-0.01em] inline-block text-9xl mq450:text-3xl">
            <p className="m-0">
              <span className="leading-[40px]">
                <span>
                  <b>사용자별 성과는</b>
                  <span className="text-25xl">
                    <span className="font-pretendard">{` `}</span>
                  </span>
                </span>
                <span className="text-25xl">
                  <span className="font-black font-pretendard text-deeppink-100">
                    천지차이.
                  </span>
                </span>
              </span>
            </p>
            <p className="m-0">
              <span className="leading-[40px]">
                <span className="font-medium">
                  <span>
                    개인의 투자 성향에 따라 자동매매 알고리즘을 직접 설정하고
                  </span>
                  <span>{` `}</span>
                </span>
              </span>
            </p>
            <p className="m-0 text-25xl text-deeppink-100">
              <span>
                <span className="leading-[51px] font-black">
                  함께 소통하고 공유하세요.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 rounded-35xl flex-row items-start justify-start flex-wrap content-start pt-[249px] pb-[259px] pl-[46px] pr-[58px] box-border gap-x-[23px] gap-y-[27px] bg-[url('/-20241007--93651-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[162px] mq750:pb-[168px] mq750:box-border mq1250:pl-[23px] mq1250:pr-[29px] mq1250:box-border">
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/1@2x.png"
          />
        </div>
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/2@2x.png"
          />
        </div>
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/3@2x.png"
          />
        </div>
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/4@2x.png"
          />
        </div>
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/5@2x.png"
          />
        </div>
        <div className="col-span-1">
          {" "}
          <img
            className="w-full relative h-auto object-cover max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/6@2x.png"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <button className="flex items-center justify-center bg-deeppink-100 text-white font-bold py-3 px-6 rounded-lg hover:bg-deeppink-200 hover:text-deeppink-100 transition duration-300 cursor-pointer">
            지금 바로 사용하기 <FaArrowRight className="mt-1 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
