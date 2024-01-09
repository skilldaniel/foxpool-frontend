// import utils from '../../shared/utils';
import constant from '../../shared/constant';

function PoolInfoComponent({props}){
    var reward ='';
    if (props.coin.type === 'ETH')
    {
        reward = '2 ETH + Tx Fee'
    } else if (props.coin.type === 'ZEC'){
        reward = '2.5 ZEC + Tx Fee'
    }
    else if (props.coin.type === 'ZEN'){
        reward = '3.75 ZEN + Tx Fee'
    }
    return(
        <div>
            <div className="row mlr">
                <div className="col-6"> { constant.PoolInfoLabel[0] } </div>
                <div className="col-6 text-right"> <span className="text-bold">{ props.paymentProcessing['minimumPayment'] } {props.coin.type}</span> </div>
            </div>
            <hr />
            <div className="row mlr">
                <div className="col-6"> { constant.PoolInfoLabel[1] } </div>
                {props.coin.type === 'ETH'?
                    <div className="col-6 text-right"> <span className="text-bold">{reward}<span className="text-success"> + MEV</span></span> </div>:
                    <div className="col-6 text-right"> <span className="text-bold">{reward}</span> </div>
                }

            </div>
            <hr />
            <div className="row mlr">
                <div className="col-6"> { constant.PoolInfoLabel[2] } </div>
                <div className="col-6 text-right"> <span className="text-bold">{ props.poolFeePercent }%</span> </div>
            </div>
            <hr />
        </div>
    );
}

export default PoolInfoComponent;
