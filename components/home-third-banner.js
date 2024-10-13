import Btn from "./btn";
import PropTypes from "prop-types";
import SlideLeft from "./slideLeft";
import SlideUp from "./slideUp";
export default function HomeSecondBanner({ className = "" }) {
  return (
    
      <div
        className={`w-full bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-start justify-start py-12 md:py-24 px-[10vw] box-border z-[2] text-center text-[1.75rem] text-grayscale-grayscale-0 font-pretendard ${className}`}
    >
      
      <div className="self-stretch flex flex-col items-center justify-start gap-[4rem]">
        <SlideLeft>
        <div className="self-stretch relative">
          <span>{`결국 트레이딩부스터를 선택하게 되는 `}</span>
          <b className="text-[2rem] text-deeppink-100">5가지 이유</b>
          <span className="font-medium">는?</span>
        </div>
        </SlideLeft>
        <SlideLeft>
        <div className="w-full flex flex-col gap-[2rem] text-[1.25rem]">
          {/* First row items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] w-full h-full">
            <div className="col-span-1  rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border h-full flex flex-col items-center justify-start p-6">
              <div className="h-[10rem] flex flex-row items-center justify-center py-[1.25rem] px-[0rem] box-border">
                <img
                  className="w-[7.375rem] relative h-[8.125rem] object-cover"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="w-full h-full">
                <p className="m-0">검증된 대형거래소와 파트너십 체결</p>
                <p className="m-0">(OKX, bybite, Bynance)</p>
              </div>
            </div>
            <div className="col-span-1 [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border h-[17.75rem] flex flex-col items-center justify-start p-[1rem] gap-[0.75rem]">
              <div className="w-[8.688rem] h-[10rem] flex flex-col items-center justify-center py-[1.25rem] px-[0rem] box-border">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[8.25rem] shrink-0 object-cover"
                  alt=""
                  src="/image-85@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <p className="m-0">국내 사업자 등록으로</p>
                <p className="m-0">합법적인 운영</p>
              </div>
            </div>
            <div className="col-span-1 [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid flex flex-col items-center justify-start p-[1rem] gap-[0.75rem]">
              <div className="w-[8.688rem] h-[10rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border">
                <img
                  className="w-[8.75rem] relative h-[8.75rem] object-cover"
                  alt=""
                  src="/161-2@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <p className="m-0 whitespace-pre-wrap">
                  사용자 의견 반영 알고리즘 등으로
                </p>
                <p className="m-0">24시간 실시간 오토봇 서비스 제공</p>
              </div>
            </div>
          </div>

          {/* Second row items */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem]">
            <div className="w-full md:w-[calc(33.33%-1rem)] [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border h-[17.75rem] flex flex-col items-center justify-start p-[1rem] gap-[0.75rem]">
              <div className="h-[10rem] flex flex-row items-center justify-center py-[1.25rem] px-[0rem] box-border">
                <img
                  className="w-[8.375rem] relative h-[6.938rem] object-cover"
                  alt=""
                  src="/object@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <p className="m-0">이용료 무료로 제공되는</p>
                <p className="m-0">퀀트프로그램</p>
              </div>
            </div>
            <div className="w-full md:w-[calc(33.33%-1rem)] [backdrop-filter:blur(20px)] rounded-2xl bg-pink-100 border-thistle-200 border-[1px] border-solid box-border h-[17.75rem] flex flex-col items-center justify-start p-[1rem] gap-[0.75rem]">
              <div className="w-[8.688rem] h-[10rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border">
                <img
                  className="w-[8.625rem] relative h-[7.75rem] object-cover"
                  alt=""
                  src="/object-1@2x.png"
                />
              </div>
              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                <p className="m-0">코인시장의 문화를 선도할</p>
                <p className="m-0">새로운 집단지성 플랫폼</p>
              </div>
            </div>
          </div>
        </div>
        </SlideLeft>
      </div>
      
    </div>
  );
}
