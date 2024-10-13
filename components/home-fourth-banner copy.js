import Btn from "./btn";
import SlideRight from "./slideRight";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function HomeFourthBanner({ className = "" }) {
  return (
    <section
      className={`w-full bg-grayscale-grayscale-1000 overflow-hidden flex flex-col items-center justify-center py-[120px] px-[10vw] box-border gap-[54px] max-w-full text-center text-13xl text-deeppink-100 font-pretendard mq450:py-[33px] mq450:px-5 mq450:box-border mq750:gap-[27px] mq750:pl-[104px] mq750:pr-[104px] mq750:box-border mq1100:pt-[51px] mq1100:pb-[51px] mq1100:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border ${className}`}
    >
      <SlideRight>
        <div
          class="relative"
          tabindex="-1"
          uk-slider="autoplay: true;finite: false;autoplayInterval:5000"
        >
          <div class="uk-slider-container pb-1">
            <ul
              class="uk-slider-items w-[calc(100%)]"
              uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true"
            >
              <li class="w-full" uk-scrollspy-class="uk-animation-fade">
                <div class="card w-full h-full box-border">
                  <div className="rounded-2xl bg-gray-200 border-thistle-100 border-[1px] border-solid box-border flex flex-col items-center justify-center py-12 px-3">
                    <div className="flex flex-col items-center justify-start gap-6 w-full h-full px-6">
                      <div className="w-full text-2xl h-full text-white font-medium">
                        <b className="text-deeppink-100">하이퍼 RSI DCA</b>의<br className="md:hidden"/>
                        장점을 소개할게요.
                      </div>
                      <div className="w-full h-full text-xs md:text-base font-medium text-grayscale-grayscale-500">
                        <p className="m-0">
                          잠깐! 하이퍼RSI(Hyper RSI)가 뭘까요?
                        </p>
                        <p className="m-0">
                          RSI를 기반으로 과매도, 과매수 신호를 통해 진입근거를
                          생성합니다.
                        </p>
                        <p className="m-0">
                          DCA, 즉 분할매도 매수 전략으로 추가진입 근거에 해당될
                          때 매매가 진행됩니다.
                        </p>
                        <p className="m-0">
                          또한 양방향 헷지 기능을 사용하면, 큰 폭등, 폭락에
                          손실을 예방할 수 있습니다.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-0 box-border gap-10 w-full h-full text-left text-5xl text-grayscale-grayscale-0 mt-6">
                      <div className="md:px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center py-0 box-border gap-10 ">
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover "
                            loading="lazy"
                            alt=""
                            src="/image-193@2x.png"
                          />
                        </div>

                        <div className="col-span-1 flex flex-col items-start justify-start gap-3 w-full leading-normal">
                          <h3 className="m-0 text-[24px]">
                            과매도,과매수에만 진입할 수 있어요!
                          </h3>
                          <div className="text-base mt-5">
                            <p className="m-0">
                              RSI지표를 근거로 과매도,과매수 신호발생 시,
                            </p>
                            <p className="m-0">
                              진입근거로 채택하여, 매매가 시작됩니다.
                            </p>
                            <p className="m-0">
                              과매수 발생 시 “매도", 과매도 발생 시 “매수"
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center flex-wrap content-center py-0 box-border gap-10 w-full">
                        <div className="col-span-1 flex-1 flex flex-col items-start justify-start gap-3 w-full leading-normal">
                          <h3 className="m-0 text-[24px]">
                            아주 적은 증거금으로 첫 진입을 진행할 수 있어요!
                          </h3>
                          <div className="h-full text-base mt-5">
                            <p className="m-0">
                              전체 자산 대비 1%의 자금으로 시작할 수 있으며,{" "}
                            </p>
                            <p className="m-0">
                              모든 횟차 진입시 총 투입 금액을 조절할 수
                              있습니다.
                            </p>
                            <p className="m-0">
                              이를 통해 청산 위험도를 낮춰 안전한 운영이
                              가능합니다.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover"
                            loading="lazy"
                            alt=""
                            src="/5617141-2924622-1@2x.png"
                          />
                        </div>
                      </div>
                      <div className="px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center py-0 box-border gap-10 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border mq1250:flex-wrap">
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover"
                            loading="lazy"
                            alt=""
                            src="/image-197@2x.png"
                          />
                        </div>

                        <div className="col-span-1 flex flex-col items-start justify-start gap-3 leading-normal">
                          <h3 className="m-0 text-[24px]">
                            <p className="m-0">
                              양방향 헷지 기능을 사용하여, 큰 폭등, 폭락의
                              손실을 예방할 수 있어요!
                            </p>
                          </h3>
                          <div className="w-full mt-5 text-base">
                            <p className="m-0">
                              직접 설정한 회차에 따라, 기존에 진행되던 포지션을
                              기준으로
                            </p>
                            <p className="m-0">
                              반대 포지션을 진입하게 하여, 한 방향으로
                              폭등하거나 폭락하는 것에 대한 손실을 예방할 수
                              있습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex items-center justify-center w-full">
                        <button className="flex items-center justify-center bg-deeppink-100 text-white font-bold py-1 px-6 rounded-lg hover:bg-deeppink-200 hover:text-deeppink-100 transition duration-300 cursor-pointer">
                          <p className="text-[16px]">
                            하이퍼 RSI 자세히 알아보기
                          </p>
                          <FaArrowRight className="mt-1 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li class="pr-3 w-full" uk-scrollspy-class="uk-animation-fade">
                <div class="card w-full">
                  <div className="self-stretch rounded-2xl bg-gray-200 border-thistle-100 border-[1px] border-solid box-border flex flex-col items-center justify-center py-[70px] px-0 gap-[100px] max-w-full mq750:gap-[25px] mq750:pt-[29px] mq750:pb-[29px] mq750:box-border mq1100:gap-[50px] mq1250:pt-[45px] mq1250:pb-[45px] mq1250:box-border">
                    <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[150%] mq450:text-3xl mq450:leading-[38px]">
                        <b>부스터 그리드(Booster Grid)</b>
                        <span className="text-9xl font-medium text-grayscale-grayscale-0">
                          의 장점을 소개할게요.
                        </span>
                      </div>
                      <div className="w-full h-24 relative text-base tracking-[-0.01em] leading-[150%] font-medium text-grayscale-grayscale-500 inline-block max-w-full">
                        <p className="m-0 whitespace-pre-wrap">
                          잠깐! 부스터 그리드(Booster Grid)가 뭘까요?
                        </p>
                        <p className="m-0">
                          일반적인 그리드와 달리, 변동성에 대비하여, 장기간
                          수익을 창출할 수 있는 모델로
                        </p>
                        <p className="m-0">
                          일반 그리드의 주문이 최초 설정한 횟수 모두가 주문이
                          들어가는 것을 방지하고
                        </p>
                        <p className="m-0">
                          최초 2~3회차 진입 후, 15분 간격으로 진입구간을
                          재설정합니다.
                        </p>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center py-0 px-9 box-border gap-10 max-w-full text-left text-5xl text-grayscale-grayscale-0 mq750:gap-5">
                      <div className="px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center py-0 box-border gap-10 mq750:gap-5 mq1100:gap-10 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border mq1250:flex-wrap">
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover "
                            loading="lazy"
                            alt=""
                            src="/images/booster1.png"
                          />
                        </div>

                        <div className="col-span-1 flex flex-col items-start justify-start gap-3 w-full leading-normal">
                          <h3 className="m-0 text-[24px]">
                            똑똑한 범위를 설정할 수 있어요
                          </h3>
                          <div className="text-base mt-5">
                            <p className="m-0">
                              가격의 변동성을 분석하여 고정된 범위 대신
                            </p>
                            <p className="m-0">
                              15분마다 자동으로 조정된 범위를 사용합니다.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center flex-wrap content-center py-0 box-border gap-10 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[37px] mq1100:pr-[37px] mq1100:box-border">
                        <div className="col-span-1 flex-1 flex flex-col items-start justify-start gap-3 w-full leading-normal">
                          <h3 className="m-0 text-[24px]">
                            한 방향으로 크게 움직일 때 대비해요
                          </h3>
                          <div className="h-full text-base mt-5">
                            <p className="m-0">가격이 크게 오르거나 내릴 때</p>
                            <p className="m-0">
                              매매 전략을 조정하여 큰 손실을 예방합니다.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover"
                            loading="lazy"
                            alt=""
                            src="/images/booster2.png"
                          />
                        </div>
                      </div>
                      <div className="px-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center py-0 box-border gap-10 max-w-full mq750:gap-5 mq1100:gap-10 mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border mq1250:flex-wrap">
                        <div className="col-span-1 flex justify-center items-center">
                          <img
                            className="h-36 w-auto object-cover m-auto"
                            loading="lazy"
                            alt=""
                            src="/images/booster3.png"
                          />
                        </div>

                        <div className="col-span-1 flex flex-col items-start justify-start gap-3 leading-normal">
                          <h3 className="m-0 text-[24px]">
                            <p className="m-0">
                              자동매매를 장기간 지속가능하도록 도와줘요
                            </p>
                          </h3>
                          <div className="w-full mt-5 text-base">
                            <p className="m-0">
                              가격이 변동할 때마다 자동으로 매매가 이루어져
                            </p>
                            <p className="m-0">
                              장기간 운영할수록 이익이 누적되며,
                            </p>
                            <p className="m-0">
                              지정가 주문으로 거래 수수료를 절약합니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <div className="flex items-center justify-center w-full">
                        <button className="flex items-center justify-center bg-deeppink-100 text-white font-bold py-1 px-6 rounded-lg hover:bg-deeppink-200 hover:text-deeppink-100 transition duration-300 cursor-pointer">
                          <p className="text-[16px]">
                            부스터 그리드 자세히 알아보기
                          </p>
                          <FaArrowRight className="mt-1 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>

          <div class="max-md:hidden">
            <a
              class="nav-prev !bottom-1/2 !top-auto"
              href="#"
              uk-slider-item="previous"
            >
              <FaArrowLeft className="text-sm text-deeppink-100" />
            </a>
            <a
              class="nav-next !bottom-1/2 !top-auto"
              href="#"
              uk-slider-item="next"
            >
              <FaArrowRight className="text-sm text-deeppink-100" />
            </a>
          </div>

          <div class="flex justify-center items-center">
            <ul class="inline-flex flex-wrap justify-center my-5 gap-2 uk-dotnav uk-slider-nav">
              {" "}
            </ul>
          </div>
        </div>
      </SlideRight>
    </section>
  );
}
