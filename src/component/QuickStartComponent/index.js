// import utils from '../../shared/utils';
import constant from '../../shared/constant';
import apidoc from '../../shared/apidoc';


function QuickStartComponent({props}){

    return(
        <div className="card">
            <div className="card-header bg-teal-gradient">
                <h4 className="card-title mb-0" style={{fontSize: `28px`}} ><i className="fas fa-tools"></i> Miner Configuration</h4>
                <p className="card-category mb-0">
                This is the basic guide how to setup your miner to this pool.
                </p>
            </div>
            <div className="card-body">
                <div className="typo-line">
                    <h2>Quick start guide { props.pool.coin.type }</h2>
                    <hr />
                    <h4>Step 1 - Create a Wallet</h4>
                    {
                        props.pool.id === 'eth' ?
                        <div>
                            <p>
                                You could download the wallet a copy of the entire blockchain here:
                                <a href={ constant.eth['0'] }>
                                    {
                                        constant.eth['0']
                                    }
                                    </a><br />
                                Or you could use an online wallet such as myEtherWallet (<a href="" >{ constant.eth['1'] }</a>).<br />
                                Another option is to generate an address directly on a crypto exchange such as 
                                <a href={ constant.eth['3'] }> { constant.eth['2'] }</a> or Gate.io<br /><br />
                            </p>
                            <p>
                                You could download the wallet a copy of the entire blockchain here:
                                <a href={ constant.eth['0'] }>
                                    {
                                        constant.eth['0']
                                    }
                                    </a><br />
                                Or you could use an online wallet such as myEtherWallet (<a href={ constant.eth['1'] } >{ constant.eth['1'] }</a>).<br />
                                Another option is to generate an address directly on a crypto exchange such as 
                                <a href={ constant.eth['3'] }> { constant.eth['2'] }</a> or Gate.io<br /><br />
                            </p>
                            <div>
                                <h4>Step 2 - Download Mining Software (GPU)</h4>
                                GPU:<br />
                                    For NVIDA and AMD GPU's we recommend Phoenixminer<br />
                                    Download ready to go version of <a href={ apidoc.PhoenixminerAddress} download={ apidoc.PhoenixminerAddress }>Phoenixminer here</a> (Linux and Winodws,archive password - mining4pros)<br /><br />
                                    <h4>Step 3 - Edit the bat file</h4>
                                    Use <b>YOUR_WALLET_ADDRESS</b> that you've created on Step 1.<br />
                                    Example: 0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8<br />
                                    If you want, you can Change <b>RIG_ID</b> in the bat file.<br /> 
                                    Specify the name of the rig as you want it to be shown in miner's statistics page.
                                    This field is not mandatory. You could leave it empty.<br /><br />
                                    Length of RIG_ID - Maximum 32 characters. Use English letters, numbers and symbols "-" and "_".<br /><br />
                                    Example: <b>rig-1</b><br /><br />
                            </div>
                            <h4>ASIC Settings</h4>
                            This pool works with ASIC Miners.<br /><br />
                            <div>
                                <h4>Settings for Antminer E3, Innosilicon A10 ETH Master, Linzhi Phoenix:</h4>	
                                URL:<b>stratum+tcp://{ apidoc.stratum } </b><br />
                                Workers:<b>YOUR_WALLET_ADDRESS.ASIC_ID</b><br />
                                Password:<b>x</b><br /><br />
                                        
                                Use <b>YOUR_WALLET_ADDRESS</b> that you've created on Step 1.<br />
                                Example: 0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8, If you want, you can Change <b>ASIC_ID</b> - specify the name of the ASIC as you want it to be shown in miner's statistics page.<br />
                                This field is not mandatory. You could leave it empty.Length of <b>ASIC_ID - Maximum 32 characters</b>.<br />
                                Use English letters,numbers and symbols "-" and "_".<br />
                                Example: <b>ASIC-1</b><br />
                                <br />
                                <h4>Mining rig rentals and Nicehash</h4>
                                This pool works with rig rental services <a href={ constant.eth[7] } >{ constant.eth[6] }</a> and <a href={ constant.eth[9] } >{ constant.eth[9] }</a>.<br /><br />
                            </div>
                        </div> : null
                    }
                    {
                        props.pool.id === 'zec' ?
                        <div>
                            <div>
                                <p>
                                    You could download the wallet a copy of the entire blockchain here:
                                    <a href={ constant.zec['0'] }> { constant.zec['0'] } </a><br />
                                    Or you could use an online wallet such as myEtherWallet (<a href="" >{ constant.zec['1'] }</a>).<br />
                                    Another option is to generate an address directly on a crypto exchange such as 
                                    <a href={ constant.zec['3'] }> { constant.zec['2'] }</a> or Gate.io<br /><br />
                                </p>
                                <p>
                                    You could download the wallet a copy of the entire blockchain here:
                                    <a href={ constant.zec['0'] }>
                                        {
                                            constant.zec['0']
                                        }
                                        </a><br />
                                    Or you could use an online wallet such as myEtherWallet (<a href={ constant.zec['1'] } >{ constant.zec['1'] }</a>).<br />
                                    Another option is to generate an address directly on a crypto exchange such as 
                                    <a href={ constant.zec['3'] }> { constant.zec['2'] }</a> or Gate.io<br /><br />
                                </p>                                
                            </div>
                            <h4>ASIC Settings</h4>
                            This pool works with ASIC Miners.<br /><br />
                            <h4>Settings for all Antminer Z-Models:</h4>
                            <span>URL:stratum+tcp://{ apidoc.stratum }:3082</span><br />
                            <span>Workers:YOUR_WALLET_ADDRESS.ASIC_ID</span><br />
                            <span>Password:x</span><br /><br />
                            <div>
                                Use <b>YOUR_WALLET_ADDRESS</b> that you've created on Step 1.<br />
                                Example: t3ff6fhemqPMVujD3AQurxRxTdvS1pPSaa2, If you want, you can Change <b>ASIC_ID</b> - specify the name of the ASIC as you want it to be shown in miner's statistics page.<br />
                                This field is not mandatory. You could leave it empty.Length of <b>ASIC_ID - Maximum 32 characters</b>.<br />
                                Use English letters,numbers and symbols "-" and "_".<br />
                                Example: <b>ASIC-1</b><br />
                                <br />                            
                            </div>

                        </div> : null
                    }
                    {
                        props.pool.id === 'zen' ?
                        <div>
                           <div>
                                <p>
                                    You could download the wallet a copy of the entire blockchain here:
                                    <a href={ constant.zen['0'] }> { constant.zen['0'] } </a><br />
                                    Or you could use an online wallet such as myEtherWallet (<a href="" >{ constant.zen['1'] }</a>).<br />
                                    Another option is to generate an address directly on a crypto exchange such as 
                                    <a href={ constant.zen['3'] }> { constant.zen['2'] }</a> or Gate.io<br /><br />
                                </p>
                                <p>
                                    You could download the wallet a copy of the entire blockchain here:
                                    <a href={ constant.zen['0'] }>
                                        {
                                            constant.zen['0']
                                        }
                                        </a><br />
                                    Or you could use an online wallet such as myEtherWallet (<a href={ constant.zen['1'] } >{ constant.zen['1'] }</a>).<br />
                                    Another option is to generate an address directly on a crypto exchange such as 
                                    <a href={ constant.zen['3'] }> { constant.zen['2'] }</a> or Gate.io<br /><br />
                                </p>                                
                            </div>                            
                            <h4>ASIC Settings</h4>
                            This pool works with ASIC Miners.<br /><br />
                            <h4>Settings for all Antminer Z-Models:</h4>
                            <span>URL:stratum+tcp://{ apidoc.stratum }:3082</span><br />
                            <span>Workers:YOUR_WALLET_ADDRESS.ASIC_ID</span><br />
                            <span>Password:x</span><br /><br />
                            <div>
                                Use <b>YOUR_WALLET_ADDRESS</b> that you've created on Step 1.<br />
                                Example: znUovxhrE91tep6D7YtgSc3XJZoYQLVDwVn, If you want, you can Change <b>ASIC_ID</b> - specify the name of the ASIC as you want it to be shown in miner's statistics page.<br />
                                This field is not mandatory. You could leave it empty.Length of <b>ASIC_ID - Maximum 32 characters</b>.<br />
                                Use English letters,numbers and symbols "-" and "_".<br />
                                Example: <b>ASIC-1</b><br />
                                <br />                            
                            </div>

                        </div> : null
                    }

                        <b>Settings for <a href="https://www.nicehash.com">{ constant.eth[8] }</a></b><br />	
                        Sometimes Nicehash exits the pool test with en error. Don't worry.<br />
                        We are working with Nicehash every day.<br />
                        Mining4Pros is a officially supported Nicehash pool.<br />
                        Just go ahead and proceed with the order.<br /><br />

                        Custom pool name: <b>{ apidoc.stratum } { props.pool.coin.type }</b><br />
                        Algorithm: <b>DaggerHashimoto </b><br />
                        Stratum hostname or<br />
                        IP: <b>{ apidoc.stratum } </b><br />
                        Port: <b>3092</b><br />
                        Username: <b>YOUR_WALLET_ADDRESS</b><br />
                        Password: <b>x</b><br /><br />
                        <p></p>
                </div>
            </div>
    </div>
    );
}

export default QuickStartComponent;
