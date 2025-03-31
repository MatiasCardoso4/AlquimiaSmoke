import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { HamburgersPage, HomePage, PizzasPage } from "./pages/index";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AlquimiaSmoke/" element={<HomePage />} />
        <Route path="/AlquimiaSmoke/Pizzas" element={<PizzasPage />} />
        <Route
          path="/AlquimiaSmoke/Hamburguesas"
          element={<HamburgersPage />}
        />
      </Routes>
    </Router>
  );
};
