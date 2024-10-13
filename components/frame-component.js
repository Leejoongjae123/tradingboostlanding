import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-16 rounded-xl bg-lightgoldenrodyellow border-pink-200 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[18px] px-[23px] text-center text-base text-grayscale-grayscale-0 font-pretendard ${className}`}
    >
      <div className="h-6 flex-1 flex flex-col items-start justify-center">
        <div className="w-full h-6 flex flex-row items-center justify-between">
          <b className="h-6 w-[281px] relative tracking-[-0.01em] leading-[150%] inline-block shrink-0">
            Q. 트레이딩부스트에서 자주 묻는 질문입니다.
          </b>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/plus.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
