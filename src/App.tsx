import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {HomePage,PizzasPage,HamburgersPage} from './pages/index'

function App() {
  return (
    <main className="m-auto flex flex-col items-center  gap-8 p-2 relative">
      <Router>
        <Routes>
          <Route path="/AlquimiaSmoke" element={<HomePage />} />
          <Route path="/AlquimiaSmoke/Pizzas" element={<PizzasPage />} />
          <Route path="/AlquimiaSmoke/Hamburguesas" element={<HamburgersPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
