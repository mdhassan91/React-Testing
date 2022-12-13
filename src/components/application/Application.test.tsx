import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name: 'Job Application form'
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: 'Section 1'
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText is search by label in the related Component
    // Abhi ek se zyda mile uskoh toh object dale gay which accepts html element type value
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Full Name");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Hassan");
    expect(nameElement4).toBeInTheDocument();

    //getByText also accetps selector
    // const paraElement = screen.getByText("All fields arae mandatory");
    // expect(paraElement).toBeInTheDocument();
    const paraElement = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paraElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    // There are other ways to write it 
    // By instaling npm i --save-dev eslint-plugin-jest-dom
    //IN Package.json in eslintCOnfig section 
    expect(submitButtonElement).toBeDisabled();

  });
});

//Finally for every developer in team we should use npm run lint
// For that we add lint in script 
