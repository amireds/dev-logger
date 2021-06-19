import { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import "./App.css";
import Searchbar from "./components/layouts/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Initialize materialize
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddTechModal />
          <TechListModal />
          <AddLogModal />
          <EditLogModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
