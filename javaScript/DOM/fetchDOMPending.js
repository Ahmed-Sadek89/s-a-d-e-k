import fetchDOM from './fetchDOMClass.js';
import * as DOMVariable from "../DOMVariables.js";

export default function fetchDOMPending() {
    const DOMfunction = new fetchDOM();
    DOMfunction.loadingData(DOMVariable.socialMediaLinksGroupDOM);
    DOMfunction.loadingData(DOMVariable.problemSolvingLinksGroupDOM);
    DOMfunction.loadingData(DOMVariable.majorSkillsDOM);
    DOMfunction.loadingData(DOMVariable.minorSkillsDOM);
    DOMfunction.loadingData(DOMVariable.projectsDOM);
    DOMfunction.loadingData(DOMVariable.socialMediaDOM);
    DOMfunction.loadingData(DOMVariable.callMeDOM);
}