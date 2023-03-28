function getImageUrl(file) {
    return new URL(`../assets/images/${file}`, import.meta.url).href
}

export {
    getImageUrl
}