import { Menu } from "../data/info";

export default function Header() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-20" id="home">
      <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className="font-extrabold text-2xl">KevDev Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-4">
              {Menu.map((option) => {
                return (
                  <li key={option.id}>
                    <a
                      href={option.url}
                      onClick={(e) => handleSmoothScroll(e, "projects")}
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      {option.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
