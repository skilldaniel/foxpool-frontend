import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import apidoc from '../../shared/apidoc';
import utils from '../../shared/utils';

const TabMinerComponent = ({props}) => {

// get symbol
    var coinsymbol = useLocation();
    coinsymbol = coinsymbol.pathname.replace('/', '')
    coinsymbol = coinsymbol.replace('/', '')
    // console.log(coinsymbol)

    function getMiner( coinsymbol, walletAddress ) {
        return fetch(apidoc.apiUrl + coinsymbol + '/miners/' + walletAddress )
        .then(
            data => data.json()
        )
    }

    const AllMinerAddress = (props) => {
        // get all miner address
        const minerList = [];
        for( var key in props ) {
            minerList.push(props[key].miner)
        }
        return minerList;
    }

    const allminer = AllMinerAddress(props)    

    const [miners, setWorkingList ] = useState({});
    function GetMinerPerformance(coinsymbol, props) {
        useEffect(() => {
            const promises = props.map((element,i)=>{
                return getMiner(coinsymbol, element );
                // return {items, miner: element}
                // .then(items => {
                //     if (items.performance !== undefined ) {
                //         var sumHashrate = 0
                //         var sumSharerate = 0

                //         for (var key1 in items.performance.workers){            
                //             sumHashrate += items.performance.workers[key1].hashrate;
                //             sumSharerate += items.performance.workers[key1].sharesPerSecond;
                //         }
                //         if(sumHashrate !== 0){
                //             var temp = {"sharerate":sumSharerate ,"hashrate":sumHashrate,"miner":element}
                //             // setWorkingList( miners )
                //             tempMiner.push(temp)
                //             // console.log(tempMiner);                            // setWorkingList(temp)
                //             // minerList.push(element)
                //             // hsahrateList.push(sumHashrate)
                //             // shareList.push(element)
                //         }
                //     }
                // })
                // console.log(tempMiner);
            })
            Promise.all(promises).then(results => {
                let tempMiner = [];
                // console.log(results);
                const item = results.map((res, i) => {
                    let items = res;
                    // let miner = res.miner;
                    let miner = '';
                    if (items.performance !== undefined && items.performance !== null) {
                        var sumHashrate = 0
                        var sumSharerate = 0
                        miner = props[i];

                        for (var key1 in items.performance.workers){ 
                            sumHashrate += items.performance.workers[key1].hashrate;
                            sumSharerate += items.performance.workers[key1].sharesPerSecond;
                        }
                    }
                    if(sumHashrate !== 0 && miner != ''){
                        var temp = {"sharerate":sumSharerate ,"hashrate":sumHashrate}
                        // setWorkingList( miners )
                        tempMiner.push(Object.assign({}, temp, {miner}))
                    }
                });
                // console.log(results)
                // console.log(tempMiner);
                setWorkingList(tempMiner);
                
            });


        }, [])

        // console.log(miners);
    }

    return(
        <tbody>
            {
                GetMinerPerformance(coinsymbol, allminer)
            }
            {
                // console.log(miners)
            }
            {
                Object.keys(miners).map((idx) => {
                    return <tr key={idx}>
                        <td className="text-left"><Link to={'/'+ coinsymbol + '/' + miners[idx].miner } className='bluelink'> { miners[idx].miner } </Link></td>
                        <td className="text-center">{ utils.formatter(miners[idx].hashrate, 2)}{ utils.setUnit(coinsymbol) }</td>
                        <td className="text-center">{ utils.formatter(miners[idx].sharerate, 2) }S/s</td>
                    </tr>
                })
            }
        </tbody>
    )
}

export default TabMinerComponent;
