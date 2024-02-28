import { overlayDOM } from '../DOMVariables.js';
import FetchDOM from './fetchDOMClass.js';
import fetchDOMReject from './fetchDOMReject.js';
import * as DOMVariable from "../DOMVariables.js";

export default function makeAPICall() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let toJSObject = JSON.parse(this.response)
            const DOMfunction = new FetchDOM();

            DOMfunction.getSocialLinks(toJSObject.social_links, DOMVariable.socialMediaLinksGroupDOM);
            DOMfunction.getProblemSolvingLinks(toJSObject.problem_solving_links, DOMVariable.problemSolvingLinksGroupDOM);
            DOMfunction.getSkills(toJSObject.MajorSkills, DOMVariable.majorSkillsDOM);
            DOMfunction.getSkills(toJSObject.MinorSkills, DOMVariable.minorSkillsDOM);
            DOMfunction.getProjects(toJSObject.Projects, DOMVariable.projectsDOM);
            DOMfunction.getSocialMedia(toJSObject.socialMedia, DOMVariable.socialMediaDOM);
            DOMfunction.getPhoneNumbers(toJSObject.call_me, DOMVariable.callMeDOM);
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