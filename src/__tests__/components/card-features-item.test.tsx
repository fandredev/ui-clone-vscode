import { render, screen } from "@testing-library/react";
import { FeatureCard } from "../../components/code-rich-features";
import IntegratedTerminalCard from "../../components/card-features-item";

describe(`${IntegratedTerminalCard.name} component`, () => {
  const mockFeature: FeatureCard = {
    title: "Integrated Terminal",
    description: "The built-in terminal makes it easy to run commands.",
    icon: "images/terminal-icon.png",
  };

  it("should render the feature title", () => {
    render(<IntegratedTerminalCard feature={mockFeature} />);

    const featureTitle = screen.getByText(mockFeature.title);
    expect(featureTitle).toBeInTheDocument();
  });

  it("should render the feature description", () => {
    render(<IntegratedTerminalCard feature={mockFeature} />);

    const featureDescription = screen.getByText(mockFeature.description);
    expect(featureDescription).toBeInTheDocument();
  });

  it("should render the feature icon with correct alt text", () => {
    render(<IntegratedTerminalCard feature={mockFeature} />);

    const featureIcon = screen.getByRole("img", { name: mockFeature.title });
    expect(featureIcon).toBeInTheDocument();
    expect(featureIcon).toHaveAttribute("src", mockFeature.icon);
    expect(featureIcon).toHaveAttribute("alt", mockFeature.title);
  });
});
