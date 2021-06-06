import * as React from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [apiResult, setApiResult] = useState("");
  const callApi = () => {
    // quick and dirty test for calling the api
    axios
      .get("http://localhost:5001/coolBro")
      .then((response: any) => {
        console.log(response);
        setApiResult(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        const { status, statusText } = error.response;
        setApiResult(`${status}: ${statusText}`);
      });
  };

  return (
    <div className="cool">
      <button className="btn btn-primary" onClick={() => callApi()}>
        Call API
      </button>
      <div>Api call Result : {JSON.stringify(apiResult, null, 2)}</div>
    </div>
  );
};

export default Home;
