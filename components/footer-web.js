import PropTypes from "prop-types";

const FooterWeb = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-gray-300 flex flex-col items-center justify-start z-[7] text-left text-[13px] text-grayscale-grayscale-0 font-abeezee ${className}`}
    >
      <div className="w-full grid grid-cols-7 max-w-[80vw] items-start justify-between py-[5rem] px-4">
        <div className="col-span-7 md:col-span-5 flex flex-col items-start justify-start ">
          <img
            className="w-[60vw] md:w-[10vw] relative h-auto object-cover mb-5"
            alt=""
            src="/-png-4@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col md:flex-row items-start justify-start gap-[0.25rem]">
                <div className="relative leading-[1.25rem] whitespace-pre-wrap">
                  대표이사 손규성
                </div>
                <div className="relative hidden md:block text-[1rem] tracking-[-0.01em] leading-[1.375rem] text-gray-100">
                  |
                </div>
                <div className="relative leading-[1.25rem] whitespace-pre-wrap">
                  E-mail Support@tradingboost.io
                </div>
                <div className="relative hidden md:block text-[1rem] tracking-[-0.01em] leading-[1.375rem] text-gray-100">
                  |
                </div>
                <div className="relative leading-[1.25rem] whitespace-pre-wrap">
                  사업자등록번호 551-81-03353
                </div>
              </div>
            </div>
            <div className="relative leading-[1.25rem] font-pretendard">
              <p className="m-0 whitespace-pre-wrap">
                주소 서울특별시 강남구 선릉로 529, 2층 2273호
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                ※ 트레이딩부스트는 가상자산의 시세를 올리거나 내리는 기능을 하지
                않습니다.
              </p>
              <p className="m-0">
                ※ 트레이딩부스트는 가상자산 트레이딩을 편리하게 이용할 수 있는
                도구만 제공하며, 투자권유 또는 유치를 목적으로 하지 않습니다.
              </p>
              <p className="m-0">
                ※ 가상자산 급격한 시세 변동 상황 또는 가상자산 거래소의 API
                서비스 불안정으로 인한 투자손실에 책임지지 않으므로 서비스
                이용에 유의하시기 바랍니다.
              </p>
              <p className="m-0">
                ※ 트레이딩부수트를 이용하는 회원님은 모든 이용 약관을 읽고
                이해하였고, 동의하셔야만 이용이 가능합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-2 h-full w-auto my-5 md:my-0">
          <div className="w-full h-full flex flex-col items-start md:items-end justify-start md:justify-end ">
            <div className="flex flex-row items-center justify-start ">
              <div className="relative leading-[1.25rem]">개인정보처리방침 | 이용약관</div>
              
            </div>
            <div className="relative leading-[1.25rem] text-gray-100 text-center">
              ⓒ 2024 All Rights Reserved by tradingboost
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterWeb.propTypes = {
  className: PropTypes.string,
};

export default FooterWeb;
