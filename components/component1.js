import PropTypes from "prop-types";

const Component1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-start justify-start py-[120px] px-40 box-border max-w-full text-center text-9xl text-grayscale-grayscale-0 font-pretendard mq450:pl-5 mq450:pr-5 mq450:box-border mq750:py-[51px] mq750:px-20 mq750:box-border mq1100:pt-[78px] mq1100:pb-[78px] mq1100:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-16 max-w-full mq750:gap-4 mq1250:gap-8">
        <div className="self-stretch relative mq450:text-3xl">
          <span>{`결국 트레이딩부스터를 선택하게 되는 `}</span>
          <b className="text-13xl text-deeppink-100">5가지 이유</b>
          <span className="font-medium">는?</span>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-8 max-w-full text-xl mq750:gap-4">
          <div className="self-stretch flex flex-row items-start justify-center gap-8 max-w-full mq750:gap-4 mq1250:flex-wrap">
            <div className="flex-1 [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 pb-[34px] pl-[38px] pr-[37px] gap-3 min-w-[264px] max-w-full">
              <div className="flex flex-row items-center justify-center py-[15px] px-0">
                <img
                  className="h-[130px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-78@2x.png"
                />
              </div>
              <div className="w-full h-full my-5">
                <p className="m-0">검증된 대형거래소와 파트너십 체결</p>
                <p className="m-0">(OKX, bybite, Bynance)</p>
              </div>
            </div>
            <div className="flex-[0.5964] [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 px-[93px] pb-[34px] gap-3 min-w-[264px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="self-stretch flex flex-col items-center justify-center py-3.5 px-3">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-85@2x.png"
                />
              </div>
              <div className="self-stretch h-[60px] relative tracking-[-0.01em] leading-[150%] font-medium inline-block mq450:text-base mq450:leading-[24px]">
                <p className="m-0">국내 사업자 등록으로</p>
                <p className="m-0">합법적인 운영</p>
              </div>
            </div>
            <div className="flex-[0.9636] [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 pb-[34px] pl-[43px] pr-[42px] gap-3 min-w-[264px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
              <div className="flex flex-col items-start justify-start pt-5 pb-0 px-0">
                <img
                  className="w-[140px] h-[140px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/161-2@2x.png"
                />
              </div>
              <div className="self-stretch h-[60px] relative tracking-[-0.01em] leading-[150%] font-medium inline-block mq450:text-base mq450:leading-[24px]">
                <p className="m-0 whitespace-pre-wrap">
                  사용자 의견 반영 알고리즘 등으로
                </p>
                <p className="m-0">24시간 실시간 오토봇 서비스 제공</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-48 box-border gap-8 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-4 mq750:pl-12 mq750:pr-12 mq750:box-border mq1250:flex-wrap mq1250:pl-24 mq1250:pr-24 mq1250:box-border">
            <div className="flex-[0.9141] [backdrop-filter:blur(20px)] rounded-2xl bg-gray-200 border-thistle-200 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 pb-[34px] pl-[85px] pr-[84px] gap-3 min-w-[264px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:flex-1">
              <div className="self-stretch flex flex-row items-center justify-center py-[24.5px] px-[23px]">
                <img
                  className="h-[111px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/object@2x.png"
                />
              </div>
              <div className="self-stretch h-[60px] relative tracking-[-0.01em] leading-[150%] font-medium inline-block mq450:text-base mq450:leading-[24px]">
                <p className="m-0">이용료 무료로 제공되는</p>
                <p className="m-0">퀀트프로그램</p>
              </div>
            </div>
            <div className="flex-1 [backdrop-filter:blur(20px)] rounded-2xl bg-pink-100 border-thistle-200 border-[1px] border-solid box-border flex flex-col items-center justify-start pt-3.5 px-[76px] pb-[34px] gap-3 min-w-[264px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1250:flex-1">
              <div className="h-40 flex flex-col items-start justify-start pt-5 pb-4 pl-5 pr-[21px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/object-1@2x.png"
                />
              </div>
              <div className="h-[60px] relative tracking-[-0.01em] leading-[150%] font-medium inline-block mq450:text-base mq450:leading-[24px]">
                <p className="m-0">코인시장의 문화를 선도할</p>
                <p className="m-0">새로운 집단지성 플랫폼</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
