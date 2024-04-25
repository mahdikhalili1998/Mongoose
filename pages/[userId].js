import Loading from "@/components/Loading";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function UserId() {
  const [userDetail, setUserDetail] = useState([]);
  const [edit, setEdit] = useState("");
  const [editDetail, setEditDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(editDetail);

  const {
    query: { userId },
  } = useRouter();

  useEffect(() => {
    axios
      .get(`/api/data/${userId}`)
      .then((res) => setUserDetail([res.data]), setIsLoading(true))
      .catch((error) => console.log(`ERROR : ${error}`));
  }, []);

  const editHandler = (info) => {
    setEdit(info._id);
    setEditDetail(info);
  };

  const saveHandler = async (id) => {
    await axios
      .patch(`/api/data/${id}`, { editDetail })
      .then((res) => setUserDetail([res?.data]), setEdit(""))
      .catch((error) => console.log("error with handling error"));
  };

  return (
    <>
      {isLoading ? (
        <>
          {userDetail?.map((item) => (
            <div
              className="mt-[4rem] flex flex-col items-center justify-center space-y-3"
              key={item._id}
            >
              <h2 className="mb-5 font-semibold text-red-600">{`${item.name.toUpperCase()} ${item.lastName.toUpperCase()}`}</h2>
              <div className="flex items-center gap-5">
                <span>Age : {item.age}</span>
                {edit && edit === item._id ? (
                  <button
                    disabled
                    onClick={() => editHandler(item)}
                    className="cursor-not-allowed rounded-xl bg-blue-600 px-2 py-1 font-semibold text-white opacity-35"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => editHandler(item)}
                    className="rounded-xl  bg-blue-600 px-2 py-1 font-semibold text-white"
                  >
                    Edit
                  </button>
                )}

                {edit && edit === item._id ? (
                  <div className="flex items-center gap-3">
                    <input
                      className="w-[10rem] rounded-xl  border-2 border-blue-600 px-2 py-1 text-center"
                      value={editDetail.age}
                      onChange={(e) =>
                        setEditDetail((editDetail) => ({
                          ...editDetail,
                          age: e.target.value,
                        }))
                      }
                    />
                    <button
                      onClick={() => saveHandler(item._id)}
                      className=" rounded-xl bg-green-600 px-2 py-1 font-semibold text-white"
                    >
                      save
                    </button>
                  </div>
                ) : null}
              </div>
              <span>ID : {item._id}</span>
              <div className="flex items-center gap-5">
                <span>Phone : {item.phone}</span>
                {edit && edit === item._id ? (
                  <button
                    disabled
                    onClick={() => editHandler(item)}
                    className="cursor-not-allowed rounded-xl bg-blue-600 px-2 py-1 font-semibold text-white opacity-35"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => editHandler(item)}
                    className="rounded-xl  bg-blue-600 px-2 py-1 font-semibold text-white"
                  >
                    Edit
                  </button>
                )}

                {edit && edit === item._id ? (
                  <div className="flex items-center gap-3">
                    <input
                      className="w-[10rem] rounded-xl  border-2 border-blue-600 px-2 py-1 text-center"
                      value={editDetail.phone}
                      onChange={(e) =>
                        setEditDetail((editDetail) => ({
                          ...editDetail,
                         phone: e.target.value,
                        }))
                      }
                    />
                    <button
                      onClick={() => saveHandler(item._id)}
                      className=" rounded-xl bg-green-600 px-2 py-1 font-semibold text-white"
                    >
                      save
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-5">
                <span>Email: {item.email}</span>
                {edit && edit === item._id ? (
                  <button
                    disabled
                    onClick={() => editHandler(item)}
                    className="cursor-not-allowed rounded-xl bg-blue-600 px-2 py-1 font-semibold text-white opacity-35"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => editHandler(item)}
                    className="rounded-xl  bg-blue-600 px-2 py-1 font-semibold text-white"
                  >
                    Edit
                  </button>
                )}

                {edit && edit === item._id ? (
                  <div className="flex items-center gap-3">
                    <input
                      className="w-[10rem] rounded-xl  border-2 border-blue-600 px-2 py-1 text-center"
                      value={editDetail.email}
                      onChange={(e) =>
                        setEditDetail((editDetail) => ({
                          ...editDetail,
                        email: e.target.value,
                        }))
                      }
                    />
                    <button
                      onClick={() => saveHandler(item._id)}
                      className=" rounded-xl bg-green-600 px-2 py-1 font-semibold text-white"
                    >
                      save
                    </button>
                  </div>
                ) : null}
              </div>
              <span>Join date : {item.createAt}</span>
              {/* <span>
                Address :{" "}
                {item.address.map((item, index) => (
                  <span
                    key={index}
                  >{`${item.city} , ${item.street} , ${item.alley}`}</span>
                ))}
              </span> */}
            </div>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UserId;
