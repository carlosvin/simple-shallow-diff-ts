

export function diff<T> (original: {[id: string]: T}, modified: {[id: string]: T}) {
    const added  = Object.keys(modified).filter( k => !(k in original));
    const deleted  = Object.keys(original).filter( k => !(k in modified));
    const updated = Object.keys(modified)
        .filter( k => k in original)
        .filter( k => JSON.stringify(original[k]) !== JSON.stringify(modified[k]));
    
    return {deleted, updated, added};
}
