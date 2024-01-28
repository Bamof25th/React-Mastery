import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/bamof25th")
  //       .then((ressponce) => ressponce.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl ">
      Github Followers:{data.followers}
      <img className="w-52" src={data.avatar_url} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  let response = await fetch("https://api.github.com/users/bamof25th");

  return response.json();
};
