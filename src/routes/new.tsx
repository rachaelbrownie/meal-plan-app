import { Form } from "react-router-dom";

export const New = () => {
  return (
    <div>
      <h2>
        New Meal Plan
      </h2>
      <Form>
        <label htmlFor="dietaryType">Dietary Type:</label><br />
        <input type="radio" name="dietaryType" id="vegetarian" value="vegetarian" />
        <label htmlFor="vegetarian">Vegetarian</label>
        <input type="radio" name="dietaryType" id="redMeat" value="redMeat" />
        <label htmlFor="redMeat">No Red Meat</label>
        <input type="radio" name="dietaryType" id="vegan" value="vegan" />
        <label htmlFor="vegan">Vegan</label>
        <input type="radio" name="dietaryType" id="dairyFree" value="dairy-free" />
        <label htmlFor="dairyFree">Dairy Free</label>
        <input type="radio" name="dietaryType" id="paleo" value="paleo" />
        <label htmlFor="paleo">Paleo</label>
        <input type="radio" name="dietaryType" id="pescatarian" value="pescatarian" />
        <label htmlFor="pescatarian">Pescatarian</label>
        <input type="radio" name="dietaryType" id="gluten" value="gluten" />
        <label htmlFor="gluten">Gluten Free</label>
        <br /><br />

        <label htmlFor="allergies">Allergies/Dislikes:</label><br />
        <input type="checkbox" name="" id="" value="" />
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" value="" />
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" value="" />
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" value="" />
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" value="" />
        <label htmlFor=""></label>
        <input type="checkbox" name="" id="" value="" />
        <br /><br />

        <label htmlFor="daysOfWeek">Days of the Week:</label><br />
        <input type="checkbox" id="mon" name="daysOfWeek" value="mon" />
        <label htmlFor="mon">Monday</label>
        <input type="checkbox" id="tues" name="daysOfWeek" value="tues" />
        <label htmlFor="tues">Tuesday</label>
        <input type="checkbox" id="wed" name="daysOfWeek" value="wed" />
        <label htmlFor="wed">Wednesday</label>
        <input type="checkbox" id="thur" name="daysOfWeek" value="thur" />
        <label htmlFor="thur">Thursday</label>
        <input type="checkbox" id="fri" name="daysOfWeek" value="fri" />
        <label htmlFor="fri">Friday</label>
        <input type="checkbox" id="sat" name="daysOfWeek" value="sat" />
        <label htmlFor="sat">Saturday</label>
        <input type="checkbox" id="sun" name="daysOfWeek" value="sun" />
        <label htmlFor="sun">Sunday</label><br /><br />

        <label htmlFor="mealsOfDay">Meals of the Day:</label><br />
        <input type="checkbox" id="breakfast" name="mealsOfDay" value="breakfast" />
        <label htmlFor="breakfast">Breakfast</label>
        <input type="checkbox" id="lunch" name="mealsOfDay" value="lunch" />
        <label htmlFor="lunch">Lunch</label>
        <input type="checkbox" id="dinner" name="mealsOfDay" value="dinner" />
        <label htmlFor="dinner">Dinner</label><br /><br />

        <label htmlFor="fridgeContents">What do you have in your fridge?</label><br />
        <textarea id="fridgeContents" name="fridgeContents" rows="4" cols="50"></textarea><br /><br />

        <input type="submit" value="Submit" onClick="submitForm()" />

      </Form>
    </div>

  );
};

function submitForm(): boolean {
  // Get form data
  const form = document.getElementById("mealPreferencesForm") as HTMLFormElement;
  const formData = new FormData(form);

  // Convert FormData to object
  const formObject: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    formObject[key] = value as string;
  });

  // Log the data to the console
  console.log("Submitted Data:", formObject);

  // Prevent the form from actually submitting
  return false;
}