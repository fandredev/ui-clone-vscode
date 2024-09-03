import { render, screen } from "@testing-library/react";
import { languages } from "../../utils/languages-list";
import CodeAnyLanguage from "../../components/languages";

describe(`${CodeAnyLanguage.name} component`, () => {
  beforeEach(() => {
    render(<CodeAnyLanguage />);
  });

  it("should render the heading and introductory text", () => {
    const heading = screen.getByRole("heading", {
      name: /code in any language/i,
    });
    expect(heading).toBeInTheDocument();

    const introText = screen.getByText(
      /VS Code supports almost every major programming language/i
    );
    expect(introText).toBeInTheDocument();
  });

  it("should render a list of languages", () => {
    languages.forEach((language) => {
      const languageItem = screen.getByText(language.name);
      expect(languageItem).toBeInTheDocument();
    });
  });
});
