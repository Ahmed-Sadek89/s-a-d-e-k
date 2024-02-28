import CustomEvent from "./CustomEvent.js";
import * as variables from "../DOMVariables.js";

export default function makeCustomEvent() {
    const myEvents = new CustomEvent();
    
    myEvents.setTheme(variables.lightIcon, variables.darkIcon, variables.mainStyle)
    myEvents.makeEventOnPageTheme(variables.lightIcon, variables.darkIcon, variables.mainStyle);
    myEvents.makeEventOnCollapseToggle(variables.listToggle, variables.collapse);
    myEvents.allLinks.forEach(link => {
        myEvents.makeEventOnItemsInCollapse(link, variables.allLinks);
    })
}