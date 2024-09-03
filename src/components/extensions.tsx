interface Extensions {
  name: string;
  image: string;
  description: string;
}

const extensions: Extensions[] = [
  {
    name: "Python",
    image: "images/python-extension.png",
    description: "Adds rich language support for Python",
  },
  {
    name: "Typescript",
    image: "images/copilot-extension.png",
    description: "Your AI pair programmer",
  },
  {
    name: "C/C++",
    image: "images/c-extension.png",
    description: "Adds rich language support for C/C++",
  },
  {
    name: "Jupyter",
    image: "images/jupyter-extension.png",
    description: "Language support for Jupyter Notebooks",
  },
  {
    name: "GitLens",
    image: "images/gitlens-extension.png",
    description: "Supercharge your Git experience",
  },
  {
    name: "C# Dev Kit",
    image: "images/cs-dev-kit-extension.png",
    description: "Powerful tools for your C# development",
  },
  {
    name: "GitHub Codespaces",
    image: "images/github-pull-requests-extension.png",
    description: "Fully configured dev environments in the cloud",
  },
  {
    name: "GitHub Pull Requests",
    image: "images/github-pull-requests-extension.png",
    description: "Collaborate on issues and pull requests",
  },
  {
    name: "PHP",
    image: "images/remote-extension.png",
    description: "Open folders in a container on a remote machine",
  },
];

export default function CodeAnyExtensions() {
  return (
    <section className="py-5 px-5 bg-black opacity-95">
      <h2 className="text-3xl font-semibold	text-white">Code with extensions</h2>
      <p className="mt-3 text-lg text-version_text py-2">
        Whether you're a beginner or an expert, we've got you covered. Choose
        from hundreds of extensions to power up your VS Code experience.
      </p>
      <a className="text-sky-600 underline" href="#">
        Learn more about extensions
      </a>

      <aside className="my-4 grid grid-cols-3	gap-2">
        {extensions.map((extension, index) => (
          <div
            key={index}
            className="border bg-background_cards_extensions border-none p-4 gap-2 flex flex-row items-center justify-center rounded-md no-underline"
          >
            <img
              className={`w-8 ${extension.name === "Jupyter" && "rounded-md"}`}
              src={extension.image}
              alt={extension.name}
            />
            <div className="hidden xl:flex xl:justify-around">
              <span className="text-white">{extension.name}</span>
              <p className="text-version_text">{extension.description}</p>
            </div>
          </div>
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
    </section>
  );
}
