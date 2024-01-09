function TabLabel(props){
    return(
        <li>
            <a data-toggle="tab" href={ props.href } 
            className= { props.focus ? "active" : "" }
            >
                <img src={ props.imagesource } 
                    data-toggle="tooltip" data-placement="top" 
                title={ props.title } alt="title" />
                <span className="navtab-item">{ props.title }</span>
            </a>
        </li>        
    )
}

export default TabLabel;
