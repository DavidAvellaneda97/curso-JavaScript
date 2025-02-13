
/**
 * obtener el nombre de la pagina HTML
 * @param {string} filePath url del archivo html
 * @returns el nombre de la pagina html
 */                        
const getHtmlPageName = ( filePath ) => {
    return filePath.split("/").pop();
}                       
export { getHtmlPageName };