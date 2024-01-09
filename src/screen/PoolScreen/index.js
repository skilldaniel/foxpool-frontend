import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import PoolCoinBody from '../../component/PoolCoinBodyComponent';
import Footer from "../../component/FooterComponent";

import mining_icon from '../../assets/images/mining-icon.png';

function PoolScreen() {
  return (
    <div>
      <FirstHeader />
      <BannerComponent image={ mining_icon } label="Pools" />
      <PoolCoinBody />
      <Footer />
    </div>
  );
}

export default PoolScreen;
