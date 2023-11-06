import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelwithSpaces } from "./App";

test("button has coreect initial color, update when clicked", () => {
  //render virtual DOM
  render(<App />);

  //find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });

  //expoect the button text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  //render virtual DOM
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button is gray when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });

  //change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

//describe 문은 test문을 grouping 할 수 있다.
describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelwithSpaces("Red")).toBe("Red");
  });

  test("Works for one  inner capital letters", () => {
    expect(replaceCamelwithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelwithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
