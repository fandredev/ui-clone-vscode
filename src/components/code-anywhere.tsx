export default function CodeAnywhere() {
  return (
    <section className="py-5 px-5 bg-black opacity-95 md:grid md:grid-cols-2 md:gap-5 md:px-[4rem]">
      <aside>
        <h2 className="text-3xl font-semibold	text-white">Code anywhere</h2>
        <p className="mt-3 text-base text-version_text py-2">
          Code wherever you're most productive, whether you're connected to the
          cloud, a remote repository, or in the browser with VS Code for the Web
          (vscode.dev).
        </p>

        <div className="mt-5">
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Built-in Source Control
            </a>{" "}
            empowers you with Git support out-of-the-box. Many other source
            control providers are available through extensions.
          </p>
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              GitHub Codespaces
            </a>{" "}
            provides cloud-powered development environments for any activity -
            whether it's a long-term project, or a short-term task like
            reviewing a pull request.
          </p>
        </div>
      </aside>

      <aside className="mt-3 md:flex md:items-center">
        <img
          src="images/swimlane-anywhere.png"
          alt="Search by themes from vscode"
        />
      </aside>
    </section>
  );
}
