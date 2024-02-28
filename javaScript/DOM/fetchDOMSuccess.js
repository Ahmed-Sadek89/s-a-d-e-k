import fetchDOM from './fetchDOMClass.js';
import * as DOMVariable from "../DOMVariables.js";

export default function fetchDOMSuccess(responseText) {
    let toJSObject = JSON.parse(responseText)
    const DOMfunction = new fetchDOM();

    DOMfunction.getSocialLinks(toJSObject.social_links, DOMVariable.socialMediaLinksGroupDOM);
    DOMfunction.getProblemSolvingLinks(toJSObject.problem_solving_links, DOMVariable.problemSolvingLinksGroupDOM);
    DOMfunction.getSkills(toJSObject.MajorSkills, DOMVariable.majorSkillsDOM);
    DOMfunction.getSkills(toJSObject.MinorSkills, DOMVariable.minorSkillsDOM);
    DOMfunction.getProjects(toJSObject.Projects, DOMVariable.projectsDOM);
    DOMfunction.getSocialMedia(toJSObject.socialMedia, DOMVariable.socialMediaDOM);
    DOMfunction.getPhoneNumbers(toJSObject.call_me, DOMVariable.callMeDOM);
}