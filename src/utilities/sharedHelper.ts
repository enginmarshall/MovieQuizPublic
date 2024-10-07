import { DataSources, Movie } from "@/models";

const useUmbraco = process.env.NEXT_PUBLIC_USE_UMBRACO ? JSON.parse(process.env.NEXT_PUBLIC_USE_UMBRACO.toLowerCase()) : false;;
const useStrapi = process.env.NEXT_PUBLIC_USE_STRAPI ? JSON.parse(process.env.NEXT_PUBLIC_USE_STRAPI.toLowerCase()) : false;;
const useContentful = process.env.NEXT_PUBLIC_USE_CONTENTFUL ? JSON.parse(process.env.NEXT_PUBLIC_USE_CONTENTFUL.toLowerCase()) : false;;

let dataSource: DataSources = DataSources.UMBRACO;

let moviesSourceUrl = ''
let instructionsSourceUrl = ''

export const getMoviesSourceUrl = () => {
    if (useUmbraco) {
        moviesSourceUrl = '/api/moviesumbraco';
    }
    if (useContentful) {
        moviesSourceUrl = '/api/moviescontentful';
    }
    if (useStrapi) {
        moviesSourceUrl = '/api/moviesstrapi';
    }
    return moviesSourceUrl;
}

export const getInstructionsSourceUrl = () => {
    if (useUmbraco) {
        instructionsSourceUrl = '/api/instructionsumbraco';
    }
    if (useContentful) {
        instructionsSourceUrl = '/api/instructionscontentful';
    }
    if (useStrapi) {
        instructionsSourceUrl = '/api/instructionsstrapi';
    }
    return instructionsSourceUrl;
}

export const getDataSource = () => {
    if (useUmbraco) {
        dataSource = DataSources.UMBRACO;
    }
    if (useContentful) {
        dataSource = DataSources.CONTENTFUL;
    }
    if (useStrapi) {
        dataSource = DataSources.STRAPI;
    }
    return dataSource;
}