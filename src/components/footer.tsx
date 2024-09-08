export default function Footer() {
  return (
    <footer className="py-5 px-5 pb-16 bg-black opacity-95 text-white md:px-[6rem]">
      <div className="my-5 flex justify-between">
        <ul className="flex gap-5 ">
          <li className="cursor-pointer">
            <img
              className="w-6"
              src="/images/x-icon.svg"
              alt="Ìcone do Rede Social X"
            />
          </li>
          <li className="cursor-pointer">
            <img
              className="w-6"
              src="/images/github-icon.svg"
              alt="Rede Social X"
            />
          </li>
          <li className="cursor-pointer">
            <img
              className="w-6"
              src="/images/youtube-icon.svg"
              alt="ícone do Youtube"
            />
          </li>
        </ul>

        <div>
          <img
            className="w-6"
            src="/images/microsoft.svg"
            alt="Ìcone da microsoft"
          />
        </div>
      </div>
      <ul className="text-xs flex gap-4 text-version_text">
        <li>Support</li>
        <li>Privacy</li>
        <li>Manage Cookies</li>
        <li>Terms of Use</li>
        <li>License</li>
      </ul>
    </footer>
  );
}
