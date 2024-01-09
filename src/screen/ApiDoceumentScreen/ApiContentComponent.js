// import './apiStyle.css';
import '../../assets/css/hightlightjs-dark.css';
import './style.css';
function ApiContentComponent() {
    return (
        <div className="content-page">
            <div className="content-code"></div>
            <div className="content">
                <div className="overflow-hidden content-section" id="content-get-started">
                    <h1 id="get-started">Get started</h1>
                    {/* <p className="h1" id="get-started">Get started</p> */}
                    <pre>
                        API Endpoint

                        http://mining4pros.com/api/pools
                    </pre>
                    <p>
                        The Mining4Pros API provides access to our entire Pool data.
                    </p>
                    <p>
                        To use this API, just target the curl request based on your desired information.
                    </p>
                </div>
                <div className="overflow-hidden content-section" id="content-get-characters">
                    <h2 id="get-characters">get pool information</h2>
                    <p id="get-characters">get pool information</p>
                    <pre>
                        <code className="bash">
                        # Here is a curl example
                        curl https://mining4pros.com/api/pools/zec 
                        </code>
                    </pre>
                    <p>
                        To get Pool information you need to make a POST call to the following url :<br />
                        <code className="higlighted">
                            https://mining4pros.com/api/pools
                        {/* <racter/get/code> */}
                        </code>
                    </p>
                    <br />
                    <pre>
                        <code className="json">
                            Result example :
                        <p>{ '\u007B' }</p>
                            <div style={{ marginLeft: `60px` }}>
                                "pool": { '\u007B' } <br />
                                <div style={{ marginLeft: `20px` }}>
                                    "id": "zec",<br />
                                    "coin": { '\u007B' }<br />
                                        "type": "ZEC",<br />
                                        "name": "ZCash",<br />
                                        "family": "equihash",<br />
                                        "algorithm": "Equihash"<br />
                                </div>
                                    { '\u007D' },<br />
                            </div>
                            <div style={{ marginLeft: `60px` }}>
                                    "ports": { '\u007B' }<br />
                                    <div style={{ marginLeft: `20px` }}>
                                        "3082": { '\u007B' }<br />
                                        <div style={{ marginLeft: `20px` }}>
                                            "listenAddress": "0.0.0.0",<br />
                                            "name": null,<br />
                                            "difficulty": 600.0,<br />
                                            "tcpProxyProtocol": null,<br />
                                            "varDiff": { '\u007B' }<br />
                                            <div style={{ marginLeft: `20px` }}>                                        
                                                "minDiff": 600.0,<br />
                                                "maxDiff": null,<br />
                                                "maxDelta": 150.0,<br />
                                                "targetTime": 15.0,<br />
                                                "retargetTime": 90.0,<br />
                                                "variancePercent": 30.0<br />
                                            </div>
                                            { '\u007D' },<br />
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: `20px` }}>
                                        "tls": false,<br />
                                        "tlsPfxFile": null<br />
                                        { '\u007D' }<br />
                                    </div>
                                    { '\u007D' },<br />
                            </div>
                            <div style={{ marginLeft: `60px` }}>
                                    "paymentProcessing": { '\u007B' }<br />
                                    <div style={{ marginLeft: `20px` }}>
                                        "enabled": true,<br />
                                        "minimumPayment": 0.01,<br />
                                        "payoutScheme": "PPLNS",<br />
                                        "payoutSchemeConfig": { '\u007B' }<br />
                                        "factor": 2.0<br />
                                        { '\u007D' }<br />
                                        </div>
                                    { '\u007D' },<br />
                                </div>
                                <div style={{ marginLeft: `60px` }}>
                                    "shareBasedBanning": null,<br />
                                    "clientConnectionTimeout": 600,<br />
                                    "jobRebroadcastTimeout": 10,<br />
                                    "blockRefreshInterval": 500,<br />
                                    "poolFeePercent": 0.0,<br />
                                    "address": "t1QGNftnPTNC6jaYEMqhPjnK7TjVB4GV1vd",<br />
                                    "addressInfoLink": "https://explorer.zcha.in/accounts/t1QGNftnPTNC6jaYEMqhPjnK7TjVB4GV1vd",<br />
                                    <div style={{ marginLeft: `20px` }}>
                                        "poolStats": { '\u007B' }<br />
                                            "lastPoolBlockTime": null,<br />
                                            "connectedMiners": 1,<br />
                                            "connectedWorkers": 0,<br />
                                            "poolHashrate": 2021372.25,<br />
                                            "sharesPerSecond": 0<br />
                                    </div>
                                    { '\u007D' },<br />
                                    "networkStats": { '\u007B' }<br />
                                        <div style={{ marginLeft: `20px` }}>
                                            "networkType": "Main",<br />
                                            "networkHashrate": 4791131725.0,<br />
                                            "networkDifficulty": 47251192.667483181,<br />
                                            "nextNetworkTarget": "0000000002d72c00000000000000000000000000000000000000000000000000",<br />
                                            "nextNetworkBits": "1c02d72c",<br />
                                            "lastNetworkBlockTime": "2021-08-31T11:03:24.9662536Z",<br />
                                            "blockHeight": 1373975,<br />
                                            "connectedPeers": 8,<br />
                                            "rewardType": "POW"<br />
                                        </div>
                                    { '\u007D' },<br />
                                    "topMiners": [<br />
                                        <div style={{ marginLeft: `20px` }}>
                                            { '\u007B' }<br />
                                            <div style={{ marginLeft: `20px` }}>
                                                "miner": "t1PsU1HCVHS4n9uni9Rhz4q6Vwvyo3RzNvC",<br />
                                                "hashrate": 639950.0,<br />
                                                "sharesPerSecond": 0.072<br />
                                            </div>
                                        { '\u007D' }<br />
                                        </div>
                                    ],<br />
                                    "totalPaid": 115.023163894630<br />
                                    </div>
                                { '\u007D' }<br />
                            { '\u007D' }<br />
                        </code>
                    </pre>
                    <h4>QUERY PARAMETERS</h4>
                    <p>QUERY PARAMETERS</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>coin_ID</td>
                                <td>String</td>
                                <td>Any coin_ID that is listed on our pool</td>
                            </tr>
                            <tr>
                                <td>/coin_ID/blocks</td>
                                <td>String</td>
                                <td>Show latest blocks found by the Pool</td>
                            </tr>
                            <tr>
                                <td>coin_ID/payments</td>
                                <td>String</td>
                                <td>
                                    Show latest Payments made by the pool
                                </td>
                            </tr>
                            <tr>
                                <td>coin_ID/miners</td>
                                <td>String</td>
                                <td>
                                    Show all connected miners
                                </td>
                            </tr>
                            <tr>
                                <td>/coin_ID/performance</td>
                                <td>String</td>
                                <td>
                                    Show the hashrate of the Pool
                                </td>
                            </tr>
                            <tr>
                                <td>/coin_ID/miners/"Your Personal Wallet Adress"</td>
                                <td>Address</td>
                                <td>Get personal dashboard information</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="content-code">

            </div>
        </div>
    );
  }
  
  export default ApiContentComponent;
  