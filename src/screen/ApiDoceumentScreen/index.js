import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import ApiLeftComponent from "./ApiLeftComponent";
import ApiContentComponent from "./ApiContentComponent";
import Footer from "../../component/FooterComponent";

import api_icon from '../../assets/images/api-icon.png';

function ApiDocumentScreen() {
  return (
    <div>
      <FirstHeader />
      <BannerComponent image={ api_icon } label="Api Documentaion" />
      <div>
        <ApiLeftComponent />
        <ApiContentComponent />
      </div>
      <Footer />
    </div>
  );
}

export default ApiDocumentScreen;
