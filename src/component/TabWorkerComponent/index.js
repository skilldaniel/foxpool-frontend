import utils from '../../shared/utils.js';

function TabWorkerComponent({props}){
    if (props == null){
        return (<div>The address does not registered</div>)
    }
    // console.log("--",props)
    const workers = props.workers
    var hashrates =[]
    var sharerates =[]
    for (var key in workers){
        hashrates.push(workers[key].hashrate);
        sharerates.push(workers[key].sharesPerSecond);
    }
    return(
        <tbody>
            {
                workers !== undefined && Object.keys(workers).map(function(char, idx) {
                    return <tr key={idx}>
                                <td className="text-center">{idx+1} </td>
                                <td className="text-center">{char} </td>
                                <td className="text-center">{ utils.formatter(hashrates[idx]) }H/s</td>
                                <td className="text-center">{ utils.formatter(sharerates[idx], 2 ) }</td>
                            </tr>;
                }.bind(this))
            }
       </tbody>
    )
}

export default TabWorkerComponent;
