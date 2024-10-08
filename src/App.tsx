import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import CodeAnyLanguage from "./components/languages";
import CodeAnyExtensions from "./components/extensions";
import CodeWithCopilot from "./components/copilot";
import CodeCustomized from "./components/code-customized";
import CodeAnywhere from "./components/code-anywhere";
import CodeRichFeatures from "./components/code-rich-features";
import Footer from "./components/footer";

function App() {
  const [showVersion, setShowVersion] = useState(true);

  function handleCloseVersion() {
    setShowVersion(false);
  }

  return (
    <>
      <Header />
      <section className="bg-black opacity-95 text-center py-5">
        {showVersion && (
          <div className="flex items-center justify-center">
            <span className="text-version_text mx-3 text-xs">
              <a
                className="text-sky-600 underline"
                href="#"
                data-testid="version-vscode-data-test-anchor"
              >
                Version 1.92
              </a>{" "}
              is now available! Read about the new features and fixes from July.
            </span>
            <button
              className="text-version_text text-2xl relative bottom-3"
              onClick={handleCloseVersion}
            >
              &times;
            </button>
          </div>
        )}
      </section>
      <Banner />
      <CodeAnyLanguage />
      <CodeAnyExtensions />
      <CodeWithCopilot />
      <CodeCustomized />
      <CodeAnywhere />
      <CodeRichFeatures />
      <Footer />
    </>
  );
}

export default App;
