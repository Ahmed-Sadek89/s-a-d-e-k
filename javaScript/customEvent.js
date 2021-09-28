class customEvent{
    constructor(){
        
    }
    makeEventOnPageTheme = (lightIcon, darkIcon, mainStyle) => {
        darkIcon.addEventListener('click', () => {
            lightIcon.classList.toggle('d-none');
            darkIcon.classList.toggle('d-none');
            mainStyle.setAttribute('href','css/secondTheme.css');
        })

        lightIcon.addEventListener('click', () => {
            lightIcon.classList.toggle('d-none');
            darkIcon.classList.toggle('d-none');
            mainStyle.setAttribute('href','css/firstTheme.css');
        })
    }

    makeEventOnCollapseToggle = (iconToggle, collapseToggle) => {
        iconToggle.addEventListener('click', () => {
            collapseToggle.classList.toggle('collapse-open')
        })
        document.addEventListener('click', (e) => {
            if(
                e.target !== iconToggle 
                && e.target !== collapseToggle
            )
            {
                collapseToggle.classList.remove('collapse-open')
            }
        });
    }

    makeEventOnItemsInCollapse =(li, AllLinks) => {
        li.addEventListener('click', () => {
            AllLinks.forEach(elem =>{
                elem.classList.remove('list-selected')
            })
            li.classList.add('list-selected')
        })
    }
}

export default customEvent;