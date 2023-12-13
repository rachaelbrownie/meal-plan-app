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
              <label htmlFor="email">What's your email?</label><br />
              <input type="email"
                required
                placeholder="name@name.com"
                aria-label="Email" />
              <br /><br />
              <label htmlFor="familyMembers">How many people is this meal plan for?</label><br />
              <input type="number"
                required
                placeholder="1"
                min="1"
                aria-label="How many family members?" />
              <br /><br />
              <label htmlFor="children">Are you cooking for children?</label><br />
              <input type="checkbox" />
              <label htmlFor="yes">Yes</label>
              <input type="checkbox" />
              <label htmlFor="no">No</label>
              <br /><br />
              <label htmlFor="dietaryType">Do you follow a specific diet?</label><br />
              <input type="radio" name="dietaryType" id="vegetarian" value="vegetarian" />
              <label htmlFor="vegetarian">Vegetarian</label><br />
              <input type="radio" name="dietaryType" id="paleo" value="paleo" />
              <label htmlFor="paleo">Paleo</label><br />
              <input type="radio" name="dietaryType" id="pescatarian" value="pescatarian" />
              <label htmlFor="pescatarian">Pescatarian</label><br />
              <input type="radio" name="dietaryType" id="keto" value="keto" />
              <label htmlFor="keto">Keto</label><br />
              <input type="radio" name="lowFat" id="lowFat" />
              <label htmlFor="lowFat">Low Fat</label>< br />
              <input type="radio" name="none" id="none" />
              <label htmlFor="none">None</label>
              <br /><br />
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