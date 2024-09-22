import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between py-8 sm:py-12">
      <h1 className="text-2xl font-semibold">AS</h1>
      <ul className="gap-5 hidden text-xl sm:flex">
        <a href="#project">
          {" "}
          <li className="hover:underline transition-all duration-300 ease-in">
            Projects
          </li>
        </a>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <DarkModeToggle />
    </div>
  );
};
export default Header;
