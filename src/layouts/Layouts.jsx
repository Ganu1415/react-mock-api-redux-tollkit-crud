import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

function Layouts() {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="mt-auto text-gray-500 text-center">
        &copy; {new Date().getFullYear()} GANESH VHANMANE. All rights reserved.
      </div>
      {/* <div className="fixed bottom-10 left-0 right-0 text-gray-500 text-center">
        &copy; {new Date().getFullYear()} GANESH VHANMANE. All rights reserved.
      </div> */}
    </>
  );
}

export default Layouts;
