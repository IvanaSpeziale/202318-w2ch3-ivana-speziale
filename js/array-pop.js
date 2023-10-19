export const myPop = (array) => {
  debugger;
  const elementToPop = array[array.length - 1];
  array.length = array.length - 1;
  return elementToPop;
};
