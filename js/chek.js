function check(a, x) {
    console.log(a);

    for(let i =0; i< a.length; i++){
        const skaicius = (a[i]);

        console.log (skaicius)
        if (skaicius === x){
            return true;
        }
        
    }
    return false
  }

  
    console.log(check([66, 101], 66), true);
    console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    console.log(check(['t', 'e', 's', 't'], 'e'), true);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    