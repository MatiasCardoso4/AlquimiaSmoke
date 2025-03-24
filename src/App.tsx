import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {HomePage,PizzasPage,ProductDescriptionPage,HamburgersPage} from './pages/index'

function App() {
  return (
    <main className="m-auto flex flex-col items-center  gap-8 p-2 relative">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizzas" element={<PizzasPage />} />
          <Route path="/hamburguesas" element={<HamburgersPage />} />
          <Route path="/producto/:name" element={<ProductDescriptionPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
