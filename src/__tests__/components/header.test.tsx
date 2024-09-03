import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/header";

describe(`${Header.name} component`, () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders logo and title", () => {
    const logo = screen.getByAltText("Logotipo VSCode") as HTMLImageElement;
    const title = screen.getByText("Visual Studio Code");

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    const links = screen.getAllByRole("listitem");
    expect(links).toHaveLength(6);

    const docsLink = screen.getByText("Docs");
    const updatesLink = screen.getByText("Updates");
    const blogLink = screen.getByText("Blog");
    const apiLink = screen.getByText("API");
    const extensionsLink = screen.getByText("Extensions");
    const faqLink = screen.getByText("FAQ");

    expect(docsLink).toBeInTheDocument();
    expect(updatesLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(apiLink).toBeInTheDocument();
    expect(extensionsLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
  });

  it("updates search value on input change", () => {
    const input = screen.getByPlaceholderText(
      "Search docs"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("renders download button", () => {
    const downloadButton = screen.getByText("Download") as HTMLButtonElement;
    expect(downloadButton).toBeInTheDocument();
  });
});
