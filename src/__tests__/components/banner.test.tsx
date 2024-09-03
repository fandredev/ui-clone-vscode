import { render, screen } from "@testing-library/react";
import Banner from "../../components/banner";

describe(`${Banner.name} component`, () => {
  beforeEach(() => {
    render(<Banner />);
  });

  it("renders banner text", () => {
    const searchByTitle = screen.getByText("Code Editing. Redefined.");
    expect(searchByTitle).toBeInTheDocument();
  });

  it("renders download buttons", () => {
    const downloadButtons = screen.getAllByRole("button");
    expect(downloadButtons).toHaveLength(2);

    const debianButton = screen.getByText("Debian, Ubuntu...");
    const rpmButton = screen.getByText("Red Hat, Fedora...");

    expect(rpmButton).toBeInTheDocument();
    expect(debianButton).toBeInTheDocument();
  });

  it("renders banner image", () => {
    const bannerImage = screen.getByAltText(
      "Código Typescript no VsCode de um component chamado Button no React"
    );
    expect(bannerImage).toBeInTheDocument();
  });
});
