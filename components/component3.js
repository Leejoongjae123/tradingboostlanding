import FrameComponent from "./frame-component";
import PropTypes from "prop-types";

const Component3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-start justify-start pt-[120px] px-[220px] pb-[150px] box-border min-h-[904px] max-w-full text-center text-9xl text-grayscale-grayscale-0 font-pretendard mq450:pt-[51px] mq450:px-5 mq450:pb-[63px] mq450:box-border mq750:pl-[110px] mq750:pr-[110px] mq750:box-border mq1100:pt-[78px] mq1100:pb-[97px] mq1100:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[380.3px] w-[322.4px] absolute !m-[0] right-[-168.4px] bottom-[-166.3px] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/frame@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-[42px] max-w-full z-[1] mq750:gap-[21px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[150%] mq450:text-3xl mq450:leading-[38px]">
            <span>{`트레이딩부스트에서 `}</span>
            <b className="text-13xl text-deeppink-100">자주 묻는 질문</b>
            <span>입니다.</span>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-base">
            <div className="w-[1000px] h-[220px] rounded-xl bg-lightgoldenrodyellow border-pink-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[18px] px-[23px]">
              <div className="h-[180px] flex-1 flex flex-col items-start justify-center gap-3">
                <div className="w-[952px] h-6 flex flex-row items-center justify-between">
                  <b className="h-6 w-[456px] relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">
                    Q. 이미 거래소 계정을 보유하고 있는 경우엔 계정을 다시
                    생성해야 하나요?
                  </b>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/minus.svg"
                  />
                </div>
                <div className="w-[217px] h-36 flex flex-row items-start justify-start gap-2 text-left text-grayscale-grayscale-300">
                  <div className="h-6 w-4 relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">{`A. `}</div>
                  <div className="h-36 w-[194px] relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                    <p className="m-0">토닥스마트 답변 내용입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1000px] h-16 rounded-xl bg-lightgoldenrodyellow border-pink-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[18px] px-[23px]">
              <div className="h-6 flex-1 flex flex-col items-start justify-center">
                <div className="w-[952px] h-6 flex flex-row items-center justify-between">
                  <input
                    className="w-[281px] [border:none] [outline:none] inline-block font-pretendard text-base bg-[transparent] relative tracking-[-0.01em] leading-[150%] font-bold text-grayscale-grayscale-0 text-center p-0"
                    placeholder="Q. 트레이딩부스트에서 자주 묻는 질문입니다."
                    type="text"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
              </div>
            </div>
            <FrameComponent />
            <FrameComponent />
            <FrameComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
};

export default Component3;
