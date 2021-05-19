import React from "react";
export default function User_Edit(props) {
  console.log(props);
  return (
    <>
      <h1>User Edit {props.match.params.id}</h1>
    </>
  );
}
