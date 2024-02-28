import customEvent from "./customEvent.js";
import { darkIcon, lightIcon, mainStyle } from "./DOMVariables.js";
import {listToggle, collapse, allLinks } from "./DOMVariables.js";
import call from "./DOM/AJAXCall.js";


call()

const myEvents = new customEvent();
const {setTheme, makeEventOnPageTheme, makeEventOnCollapseToggle, makeEventOnItemsInCollapse} = myEvents;

setTheme(lightIcon, darkIcon, mainStyle)
makeEventOnPageTheme(lightIcon, darkIcon, mainStyle);
makeEventOnCollapseToggle(listToggle, collapse);
allLinks.forEach(link => {
    makeEventOnItemsInCollapse(link, allLinks);
})

