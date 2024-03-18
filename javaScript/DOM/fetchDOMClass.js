class FetchDOM {
    constructor() {

    }

    errorFetching = (DOMElement) => {
        DOMElement.innerHTML = `<p class='font-xl font-bold' style='color: red'>error 404</p>`
    }

    getSocialLinks = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map(elem => {
            return `
            <a target='_blank' href='${elem.link}' class='p-r-1 font-xxl' title='${elem.title}'>
                <i class='${elem.icon}' style='${elem?.style}'></i>
            </a>
            `
        })
        DOMElement.innerHTML = mapping.join("") // to convert mapping from array to string, then remove ','
    }

    getProblemSolvingLinks = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map(elem => {
            return `
            <a target='_blank' href='${elem.link}' class='p-r-1 font-xxl' title='${elem.title}'>
                <img src='${elem.image}' alt='${elem.title}' />
                <span>${elem.title}</div>
            </a>
            `
        })
        DOMElement.innerHTML = mapping.join("") // to convert mapping from array to string, then remove ','
    }

    getSkills = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map((elem) => {
            let contents = elem.skillsContent?.map((elem) => {
                return `
                <div class='col-xs-12 col-sm-6 col-md-4 '>
                    <div class='skills p-t-1 p-b-1 b-radius-md p-l-1 font-xl'>
                        <i class='${elem.icon}' title='${elem.title}'></i>
                        <span class='font-regular font-md m-l-1'>${elem.title}</span>
                    </div>
                </div>
                `;
            })

            return `
            <div class='col-xs-12 accordion'>
                <div class='accordion-title p-1 font-xl b-radius-md'>
                    <span class='font-regular font-md'>${elem.skillsTitle}</span>
                    <i class='bx bxs-down-arrow'></i>
                </div>
                <div class="accordion-body p-t-1 p-b-1">
                    <div class="container row gap-1 id='majorSkillsContents'">
                        ${contents?.join("")}
                    </div>
                </div>
            </div>
            `;
        });
        DOMElement.innerHTML = mapping.join("")
    }

    getMinorSkills = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map((elem) => {
            return `
                <div class='col-xs-12 col-sm-6 col-md-4 '>
                    <div class='skills p-t-1 p-b-1 b-radius-md p-l-1 font-xl'>
                        <i class='${elem.icon}' title='${elem.title}'></i>
                        <span class='font-regular font-md m-l-1'>${elem.title}</span>
                    </div>
                </div>
                `;

        });
        DOMElement.innerHTML = mapping.join("")
    }

    getProjects = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map(elem => {
            return `
                <div class='col-xs-12 col-md-6'>
                    <div class='project b-radius-md p-1'>
                        <div class='overlay b-radius-md'>
                            <img src="${elem.image}" alt='${elem.title}' />
                            <div class='info-overlay'>
                                <div class='m-b-2 font-xl'>
                                    <a href="${elem.preview}" class='m-r-1' target='_blank'>
                                        <i class='bx bxs-show' title='live'></i>
                                    </a>
                                    <a href="${elem.github}" target='_blank'>
                                        <i class='bx bxl-github' title='GitHub'></i>
                                    </a>
                                </div>
                                <p>${elem.title}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            `;
        });

        DOMElement.innerHTML = mapping.join("");
    }

    getSocialMedia = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map(elem => {
            return `
            <a target='_blank' href='${elem.link}' class='p-r-1' title='${elem.title}'>
                <i class='${elem.icon}'></i>
            </a>
            `;
        });

        DOMElement.innerHTML = mapping.join("");
    }

    getPhoneNumbers = (dataInJSON, DOMElement) => {
        let mapping = dataInJSON.map(elem => {
            return `
            <p class='m-b-1'>
                <i class='${elem.icon}'></i>
                <span>${elem.number}</span>
            </p>
            `;
        });

        DOMElement.innerHTML = mapping.join("");
    }
}

export default FetchDOM;