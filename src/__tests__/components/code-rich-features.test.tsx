import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeRichFeatures from "../../components/code-rich-features";
import { featureCards } from "../../utils/features.list";

describe(`${CodeRichFeatures} Component`, () => {
  beforeEach(() => render(<CodeRichFeatures />));

  it("should render the main title and description", () => {
    expect(screen.getByText("Code with rich features")).toBeInTheDocument();

    expect(
      screen.getByText(/There's a lot more to an editor/i)
    ).toBeInTheDocument();
  });

  it("should render all feature cards with correct titles and descriptions", () => {
    featureCards.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();

      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  it("should render all feature cards with correct icons", () => {
    featureCards.forEach((feature) => {
      const icon = screen.getByAltText(feature.title);

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("src", feature.icon);
    });
  });
});
