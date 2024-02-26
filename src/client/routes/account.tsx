import { UserPlusIcon } from "@heroicons/react/24/outline";
import {
  Form,
  useActionData,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import { accountType } from "../types/account";
import { ActionData } from "../types/actionData";

// account component
export const Account = () => {
  const error = useActionData() as ActionData<typeof action>;
  const { account } = useRouteLoaderData("root") as { account: accountType };
  const { firstName, lastName, email, password } = account;
  console.log(firstName);

  return (
    <div>
      <h1>Update your account preferences</h1>
      <p>Knowing more about you makes meal planning easier.</p>
      <Form method="post">
        <label>
          first name
          <input type="text" value={firstName} />
        </label>
        <br />
        <br />
        <label>
          last name
          <input type="text" value={lastName} />
        </label>
        <br />
        <br />
        <label>
          email
          <input type="email" placeholder="name@name.com" value={email} />
        </label>
        <br />
        <br />
        <label>
          password
          <input type="password" value={password} />
        </label>
        <br />
        <br />
        <label>
          Number of people in your meal plan
          <input type="number" placeholder="1" min="1" />
        </label>
        <br />
        <br />
        <fieldset>
          <legend>Cooking for children</legend>
          <div>
            <label>
              <input type="radio" name="hasChildren" value="yes" checked />
              yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="hasChildren" value="no" />
              no
            </label>
          </div>
        </fieldset>
        <br />
        <br />
        <br />
        <fieldset>
          <legend>Diet plan</legend>
          <div>
            <label>
              <input type="radio" name="dietaryType" value="none" />
              none
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="dietaryType"
                value="vegetarian"
                checked
              />
              vegetarian
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="dietaryType" value="paleo" />
              paleo
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="dietaryType" value="pescatarian" />
              pescatarian
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="dietaryType" value="keto" />
              keto
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="dietaryType" value="lowFat" />
              low fat
            </label>
          </div>
        </fieldset>
        <span style={{ color: "red" }}>{error ? <p>{error}</p> : null}</span>
        <button type="submit">
          <span>Update Account</span>
          <UserPlusIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

//action
export async function action({ request }) {
  const data = await request.formData();
  // check that all required fields are filled

  if (data) {
    try {
      return "Account update has not been implemented yet!";
      // update the account
    } catch (error) {
      return error.message ? error.message : "unknown error!";
      // return an errors
    }
  }
}
