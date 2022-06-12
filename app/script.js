let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
},
bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
        const yesNo = confirm('посмотреть валюту?');

        if (yesNo) {
            resolve(userData);
        } else {
            reject({ userData, bankData });
        }
    });
}

getMoney(userData, bankData)
    .then((userData) => {
        let currencySelection = '';
        do {
            currencySelection = prompt(`Введите название валюты в формате :USD, EUR, UAH, BIF, AOA`);
    
            if (currencySelection) {
                currencySelection = currencySelection.toUpperCase();
            }
             
           } while (!currencySelection || !userData[currencySelection]);
          
           console.log(`Баланс составляет: ${userData[currencySelection]} ${currencySelection}.`)
    
     
    
    })
    .catch(({ userData, bankData }) => {
        let currencySelection;
        do {
            currencySelection = prompt(`Введите название валюты в формате :USD, EUR, UAH, BIF, AOA`);
    
            if (currencySelection) {
                currencySelection = currencySelection.toUpperCase();
            }
             
           } while (!currencySelection || !userData[currencySelection]);
        let sum;
        
        do {
            sum = prompt(`Введите сумму для снятия. (только цифры и не больше 4 значного числа)`);
           
        } while (!sum || isNaN(sum) || sum.length > 4);
        
        if(sum > bankData[currencySelection]['max'] || sum > userData[currencySelection] ){
                console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${userData[currencySelection] > bankData[currencySelection]['max'] ?  bankData[currencySelection]['max'] : userData[currencySelection]}`);
        } else if(sum < bankData[currencySelection]['min']){
            console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[currencySelection]['min']}`)
        } else {
            console.log(`Вот Ваши денежки ${sum} ${currencySelection} ${bankData[currencySelection]['img']} `);
            setTimeout(() => {
                console.log(`Ваш остаток по карте = ${userData[currencySelection] - sum} ${bankData[currencySelection]['img']}`);
            }, 2000);
        }
          
        
    })
    .finally(() => {
        setTimeout(() => {
            console.log(`Спасибо, хорошего дня 😊`);
        }, 3000);
      
    });

