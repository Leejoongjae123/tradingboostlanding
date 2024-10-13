import Btn from "./btn";
import PropTypes from "prop-types";

export default function HomeSecondBanner({ className = "" }) {
  return (
    <div className="w-full bg-grayscale-grayscale-1000 h-[55.813rem] flex flex-row items-center justify-center py-[7.5rem] px-[0rem] box-border z-[1]">
    <img
      className="w-[41.563rem] relative rounded-[306.5px] h-[33.563rem] object-cover"
      alt=""
      src="/image@2x.png"
    />
    <div className="h-[17.188rem] flex flex-col items-start justify-start gap-[1.625rem] ml-[-5.5rem]">
      <div className="relative text-[2.75rem] tracking-[-0.01em] leading-[140%]">
        <p className="m-0">
          <span className="font-black font-pretendard text-deeppink-100">
            당신의 자산
          </span>
          <span className="font-medium font-pretendard text-grayscale-grayscale-0">
            은 항상
          </span>
          <span>
            <b className="font-pretendard">{` `}</b>
            <span className="font-black">당신의 계좌에.</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-medium font-pretendard text-grayscale-grayscale-0">
            우리는 단지
          </span>
          <span>
            <b className="font-pretendard">{` `}</b>
            <span className="font-black">도구를 제공할 뿐.</span>
          </span>
        </p>
      </div>
      <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-grayscale-grayscale-500">
        <p className="m-0">
          트레이딩부스트 프로그램을 지원하는 거래소에 계정을 직접 생성하고,
          관리합니다.
        </p>
        <p className="m-0">
          사용자는 거래소가 제공하는 API를 연결하여 사용하면 끝.
        </p>
      </div>
      <div className="relative [text-decoration:underline] tracking-[-0.01em] leading-[150%] font-medium">
        거래소 계정이 이미 보유한 경우 트레이딩부스트 추천인코드로 새로
        가입해야 이용이 가능합니다.
      </div>
    </div>
  </div>
  );
}
