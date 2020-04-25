import { sortArray, sortArrayByNumber, sortArrayByDate } from './array';

describe('Array utils', () => {
  const arr = [
    { name: 'Andrew', age: 36, dateStarted: '07/2004'},
    { name: 'Mary', age: 17, dateStarted: '04/2020'},
    { name: 'Sarah', age: 8, dateStarted: '04/2010'},
    { name: 'Karl', age: 7, dateStarted: '08/2010'},
    { name: 'Alan', age: 24, dateStarted: '04/2008'},
  ];

  it('should sort an array by a string value', () => {
    const property = 'name';
    const sortedArr = sortArray(arr, property);
    expect(sortedArr[0].name).toBe('Alan');
  });

  it('should sort an array by a property with a number', () => {
    const property = 'age';
    const sortedArr = sortArrayByNumber(arr, property);
    expect(sortedArr[0].name).toBe('Karl');
  });

  it('should sort an array by a property with a date type', () => {
    const property = 'dateStarted';
    const sortedArr = sortArrayByDate(arr, property, 'MM/YYYY');
    expect(sortedArr[0].name).toBe('Andrew');
  });

  it('should sort an array by a property with a date type desc', () => {
    const property = 'dateStarted';
    const sortedArr = sortArrayByDate(arr, property, 'MM/YYYY', 'DESC');
    expect(sortedArr[0].name).toBe('Mary');
  });

});
