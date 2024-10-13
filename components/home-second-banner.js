import Btn from "./btn";
import SlideUp from "./slideUp";
export default function HomeSecondBanner({ className = "" }) {
  return (
    <div className="w-full h-full md:h-[893px] py-12 bg-grayscale-grayscale-1000  box-border px-[10vw]">
      <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center h-full">
        <div className="col-span-2 flex items-center justify-center ">
          <SlideUp>
            <img
              className="w-[40vw] md:w-[46vw] relative rounded-[20%] h-auto object-fill"
              alt=""
              src="/image@2x.png"
            />
          </SlideUp>
        </div>
        <div className="col-span-3 w-full h-full flex flex-col items-start justify-evenly">
          <div className="w-full h-full flex flex-col items-start justify-center gap-y-10">
            <div className="text-2xl md:text-[2.75rem] ">
              <p className="font-medium font-pretendard text-grayscale-grayscale-0">
                <span className="font-black font-pretendard text-deeppink-100">
                  당신의 자산
                </span>
                은
              </p>
              <p className="font-medium font-pretendard text-grayscale-grayscale-0">
                항상{" "}
                <b className="font-black font-pretendard text-deeppink-100">
                  당신의 계좌에.
                </b>
                <span></span>
              </p>

              <p className="font-medium font-pretendard text-grayscale-grayscale-0">
                우리는 단지 <b className="font-black text-deeppink-100">도구를 제공할 뿐.</b>
              </p>
            </div>
            <div className="font-medium text-grayscale-grayscale-500">
              <p className="m-0">
                트레이딩부스트 프로그램을 지원하는 거래소에 계정을 직접
                생성하고, 관리합니다.
              </p>
              <p className="m-0">
                사용자는 거래소가 제공하는 API를 연결하여 사용하면 끝.
              </p>
            </div>
            <div className="[text-decoration:underline] tracking-[-0.01em] leading-[150%] font-medium">
              거래소 계정이 이미 보유한 경우 트레이딩부스트 추천인코드로 새로
              가입해야 이용이 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
