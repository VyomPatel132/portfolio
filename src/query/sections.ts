const home_hero_section = `
_type,
title,
tag_line,
section_theme,
hero_description,
heading_white,
heading_purple,
get_in_touch_button{
    _type,
    label,
    link
},
my_work_button{
    _type,
    label,
    link
}
`;

const home_grid_section = `
_type,
title,
grid_items[]{
    _type,
    title,
    description,
    variant,
    image{
        _type,
        alt,
        "img": image.asset->url,
    },
    spare_image{
        _type,
        alt,
        "spareImg": image.asset->url,
    },
    className,
    imgClassName,
    titleClassName,
    tech_list
}
`;

const home_experience_section = `
_type,
title_prefix,
title_highlight,
experiences[]{
    _type,
    title,
    description,
    icon{
        _type,
        alt,
        "icon": image.asset->url,
    },
    className
}
`;

const project_hero_section = `
_type,
badge,
title_prefix,
title_highlight,
description
`;

const home_featured_project_section = `
_type,
title_prefix,
title_highlight,
featured_projects[]->{
    _type,
    project_title,
    project_description,
    project_image{
        _type,
        alt,
        "image": image.asset->url,
        link,
    },
    tech_stack[] {
      _type,
      name,
      logo{
        _type,
        alt,
        "logo": image.asset->url
      },
    }
}
`;

const home_approach_section = `
_type,
title_prefix,
title_highlight,
phases[]{
    _type,
    order,
    title,
    description,
    animation_speed,
    container_bg,
    dot_colors[]{
        _type,
        r,
        g,
        b,
    }
}
`;

const project_listing_section = `
_type,
search_placeholder,
project_listing[]->{
    _type,
    "slug": slug.current,
    project_title,
    project_description,
    project_image{
        _type,
        alt,
        "image": image.asset->url,
        link,
    },
    tech_stack[] {
        _type,
        name,
        logo{
            _type,
            alt,
            "logo": image.asset->url
        },
    },
    category
}
`;

const about_hero_section = `
_type,
badge,
name,
description,
profile_image{
    _type,
    alt,
    "image": image.asset->url
},
stats[]{
    _type,
    value,
    label
}
`;

const about_experinced_tech_section = `
_type,
title_prefix,
title_highlight,
tech_stack[] {
    _type,
    name,
    logo{
        _type,
        alt,
        "logo": image.asset->url,
    },
},
`;

export {
  home_hero_section,
  home_grid_section,
  about_hero_section,
  project_hero_section,
  home_approach_section,
  home_experience_section,
  project_listing_section,
  home_featured_project_section,
  about_experinced_tech_section,
};
