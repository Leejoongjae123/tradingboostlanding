import Btn from "./btn";
import { FaArrowRight } from "react-icons/fa";
import SlideUp from "./slideUp";
export default function HomeFourthBanner({ className = "" }) {
  return (
    <section className="w-full bg-grayscale-grayscale-1000 flex flex-col items-start justify-start py-[195px] pl-[10vw] pr-5 box-border gap-14 max-w-full text-left text-25xl text-grayscale-grayscale-0 font-pretendard mq450:pt-[83px] mq450:pb-[83px] mq450:box-border mq750:gap-7 mq750:pl-[30px] mq750:box-border mq1100:pl-[60px] mq1100:pt-[127px] mq1100:pb-[127px] mq1100:box-border">
      <SlideUp>
        <div className="w-full h-[110px] relative tracking-[-0.01em] leading-[125%] inline-block max-w-full mq450:text-7xl mq450:leading-[33px] mq750:text-16xl mq750:leading-[44px]">
          <p className="m-0 font-black">우리의 기본 가치.</p>
          <p className="m-0">
            <span className="font-black">{`집단지성 `}</span>
            <span className="text-5xl font-medium font-pretendard">그리고</span>
            <span className="text-25xl font-black font-pretendard">
              {" "}
              공리주의.
            </span>
          </p>
        </div>
        <h1 className="m-0 w-full h-[110px] relative text-inherit tracking-[-0.01em] leading-[125%] font-black font-[inherit] inline-block max-w-full mq450:text-7xl mq450:leading-[33px] mq750:text-16xl mq750:leading-[44px]">
          <p className="m-0">뛰어나다고 훌륭한 것은 아닙니다.</p>
          <p className="m-0 text-deeppink-100">
            뛰어남은 올바르게 사용되야 합니다.
          </p>
        </h1>
        <div className="w-full h-[180px] relative text-base tracking-[-0.01em] leading-[125%] font-medium inline-block max-w-full">
          <p className="m-0">
            개미투자자가 제로섬 게임의 이 시장에서 이길 수 있는 방법
            "집단지성"과 “공리주의” 입니다.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">우리는 올바르게 사용합니다.</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            거래소가 제공하는 Affilate 마케팅 시스템을 통해 여러분의 소중한
            거래수수료로 수익을 창출합니다.
          </p>
          <p className="m-0">
            이를 적재적소에 재투자하여, 사용자들이 더 나은 환경에서 성공 모델을
            만들도록 지속적인 프로그램 개발과 건의사항을 취합하여 함께
            나아갑니다.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            트레이딩부스터는 도박판이라고 인식되어 있는 대한민국 가상자산 시장
            문화를 개선하는데 집중합니다
          </p>
        </div>
        </SlideUp>
      </section>
  );
}
