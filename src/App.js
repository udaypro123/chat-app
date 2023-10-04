import "./App.css";
import Chatinputsection from "./components/body/chatinputsendsection/Chatinputsection";
import Chatsection from "./components/body/chatsection/Chatsection";
import UserList from "./components/body/usersectionlist/UserList";
import Navbar from "./components/navbar/Navbar";
import Navbarchat from "./components/navbar/Navbarchat";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mainrow">
          <div className="col-4 col-md-4  rightcontainer">
            <Navbar />
            <UserList />
          </div>
          <div className="col-8 col-md-8 leftcontainer">
            <Navbarchat />
            <Chatsection/>
            <Chatinputsection/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
