import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../assets/images/logo.png';
import mine_black from '../../assets/images/mine-black.png';
import '../../assets/css/stylesheet.css';

class FirstHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            wallet     :   '',
            currentPool :   '',
            fullPath    :   '',

        };

        this.walletChange   =   this.walletChange.bind(this);
        this.isCurrentPool  =   this.isCurrentPool.bind(this);
        this.walletSearch   =   this.walletSearch.bind(this);
        this.walletPaste    =   this.walletPaste.bind(this);

    }

    // componentWillUnmount(){
    //     this.walletPaste = debounce(this.walletPaste.bind(this))
    // }

    walletChange(event) {
        this.setState({wallet: event.target.value},() =>{
            this.isCurrentPool();
        });
        
    }

    walletPaste(event){
        this.setState({wallet:  event.clipboardData.getData('text/plain')},()=>{
            this.isCurrentPool();
        });
        
    }

    isCurrentPool() {
        var currentAddress = this.state.wallet;

        if( currentAddress.startsWith('0x')){
            this.setState({currentPool: 'eth' }, ()=>{
              this.walletSearch();  
            });
        }
        if( currentAddress.startsWith('t')){
            this.setState({currentPool: 'zec' }, ()=>{
                this.walletSearch();  
            });
        }
        if( currentAddress.startsWith('z')){
            this.setState({currentPool: 'zen' }, ()=>{
                this.walletSearch();
            });
        }

    }
    
    walletSearch() {
        console.log('/' + this.state.currentPool + '/' + this.state.wallet)
        this.setState({  fullPath: '/' + this.state.currentPool + '/' + this.state.wallet })
    }

    render(){
        return (
            <header className="main-header fixed-header fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <Link to={'/'} className="navbar-brand"><img src={ logo } alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar icon-bar-1"></span>
                            <span className="icon-bar icon-bar-2"></span>
                            <span className="icon-bar icon-bar-3"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* beast modify start */}
                            <Link to={ this.state.fullPath } 
                            className="form-inline ml-auto search-box">
                                <input type="text" placeholder="Your wallet address" value={ this.state.walllet } onPaste={ this.walletPaste } onChange={this.walletChange} />
                                    <button type="submit" className="submit" ><i className="fas fa-search"></i></button>                                
                            </Link>
                {/* beast modify end */}
                            {/* </form> */}
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"> <Link className="nav-link" to={'/'}><i className="fas fa-home"></i> <span className="sr-only">(current)</span></Link> </li>
                                <li className="nav-item">
                                    <Link to={'/Pool'} className="nav-link">Pools</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Blog'} className="nav-link">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/FAQ'} className="nav-link">Faq</Link>
                                </li>
                                <li className="nav-item nav-mining"> 
                                <Link to={ '/Pool' } className="nav-link"><span>Start Mining</span> <img src={ mine_black } alt="mine_black" /></Link> </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
  
  export default FirstHeader;
  