export default function Header() {
  return (
    <header>
      <div className="container d-flex flex-row justify-content-between align-items-center py-3">
        <img src="dc-logo.png" alt="" />
        <ul className="d-flex flex-row">
          <li className="px-3">
            <a href="#">COMICS</a>
          </li>
          <li className="px-3">
            <a href="#">MOVIES</a>
          </li>
          <li className="px-3">
            <a href="#">CHARACTERS</a>
          </li>
          <li className="px-3">
            <a href="#">TV</a>
          </li>
          <li className="px-3">
            <a href="#">GAMES</a>
          </li>
          <li className="px-3">
            <a href="#">COLLECTIBLES</a>
          </li>
          <li className="px-3">
            <a href="#">VIDEOS</a>
          </li>
          <li className="px-3">
            <a href="#">FANS</a>
          </li>
          <li className="px-3">
            <a href="#">NEWS</a>
          </li>
          <li className="px-3">
            <a href="#">SHOP</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
