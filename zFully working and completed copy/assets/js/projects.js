$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/req.jpg',
            link: 'https://github.com/abhn/Mporter',
            title: 'Requirements',
            categories: ['featured']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/abhn/Wall-E',
            title: 'Architecture',
            categories: ['featured']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/abhn/Marvel',
            title: 'Method Selection and Planning',
            categories: ['featured']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Risk Assessment and Mitigation',
            categories: ['featured']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
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
