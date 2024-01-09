import utils from '../../shared/utils';
// import constant from '../../shared/constant';

import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import '../../assets/css/chartist.css';
import '../../assets/css/custom.css';

function StatsDashComponent( { props } ){  
// store props data

    const createdList = [];
    const hashrateList = [];

    Object.keys(props).map( function (element) {
        var tempData = new Date(props[element].created).getHours() + ":00"
        createdList.push( tempData )
 
        var tempWorker = props[element].workers
        var tempHashSum = 0
 
        Object.keys(tempWorker).map( function(worker){
            tempHashSum += tempWorker[worker].hashrate;
        })
 
        hashrateList.push( tempHashSum );
    })
    
    var data = {
        labels: createdList,
        series: [ hashrateList ]
    };

    var options1 = {
        height:"180px",
        showArea: true,
        seriesBarDistance: 1,
        axisY:{
            showGrid:true,
            offset: 47,
            scale: "logcc",
            labelInterpolationFnc: function(value, index) {
                return index % 1 === 0 ? utils.formatter(value, 1) : null;
            },
        },
        axisX: {
            showGrid:false,

          labelInterpolationFnc: function(value, index) {
            return index % 4 === 0 ? value : null;
          }
        },
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        })
    };

    var type = 'Line';
    
    return(
        <div className="graph">
            <ChartistGraph
                data={ data } options={ options1 } type={ type } 
            />                 
        </div>
    )
}

export default StatsDashComponent;
