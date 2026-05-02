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
    "img": image.asset->url,
    "spareImg": spare_image.asset->url,
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
    "icon": icon.asset->url,
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
    "image": project_image.asset->url,
    live_link,
    tech_stack[] {
      name,
      "logo": logo.asset->url
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

export {
  home_hero_section,
  home_grid_section,
  project_hero_section,
  home_approach_section,
  home_experience_section,
  home_featured_project_section,
};
