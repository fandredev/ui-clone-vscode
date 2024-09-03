import { render, screen } from "@testing-library/react";
import CodeAnyExtensions from "../../components/extensions";
import { extensions } from "../../utils/extensions-list";

describe(`${CodeAnyExtensions.name} component`, () => {
  beforeEach(() => {
    render(<CodeAnyExtensions />);
  });

  it("should render the heading and introductory text", () => {
    const heading = screen.getByRole("heading", {
      name: /code with extensions/i,
    });

    expect(heading).toBeInTheDocument();

    const introText = screen.getByText(
      /Whether you're a beginner or an expert, we've got you covered/i
    );
    expect(introText).toBeInTheDocument();

    const learnMoreLink = screen.getByRole("link", {
      name: /learn more about extensions/i,
    }) as HTMLAnchorElement;
    expect(learnMoreLink).toBeInTheDocument();
  });

  it("should render a list of extensions", () => {
    extensions.forEach((extension) => {
      const extensionItem = screen.getByText(extension.name);
      expect(extensionItem).toBeInTheDocument();

      const extensionDescription = screen.getByText(extension.description);
      expect(extensionDescription).toBeInTheDocument();
    });
  });

  it("should render the Extension Marketplace link", () => {
    const marketplaceLink = screen.getByRole("link", {
      name: /extension marketplace/i,
    }) as HTMLAnchorElement;

    expect(marketplaceLink).toBeInTheDocument();

    const footerText = screen.getByText(/View 50k\+ extensions/i);
    expect(footerText).toBeInTheDocument();
  });
});
