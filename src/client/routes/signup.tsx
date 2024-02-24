import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { ActionData } from "../types/actionData";

const Signup = () => {
  const error = useActionData() as ActionData<typeof action>;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>
        Take Control of <span>Your Meals</span>
      </h1>
      <p>Planning your meals has never been easier.</p>
      <p>
        Signup now! <UserPlusIcon style={{ width: "20px" }} />
      </p>
      <Form method="POST">
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*  <h1>
          Tell Us More About <span className="accent">{`${firstName} ${lastName}`}</span>
        </h1>
        <p>Knowing more about you makes meal planning easier.</p>
        <Form method="post">
          <label htmlFor="email">What's your email?</label>
          <br />
          <input
            type="email"
            required
            placeholder="name@name.com"
            aria-label="Email"
          />
          <br />
          <br />
          <label htmlFor="familyMembers">
            How many people is this meal plan for?
          </label>
          <br />
          <input
            type="number"
            required
            placeholder="1"
            min="1"
            aria-label="How many family members?"
          />
          <br />
          <br />
          <label htmlFor="children">Are you cooking for children?</label>
          <br />
          <input type="checkbox" />
          <label htmlFor="yes">Yes</label>
          <input type="checkbox" />
          <label htmlFor="no">No</label>
          <br />
          <br />
          <label htmlFor="dietaryType">Do you follow a specific diet?</label>
          <br />
          <input
            type="radio"
            name="dietaryType"
            id="vegetarian"
            value="vegetarian"
          />
          <label htmlFor="vegetarian">Vegetarian</label>
          <br />
          <input type="radio" name="dietaryType" id="paleo" value="paleo" />
          <label htmlFor="paleo">Paleo</label>
          <br />
          <input
            type="radio"
            name="dietaryType"
            id="pescatarian"
            value="pescatarian"
          />
          <label htmlFor="pescatarian">Pescatarian</label>
          <br />
          <input type="radio" name="dietaryType" id="keto" value="keto" />
          <label htmlFor="keto">Keto</label>
          <br />
          <input type="radio" name="lowFat" id="lowFat" />
          <label htmlFor="lowFat">Low Fat</label>
          <br />
          <input type="radio" name="none" id="none" /> */}
        <span style={{ color: "red" }}>{error ? <p>{error}</p> : null}</span>
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};
export default Signup;

export const loader = () => {
  const sessionToken = localStorage.getItem("sessionToken");
  if (sessionToken) {
    return redirect("/grocery");
  }
  // check if user is logged in
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const error = null;
  const form = await request.formData();
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");
  const email = form.get("email");
  const password = form.get("password");

  // show error if any field is empty
  if (!firstName || !lastName || !email || !password) {
    return "All fields are required";
  }

  // get current users
  let accounts = [];
  try {
    const response = await fetch("/api/data/accounts");
    accounts = await response.json();
  } catch (error) {
    return `error fetching accounts: ${
      error.message ? error.message : "unknown "
    }`;
  }

  // show error if user already exists
  const emails = accounts.map((account) => account.email);
  if (emails.includes(email)) {
    return "User already exists";
  }

  try {
    // update accounts.json with new account
    const accountId = `${parseInt(accounts[accounts.length - 1].id) + 1}`;
    const user = {
      firstName,
      lastName,
      email,
      password,
      id: accountId,
    };
    const data = [...accounts, user];
    const body = JSON.stringify(data);

    await fetch("/api/data/accounts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    // store session token for user
    localStorage.setItem("sessionToken", accountId);
    return redirect("/grocery/home");
  } catch (error) {
    return error.message ? error.message : "unknown error!";
  }
};
