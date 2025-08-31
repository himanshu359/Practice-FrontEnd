import React from "react";
import { Suspense } from "react";

const userResource = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "himansh", age: "25" });
    }, 2000);
  });
};

const readUserResource =(promise)=>{
    let status = "pending";
    let result ;
    const suspender = promise.then((res)=>{
        status ="Success";
        result = res;
    },
    (e)=>{
        status = "error";
        result = e;
    }
)
return {
    read(){
        if(status === "pending") throw suspender;
        if(status === "error") throw result;
        return result;
    },
}
}

const fetchedUser = readUserResource(userResource())

const UserDetails = () => {
  const user = fetchedUser.read()
  return (
    <>
      <div>{user.name}</div>
      <div>{ user.age }</div>
    </>
  );
};

export const Resouce = () => {
  return (
    <>
      <Suspense fallback={<div>"Loading....."</div>}>
        <UserDetails />
      </Suspense>
    </>
  );
};
