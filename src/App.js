import NavbarEl from "./components/Navbar/Navbar.component";
import AddWorkSpaces from "./components/AddWorkSpaces/AddWorkSpaces.component";
import WorkSpace from "./components/WorkSpace/WorkSpace.component";
import DisapleWorkShops from "./components/DisapleWorkShops/DisapleWorkShops.component";
import ModalComponent from "./components/Modal/Modal.component";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ModalComponent></ModalComponent>
      <NavbarEl></NavbarEl>
      <AddWorkSpaces></AddWorkSpaces>
      <WorkSpace></WorkSpace>
      <DisapleWorkShops></DisapleWorkShops>
    </div>
  );
}

export default App;
