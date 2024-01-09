import constant from "../../shared/constant";
import AsicComponent from "../AsicComponent";
function FaqContentComponent(props) {
    return (
        <div>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                        <h3 className="panel-title"> <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href={ props.targetID } aria-expanded="true" aria-controls="collapse0"> { props.title }</a> </h3>
                    </div>
                    <div id={ props.targetID1 } className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                        <div className="panel-body px-3 mb-4">
                            {
                                props.flag === '0'?
                                <p>
                                    { props.content }
                                </p> : null
                            }
                            {
                                props.flag === '1'?
                                <AsicComponent flag="1" />: null
                            }
                            {
                                props.flag === '3'?
                                <AsicComponent flag="2" />: null
                            }

                            {
                                props.flag === '2'?
                                <div>
                                    <p>1.) You can use an online tool like https://2cryptocalc.com</p>
                                    <p>2.) You can use this equation: (Your_Hashrate / Network_Hashrate) * Network Blocks last 24 h * Currency Price.</p>
                                    <p>This will output the value you can expect in $ for 24h time frame.</p>
                                </div> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
  export default FaqContentComponent;
  