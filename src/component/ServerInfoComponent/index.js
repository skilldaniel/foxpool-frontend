import apidoc from '../../shared/apidoc';
import constant from '../../shared/constant';
import server_icon from '../../assets/images/mining-server.png'

function ServerInfoComponent( props ){
    var minDiff,port
    if (props.difficultValue)
    {
        Object.keys(props.difficultValue.ports).forEach(element=>{
            if (!isNaN(element))
            {
                minDiff =  props.difficultValue.ports[element].varDiff.minDiff;  
                port = element;
            }
        })
        
    }

    
    return(
        <div className="col-md-4 pt-4">
            <div className="gray-bg-box text-center" style={{minHeight: `212px`}} >
                <h3 className="heading-txt mb-0"><img src={ server_icon } alt="server_icon" /> { props.serverlabel } </h3>
                {
                    props.flag === 'true' ?
                    <div>
                        <div style={{backgroundColor: `#dddddd`, padding: `6px`, marginTop: `20px`}} >
                            <span style={{ color:`#008aff`, fontWeight:`600` }} >stratum+tcp://{apidoc.stratum}:{port}</span>
                        </div>
                        <div className="mt-2">{ constant.DifferLabel[0] } / { minDiff }  - ∞</div>
                    </div> : null
                }
                {
                    props.flag === 'false' ?
                        <div className="mt-4">{ constant.DifferLabel[1] }</div>
                    : null
                }
            </div>
        </div>
    )
}

export default ServerInfoComponent;
