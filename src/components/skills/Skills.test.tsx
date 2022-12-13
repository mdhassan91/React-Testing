import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];
  test("should render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("should render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("should render login button", () => {
    render(<Skills skills={skills} />);
    const loginElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginElement).toBeInTheDocument();
  });
  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(startLearningElement).toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    //We are using findByRole beause it wait element to be render
    const startLearningElement = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningElement).toBeInTheDocument();
  });
});
