import utils from '../../shared/utils';

// import constant from '../../shared/constant';
import info_icon from '../../assets/images/info-icon.png';

function TabBlockComponent({props}) {
    return(
        <tr>
            <td className="text-center"><a href={ props.infoLink } target="_blank" className="bluelink" rel="noreferrer">{ props.blockHeight }</a></td>
            <td className="text-center">{ utils.setEffort(props.effort) }</td>
            <td className="text-center">{ props.status }</td>
            <td className="text-center">{ utils.setReward(props.reward) }</td>
            <td className="text-center">{ utils.setConfirmationProgress( props.confirmationProgress )  }</td>
            <td className="text-center"><a href={ props.infoLink } target="_blank" className="bluelink" rel="noreferrer"><img src={ info_icon } alt="info_icon" /> <span className="view-on" alt="info_icon">View on Etherscan</span></a></td>
        </tr>        
    )
}

export default TabBlockComponent;