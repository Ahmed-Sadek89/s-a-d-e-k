import fetchDOM from './fetchDOMClass.js';
import * as DOMVariable from "../DOMVariables.js";

export default function fetchDOMReject() {
    const DOMfunction = new fetchDOM();
    DOMfunction.errorFetching(DOMVariable.socialMediaLinksGroupDOM);
    DOMfunction.errorFetching(DOMVariable.problemSolvingLinksGroupDOM);
    // DOMfunction.errorFetching(DOMVariable.majorSkillsDOM);
    // DOMfunction.errorFetching(DOMVariable.minorSkillsDOM);
    DOMfunction.errorFetching(DOMVariable.projectsDOM);
    DOMfunction.errorFetching(DOMVariable.socialMediaDOM);
    DOMfunction.errorFetching(DOMVariable.callMeDOM);
}