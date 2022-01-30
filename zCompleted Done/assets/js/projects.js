$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/req.png',
            link: 'https://github.com/boatcorporation/boatgame',
            title: 'Requirements',
            categories: ['featured']
        },
        {
            image: 'assets/images/arc.png',
            link: 'https://github.com/boatcorporation/boatgame',
            title: 'Architecture',
            categories: ['featured']
        },
        {
            image: 'assets/images/msp.png',
            link: 'https://github.com/boatcorporation/boatgame',
            title: 'Method selection and planning',
            categories: ['featured']
        },
        {
            image: 'assets/images/ram.png',
            link: 'https://github.com/boatcorporation/boatgame',
            title: 'Risk assessment and mitigation',
            categories: ['featured']
        },
        {
            image: 'assets/images/imp.png',
            link: 'https://github.com/boatcorporation/boatgame',
            title: 'Implementation',
            categories: ['featured']
        },
  
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
                            </article>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
