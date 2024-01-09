import React from 'react';
import { Link } from 'react-router-dom';

import CoinComponent from '../CoinComponent';
import '../../assets/css/stylesheet.css';
import AOS from 'aos';
import ApiDoc from '../../shared/apidoc';

const apiUrl = ApiDoc.apiUrl;

class PoolCoin extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        AOS.init({
            duration: 2000,
        });
        fetch(apiUrl)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
            });
        })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return (
            <div>
            </div>
        );
        return (
            <section className="miningpool-section" 
            // beast find reason start
                    data-aos={"slide-up"} data-aos-easing={"ease-out-cubic"} data-aos-duration={"2000"}
            // beast find reason end
            >
                <div className="container">
                    <h2>Pool Coins</h2>
                    <br />
                    <br />
                    <div className="row">
                    {
                        items.pools.map((item) => (
                            <CoinComponent key = { item.id } props={ item } />
                        ))
                    }    
                    </div>
                    <div className="cta-link ">
                        <Link to={'/'}><span>View All Mining Pools Now</span><i className="fas fa-arrow-right "></i></Link>
                    </div>
                </div>
            </section>            
        );
    }
}
  
export default PoolCoin;
  