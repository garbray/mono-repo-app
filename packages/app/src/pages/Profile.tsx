import { RouteComponentProps } from "@reach/router";
import React, { useState } from "react";

type IProfile = RouteComponentProps;

const Profile: React.FC<IProfile> = () => {
  const [state] = useState({ title: "Profile page", page: "user" });
  return (
    <section>
      <h1>{state.title}</h1>
      <p>{state.page}</p>
    </section>
  );
};

export default Profile;
