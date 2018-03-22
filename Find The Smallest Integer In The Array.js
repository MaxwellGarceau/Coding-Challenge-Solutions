class SmallestIntegerFinder {
  findSmallestInt(args) {
   return args.reduce(function(acc, curElem){
    	if (acc > curElem) {
    		acc = curElem; 
    	}
    	return acc;
    });
  }
}
