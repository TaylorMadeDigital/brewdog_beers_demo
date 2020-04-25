import moment from 'moment';

export const sortArray = (arr, key) => arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1);

export const sortArrayByNumber = (arr, key) => arr.sort((a, b) => a[key] - b[key]);

export const sortArrayByDate = (arr, key, format = 'YYYY-MM-DD', type = 'ASC') => arr.sort((a, b) => {
    if(type === 'DESC') return moment(b[key], format) - moment(a[key], format);
    return moment(a[key], format) - moment(b[key], format);
});