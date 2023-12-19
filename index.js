// !!! 1. 3 ta sondan kattasini topuvchi funksiya yozing.
// function enKattaTop(son1, son2, son3) {
//     let engKatta = son1;
    
//     if (son2 > engKatta) {
//     engKatta = son2;
//     }
    
//     if (son3 > engKatta) {
//     engKatta = son3;
//     }
    
//     return engKatta;
//    }
   
//    let maxSoni = enKattaTop(5, 10, 8);
//    console.log(maxSoni); 

// !!! 2. Raqamlar bilan berilgan ixtiyoriy 2 xonali sonni so'zlar bilan ifodalab beruvchi funksiya yozing.(switch...case)
// function sonniSozlarBilanIfodalash(son) {
//     let birliklar = son % 10;
//     let unliklar = Math.floor(son / 10);
//     let soz = "";
   
//     switch (unliklar) {
//     case 1:
//     soz = "o'n";
//     break;
//     case 2:
//     soz = "yigirma";
//     break;
//     case 3:
//     soz = "o'ttiz";
//     break;
   
//     default:
//     soz = "Noto'g'ri son kiritildi";
//     }
   
//     if (birliklar > 0 && unliklar !== 1) {
//     switch (birliklar) {
//     case 1:
//     soz += " bir";
//     break;
//     case 2:
//     soz += " ikki";
//     break;
//     case 3:
//     soz += " uch";
//     break;
   
//     default:
//     soz += "Noto'g'ri son kiritildi";
//     }
//     }
   
//     return soz;
//    }
   
//    let son = 35;
//    let sozlar = sonniSozlarBilanIfodalash(son);
//    console.log(sozlar); 

// !!! 3. 1 dan n gacha toq son borligini aniqlovchi funksiya yozing.
// function toqSonlarniAniqlovchi(n) {
//     let toqSonlar = [];
   
//     for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//     toqSonlar.push(i);
//     }
//     }
   
//     return toqSonlar;
//    }
   
//    let n = 10;
//    let toqSonlar = toqSonlarniAniqlovchi(n);
//    console.log(toqSonlar); 

// !!! 4. Ixtiyoriy sonning bo'luvchilar sonini topuvchi funksiya yozing.
// function boluvchilarSoniTop(son) {
//     let boluvchilar = 0;
   
//     for (let i = 1; i <= son; i++) {
//     if (son % i === 0) {
//     boluvchilar++;
//     }
//     }
   
//     return boluvchilar;
//    }
   
//    let son = 24;
//    let boluvchilarSoni = boluvchilarSoniTop(son);
//    console.log(boluvchilarSoni); 
   
   
// !!! 5. Agar berilgan son 3 ga hamda 5 ga karrali bo'lsa uning kvadratini aks holda kubini qaytaruvchi funksiya yozing. 
// function sonningKvadratYokiKub(son) {
//     if (son % 3 === 0 && son % 5 === 0) {
//     return son ** 2;
//     } else {
//     return son ** 3;
//     }
//    }
   
//    let son = 15;
//    let natija = sonningKvadratYokiKub(son);
//    console.log(natija); 
   
//    son = 7;
//    natija = sonningKvadratYokiKub(son);
//    console.log(natija); 
   
// !!! 6. Ixtiyoriy 2 ta sondan raqamlari ko'paytmasi eng katta bo'ladiganini topib beruvchi funksiya yozing. 
// function ikkiSondanKopaytma(massiv) {
    
//     massiv.sort(function(a, b) {
//       return a - b;
//     });
  
//     var sondanIki = massiv.slice(-2);
  
//     var kopaytma = sondanIki[0] * sondanIki[1];
  
//     return kopaytma;
//   }
  
//   var raqamlar = [5, 9, 3, 1, 7, 2, 8, 6, 4];
//   var enKattaKopaytma = ikkiSondanKopaytma(raqamlar);
//   console.log(enKattaKopaytma);

// !!! 7. Ixtiyoriy sonning tub yoki tub emasligini aniqlovchi funksiya yozing.
function tubSonniTekshir(son) {
    if (son <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(son); i++) {
      if (son % i == 0) {
        return false;
      }
    }
  
    return true;
  }
  
  var son = 17;
  var tubMuammo = tubSonniTekshir(son);
  if (tubMuammo) {
    console.log(son + " tub son.");
  } else {
    console.log(son + " tub son emas.");
  }
   