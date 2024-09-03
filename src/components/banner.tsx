import Button from "./button";

export default function Banner() {
  return (
    <>
      <main className="bg-black opacity-95 text-white pb-10 border-b-gray-400 border-b-1">
        <div className="flex justify-center">
          <span className="border-2 border-solid rounded-full px-3 py-2 text-version_text border-slate-600 text-sm">
            <b>Free. Built on open source. Runs everwhere.</b>
          </span>
        </div>
        <section className="flex items-center flex-wrap py-4 flex-col">
          <h1 className="text-5xl text-center leading-tight">
            <strong>Code Editing. Redefined.</strong>
          </h1>
          <div className="flex gap-1 py-3">
            <Button>
              <div className="flex justify-center">
                <img
                  src="https://code.visualstudio.com/assets/icons/download.svg"
                  alt="Download"
                  className="w-5"
                />
                <span>
                  <b>
                    &nbsp;.<abbr title="Debian">deb</abbr>
                  </b>
                </span>
              </div>
              <small className="font-medium">Debian, Ubuntu...</small>
            </Button>
            <Button>
              <div className="flex justify-center">
                <img
                  src="https://code.visualstudio.com/assets/icons/download.svg"
                  alt="Download"
                  className="w-5"
                />
                <span>
                  <b>&nbsp;.rpm</b>
                </span>
              </div>
              <small className="font-medium">Red Hat, Fedora...</small>
            </Button>
          </div>

          <span className="text-sky-600 underline pb-3">
            Web, insiders edition <span className="text-version_text">or</span>{" "}
            other plataforms
          </span>
          <small className="text-version_text text-xs">
            By using VS Code, you agree to its license and privacy statement.
          </small>
        </section>

        <div className="flex justify-center">
          <img
            className="mt-3 w-11/12	contrast-125"
            src="images/banner.png"
            alt="Código Typescript no VsCode de um component chamado Button no React"
          />
        </div>
      </main>
    </>
  );
}
