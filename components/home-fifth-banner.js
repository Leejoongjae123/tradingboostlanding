import Btn from "./btn";
import { FaArrowRight } from "react-icons/fa";
import SlideUp from "./slideUp";
export default function HomeFourthBanner({ className = "" }) {
  return (
    <section
      className={`w-full bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-start justify-start pt-[129px] px-[10vw] pb-[10vh] box-border gap-16 max-w-full text-center text-25xl text-grayscale-grayscale-0 font-pretendard mq450:gap-4 mq450:pt-9 mq450:px-5 mq450:pb-[55px] mq450:box-border mq750:gap-8 mq750:pl-[65px] mq750:pr-[65px] mq750:box-border mq1100:pt-[55px] mq1100:pb-[84px] mq1100:box-border mq1250:pt-[84px] mq1250:pb-[129px] mq1250:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[110px] box-border max-w-full mq450:pb-[71px] mq450:box-border">
        <div className="w-full flex flex-col items-start justify-start gap-y-6">
          <div className="flex flex-row items-start justify-center py-0 w-full box-border  mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[68px] mq750:pr-[67px] mq750:box-border">
            <SlideUp>
              <h1 className="m-0 text-2xl md:text-4xl inline-block shrink-0 whitespace-nowrap w-full font-bold">
                <span>왜</span>
                <span className="text-deeppink-100"> 수익률</span>
                <span>이 안보이죠?</span>
              </h1>
            </SlideUp>
          </div>
          <div className="w-full h-full text-2xl md:text-4xl leading-4">
            <p className="m-0">
              <span className=" font-bold">
                <span>
                  <b>사용자별 성과는</b>
                  <span className="text-2xl md:text-4xl"></span>
                </span>
              </span>
            </p>
            <p className="text-2xl md:text-4xl m-0">
              <span className="font-bold text-deeppink-100">
                천지차이.
              </span>
            </p>
          </div>
          <div className="w-full h-full text-xl md:text-4xl">
            <p className="m-0">
              <span className="leading-normal">
                <span className="font-medium">
                  <span>
                    개인의 투자 성향에 따라 자동매매 알고리즘을 직접 설정하고
                  </span>
                </span>
              </span>
            </p>
          </div>
          <div className="w-full h-full text-2xl md:text-4xl font-bold">
            <p className="m-0 text-2xl md:text-4xl text-deeppink-100">
              <span>
                <span className="leading-normal">
                  함께 소통하고 공유하세요.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 rounded-35xl flex-row items-start justify-start flex-wrap content-start py-12 px-2 md:px-12 box-border gap-4 bg-[url('/-20241007--93651-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/1@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/2@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/3@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/4@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/5@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-1">
          <SlideUp>
            <img
              className="w-full relative h-auto object-cover max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/6@2x.png"
            />
          </SlideUp>
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <SlideUp>
            <button className="flex items-center justify-center bg-deeppink-100 text-white font-bold py-1 px-6 rounded-lg hover:bg-deeppink-200 hover:text-deeppink-100 transition duration-300 cursor-pointer">
              <p className="text-[16px]">지금 바로 사용하기</p>{" "}
              <FaArrowRight className="mt-1 ml-1" />
            </button>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
