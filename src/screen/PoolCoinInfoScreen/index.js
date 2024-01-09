import React from 'react';
import { useLocation } from 'react-router-dom';

import utils from '../../shared/utils';
import constant from '../../shared/constant';
import apidoc from '../../shared/apidoc';
import '../../assets/css/stylesheet.css';

// import component
import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";

import PoolInfoComponent from '../../component/PoolInfoComponent';
import PoolcoinInfoComponent from '../../component/PoolcoinInfoComponent';
import ServerInfoComponent from '../../component/ServerInfoComponent';
import TabLabel from '../../component/TabBarLabelComponent';
import TabBlockComponent from '../../component/TabBlockComponent';
import TabMinerComponent from '../../component/TabMinerComponent';
import TabPaymentComponent from '../../component/TabPaymentComponent';
import StatsChartComponent from '../../component/StatsChartComponent';
import QuickStartComponent from '../../component/QuickStartComponent';
// tabbar icon
import blocks_icon from '../../assets/images/blocks-icon.png';
import miners_icon from '../../assets/images/miners-icon.png';
import payment_icon from '../../assets/images/payment-icon.png';
import quick_start_icon from '../../assets/images/quick-start-icon.png';

class PoolCoinInfoScreen extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            blocks: [],
            miners: [],
            payments: [],
            performances: [],
            DataisLoaded: false,
            BlockListLoaded: false,
            MinerListLoaded: false,
            PaymentListLoaded: false,
            PerformanceListLoaded: false,
        };
    }


    
    async componentDidMount() {
        // console.log(this.props.props)
        var coinsymbol = this.props.props
        coinsymbol = coinsymbol.replace('/', '')
        coinsymbol = coinsymbol.replace('/', '')
        // console.log(coinsymbol);
        try {
            setInterval(async () => {
                // console.log(apidoc.apiUrl+ coinsymbol)
                Promise.all([
                    fetch(apidoc.apiUrl+ coinsymbol),
                    fetch(apidoc.apiUrl+ coinsymbol +'/blocks'),
                    fetch(apidoc.apiUrl+ coinsymbol +'/miners'),
                    fetch(apidoc.apiUrl+ coinsymbol +'/payments'),
                    fetch(apidoc.apiUrl+ coinsymbol +'/performance'),
                ])
                .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json() ]) )
                    .then(([json1, json2, json3, json4, json5]) => this.setState({
                    items: json1,
                    DataisLoaded: true,
                    blocks: json2,
                    BlockListLoaded: true,
                    miners: json3,
                    MinerListLoaded: true,
                    payments: json4,
                    PaymentListLoaded: true,
                    performances: json5,
                    PerformanceListLoaded: true,
                }));                        
            }, 3000);            
        } catch(e) {
            console.log(e);
        }
    }
    render() {
        const { DataisLoaded, items } = this.state;
        const { BlockListLoaded, blocks } = this.state;
        const { MinerListLoaded, miners } = this.state;
        const { PaymentListLoaded, payments } = this.state;
        const { PerformanceListLoaded, performances } = this.state;

        
        if (!DataisLoaded && !BlockListLoaded && !MinerListLoaded && !PaymentListLoaded && !PerformanceListLoaded ) {
            return (
                <div>
                </div>
            );
        }

        var port, minDiff
        Object.keys(items.pool.ports).map((element) =>{
            if (!isNaN(element)){
                port = element;
                minDiff = items.pool.ports[element].varDiff.minDiff
            }

        })
    
        return (
            <div>
                <FirstHeader />
                <BannerComponent 
                    image={ utils.poolIconSelect(items.pool.coin['symbol'], 'logo') } 
                    label = { items.pool.coin['name'] }
                />

                <section className="innerpage-content">
                    <div className="container">
                        <div className="graph-text">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Mining Pool</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <h3>{ utils.formatter(items.pool.poolStats.poolHashrate, 2) }{ utils.setUnit(items.pool.id) } </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="graph"> 
                                <StatsChartComponent props={ performances.stats } />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pt-4">
                                <div className="gray-bg text">
                                    <PoolInfoComponent props={ items.pool }  />
                                </div>
                            </div>
                            <div className="col-md-6 pt-4">
                            {
                                <PoolcoinInfoComponent props={ items.pool } />
                            }
                            </div>
                        </div>
                    
                        <div className="row">
                            <ServerInfoComponent flag="true" serverlabel={ constant.ServerLabel[0] } difficultValue={ items.pool } />
                            <ServerInfoComponent flag="false" serverlabel={ constant.ServerLabel[1] } />
                            <ServerInfoComponent flag="false" serverlabel={ constant.ServerLabel[1] } />
                        </div>

                        <div className="row">
                            <div className="col-12 pt-5">
                                <ul id="tabs" className="nav nav-tabs centered-tabs">
                                    <TabLabel href="#t1" imagesource={ blocks_icon } focus="true" title="Blocks" />
                                    <TabLabel href="#t2" imagesource={ miners_icon } title="Miners"  />
                                    <TabLabel href="#t3" imagesource={ payment_icon } title="Payment"  />
                                    <TabLabel href="#t4" imagesource={ quick_start_icon } title="Quick Start"  />
                                </ul>
                                <div className="tab-content">
                                    <div id="t1" className="tab-pane fade in active show">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th className="text-center" scope="col">No.</th>
                                                    <th className="text-center" scope="col">Effort</th>
                                                    <th className="text-center" scope="col">Status</th>
                                                    <th className="text-center" scope="col">Reward</th>
                                                    <th className="text-center" scope="col">Confirmation</th>
                                                    <th className="text-center" scope="col" style={{ width:`190px` }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                blocks.map((block) => (
                                                    <TabBlockComponent key = { block.blockHeight } props={block}   />
                                                ))
                                            }
                                            </tbody>
                                            </table>
                                        </div>			
                                    </div>
                                    <div id="t2" className="tab-pane fade ">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th scope="col">Address</th>
                                                        <th className="text-center" scope="col">Hashrate</th>
                                                        <th className="text-center" scope="col">Share Rate</th>
                                                    </tr>
                                                </thead>
                                                <TabMinerComponent props = { miners } />
                                            </table>
                                        </div>
                                    </div>
                                    <div id="t3" className="tab-pane fade ">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th className="text-center" scope="col">Sent</th>
                                                        <th className="text-center" scope="col">Address</th>
                                                        <th className="text-center" scope="col">Amount</th>
                                                        <th className="text-center" scope="col">Confirmation</th>
                                                    </tr>
                                                </thead>                                      
                                                <tbody>
                                                    {
                                                        payments.map((payment) => (
                                                            <TabPaymentComponent key = { payment.transactionConfirmationData } props={ payment } />
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="t4" className="tab-pane fade ">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                            <div className="card">
                                                <div className="card-header bg-black-gradient">
                                                    <h3 className="card-title mb-0">
                                                        <p className="mb-0">
                                                            <i className="fas fa-plug"></i> Pool Configuration
                                                        </p>
                                                    </h3>
                                                    <p className="card-category mb-0">All you need to connect your miners</p>
                                                </div>
                                                <div className="card-body table-hover">
                                                <div className="table-responsive">
                                                    <table id="pool-config" className="table pool-config">
                                                        <thead className=" text-primary">
                                                            <tr className="pool-config">
                                                                <th style={{borderTop: `none`}} >Item</th>
                                                                <th style={{borderTop: `none`}} >Value</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="connectPoolConfig">
                                                            <tr>
                                                                <td>Crypto Coin name</td><td>{items.pool.coin['name']}({items.pool.coin['type']})</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Coin Algorithm</td><td>{items.pool.coin['algorithm']}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pool Wallet</td><td><a href={items.pool.addressInfoLink} target="_blank" rel="noreferrer" >{utils.setConfirmationAddress(items.pool.address)}</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payout Scheme</td><td>{ items.pool.paymentProcessing['payoutScheme'] }</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Minimum Payment</td><td>{ items.pool.paymentProcessing.minimumPayment } {items.pool.coin.type}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Pool Fee</td><td>{items.pool.poolFeePercent}%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>stratum+tcp://{ apidoc.stratum }:{ port }</td><td>Difficulty Variable /{minDiff} ↔ ∞ </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div id="miner-config">
                                                    <QuickStartComponent props={ items }/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
                            </div>
                        </div>
                    </div>
                    </section>                
            </div>           
        );
    }
}

const MyLocation = () => {
    var location = useLocation();
    return  <PoolCoinInfoScreen props={ location.pathname }/>;
    // console.log(location);
}
 
export default MyLocation;
  