import PropTypes from "prop-types";

const LogoMenuWeb = ({ className = "" }) => {
  return (
    <header
      className={`w-full h-[93px] !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-grayscale-grayscale-1000 flex flex-row items-start justify-start py-5 px-[120px] box-border gap-[747px] z-[3] text-left text-base text-grayscale-grayscale-0 font-pretendard ${className}`}
    >
      <img
        className="h-[53px] w-[261px] relative object-cover"
        loading="lazy"
        alt=""
        src="/-png-3-1@2x.png"
      />
      <div className="h-9 w-48 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
        <div className="w-48 h-[19px] flex flex-row items-start justify-start gap-8">
          <b className="relative hidden">서비스 소개</b>
          <a className="[text-decoration:none] w-[73px] relative font-bold text-[inherit] inline-block">
            로그인
          </a>
          <a className="[text-decoration:none] w-[87px] relative font-bold text-deeppink-100 inline-block">
            회원가입
          </a>
        </div>
      </div>
    </header>
  );
};

LogoMenuWeb.propTypes = {
  className: PropTypes.string,
};

export default LogoMenuWeb;
