import Loading from "@/components/Loading";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function UserId() {
  const [userDetail, setUserDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   console.log(userDetail);

  const {
    query: { userId },
  } = useRouter();
  useEffect(() => {
    axios
      .get(`/api/data/${userId}`)
      .then((res) => setUserDetail([res.data]), setIsLoading(true))
      .catch((error) => console.log(`ERROR : ${error}`));
  }, []);

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
              <span>Age : {item.age}</span>
              <span>ID : {item._id}</span>
              <span>Phone : {item.phone}</span>
              <span>Email : {item.email}</span>
              <span>Join date : {item.createAt}</span>
              <span>
                Address :{" "}
                {item.address.map((item, index) => (
                  <span
                    key={index}
                  >{`${item.city} , ${item.street} , ${item.alley}`}</span>
                ))}
              </span>
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
