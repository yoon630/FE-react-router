import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Product from "./pages/Product";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/product/:brandName" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
