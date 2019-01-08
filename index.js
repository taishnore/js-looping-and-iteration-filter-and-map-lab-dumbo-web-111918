function driversWithRevenueOver(array, amount) {
  return array.filter(function(element) {
    return element["revenue"] > amount;
  });
}

// function driverNamesWithRevenueOver(array, amount) {
//   let french = array.filter(function(element) {
//     if (element["revenue"] > amount) {
//       return element["name"];
//     };
//   });
// }

// function driverNamesWithRevenueOver(array, amount) {
//   return driversWithRevenueOver(array, amount).map(function(element){
//     return element["name"];
//   });
// }

//This is the same as the one directly above. notice the .map parameter!

function driverNamesWithRevenueOver(array, amount) {
  return driversWithRevenueOver(array, amount).map(d => d.name);
}

function exactMatch(collection, object) {
    return collection.filter(function(element) {
      return Object.values(object)[0] == element["name"] || Object.values(object)[0] == element["revenue"];
	});
}

function exactMatchToList(collection, object) {
  return exactMatch(collection, object).map(d => d.name);
}
