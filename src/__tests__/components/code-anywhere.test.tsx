import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeAnywhere from "../../components/code-anywhere";

describe(`${CodeAnywhere.name} component`, () => {
  beforeEach(() => render(<CodeAnywhere />));

  it("should render the title and paragraphs correctly", () => {
    expect(screen.getByText("Code anywhere")).toBeInTheDocument();

    expect(
      screen.getByText(/Code wherever you're most productive/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Built-in Source Control/i)).toBeInTheDocument();

    expect(screen.getByText(/GitHub Codespaces/i)).toBeInTheDocument();
  });

  it("should render the links with correct text", () => {
    const firstLink = screen.getByText("Built-in Source Control");
    const secondLink = screen.getByText("GitHub Codespaces");

    const firstLinkAttribute = firstLink.getAttribute("href");
    const secondLinkAttribute = secondLink.getAttribute("href");

    expect(firstLink).toBeInTheDocument();
    expect(firstLinkAttribute).toBe("#");

    expect(secondLink).toBeInTheDocument();
    expect(secondLinkAttribute).toBe("#");
  });

  it("should render the image with correct src and alt", () => {
    const img = screen.getByRole("img", {
      name: /Search by themes from vscode/i,
    });

    const srcAttribute = img.getAttribute("src");
    const altAttribute = img.getAttribute("alt");

    expect(img).toBeInTheDocument();

    expect(srcAttribute).toBe("images/swimlane-anywhere.png");
    expect(altAttribute).toBe("Search by themes from vscode");
  });
});
