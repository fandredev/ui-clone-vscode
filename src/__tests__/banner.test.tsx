import { render, screen } from "@testing-library/react";
import Banner from "../components/banner";

describe("Banner", () => {
  test("renders banner text", () => {
    render(<Banner />);
    const bannerText = screen.getByText("Code Editing. Redefined.");
    expect(bannerText).toBeInTheDocument();
  });

  test("renders download buttons", () => {
    render(<Banner />);
    const downloadButtons = screen.getAllByRole("button");
    expect(downloadButtons).toHaveLength(2);
  });

  test("renders banner image", () => {
    render(<Banner />);
    const bannerImage = screen.getByAltText(
      "Código Typescript no VsCode de um component chamado Button no React"
    );
    expect(bannerImage).toBeInTheDocument();
  });
});
