import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useTranslation } from "react-i18next";

type IHome = RouteComponentProps;

const Home: React.FC<IHome> = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("welcome", "hello there")}</h1>
      <p>{t("description", "short description")}</p>
    </section>
  );
};

export default Home;
