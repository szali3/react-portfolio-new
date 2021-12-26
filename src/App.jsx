import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/ProductList"
import Contact from "./components/contact/Contact"
import Toggle  from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div style={{
        backgroundColor:darkMode ? "#222" : "white", 
        color:darkMode && "white"
      }}>
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  ) 
};

export default App;

// 1:29