import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div></div>
      <nav>
        <ul>
          <li>
            <Link href="/">Chats</Link>
          </li>
          <li>
            <Link href="/status">Status</Link>
          </li>
          <li>
            <Link href="/calls">Calls</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
