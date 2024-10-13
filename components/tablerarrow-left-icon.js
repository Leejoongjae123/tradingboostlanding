import PropTypes from "prop-types";

const TablerarrowLeftIcon = ({ className = "", tablerarrowLeft }) => {
  return (
    <img
      className={`h-6 w-6 relative overflow-hidden shrink-0 object-contain ${className}`}
      alt=""
      src={tablerarrowLeft}
    />
  );
};

TablerarrowLeftIcon.propTypes = {
  className: PropTypes.string,
  tablerarrowLeft: PropTypes.string,
};

export default TablerarrowLeftIcon;
