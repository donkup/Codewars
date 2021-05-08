function positiveSum(arr) {
        let BendraSuma = 0;
        for (let i = 0; i < arr.length; i++) {
            const skaiciuis = arr[i];
            if (skaiciuis > 0){
                BendraSuma += skaiciuis;

            }
                       
        }
        return BendraSuma;
  
}


    // console.log(positiveSum([1,2,3,4,5]),'->',15);
    // console.log(positiveSum([1,-2,3,4,5]),'->',13);
    // console.log(positiveSum([]),'->',0);
    // console.log(positiveSum([-1,-2,-3,-4,-5]),'->',0);
    console.log(positiveSum([-1,2,3,4,-5]),'->',9);
   