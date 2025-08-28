import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
        <h1>{err.data}</h1>
      <h3>{err.status}: {err.statusText}</h3>
      <p>The page you are looking for doesn't exists</p>
    </div>
  );
};

export default Error;
