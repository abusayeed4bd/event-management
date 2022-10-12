import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import Past from './components/Past';
import UpcomingEvents from './components/UpcomingEvents';



function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="past" element={<Past></Past>}></Route>
          <Route path="upcoming" element={<UpcomingEvents></UpcomingEvents>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
