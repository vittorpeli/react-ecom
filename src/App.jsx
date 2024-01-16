import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

function App() {

  return (
    <Routes>
      <Route path="*" Component={Home} />
      <Route path="/photo/:id" Component={Product} />
    </Routes>
  )
}

export default App
