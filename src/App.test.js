import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders QA Website header", () => {
  render(<App />);
  const headerElement = screen.getByText(/QA Website/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders questions and answers section", () => {
  render(<App />);
  const questionsSection = screen.getByText(/Questions & Answers/i);
  expect(questionsSection).toBeInTheDocument();
});

test("renders add new question button", () => {
  render(<App />);
  const addButton = screen.getByText(/Add New Question/i);
  expect(addButton).toBeInTheDocument();
});
