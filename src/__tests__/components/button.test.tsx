import { render, screen } from "@testing-library/react";
import Button from "../../components/button";

describe(`${Button.name} component`, () => {
  beforeEach(() => {
    render(<Button>Test</Button>);
  });

  it("renders button text", () => {
    const searchByTitle = screen.getByText("Test");
    expect(searchByTitle).toBeInTheDocument();
  });

  it("renders button with default class", () => {
    const searchByClass = screen.getByRole("button");
    expect(searchByClass).toHaveClass(
      "bg-background_buttons w-36 p-3 rounded-md"
    );
  });
});
