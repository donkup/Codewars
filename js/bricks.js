/*
UZDUOTIS:
- gaunam kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turime plytos dydi(aukstis ir plotis) (metrais)
- reikia suzinoti, keliu plytu mums reikes, jei negalima skaldyti plytu
- // Math.ceil (apvalina i didesne puse (1.2= 2))
- // Math.floor (apvalina i mazesne puse (1.9 = 1))
- // Math.round (apvalina nuo 0.5 i virsu)
*/

function bricks(sienuPlociai, aukstis, plyosAukstis, plytosPlotis) {
        let bendrasSienuPlotis = 0;

        for (let i = 0; i < sienuPlociai.length; i++) {
            const sienosPlotis = sienuPlociai[i];
            bendrasSienuPlotis += sienosPlotis;
            
        }
        
        const plytosAukstyn = Math.ceil(aukstis / plyosAukstis);
        const plytosPlotyje = Math.ceil (bendrasSienuPlotis / plytosPlotis);
        return plytosAukstyn * plytosPlotyje;



    // let bendraSienu = 0;

    // for (let i = 0; i < sienuPlociai.length; i++) {
    //      bendraSienu += sienuPlociai[i];
               
    // }
    
    // const kiekPlytuPlotyje = bendraSienu / plytosPlotis;
    // const kiekPlytuAukstyje = aukstis / plyosAukstis;
    // return kiekPlytuAukstyje * kiekPlytuPlotyje;
    
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);