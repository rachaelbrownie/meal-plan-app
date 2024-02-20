import {useState} from 'react';
import {ActionFunctionArgs, Form, useActionData} from 'react-router-dom';
import {ActionData} from '../types/actionData';

const Signup = () => {
  const error = useActionData() as ActionData<typeof action>;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Welcome to the grocery app!</h1>
      <h2>Signup</h2>
      <Form method="post">
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        {error ? <p>{error}</p> : null}
        <button type="submit">Sign up</button>
      </Form>
    </div>
  );
};
export default Signup;

export const loader = () => {
  // check if user is logged in
  return null;
};

export const action = async ({request}: ActionFunctionArgs) => {
  const error = null;
  const form = await request.formData();
  const firstName = form.get('firstName');
  const lastName = form.get('lastName');
  const email = form.get('email');
  const password = form.get('password');

  console.log('firstName', firstName);

  // show error if any field is empty
  if (!firstName || !lastName || !email || !password) {
    return 'All fields are required';
  }

  // get current users
  const response = await fetch('/api/data/accounts');
  const accounts = await response.json();
  console.log('accounts', accounts);

  // show error if user already exists
  const emails = accounts.map(account => account.email);
  if (emails.includes(email)) {
    return 'User already exists';
  } else {
    await fetch('/api/data/accounts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        ...accounts,
        {
          firstName,
          lastName,
          email,
          password,
        },
      ]),
    });
  }

  // 2b. update accounts.json with new account
  // 3. store session token for user
  // 4a. success: redirect to /grocery
  // 4b. error: show error
  return error;
};
