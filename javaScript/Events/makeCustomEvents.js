import CustomEvent from "./CustomEvent.js";
import * as variables from "../DOMVariables.js";

export default function makeCustomEvent() {
    const myEvents = new CustomEvent();

    myEvents.setTheme(variables.lightIcon, variables.darkIcon, variables.mainStyle)
    myEvents.makeEventOnPageTheme(variables.lightIcon, variables.darkIcon, variables.mainStyle);
    myEvents.makeEventOnCollapseToggle(variables.listToggle, variables.collapse);
    variables.allLinks.forEach(link => {
        myEvents.makeEventOnItemsInCollapse(link, variables.allLinks);
    })
    variables.majorSkillsDOM.addEventListener('mouseover', (e) => {
        const accordionTitle = e.target;
        const accordionBody = e.target.nextElementSibling;

        accordionTitle.onclick = function () {

            if (accordionBody.hasAttribute('style')) {
                accordionBody.removeAttribute('style')
            } else {
                accordionBody.setAttribute('style', 'max-height: 0;')
            }
        }
    })


}