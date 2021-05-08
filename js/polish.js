function correctPolishLetters (string) {
    let convertedString = '';
    for (let i = 0; i < string.length; i++) {
        const raide = string[i];

        switch(raide) {
            case 'ą':
            convertedString += 'a';
            break;
            case 'ć':
                convertedString += 'c';
                break;
            case 'ę':
                convertedString += 'e';
                break;
            case 'ł':
                convertedString += 'l';
                break;
            case 'ń':
                convertedString += 'n';
                break;
            case 'ó':
                convertedString += 'o';
                break;
            case 'ś':
                convertedString += 's';
                break;
            case 'ź':
                convertedString += 'z';
                break;
            case 'ż':
                convertedString += 'z';
                break;

            default: convertedString += raide;
            break

        }
        
    }
  
    return convertedString;
  }

  console.log(correctPolishLetters("Jędrzej Błądziński"),'->',"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),'->',"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),'->',"Maria Sklodowska-Curie");