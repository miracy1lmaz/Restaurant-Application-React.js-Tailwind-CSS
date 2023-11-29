import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPickss from "./components/TopPicks";


function App() {
  return (
    <div className="App">
     
            <TopNav/>
            <Featured/>
            <Delivery/>
            <TopPickss/>
            <Meal/>
            <Categories/>
            <NewsLetter/>
            <Footer/>
    </div>
  );
}

export default App;
