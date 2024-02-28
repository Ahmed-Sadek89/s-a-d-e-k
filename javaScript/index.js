import customEvent from "./customEvent.js";
import fetchDOM from './fetchDOM.js';
import { darkIcon, lightIcon, mainStyle } from "./AllVariables.js";
import { listToggle, collapse, allLinks } from "./AllVariables.js";
import { socialMediaLinksGroupDOM, problemSolvingLinksGroupDOM, majorSkillsDOM, minorSkillsDOM, projectsDOM, socialMediaDOM, callMeDOM } from "./AllVariables.js";

const AJAX = new fetchDOM();
const { loadingData, errorFetching, getSocialLinks, getProblemSolvingLinks, getSkills, getProjects, getSocialMedia, getPhoneNumbers } = AJAX;
let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let toJSObject = JSON.parse(this.responseText)
        let { social_links, problem_solving_links, MajorSkills, MinorSkills, Projects, socialMedia, call_me } = toJSObject;
        getSocialLinks(social_links, socialMediaLinksGroupDOM);
        getProblemSolvingLinks(problem_solving_links, problemSolvingLinksGroupDOM);
        getSkills(MajorSkills, majorSkillsDOM);
        getSkills(MinorSkills, minorSkillsDOM);
        getProjects(Projects, projectsDOM);
        getSocialMedia(socialMedia, socialMediaDOM);
        getPhoneNumbers(call_me, callMeDOM);
    } else if (this.readyState < 4) {
        loadingData(socialMediaLinksGroupDOM);
        loadingData(majorSkillsDOM);
        loadingData(minorSkillsDOM);
        loadingData(projectsDOM);
        loadingData(socialMediaDOM);
        loadingData(callMeDOM);
    }
    else {
        errorFetching(socialMediaLinksGroupDOM);
        errorFetching(majorSkillsDOM);
        errorFetching(minorSkillsDOM);
        errorFetching(projectsDOM);
        errorFetching(socialMediaDOM);
        errorFetching(callMeDOM);
    }
}
myRequest.open("GET", "json.json", true);
myRequest.send();


const myEvents = new customEvent();
const { setTheme, makeEventOnPageTheme, makeEventOnCollapseToggle, makeEventOnItemsInCollapse } = myEvents;

setTheme(lightIcon, darkIcon, mainStyle)
makeEventOnPageTheme(lightIcon, darkIcon, mainStyle);
makeEventOnCollapseToggle(listToggle, collapse);
allLinks.forEach(link => {
    makeEventOnItemsInCollapse(link, allLinks);
})