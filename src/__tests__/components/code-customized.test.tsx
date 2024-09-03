import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeCustomized from "../../components/code-customized";

describe(`${CodeCustomized.name} component`, () => {
  beforeEach(() => render(<CodeCustomized />));

  it("should render the title and paragraphs correctly", () => {
    expect(screen.getByText("Code fully customized")).toBeInTheDocument();

    expect(screen.getByText(/Customize your VS Code/i)).toBeInTheDocument();

    expect(screen.getByText(/Color themes/i)).toBeInTheDocument();

    expect(
      screen.getByTestId("settings-sync-data-test-anchor")
    ).toBeInTheDocument();

    expect(screen.getByText(/Profiles/i)).toBeInTheDocument();
  });

  it("should render the links with correct text", () => {
    const firstLink = screen.getByText("Color themes");
    expect(firstLink).toBeInTheDocument();
    expect(firstLink).toHaveAttribute("href", "#");

    const secondLink = screen.getByText("Settings Sync");
    expect(secondLink).toBeInTheDocument();
    expect(secondLink).toHaveAttribute("href", "#");

    const thirdLink = screen.getByText("Profiles");
    expect(thirdLink).toBeInTheDocument();
    expect(thirdLink).toHaveAttribute("href", "#");
  });

  it("should render the image with correct src and alt", () => {
    const img = screen.getByRole("img", {
      name: /Search by themes from vscode/i,
    });

    const srcAttribute = img.getAttribute("src");
    const altAttribute = img.getAttribute("alt");

    expect(img).toBeInTheDocument();

    expect(srcAttribute).toBe("images/swimlane-customized.png");
    expect(altAttribute).toBe("Search by themes from vscode");
  });
});
