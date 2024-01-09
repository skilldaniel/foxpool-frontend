import { Link } from 'react-router-dom';
import utils from '../../shared/utils';
// import ethicon from '../../assets/images/icon-eth.png';

function CoinComponent( { props } ) {
    var e_unit = ""
    if (props.coin.algorithm === 'Equihash'){
        e_unit = "Sol/s"
    }
    else {
        e_unit = "H/s"
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="mining-list-item">
                <Link to = { '/' + props.coin['symbol'].toLowerCase() } >
                    <div className="item-header">
                        <div className="e-logo">
                            <img src={ utils.poolIconSelect( props.coin['symbol'], 'icon' ) } alt="symbol" />
                        </div>
                        <div className="e-row">
                            <div className="e-title">{ props.coin['name'] } ({ props.coin['symbol'] })</div>
                            <div className="e-unit">{ utils.formatter(props.poolStats['poolHashrate'],2) }{e_unit}</div>
                        </div>
                    </div>
                    <div className="item-content">
                        <div className="item-type">{ props.coin['algorithm'] }</div>
                        <div className="item-right">
                            <div className="item-row">
                                <div className="item-name">Total Miners</div>
                                <div className="item-count">{ props.poolStats['connectedMiners'] }</div>
                            </div>
                            <div className="item-row">
                                <div className="item-name">Fees</div>
                                <div className="item-count">{ props.poolFeePercent }%</div>
                            </div>
                            <div className="item-row">
                                <div className="item-name">Network Hashrate</div>
                                <div className="item-count">{ utils.formatter(props.networkStats['networkHashrate'], 2) }{e_unit}</div>
                            </div>
                            <div className="item-row">
                                <div className="item-name">Network Difficulty</div>
                                <div className="item-count">{ utils.formatter(props.networkStats['networkDifficulty'], 2) }</div>
                            </div>
                            <div className="item-row">
                                <div className="item-name">Status</div>
                                <div className="item-count">Active <i className="fas fa-circle"></i></div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
  }
  
  export default CoinComponent;
  