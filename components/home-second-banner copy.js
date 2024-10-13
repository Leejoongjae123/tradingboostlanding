import Btn from "./btn";
import PropTypes from "prop-types";

export default function HomeSecondBanner({ className = "" }) {
  return (
    <section className="self-stretch h-[893px] relative bg-grayscale-grayscale-1000 text-left text-base text-deeppink-100 font-pretendard">
        <img
          className="absolute h-[60.13%] w-[46.18%] top-[19.93%] right-[44.27%] bottom-[19.93%] left-[9.55%] rounded-[306.5px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="m-0 absolute top-[309px] left-[714.5px] text-25xl tracking-[-0.01em] leading-[140%] z-[1] font-[inherit] mq450:text-7xl mq450:leading-[37px] mq750:text-16xl mq750:leading-[49px]">
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
        </h1>
        <div className="absolute top-[459px] left-[714.5px] tracking-[-0.01em] leading-[150%] font-medium text-grayscale-grayscale-500 z-[1]">
          <p className="m-0">
            트레이딩부스트 프로그램을 지원하는 거래소에 계정을 직접 생성하고,
            관리합니다.
          </p>
          <p className="m-0">
            사용자는 거래소가 제공하는 API를 연결하여 사용하면 끝.
          </p>
        </div>
        <div className="absolute top-[533px] left-[714.5px] [text-decoration:underline] tracking-[-0.01em] leading-[150%] font-medium inline-block w-[589px] h-6 whitespace-nowrap z-[1]">
          거래소 계정이 이미 보유한 경우 트레이딩부스트 추천인코드로 새로
          가입해야 이용이 가능합니다.
        </div>
      </section>
  );
};

