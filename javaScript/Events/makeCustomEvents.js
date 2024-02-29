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
    variables.majorSkillsDOM.addEventListener('mouseover', (event) => {
        const accordionTitle = event.target;
        const accordionBody = event.target.nextElementSibling;

        accordionTitle.onclick = function (e) {
            if (accordionBody.hasAttribute('style')) {
                accordionBody.removeAttribute('style')
            } else {
                accordionBody.setAttribute('style', 'transition: display 0.5s ease; display: none')
            }
        }
    })


}