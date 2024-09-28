import Header from "./components/Header";
import Products from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, React } from "react";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
      setCartVisible(!cartVisible);
    };
  return (
      <>
        <Header cartVisible={cartVisible} setCartVisible={toggleCartVisibility}/>
        <Products />
        <Cart cartVisible={cartVisible}/>
      </>
  );
}

export default App;
