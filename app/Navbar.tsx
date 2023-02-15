import Link from "next/link";

const menuItems = [
  {
    name: "Item 1",
    link: "/item1",
  },
  {
    name: "Item 2",
    link: "/item2",
  },
  {
    name: "Item 3",
    link: "/item3",
  },
];

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          d3 Examples
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((i) => {
            return (
              <li key={i.link}>
                <Link href={i.link}>{i.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
