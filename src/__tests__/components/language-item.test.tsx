import { render, screen } from "@testing-library/react";
import LanguageItem from "../../components/language-item";
import { languages } from "../../utils/languages-list";

describe(`${LanguageItem.name} component`, () => {
  const mockLanguage = languages[0];

  it("should render the language name", () => {
    render(<LanguageItem language={mockLanguage} />);

    const languageName = screen.getByText(mockLanguage.name);
    expect(languageName).toBeInTheDocument();
  });

  it("should render the correct image with alt text", () => {
    render(<LanguageItem language={mockLanguage} />);

    const languageImage = screen.getByRole("img", { name: mockLanguage.name });
    expect(languageImage).toBeInTheDocument();

    expect(languageImage).toHaveAttribute("src", mockLanguage.image);
    expect(languageImage).toHaveAttribute("alt", mockLanguage.name);
  });

  it("should render with the correct CSS classes", () => {
    render(<LanguageItem language={mockLanguage} />);

    const containerDiv = screen
      .getByRole("img", { name: mockLanguage.name })
      .closest("div");

    expect(containerDiv).toHaveClass("flex items-center gap-3");

    const languageNameElement = screen.getByText(mockLanguage.name);
    expect(languageNameElement).toHaveClass("text-version_text");
  });
});
