import { Outlet } from "react-router-dom"
import DrawerFS from './drawer'

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
