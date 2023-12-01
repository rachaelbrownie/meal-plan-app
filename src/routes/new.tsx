import { Form } from "react-router-dom";

export const New = () => {
  return (
    <div>
      <h2>
        New Meal Plan
      </h2>
      <Form replace >
        <label htmlFor="dietaryType"><h3>Do you follow a specific diet?</h3></label><br />
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

        <label htmlFor="allergies"><h3>Do you have any allergies or dislikes?</h3></label><br />
        <input type="checkbox" name="eggs" id="eggs" value="eggs" />
        <label htmlFor="eggs">Eggs</label><br />
        <input type="checkbox" name="milk" id="milk" value="milk" />
        <label htmlFor="milk">Milk</label><br />
        <input type="checkbox" name="peanutes" id="peanuts" value="peanuts" />
        <label htmlFor="peanuts">Peanuts</label><br />
        <input type="checkbox" name="shellfish" id="shellfish" value="shellfish" />
        <label htmlFor="shellfish">Shellfish</label><br />
        <input type="checkbox" name="sesame" id="sesame" value="sesame" />
        <label htmlFor="sesame">Sesame</label><br />
        <input type="checkbox" name="soy" id="soy" value="soy" />
        <label htmlFor="soy">Soy</label><br />
        <input type="checkbox" name="treenuts" id="treenuts" value="treenuts" />
        <label htmlFor="treenuts">Tree Nuts</label><br />
        <input type="checkbox" name="wheat" id="wheat" />
        <label htmlFor="wheat">Wheat</label>
        <br /><br />

        <label htmlFor="daysOfWeek"><h3>Which days do you need a meal plan for?</h3></label><br />
        <input type="checkbox" id="mon" name="daysOfWeek" value="mon" />
        <label htmlFor="mon">Monday</label>  <input type="checkbox" id="fri" name="daysOfWeek" value="fri" />
        <label htmlFor="fri">Friday</label><br />
        <input type="checkbox" id="tues" name="daysOfWeek" value="tues" />
        <label htmlFor="tues">Tuesday</label> <input type="checkbox" id="sat" name="daysOfWeek" value="sat" />
        <label htmlFor="sat">Saturday</label><br />
        <input type="checkbox" id="wed" name="daysOfWeek" value="wed" />
        <label htmlFor="wed">Wednesday</label>  <input type="checkbox" id="sun" name="daysOfWeek" value="sun" />
        <label htmlFor="sun">Sunday</label><br />
        <input type="checkbox" id="thur" name="daysOfWeek" value="thur" />
        <label htmlFor="thur">Thursday</label><br /><br />

        <label htmlFor="mealsOfDay"><h3>Which meals do you need?</h3></label><br />
        <input type="checkbox" id="breakfast" name="mealsOfDay" value="breakfast" />
        <label htmlFor="breakfast">Breakfast</label>&emsp; &emsp; &emsp;
        <input type="checkbox" id="lunch" name="mealsOfDay" value="lunch" />
        <label htmlFor="lunch">Lunch</label>&emsp; &emsp; &emsp;
        <input type="checkbox" id="dinner" name="mealsOfDay" value="dinner" />
        <label htmlFor="dinner">Dinner</label><br /><br />

        <label htmlFor="fridgeContents"><h3>What do you have in your fridge?</h3></label><br />
        <textarea id="fridgeContents" name="fridgeContents" rows={4} cols={50} placeholder="separate items by comma"></textarea><br /><br />

        <input type="submit" value="Submit" onClick={submitForm} />

      </Form>
    </div>

  );
};

function submitForm(): boolean {
  // Get form data
  const form = document.getElementById("mealPreferencesForm") as HTMLFormElement;
  const formData = new FormData(form);
  const inputText = (document.getElementById("fridgeContents") as HTMLTextAreaElement)?.value || "";
  const fridgeContents = inputText.split(',').map(item => item.trim());
  console.log("Fridge Contents:", fridgeContents);

  // Convert FormData to object
  const formObject: { [key: string]: string | string[] } = {};
  formData.forEach((value, key) => {
    formObject[key] = key === "fridgeContents" ? fridgeContents : value as string;
  });

  // Log the data to the console
  console.log("Submitted Data:", formObject);

  // Prevent the form from actually submitting
  return false;
}