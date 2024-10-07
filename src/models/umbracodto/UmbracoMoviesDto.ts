export interface MovieListRoot {
    total: number
    items: UmbracoDtoMovie[]
}

export interface UmbracoDtoMovie {
    contentType: string
    name: string
    createDate: string
    updateDate: string
    route: Route
    id: string
    properties: Properties
    cultures: Cultures
}

export interface Route {
    path: string
    startItem: StartItem
}

export interface StartItem {
    id: string
    path: string
}

export interface Properties {
    title: string
    imdbId: string
    year: number
    genre: Genre[]
    writers: string
    director: string
    stars: string
    image: Image[]
    imageurl: string
    trailer: string
    description: string
    aiImage: any
    images: any
}

export interface Genre {
    contentType: string
    name: string
    createDate: string
    updateDate: string
    route: Route2
    id: string
    properties: Properties2
}

export interface Route2 {
    path: string
    startItem: StartItem2
}

export interface StartItem2 {
    id: string
    path: string
}

export interface Properties2 { }

export interface Image {
    focalPoint: any
    crops: any[]
    id: string
    name: string
    mediaType: string
    url: string
    extension: string
    width: number
    height: number
    bytes: number
    properties: Properties3
}

export interface Properties3 { }

export interface Cultures { }
