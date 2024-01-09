import React from 'react';
import { useLocation } from 'react-router-dom';

import FirstHeader from "../../component/FirstHeader";
import BannerComponent from "../../component/BannerComponent";
import PoolInfoComponent from '../../component/Dashboard/PoolInfoComponent';
import PoolDetailComponent from '../../component/Dashboard/PoolDetailComponent';
import TabBarLabelComponent from '../../component/TabBarLabelComponent';
import TabBarWorkerComponent from '../../component/TabWorkerComponent';
import TabRewardComponent from '../../component/TabRewardComponent';
import TabPayoutComponent from '../../component/TabPayoutComponent';
import StatsDashComponent from '../../component/StatsDashComponent';

// tabbar icon
import worker_icon from '../../assets/images/workers-icon.png';
import rewards_icon from '../../assets/images/rewards-icon.png';
import payouts_icon from '../../assets/images/payouts-icon.png';

import dashboard_icon from '../../assets/images/dashboard-icon.png';
import Footer from '../../component/FooterComponent';

import apidoc from '../../shared/apidoc';
import utils from '../../shared/utils';

import '../../assets/css/custom.css';

class PoolDashboardScreen extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            miners:             [],
            blocks:             [],
            workerlist:         [],
            items:              [],
            performanceList:    [],
            MinerListLoaded:    false,
            BlockListLoaded:    false,
            WorkerListLoaded:   false,
            ItemListLoaded:     false,
            PerformanceListLoaded: false,
        };
    }

    async componentDidMount() {

        const path = this.props.location.pathname;
        const coinsymbol = path.split('/')[1];
        // console.log('dash', coinsymbol);
        const minerAddress = path.split('/')[2] ;
        try{
            setInterval(async () => {
                // console.log(apidoc.apiUrl+ coinsymbol + '/miners/' + minerAddress + '/payments');
                Promise.all([
                    fetch(apidoc.apiUrl+ coinsymbol + '/miners/' + minerAddress + '/payments'),
                    fetch(apidoc.apiUrl+ coinsymbol +'/blocks'),
                    fetch(apidoc.apiUrl+ coinsymbol + '/miners/' + minerAddress),
                    fetch(apidoc.apiUrl+ coinsymbol ),
                    fetch(apidoc.apiUrl+ coinsymbol + '/miners/' + minerAddress + '/performance' )
                ])
                .then(([res1, res2, res3, res4, res5 ]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json() ]) )
                .then(([json1, json2, json3, json4, json5]) => this.setState({
                    miners: json1,
                    MinerListLoaded: true,
                    blocks: json2,
                    BlockListLoaded: true,
                    workerlist: json3.performance,
                    WorkerListLoaded: true,
                    items: {json3, json4},
                    ItemListLoaded: true,
                    performanceList: json5,
                    PerformanceListLoaded: true,
                }));        
            }, 3000 );
        } catch(e) {
            console.log(3);
        } 
    }

    render() {
        const { MinerListLoaded, miners } = this.state;
        const { BlockListLoaded, blocks } = this.state;
        const { WorkerListLoaded, workerlist } = this.state;
        const { ItemListLoaded, items } = this.state;
        const { PerformanceListLoaded, performanceList } = this.state;
        
        if(!ItemListLoaded && !MinerListLoaded && !BlockListLoaded && !WorkerListLoaded && !PerformanceListLoaded)
            return(
                <div>
                </div>
            )

            var tempHashSum = 0

        if (items.json3.performance !== undefined){
            Object.keys(items.json3.performance.workers).map( function (element) {

                tempHashSum += items.json3.performance.workers[element].hashrate;  
            })
        }
             


        
        return (
            <div>
                <FirstHeader />
                <BannerComponent image={ dashboard_icon } label="Dashboard" />
                <section className="innerpage-content">
                    <div className="container">
                        
                        <div className="row">
                            <div className="col-md-4">
                                <PoolInfoComponent props={items} />                            
                            </div>
                            <div className="col-md-4">                           
                                <PoolDetailComponent props={ items }/>
                            </div>
                            
                            

                            <div className="col-md-4">
                                <div className="graph-text-1">
                                    <div className="row">
                                        <div className="col-6" >
                                            <h4>Mining Pool</h4>
                                        </div>
                                        <div className="col-6" style={{textAlign:`right`}}>
                                            <h4>{ utils.formatter(tempHashSum, 2) }{ utils.setUnit(items.json4.pool.id) } </h4>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="col-12">
                                        <div className="graph">
                                            <StatsDashComponent props={ performanceList } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 pt-5">
                            
                            <ul id="tabs" className="nav nav-tabs centered-tabs">
                                <TabBarLabelComponent href="#t1" imagesource={ worker_icon } title="Workers" focus="1" />
                                <TabBarLabelComponent href="#t2" imagesource={ rewards_icon } title="Rewards" />
                                <TabBarLabelComponent href="#t3" imagesource={ payouts_icon } title="Payouts" />
                            </ul>
                            <div className="tab-content">
                                <div id="t1" className="tab-pane fade in active show">
                                    <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th className="text-center" scope="col">Index</th>
                                        <th className="text-center" scope="col">Name</th>
                                        <th className="text-center" scope="col">Hashrate</th>
                                        <th className="text-center" scope="col">Share Rate</th>
                                        </tr>
                                    </thead>
                                        {
                                            <TabBarWorkerComponent props={ workerlist } />
                                        }
                                    </table>
                                    </div>			
                                </div>
                                <div id="t2" className="tab-pane fade ">
                                    <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th className="text-center" scope="col">Found</th>
                                        <th className="text-center" scope="col">Height</th>
                                        <th className="text-center" scope="col">Effort</th>
                                        <th className="text-center" scope="col">Status</th>
                                        <th className="text-center" scope="col">Reward</th>
                                        <th className="text-center" scope="col">Confirmation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            blocks.map((block) => (
                                                <TabRewardComponent key={ block.blockHeight } props={ block } />
                                            ))
                                        }
                                    </tbody>
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
                                            miners.map(( miner ) => (
                                                <TabPayoutComponent key = { miner.created } props={ miner }   />
                                            ))    
                                        }
                                    </tbody>
                                    </table>
                                    </div>
                                </div>		
                            </div>                            
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
                            </div>
                        </div>
                        
                    </div>
                    </section>
                <Footer />
            </div>
        );
    }
}
const MyLocation = () => {
    var location = useLocation();
    return  <PoolDashboardScreen location={ location }/>;
}

export default MyLocation;
