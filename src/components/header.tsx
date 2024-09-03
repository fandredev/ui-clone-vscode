import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <header className="px-28 py-3 bg-black opacity-95 h-13 fixed top-0 left-0 z-50 w-full">
      <div className="flex gap-3 items-center">
        <img className="w-7" src="images/download.png" alt="Logotipo VSCode" />
        <span className="text-white text-lg mr-4">
          <b>Visual Studio Code</b>
        </span>
        <ol className="text-version_text flex gap-5">
          <li>Docs</li>
          <li>Updates</li>
          <li>Blog</li>
          <li>API</li>
          <li>Extensions</li>
          <li>FAQ</li>
        </ol>

        <div className="flex flex-1 justify-end items-center">
          <img
            src="images/sun.svg"
            alt="Ícone de busca"
            className="w-4 h-4 mr-3"
          />

          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="Search docs"
            className="p-2 mr-3 text-white bg-background_cards_extensions border-none rounded-md"
          />
          <button className="bg-background_buttons w-28 h-9 text-white text-center rounded-md">
            <strong>Download</strong>
          </button>
        </div>
      </div>
    </header>
  );
}
