import React from 'react';
// import { Link } from 'react-router-dom';

// import utils from '../../shared/utils';
import apidoc from '../../shared/apidoc';
import CoinComponent from '../CoinComponent';

const apiUrl = apidoc.apiUrl;

class PoolCoinBody extends React.Component{
    
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {

        fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
        });
        })
    }  
    
    render(){
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) {
            return (
                <div>
                </div>
            );
        }
        return (
            <section className="miningpool-section aos-init aos-animate" 
                // data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" 
                style={{paddingBottom: `80px`}} 
            >
                <div className="container ">
                    <h2>Mining: Pool Coin</h2>
                    <h4>Travel our mining coins for best miner!</h4>
                    <div className="row">
                    {
                        items.pools.map((item) => (
                            <CoinComponent key = { item.id } props={ item } />
                        ))
                    } 
                    </div>            
                </div>
            </section>
        );
    }
}
  
export default PoolCoinBody;
  