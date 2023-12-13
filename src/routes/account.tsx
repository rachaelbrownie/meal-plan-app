// rrd imports 
import { Form, useLoaderData } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/outline"

// helper functions
import { waait, fetchData } from "../helpers";

// components
import { NewAccount } from "./newUser";

// types
type userData = {
  userName: string,
};

// loader
export function accountLoader(): userData {
  const userName = fetchData("userName");
  return { userName }
}

//action
export async function accountAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return `Welcome ${values.userName}.`
    } catch (e) {
      throw new Error("There was a problem creating your account.")
    }
  }
}

// account component
export const Account = () => {
  const { userName } = useLoaderData() as userData;
  console.log(userName)

  return (
    <>
      {userName ? (
        <div className="">
          <div>
            <h1>Tell Us More About <span className="accent">{userName}</span></h1>
            <p>Knowing more about you makes meal planning easier.</p>
            <Form method="post">
              // family members
              // any children
              // dietary restrictions
              // 
              <input type="text"
                name="userName"
                required
                placeholder="What is your name?"
                aria-label="Your Name"
                autoComplete="given-name" />
              <input type="hidden" name="_action" value="accountUpdate" />
              <button type="submit">
                <span>Update Account</span>
                <UserPlusIcon width={20} />
              </button>
            </Form>
          </div>
        </div>
      ) : <NewAccount />}
    </>
  );
};