import { useState } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  const [showVersion, setShowVersion] = useState(true);

  function handleCloseVersion() {
    setShowVersion(false);
  }

  return (
    <>
      <Header />
      <section className="bg-black text-center py-3">
        {showVersion && (
          <div>
            <span className="text-version_text mx-5">
              <a className="text-sky-600 underline" href="#">
                Version 1.92
              </a>{" "}
              is now available! Read about the new features and fixes from July.
            </span>
            <button className="text-white" onClick={handleCloseVersion}>
              &times;
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
