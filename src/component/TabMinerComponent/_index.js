import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import apidoc from '../../shared/apidoc';

const TabMinerComponent = ({props}) => {

// get symbol
    var coinsymbol = useLocation();
    coinsymbol = coinsymbol.pathname.replace('/', '')
    coinsymbol = coinsymbol.pathname.replace('/', '')

    async function getMiner( coinsymbol, walletAddress ) {
        // console.log('api', apidoc.apiUrl + coinsymbol + '/miners/' + walletAddress);
        // console.log(walletAddress);
        // walletAddress.foreach(element=> {
            const response = await fetch(apidoc.apiUrl + coinsymbol + '/miners/' + walletAddress )
            const data = await response.json();
            return data;
        // })
    }

    const AllMinerAddress = (props) => {
        // get all miner address
        const minerList = [];
        for( var key in props ) {
            minerList.push(props[key].miner)
        }
        // console.log('miner', minerList);
        return minerList;
    }

    const allminer = AllMinerAddress(props)    
    // console.log('miner', allminer);

    const [miners, setWorkingList ] = useState({});
    const [minerList, setMinerList ] = useState({});
    const [hsahrateList, setHashrateList ] = useState({});
    const [shareList, setSharerateList ] = useState({});
    // const miners = [];
    // const minerList = [];
    // const hsahrateList = [];
    // const shareList = [];
    // GetMinerPerformance(coinsymbol, allminer)
    function GetMinerPerformance(coinsymbol, props) {
        const tempMiner = [];
        props.forEach(async(element)=>{
            const items = await getMiner(coinsymbol, element )
            if (items.performance !== undefined ) {
                var sumHashrate = 0
                var sumSharerate = 0

                for (var key1 in items.performance.workers){            
                    sumHashrate += items.performance.workers[key1].hashrate;
                    sumSharerate += items.performance.workers[key1].sharesPerSecond;
                }
                if(sumHashrate !== 0){
                    var temp = {"sharerate":sumSharerate ,"hashrate":sumHashrate,"miner":element}
                    // setWorkingList( miners )
                    tempMiner.push(temp)
                    // console.log(tempMiner);
                    // setWorkingList(temp)
                    // minerList.push(element)
                    // hsahrateList.push(sumHashrate)
                    // shareList.push(element)
                }
            }
        })
            // myminers = miners.children[0];
            // console.log(minerList, hsahrateList, shareList)
            // console.log(activ_miner);
            // minerList.map((miner, idx) => (
            //     <tr key={idx}>
            //         <td>{ console.log(miner) }</td>
            //     </tr>
            // ))

        return tempMiner
    }

    return(
        <tbody>
            {
                console.log(GetMinerPerformance(coinsymbol, allminer))
            }
        </tbody>
    )
}

export default TabMinerComponent;
