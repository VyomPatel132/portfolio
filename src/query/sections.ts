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

export {
  home_hero_section,
  home_grid_section,
  project_hero_section,
  home_experience_section,
};
