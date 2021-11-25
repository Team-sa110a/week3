export function findIndex(array, types){
    for(let i=0; i < array.length; i++){
        if(array[i].user == types.user && array[i].active == types.active){
            return i
        }
    } 
}