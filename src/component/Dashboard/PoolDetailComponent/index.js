import utils from '../../../shared/utils';

function PoolInfoComponent( { props } ) {
    // console.log(props)
    if (props === null){
        return (<div></div>)
    }
    var e_uint ='';
    if (props.json4.pool.coin.algorithm === 'Equihash')
    {
        e_uint = 'Sol/s'
    } else {
        e_uint = 'H/s'

    }
    return (
        <div className="row m-0">
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{utils.formatter(props.json4.pool.poolStats.poolHashrate,2)}{e_uint}</h3>
                    <p className="text-14 mb-0">Pool Hashrate</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{props.json4.pool.poolStats.connectedMiners}</h3>
                    <p className="text-14 mb-0">Miners Online</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{props.json4.pool.networkStats.blockHeight}</h3>
                    <p className="text-14 mb-0">Block Height</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{utils.formatter(props.json4.pool.networkStats.networkHashrate,2)}{e_uint}</h3>
                    <p className="text-14 mb-0">Network Hashrate</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{utils.formatter(props.json4.pool.networkStats.networkDifficulty,2)}</h3>
                    <p className="text-14 mb-0">Network Difficulty</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center p-0">
                <div className="box-border">
                <div className="ptb-18">
                    <h3 className="heading-txt mb-0">{utils.formatter(props.json4.pool.totalPaid,2)}</h3>
                    <p className="text-14 mb-0">Total Paid</p>
                </div>
                </div>
            </div>
    </div>
    );
  }
  
  export default PoolInfoComponent;