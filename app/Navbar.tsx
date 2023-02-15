const menuItems = ["Item 1", "Item 2", "Item 3"];

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">d3 Examples</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((i) => {
            return (
              <li key={i}>
                <a>{i}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
