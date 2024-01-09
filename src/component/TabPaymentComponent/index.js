import utils from '../../shared/utils';
// import constant from '../../shared/constant';

function TabPaymentComponent({props}) {
    return(
        <tr>
            <td className="text-center">{ utils.changeDateToString(props.created) }</td>
            <td className="text-center"><a href={ props.addressInfoLink } className="bluelink" rel="noreferrer">{ props.address }</a></td>
            <td className="text-center">{ utils.formatter(props.amount, 2) }</td>
            <td className="text-center"><a href={ props.transactionInfoLink } className="bluelink" target="_blank" rel="noreferrer">{ utils.setConfirmationAddress(props.transactionConfirmationData) }</a></td>
        </tr>        
    )
}

export default TabPaymentComponent;
