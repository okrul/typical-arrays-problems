
exports.min = function min (array) {
  if (array == undefined || array.length == 0)
    {
      return 0;
    }
  let minz = array[0];
    array.forEach(element => {

      minz = element < minz ? element : minz;
      
    });
  
  return minz;
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0)
  {
    return 0;
  }
let maxz = array[0];
  array.forEach(element => {

    maxz = element > maxz ? element : maxz;
    
  });

return maxz;
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0)
  {
    return 0;
  }
  let sumz = 0;
  array.forEach(element => {

    sumz = sumz + element;
    
  });

  let avgz = sumz/array.length;
return avgz;
}
