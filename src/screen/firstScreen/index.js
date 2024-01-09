// import SpinnerComponent from '../../component/SpinnerComponent';

import FirstHeader from "../../component/FirstHeader";
import FirstBanner from "../../component/FirstBanner";
import PoolCoin from "../../component/PoolcoinComponent";
import ConnectFoxPool from "../../component/ConnectFoxpoolComponent";
import SendMessage from "../../component/SendMessageComponent";
import Footer from "../../component/FooterComponent";
function FirstScreen() {
  return (
    <div>
      {/* <SpinnerComponent /> */}
      <FirstHeader />
      <FirstBanner />
      <PoolCoin />
      <ConnectFoxPool />
      <SendMessage />
      <Footer />
    </div>
  );
}

export default FirstScreen;
