// import './apiStyle.css';
import '../../assets/css/hightlightjs-dark.css';
import './style.css';
import api_logo from '../../assets/images/api-logo.png';

function ApiLeftComponent() {
  return (
    <div className="left-menu">
        <div className="content-logo">
            <img alt="platform by Emily van den Heever from the Noun Project" title="platform by Emily van den Heever from the Noun Project" src={ api_logo } height="32" />
            <span>API Documentation</span>
        </div>
        <div className="content-menu">
            <ul>
                <li className="scroll-to-link active" data-target="get-started">
                    <a>GET STARTED</a>
                </li>
                <li className="scroll-to-link" data-target="get-characters">
                    <a>Get Pool Information</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default ApiLeftComponent;
