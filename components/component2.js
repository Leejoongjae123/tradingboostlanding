import Btn from "./btn";
import PropTypes from "prop-types";

const Component2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-grayscale-grayscale-1000 overflow-hidden flex flex-col items-center justify-center py-[120px] px-52 box-border gap-[54px] max-w-full text-center text-13xl text-deeppink-100 font-pretendard mq450:py-[33px] mq450:px-5 mq450:box-border mq750:gap-[27px] mq750:pl-[104px] mq750:pr-[104px] mq750:box-border mq1100:pt-[51px] mq1100:pb-[51px] mq1100:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border ${className}`}
    >
      <div className="self-stretch rounded-2xl bg-gray-200 border-thistle-100 border-[1px] border-solid box-border flex flex-col items-center justify-center py-[70px] px-0 gap-[100px] max-w-full mq750:gap-[25px] mq750:pt-[29px] mq750:pb-[29px] mq750:box-border mq1100:gap-[50px] mq1250:pt-[45px] mq1250:pb-[45px] mq1250:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
          <div className="self-stretch relative tracking-[-0.01em] leading-[150%] mq450:text-3xl mq450:leading-[38px]">
            <b>하이퍼 RSI DCA(Hyper RSI DCA)</b>
            <span className="text-9xl font-medium text-grayscale-grayscale-0">
              의 장점을 소개할게요.
            </span>
          </div>
          <div className="w-[488px] h-24 relative text-base tracking-[-0.01em] leading-[150%] font-medium text-grayscale-grayscale-500 inline-block max-w-full">
            <p className="m-0 whitespace-pre-wrap">
              잠깐! 하이퍼RSI(Hyper RSI)가 뭘까요?
            </p>
            <p className="m-0">
              RSI를 기반으로 과매도, 과매수 신호를 통해 진입근거를 생성합니다.
            </p>
            <p className="m-0">
              DCA, 즉 분할매도 매수 전략으로 추가진입 근거에 해당될 때 매매가
              진행됩니다.
            </p>
            <p className="m-0">
              또한 양방향 헷지 기능을 사용하면, 큰 폭등, 폭락에 손실을 예방할 수
              있습니다.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-9 box-border gap-10 max-w-full text-left text-5xl text-grayscale-grayscale-0 mq750:gap-5">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[61px] box-border gap-20 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border mq1250:flex-wrap">
            <img
              className="w-[364px] relative max-h-full object-cover max-w-full mq1250:flex-1"
              loading="lazy"
              alt=""
              src="/image-193@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[250px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                과매도,과매수에만 진입할 수 있어요!
              </h3>
              <div className="self-stretch relative text-base tracking-[-0.01em] leading-[150%] font-medium">
                <p className="m-0">{`RSI지표를 근거로 과매도,과매수 신호발생 시, `}</p>
                <p className="m-0">{`진입근거로 채택하여, 매매가 시작됩니다. `}</p>
                <p className="m-0">
                  과매수 발생 시 “매도", 과매도 발생 시 “매수"
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-[74px] box-border gap-20 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[37px] mq1100:pr-[37px] mq1100:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[233px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
                아주 적은 증거금으로 첫 진입을 진행할 수 있어요!
              </h3>
              <div className="h-[72px] relative text-base tracking-[-0.01em] leading-[150%] font-medium inline-block">
                <p className="m-0">{`전체 자산 대비 1%의 자금으로 시작할 수 있으며, `}</p>
                <p className="m-0">
                  모든 횟차 진입시 총 투입 금액을 조절할 수 있습니다.
                </p>
                <p className="m-0">
                  이를 통해 청산 위험도를 낮춰 안전한 운영이 가능합니다.
                </p>
              </div>
            </div>
            <img
              className="h-[214px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[237px]"
              loading="lazy"
              alt=""
              src="/5617141-2924622-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[61px] box-border gap-20 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border mq1250:flex-wrap">
            <img
              className="w-[364px] relative max-h-full object-cover max-w-full mq1250:flex-1"
              loading="lazy"
              alt=""
              src="/image-197@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[250px] max-w-full">
              <h3 className="m-0 self-stretch h-[72px] relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block mq450:text-lgi mq450:leading-[29px]">
                <p className="m-0">{`양방향 헷지 기능을 사용하여, `}</p>
                <p className="m-0">큰 폭등, 폭락의 손실을 예방할 수 있어요!</p>
              </h3>
              <div className="self-stretch h-[72px] relative text-base tracking-[-0.01em] leading-[150%] font-medium inline-block">
                <p className="m-0">
                  직접 설정한 회차에 따라, 기존에 진행되던 포지션을 기준으로
                </p>
                <p className="m-0">
                  반대 포지션을 진입하게 하여, 한 방향으로 폭등하거나 폭락하는
                  것에 대한 손실을 예방할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Btn
          propAlignItems="center"
          propJustifyContent="center"
          text="하이퍼 RSI  자세히 알아보기"
          propWidth="176px"
          tablerarrowLeft="/tablerarrowleft.svg"
        />
      </div>
      <FaArrowRight className="mt-1 ml-1" />

    </section>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
