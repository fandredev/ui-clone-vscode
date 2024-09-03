import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";

describe(`${Footer.name} component`, () => {
  it("should render social media icons", () => {
    render(<Footer />);

    const socialMediaIcons = [
      { alt: "Ìcone do Rede Social X", src: "/images/x-icon.svg" },
      { alt: "Rede Social X", src: "/images/github-icon.svg" },
      { alt: "ícone do Youtube", src: "/images/youtube-icon.svg" },
    ];

    socialMediaIcons.forEach((icon) => {
      const img = screen.getByAltText(icon.alt);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", icon.src);
    });
  });

  it("should render the Microsoft icon", () => {
    render(<Footer />);

    const microsoftIcon = screen.getByAltText("Ìcone da microsoft");
    expect(microsoftIcon).toBeInTheDocument();
    expect(microsoftIcon).toHaveAttribute("src", "/images/microsoft.svg");
  });

  it("should render footer links", () => {
    render(<Footer />);

    const links = [
      "Support",
      "Privacy",
      "Manage Cookies",
      "Terms of Use",
      "License",
    ];

    links.forEach((link) => {
      const footerLink = screen.getByText(link);
      expect(footerLink).toBeInTheDocument();
    });
  });

  it("should have the correct class names", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass(
      "py-5 px-5 pb-16 bg-black opacity-95 text-white md:px-[6rem]"
    );
  });
});
