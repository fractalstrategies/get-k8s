import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/todo">To Do</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;
