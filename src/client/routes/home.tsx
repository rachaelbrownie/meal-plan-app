import { useRouteLoaderData } from "react-router-dom";
import { accountType } from "../types/account";

// account component
export const Home = () => {
  const { account } = useRouteLoaderData("root") as { account: accountType };

  return (
    <div>
      <h1>
        Welcome back,{" "}
        <span style={{ color: "#a56be7" }}>{account.firstName}</span>!
      </h1>
      <p>let's get started...</p>
    </div>
  );
};
