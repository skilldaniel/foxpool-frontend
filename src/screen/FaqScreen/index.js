import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import Footer from "../../component/FooterComponent";
import FaqTitleComponent from '../../component/FaqTitleComponent';
import FaqContentComponent from '../../component/FaqContentComponent';

import image from '../../assets/images/faq-icon.png';
import constant from "../../shared/constant";

function FaqScreen() {
  return (
    <div>
        <FirstHeader />
        <BannerComponent image={ image } label="FAQ" />
        <section className="innerpage-content">
          <div className="container contact-page">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className="accordion-section clearfix mt-3" aria-label="Question Accordions">
                    {/* <h2 className="text-center" style={{marginBottom: `30px`}} >Rewards and Payouts</h2> */}
                    <FaqTitleComponent props={ constant.FAQ_SUBTITLE_DATA['0'] } />
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['0'] } content={ constant.FAQ_Body_Content['0'] } flag="0" targetID="#collapse0" targetID1="collapse0" />
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['1'] } content={ constant.FAQ_Body_Content['1'] } flag="0" targetID="#collapse1" targetID1="collapse1"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['2'] } content={ constant.FAQ_Body_Content['2'] } flag="0" targetID="#collapse2" targetID1="collapse2"/>

                    <FaqTitleComponent props={ constant.FAQ_SUBTITLE_DATA['1'] } />
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['3'] } content={ constant.FAQ_Body_Content['3'] } flag="1" targetID="#collapse3" targetID1="collapse3"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['4'] } content={ constant.FAQ_Body_Content['4'] } flag="1" />

                    <FaqTitleComponent props={ constant.FAQ_SUBTITLE_DATA['2'] } />
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['5'] } content={ constant.FAQ_Body_Content['3'] } flag="0" targetID="#collapse4" targetID1="collapse4"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['6'] } content={ constant.FAQ_Body_Content['4'] } flag="0" targetID="#collapse5" targetID1="collapse5"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['7'] } content={ constant.FAQ_Body_Content['5'] } flag="0" targetID="#collapse6" targetID1="collapse6"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['8'] } content={ constant.FAQ_Body_Content['6'] } flag="0" targetID="#collapse7" targetID1="collapse7"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['9'] } content={ constant.FAQ_Body_Content['6'] } flag='2' targetID="#collapse8" targetID1="collapse8"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['10'] } content={ constant.FAQ_Body_Content['7'] } flag="0" targetID="#collapse9" targetID1="collapse9"/>

                    <FaqTitleComponent props={ constant.FAQ_SUBTITLE_DATA['3'] } />
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['11'] } content={ constant.FAQ_Body_Content['8'] } flag="0" targetID="#collapse10" targetID1="collapse10"/>
                    <FaqContentComponent title={ constant.FAQ_Title_DATA['12'] } content={ constant.FAQ_Body_Content['9'] } flag="0" targetID="#collapse11" targetID1="collapse11"/>

                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  );
}

export default FaqScreen;
