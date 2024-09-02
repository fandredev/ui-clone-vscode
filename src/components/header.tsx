export default function Header() {
  return (
    <header className="p-3 bg-black h-13">
      <div className="flex gap-3 items-center">
        <img className="w-7" src="images/download.png" alt="logo" />
        <span className="text-white text-xl">
          <b>Visual Studio Code</b>
        </span>
      </div>
    </header>
  );
}
