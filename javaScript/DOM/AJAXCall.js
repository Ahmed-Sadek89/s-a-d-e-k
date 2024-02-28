import { overlayDOM } from '../DOMVariables.js';
import fetchDOMSuccess from './FetchDOMSuccess.js';
import fetchDOMReject from './fetchDOMReject.js';

export default function makeAPICall() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            fetchDOMSuccess(this.response)
            overlayDOM.remove()
            document.querySelector('body').setAttribute('style', "overflow-y: scroll")
        }
        else {
            fetchDOMReject()
        }
    }
    myRequest.open("GET", "json.json", true);
    myRequest.send();
}