import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeWithCopilot from "../../components/copilot";

describe(`${CodeWithCopilot.name} component`, () => {
  beforeEach(() => render(<CodeWithCopilot />));

  it("should render the main title and description", () => {
    expect(screen.getByText("Code with GitHub Copilot")).toBeInTheDocument();

    expect(
      screen.getByText(/Write code faster and smarter with GitHub Copilot/i)
    ).toBeInTheDocument();
  });

  it("should render the main call-to-action link", () => {
    const link = screen.getByText("Try GitHub Copilot free for 30 days");
    const linkAttributeHref = link.getAttribute("href");

    expect(link).toBeInTheDocument();
    expect(linkAttributeHref).toBe("#");
  });

  it("should render all secondary feature links with correct text", () => {
    const features = ["Completions", "Copilot Chat", "Inline Chat"];

    features.forEach((feature) => {
      const link = screen.getByText(feature);
      const linkAttributeHref = link.getAttribute("href");

      expect(link).toBeInTheDocument();
      expect(linkAttributeHref).toBe("#");
    });
  });

  it("should render the image with correct src and alt attributes", () => {
    const img = screen.getByRole("img", {
      name: /GitHub Copilot/i,
    });

    const imgAttributeSrc = img.getAttribute("src");
    const imgAttributeAlt = img.getAttribute("alt");

    expect(img).toBeInTheDocument();
    expect(imgAttributeSrc).toBe("images/swimlane-copilot.png");
    expect(imgAttributeAlt).toBe("GitHub Copilot");
  });
});
