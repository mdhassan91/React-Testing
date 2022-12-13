import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application form</h1>
      <h2>Section 1</h2>
      <p>All fields arae mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />

      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value="Hassan"
            onChange={() => {}}
          />
        </div>
        {/* Ab yaha pe 2 text ho gaye yeh problem kare agye apne test uska sol hai application.test file me */}
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">
            {/* Job Location    */}
            {/* We are here checking if both the label have same name by getByLabelText */}
            Name
          </label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
}

export default Application;
