import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/outline"

export const NewAccount = () => {
    return (
        <div>
            <div>
                <h1>Take Control of <span>Your Meals</span></h1>
                <p>Planning your meals has never been easier.</p>
                <Form method="post">
                    <input type="text"
                        name="userName"
                        required
                        placeholder="What is your name?"
                        aria-label="Your Name"
                        autoComplete="given-name" />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
        </div>
    );
};