import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbars from "./component/Navbar";
import Homepages from "./pages/Homepages";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import LoginForm from "./component/LoginForm";
import DetailAccount from "./pages/detail-account";
import AddPlan from "./pages/add-Plan";
import AdminPanel from "./pages/admin-panel";
import Listfilms from "./pages/Listfilms";
import AddFilm from "./pages/add-film";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" component={<LoginForm />} />
        <Route path="/play/:id" element={<Details />} />
        <Route path="/account/:id" element={<DetailAccount />} />
        <Route path="/payment" element={<AddPlan />} />
        <Route path="/list-transaction" element={<AdminPanel />} />
        <Route path="/list-film" element={<Listfilms />} />
        <Route path="/add-film" element={<AddFilm />} />
      </Routes>
    </>
  );
}

export default App;
