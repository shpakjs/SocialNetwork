export const requiredField = value => {
    if(value) return undefined;

    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const maxLength = value => {
    if(value && value.length > 30) return 'Max length is 30 symbols';
    return undefined;
}