import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error" style={{ textAlign: "center" }}>
        <h1 style={{ color: "red" }}>Unauthorized 401</h1>
        <h4 style={{ color: "black" }}>Please <Link to='/login'>login.....</Link> </h4>
      </div>
    </>
  );
};

export default Error;
