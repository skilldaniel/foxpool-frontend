import utils from '../../../shared/utils';


function PoolInfoComponent( { props } ) {
    // console.log(props)
    if (props === null){
        return (<div></div>)
    }
    var reward ='';
    if (props.json4.pool.coin.type === 'ETH')
    {
        reward = '2 ETH + Tx Fee'
    } else if (props.json4.pool.coin.type === 'ZEC'){
        reward = '2.5 ZEC + Tx Fee'
    }
    else if (props.json4.pool.coin.type === 'ZEN'){
        reward = '3.75 ZEN + Tx Fee'
    }
    return (
        <div className="gray-bg-1">
            <div className="row mlr-1">
                <div className="col-6"> Unpaid Balance </div>
                <div className="col-6 text-right"> <span className="text-bold-1">{utils.formatter(props.json3.pendingBalance,5)} {props.json4.pool.coin.type}</span> </div>
            </div>
            <hr className="hrm" />
            <div className="row mlr-1">
                <div className="col-6"> Accepted Shares </div>
                <div className="col-6 text-right"> <span className="text-bold-1">{utils.formatter(props.json3.pendingShares,5)}</span> </div>
            </div>
            <hr className="hrm" />
            <div className="row mlr-1">
                <div className="col-6"> Minimum Payout </div>
                <div className="col-6 text-right"> <span className="text-bold-1">{props.json4.pool.paymentProcessing.minimumPayment} {props.json4.pool.coin.type}</span> </div>
            </div>
            <hr className="hrm" />
            <div className="row mlr-1">
                <div className="col-6"> Block Reward </div>
                {props.json4.pool.coin.type === 'ETH'?
                    <div className="col-6 text-right"> <span className="text-bold-1">{reward}<span className="text-success"> + MEV</span></span> </div>:
                    <div className="col-6 text-right"> <span className="text-bold-1">{reward}</span> </div>
                }
            </div>
            <hr className="hrm" />
            <div className="row mlr-1">
                <div className="col-6"> Pool Fee </div>
                <div className="col-6 text-right"> <span className="text-bold-1">{props.json4.pool.poolFeePercent}%</span> </div>
            </div>
    </div>
    );
  }
  
  export default PoolInfoComponent;
  


  