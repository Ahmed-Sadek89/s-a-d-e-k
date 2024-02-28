import fetchDOMSuccess from './FetchDOMSuccess.js';
import fetchDOMPending from './fetchDOMPending.js';
import fetchDOMReject from './fetchDOMReject.js';

export default function makeAPICall() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            fetchDOMSuccess(this.response)
        } else if (this.readyState < 4) {
            fetchDOMPending()
        }
        else {
            fetchDOMReject()
        }
    }
    myRequest.open("GET", "json.json", true);
    myRequest.send();
}