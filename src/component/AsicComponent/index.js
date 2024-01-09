function AsicComponent( props ) {
    return (
        <div>
            {
                props.flag === '1'?
                <div>
                    <p>First you have to find your miner ip in your local network and then enter the browser interface by typing that address in your browser. </p>
                    <p>Default Login for Innosilicon A10 and A11: </p>
                    <p>user: admin</p>
                    <p>password: admin</p>
                    <p>Now you had to Settings ? Pools:</p>
                    <p>URL: stratum+tcp://mining4pros.com:3092 </p>
                    <p> Worker: YOUR_ETH_WALLET_ADDRESS.ASIC_Workername </p>
                    <p>Password: x </p>
                </div> : null
            }
            {
                props.flag === '2'?
                <div>
                    <p>First you have to find your miner ip in your local network and then enter the browser interface by typing that address in your browser.  </p>
                    <p>Default Login for Antminers: </p>
                    <p>user: root </p>
                    <p>password: root</p>
                    <p>Now you had to Miner Configuration: </p>
                    <p>URL: stratum+tcp://mining4pros.com:3082 </p>
                    <p>Worker: YOUR_ZEC_WALLET_ADDRESS.ASIC_Workername </p>
                    <p>Password: x</p>
                </div> : null
            }
        </div>
    );
}

export default AsicComponent;
