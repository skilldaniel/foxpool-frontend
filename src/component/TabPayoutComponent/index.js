import utils from '../../shared/utils';

function TabPayoutComponent({props}){
    return(
        <tr>
            <td className="text-center"> 
            { 
                utils.changeDateToString(props.created)
            }
            </td>
            <td className="text-center"><a href={ props.addressInfoLink } className="bluelink">{ props.address }</a></td>
            <td className="text-center">
                { 
                    utils.setAmount(props.amount)
                }
            </td>
            <td className="text-center">
                <a href={ props.transactionInfoLink } className="bluelink" target="_blank" rel="noreferrer"> 
                {
                    utils.setConfirmationAddress(props.transactionConfirmationData)
                }
            </a>
            </td>
        </tr>      
    )
}

export default TabPayoutComponent;
