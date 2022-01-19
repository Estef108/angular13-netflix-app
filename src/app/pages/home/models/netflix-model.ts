export interface NetflixModel {
    nav: Inav,
    hero: Ihero,
    films: Ifilms,
    footer: Ifooter,
}

export interface Inav {
    logo: Iimg,
}

export interface Ihero {
    img: Iimg,
    title: string,
    imgGallery: Iimg[]
}

export interface Ifilms {
    title: string,
    imgGallery: Iimg[]
}

export interface Iimg {
    src: string,
    alt: string,
}

export interface Ifooter{
    links: string[],
}