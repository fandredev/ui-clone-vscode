import { extensions } from "../utils/extensions-list";
import ExtensionItem from "./extension-item";

export default function CodeAnyExtensions() {
  return (
    <section className="py-5 px-5 bg-black opacity-95 md:grid md:grid-cols-[1fr_65%] md:gap-16 md:px-[6rem] md:pb-10">
      <div>
        <h2 className="text-3xl font-semibold	text-white">
          Code with extensions
        </h2>
        <p className="mt-3 text-lg text-version_text py-2">
          Whether you're a beginner or an expert, we've got you covered. Choose
          from hundreds of extensions to power up your VS Code experience.
        </p>
        <a className="text-sky-600 underline" href="#">
          Learn more about extensions
        </a>
      </div>

      <div>
        <aside className="my-4 grid grid-cols-3	gap-2">
          {extensions.map((extension, index) => (
            <ExtensionItem key={index} extension={extension} />
          ))}
        </aside>

        <div className="text-center">
          <small className="text-version_text text-xs">
            View 50k+ extensions in the{" "}
            <a className="text-sky-600 underline" href="#">
              Extension Marketplace
            </a>
          </small>
        </div>
      </div>
    </section>
  );
}
