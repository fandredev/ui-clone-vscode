import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";

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
            <span className="text-version_text mx-5 text-xs">
              <a className="text-sky-600 underline" href="#">
                Version 1.92
              </a>{" "}
              is now available! Read about the new features and fixes from July.
            </span>
            <button
              className="text-version_text text-2xl"
              onClick={handleCloseVersion}
            >
              &times;
            </button>
          </div>
        )}
      </section>
      <Banner />
    </>
  );
}

export default App;
