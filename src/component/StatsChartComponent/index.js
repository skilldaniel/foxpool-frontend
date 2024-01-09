import utils from '../../shared/utils';
// import constant from '../../shared/constant';

import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import '../../assets/css/chartist.css';
import '../../assets/css/custom.css';

function StatsChartComponent( { props } ){

    var poolHashrateList = []
    var networkHashrateList = []
    var networkDifficultyList = []
 
// store props data

    const createdList = [];
    Object.keys(props).map( function (elment, i) {
        poolHashrateList.push(props[elment].poolHashrate)
        var temp = new Date(props[elment].created)
        createdList.push(temp.getHours()+ ":00")
        networkHashrateList.push(props[elment].networkHashrate)
        networkDifficultyList.push(props[elment].networkDifficulty)
    })  

    
    var data = {
        labels: createdList,
        series: [ poolHashrateList ]
    };


    var options1 = {
        height:"160px",
        showArea: true,
        seriesBarDistance:1,
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

export default StatsChartComponent;
