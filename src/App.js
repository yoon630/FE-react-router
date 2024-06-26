import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/product/:brandName" element={<Product />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
