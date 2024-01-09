import utils from '../../shared/utils';

function TabRewardComponent({props}){
    return(
        <tr>
            <td className="text-center">
                { 
                    utils.changeDateToString(props.created)
                }                
            </td>
            <td className="text-center"><a href={ props.infoLink } target="_blank" className="bluelink" rel="noreferrer">{ props.blockHeight }</a></td>
            <td className="text-center">
                {
                    utils.setEffort( props.effort )
                }
            </td>
            <td className="text-center">{ props.status }</td>
            <td className="text-center">
                {
                    utils.setReward( props.reward )
                }
            </td>
            <td className="text-center">
                {
                    utils.setConfirmationProgress( props.confirmationProgress )
                }
            </td>
        </tr>
    )
}

export default TabRewardComponent;
