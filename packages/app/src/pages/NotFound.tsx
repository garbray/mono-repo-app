import { RouteComponentProps } from "@reach/router";
import React from "react";

type INotFound = RouteComponentProps;

const NotFound: React.FC<INotFound> = () => {
  return <div>404 error</div>;
};

NotFound.displayName = "NotFound";
export default NotFound;
