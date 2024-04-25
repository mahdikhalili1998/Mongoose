import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    address: { city: "", street: "", alley: "" },
    phone: 0,
  });
  const [allUsers, setAllUsers] = useState([]);
  // console.log(users);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => setAllUsers(res.data), setIsLoading(true))
      .catch((error) => console.log(error));
  }, []);

  const clickHandler = async () => {
    await axios
      .post("/api/data", { users })
      .then((res) => setAllUsers((user) => [...user, res.data]))
      .catch((err) => {
        err.response.status === 422 ? setError(true) : null;
        err.response.status === 500 ? setError(true) : null;
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
        <div className="mt-[3rem] flex flex-col items-center justify-center gap-3 text-center">
          <input
            placeholder="enter name"
            type="text"
            value={users.name}
            onChange={(e) =>
              setUsers((users) => ({ ...users, name: e.target.value }))
            }
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <input
            placeholder="enter lastName"
            type="text"
            value={users.lastName}
            onChange={(e) =>
              setUsers((users) => ({ ...users, lastName: e.target.value }))
            }
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <input
            placeholder="enter age"
            type="number"
            value={users.age}
            onChange={(e) =>
              setUsers((users) => ({ ...users, age: e.target.value }))
            }
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <input
            placeholder="enter email"
            type="email"
            value={users.email}
            onChange={(e) =>
              setUsers((users) => ({ ...users, email: e.target.value }))
            }
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <div className="flex items-center gap-3">
            <input
              placeholder="enter city"
              type="text"
              value={users.address.city}
              onChange={(e) =>
                setUsers((users) => ({
                  ...users,
                  address: { ...users.address, city: e.target.value },
                }))
              }
              className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
            />
            <input
              placeholder="enter street"
              type="text"
              value={users.address.street}
              onChange={(e) =>
                setUsers((users) => ({
                  ...users,
                  address: { ...users.address, street: e.target.value },
                }))
              }
              className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
            />
            <input
              placeholder="enter alley"
              type="text"
              value={users.address.alley}
              onChange={(e) =>
                setUsers((users) => ({
                  ...users,
                  address: { ...users.address, alley: e.target.value },
                }))
              }
              className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
            />
          </div>
          <input
            placeholder="enter phone"
            type="number"
            value={users.phone}
            onChange={(e) =>
              setUsers((users) => ({ ...users, phone: e.target.value }))
            }
            className="mr-2 rounded-xl border-2 border-blue-800 px-2 py-1"
          />
          <button
            onClick={clickHandler}
            className="rounded-lg bg-green-500 px-2 py-1 font-medium text-white"
          >
            send info
          </button>
        </div>
      )}
      <div className="mt-[2rem] text-center">
        <h2 className=" mb-5 text-lg font-semibold text-red-600">
          List of Users{" "}
        </h2>
        {!isLoading ? (
          <Loading />
        ) : (
          <ul className="list-disc">
            {allUsers.map((item) => (
              <li
                className="flex items-center justify-center gap-5 space-y-4 "
                key={item._id}
              >
                <p>{`${item.name} ${item.lastName}`}</p>
                <Link
                  href={`/${item._id}`}
                  className="rounded-xl bg-green-700 px-2 py-1 font-semibold text-white "
                >{`see ${item.name} detail`}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
