/* Fills elements of array with value from start up to, but not including, end.*/

export function fill1(array,value,startnumber,endnumber){ 
    let ary = []
    for(let i = 0;i < array.length; i++){
         ary = (array.fill(value,startnumber,endnumber))
    }
    return ary
}