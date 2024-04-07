// Code your solution here
//findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  //run
  //const drivers = ['Alice', 'Bob', 'Charlie', 'alice', 'bob', 'charlie'];
//console.log(findMatching(drivers, 'Alice'));

  //fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  //run
  //const drivers = ['Alice', 'Bob', 'Charlie', 'alice', 'bob', 'charlie'];
//console.log(fuzzyMatch(drivers, 'a'));
  
//matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
//
  //run
  //const drivers = [
    //{ name: 'Alice', hometown: 'NYC' },
    //{ name: 'Bob', hometown: 'LA' },
    //{ name: 'Charlie', hometown: 'Chicago' },
    //{ name: 'alice', hometown: 'NYC' },
    //{ name: 'bob', hometown: 'LA' },
    //{ name: 'charlie', hometown: 'Chicago' },
  //];
  //console.log(matchName(drivers, 'Alice')); 

