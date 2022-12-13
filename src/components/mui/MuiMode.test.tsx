// yeh test-utils se aaye
import { render, screen } from "../../test-util";

import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    // we use wrapper here becs of MuiMode Component is present under AppProvider
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });

  //   test("renders text in white color for dark mode", () => {
  //     render(<MuiMode />);
  //     const headingElement = screen.getByRole("heading");
  //     expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  //   });
});
