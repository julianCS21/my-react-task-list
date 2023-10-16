import { Link } from "react-router-dom";

export function Main() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
            <Link to="/aboutus">About us</Link>
        </li>
      </ul>
    </nav>
  );
}   
