export default function CodeCustomized() {
  return (
    <section className="py-5 px-5 bg-black opacity-95 md:grid md:grid-cols-2 md:gap-5 md:px-[4rem] md:pb-10">
      <aside>
        <h2 className="text-3xl font-semibold	text-white">
          Code fully customized
        </h2>
        <p className="mt-3 text-base text-version_text py-2">
          Customize your VS Code <abbr title="User interface">UI</abbr> and
          layout so that it fits your coding style.
        </p>

        <div className="mt-5">
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Color themes
            </a>{" "}
            let you modify the colors in VS Code's user interface to suit your
            preferences and work environment.{" "}
          </p>
          <p className="mt-3 text-base text-version_text py-2">
            <a
              data-testid="settings-sync-data-test-anchor"
              className="text-sky-600 underline"
              href="#"
            >
              Settings Sync
            </a>{" "}
            enables you to share your user settings across your VS Code
            instances with the Settings Sync feature.
          </p>
          <p className="mt-3 text-base text-version_text py-2">
            <a className="text-sky-600 underline" href="#">
              Profiles
            </a>{" "}
            let you create sets of customizations and quickly switch between
            them or share them with others.
          </p>
        </div>
      </aside>

      <aside className="mt-3">
        <img
          src="images/swimlane-customized.png"
          alt="Search by themes from vscode"
        />
      </aside>
    </section>
  );
}
