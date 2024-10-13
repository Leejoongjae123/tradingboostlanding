import { useMemo } from "react";
import TablerarrowLeftIcon from "./tablerarrow-left-icon";
import PropTypes from "prop-types";

const Btn = ({
  className = "",
  propAlignItems,
  propJustifyContent,
  text,
  propWidth,
  tablerarrowLeft,
}) => {
  const btnStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
    };
  }, [propAlignItems, propJustifyContent]);

  const textStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-4 px-[38.5px] bg-deeppink-100 h-14 w-[253px] shadow-[0px_0px_15px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start box-border gap-2 ${className}`}
      style={btnStyle}
    >
      <b
        className="h-6 w-[145px] relative text-base tracking-[-0.01em] leading-[150%] inline-block font-pretendard text-grayscale-grayscale-0 text-left shrink-0"
        style={textStyle}
      >
        {text}
      </b>
      <TablerarrowLeftIcon tablerarrowLeft={tablerarrowLeft} />
    </button>
  );
};

Btn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  tablerarrowLeft: PropTypes.string,

  /** Style props */
  propAlignItems: PropTypes.any,
  propJustifyContent: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Btn;
