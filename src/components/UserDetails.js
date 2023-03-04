import React from "react";
import { useParams } from "react-router";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;

  //   We can also use destructuring
  // const { userId } = useParams();
  return <div>Details about the User {userId}</div>;
};
