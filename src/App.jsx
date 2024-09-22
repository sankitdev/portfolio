import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="px-10 md:px-20 select-none">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
