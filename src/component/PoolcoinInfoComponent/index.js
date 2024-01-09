import utils from '../../shared/utils';
import constant from '../../shared/constant';

function PoolcoinInfoComponent({props}){
    var e_unit = ""
    if(props.coin.algorithm === 'Equihash'){
        e_unit = "Sol/s"
    }
    else{
        e_unit = "H/s"
    }
    return(
        <div className="row m-0">
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0">{ utils.formatter(props.poolStats['poolHashrate'], 2) }{e_unit} </h3>
                    <p className="text-14 mb-0">{ constant.PoolCoinInfoLabel[0] }</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0">{ props.poolStats['connectedMiners'] } </h3>
                    <p className="text-14 mb-0">{ constant.PoolCoinInfoLabel[1] }</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0"> { props.networkStats['blockHeight'] } </h3>
                    <p className="text-14 mb-0">{ constant.PoolCoinInfoLabel[2] }</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0"> { utils.formatter(props.networkStats['networkHashrate'], 2) }{e_unit}</h3>
                    <p className="text-14 mb-0"> { constant.PoolCoinInfoLabel[3] }</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0"> { utils.formatter(props.networkStats['networkDifficulty'] ,2) }</h3>
                    <p className="text-14 mb-0">{ constant.PoolCoinInfoLabel[4] }</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center p-0">
                <div className="box-border">
                <div className="ptb-25">
                    <h3 className="heading-txt mb-0"> { utils.formatter(props.totalPaid, 2 ) }</h3>
                    <p className="text-14 mb-0">{ constant.PoolCoinInfoLabel[5] }</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PoolcoinInfoComponent;
