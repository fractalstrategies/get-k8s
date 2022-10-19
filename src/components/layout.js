import { Outlet, Link } from "react-router-dom"
import DrawerFS from './drawer'

const oldNav = (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/todo">To Do</Link></li>
    </ul>
  </nav>
)

const Layout = () => {
  return (
    <div style={{
      marginLeft: 0,
    }}>
      <DrawerFS />
      <Outlet />
    </div>
  )
};

export default Layout;
