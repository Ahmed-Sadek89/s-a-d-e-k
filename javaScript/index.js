// imports of classes
import customEvent from "./customEvent.js";
import fetchDOM from './fetchDOM.js';
// imports of variables of themes change
import { darkIcon, lightIcon, mainStyle } from "./AllVariables.js";
// imports of variables of collapse and scroll
import {listToggle, collapse, allLinks } from "./AllVariables.js";
// imports of variables of parentDOM Before Fetehing
import {socialMediaLinksGroupDOM, problemSolvingLinksGroupDOM, majorSkillsDOM, minorSkillsDOM, projectsDOM, socialMediaDOM, callMeDOM} from "./AllVariables.js";
console.log(mainStyle)

const AJAX = new fetchDOM();
const {loadingData, errorFetching, getSocialLinks,getProblemSolvingLinks ,getSkills, getProjects, getSocialMedia, getPhoneNumbers} = AJAX;
// AJAX 
let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){ // if status === 200 then the status is success
        let toJSObject = JSON.parse(this.responseText) // JSON بدل js object احوله ل
        // here put your fetching functions
        let {social_links, problem_solving_links, MajorSkills, MinorSkills, Projects, socialMedia, call_me} = toJSObject;
        // social Links
        getSocialLinks(social_links, socialMediaLinksGroupDOM);
        // problem solving Links
        getProblemSolvingLinks(problem_solving_links, problemSolvingLinksGroupDOM);
        // majorSkills
        getSkills(MajorSkills, majorSkillsDOM);
        // minor skills
        getSkills(MinorSkills, minorSkillsDOM);
        // projects
        getProjects(Projects, projectsDOM);
        // SocialMedia
        getSocialMedia(socialMedia, socialMediaDOM);
        // call_me
        getPhoneNumbers(call_me, callMeDOM);
        console.log('success');
    }else if(this.readyState < 4){
        loadingData(socialMediaLinksGroupDOM);
        loadingData(majorSkillsDOM);
        loadingData(minorSkillsDOM);
        loadingData(projectsDOM);
        loadingData(socialMediaDOM);
        loadingData(callMeDOM);
        console.log('loading ', this.statusText);
        // (statusText) =>> if this.status = 0 => return null ,else if  this.status = 200 => return OK 
        //, else if  this.status = 404  => return not found 
    }
    else{
        errorFetching(socialMediaLinksGroupDOM);
        errorFetching(majorSkillsDOM);
        errorFetching(minorSkillsDOM);
        errorFetching(projectsDOM);
        errorFetching(socialMediaDOM);
        errorFetching(callMeDOM);
        console.log('error 404 ', this.statusText);
        //status === 200 if the status is error then status === 404
    }
}
myRequest.open("GET", "json.json", true);
myRequest.send();


// Events
const myEvents = new customEvent();
const {setTheme, makeEventOnPageTheme, makeEventOnCollapseToggle, makeEventOnItemsInCollapse} = myEvents;

setTheme(lightIcon, darkIcon, mainStyle)
// on themes change
makeEventOnPageTheme(lightIcon, darkIcon, mainStyle);
// on themes change

// on collapse menu
makeEventOnCollapseToggle(listToggle, collapse);
// on collapse menu

// on selecting any list on the collapse menu
allLinks.forEach(link => {
    makeEventOnItemsInCollapse(link, allLinks);
})
// on selecting any list on the collapse menu

// Events

