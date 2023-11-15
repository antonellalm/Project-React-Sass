import "./Wrapper.scss";

const Wrapper = ({ className, children }) => {
  return <div className={`wrappper ${className || ""}`}>{children}</div>;
};

export default Wrapper;
