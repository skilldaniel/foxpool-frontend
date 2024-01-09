import {  BrowserRouter as Router,  Routes, Route} from "react-router-dom";

import FirstScreen from './screen/firstScreen';
import PoolScreen from './screen/PoolScreen';
import BlogScreen from "./screen/BlogScreen";
import FaqScreen from './screen/FaqScreen';
import ContactUsScreen from './screen/ContactUsScreen';
import ArticleScreen from './screen/ArticleScreen';
import PoolCoinInfoScreen from "./screen/PoolCoinInfoScreen";
import PoolDashboardScreen from "./screen/PoolDashboardScreen";
import ApiDoceumentScreen from "./screen/ApiDoceumentScreen";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<FirstScreen/>}  />
          <Route path="/Pool" element={<PoolScreen/>} />
          <Route path="/Blog" element={<BlogScreen/>} />
          <Route path="/FAQ" element={<FaqScreen/>} />
          <Route path="/contactUs" element={<ContactUsScreen/>} />
          <Route path="/articles" element={<ArticleScreen/>} />
          <Route path="/:pool" element={<PoolCoinInfoScreen /> } />
          <Route path="/:pool/:address" element={<PoolDashboardScreen/>} />
          <Route path="/apidocument" element={<ApiDoceumentScreen/>} />

        </Routes>
    </Router>
  );
}

export default App;
