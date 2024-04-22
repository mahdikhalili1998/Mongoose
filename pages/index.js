import axios from "axios";
import { useState } from "react";
import Error from "../components/Error";

export default function Home() {
  const [name, setName] = useState([]);
  const [error, setError] = useState(false);
  const clickHandler = async () => {
    await axios
      .post("/api/data", { name })
      .then((res) => console.log(res))
      .catch((err) => {
        err.response.status === 422 ? setError(true) : null;
      });
  };

  return (
    <>
      <h1 className="mx-auto mt-5 w-max rounded-lg bg-red-500 px-2 py-1 text-center text-2xl font-bold text-white">
        Data Base
      </h1>
      {error ? (
        <Error />
      ) : (
        <div className="mt-[3rem] text-center">
          <input
            placeholder="enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <button
            onClick={clickHandler}
            className="rounded-lg bg-orange-500 px-2 py-1 font-medium text-white"
          >
            send name
          </button>
        </div>
      )}
    </>
  );
}
