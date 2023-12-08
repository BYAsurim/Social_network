export const requiredField = (value:string)=>{
    if(value) return undefined
    return 'Filed is required'
}

export const maxLengthCreator = (maxLength:number)=> (value:string)=>{
    if(value &&  value.length <= maxLength) return undefined
    return `Max length  ${maxLength} symbols`
}


