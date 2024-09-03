export default function CodeWithCopilot() {
  return (
    <section className="py-5 px-5 bg-black opacity-95">
      <aside>
        <h2 className="text-3xl font-semibold	text-white">
          Code with GitHub Copilot
        </h2>
        <p className="mt-3 text-lg text-version_text py-2">
          Write code faster and smarter with GitHub Copilot, your AI pair
          programmer.
        </p>
        <a className="text-sky-600 underline" href="#">
          Try GitHub Copilot free for 30 days
        </a>

        <div className="mt-10">
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Completions
            </a>{" "}
            present suggestions automatically to help you code more efficiently.
          </p>
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Copilot Chat
            </a>{" "}
            understands the context of your code, workspace, extensions,
            settings, and more.
          </p>
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Inline Chat
            </a>{" "}
            enables you to iteratively generate edits and get answers to quick
            questions, directly on your code.
          </p>
        </div>
      </aside>

      <aside className="mt-3">
        <img src="images/swimlane-copilot.png" alt="GitHub Copilot" />
      </aside>
    </section>
  );
}
