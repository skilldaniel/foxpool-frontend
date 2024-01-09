import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import BlogBody from '../../component/BlogBodyComponent';
import Footer from "../../component/FooterComponent";

import mining_icon from '../../assets/images/mining-icon.png';

function BlogScreen() {
  return (
    <div>
      <FirstHeader />
      <BannerComponent image={ mining_icon } label="Foxpool Blog" />
      <BlogBody />
      <Footer />
    </div>
  );
}

export default BlogScreen;
