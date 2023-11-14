import { render, screen, fireEvent } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm.jsx";
test("Initial condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "/terms and conditions/i", //대소문자 구별 안 함
  });
  const confirmButton = screen.getByRole("button", {
    name: "/confirm order/i",
  });
  expect(checkbox).not.toBeChecked;
  expect(confirmButton).toBeDisabled();
});

test("button is enabled when checkbox is clicked", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "/terms and conditions/i",
  });
  const button = screen.getByRole("button", {
    name: "/confirm order /i",
  });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
