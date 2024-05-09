import inquirer from 'inquirer';

inquirer.prompt([
    {   
        type: 'input',
        name: 'nimi',
        message: 'Mis on su nimi?'
    },
    {   
        type: 'number',
        name: 'vanus',
        message: 'Vana sa oled?'
    },
    {
        type: 'list',
        name: 'jook',
        message: 'Vali meelepärane jook',
        choices: [
          'Viin',
          'Tekiila',
          'Rumm',
          'Viski',
          'Puskar',
          'Tehniline piiritus',
          'Vesi'
        ],
    },
    {   
        type: 'confirm',
        name: 'kinnitus',
        message: 'Oleme Jaapanis palun kinnita et võid juua'
        
    },
    {
        type: 'rawlist',
        name: 'mitu jooki',
        message: 'Vali mitu jooki soovid',
        choices: [
            '1',
            '2',
            '3-5',
            '5+',
          ],
    },
    {
        type: 'checkbox',
        name: 'kettis',
        message: 'Jõid liiga palju, vali kuhu kettida',
        choices: [
            'Vetsu',
            'lillepotti',
            'Kööki',
            'Padja alla',
            'Teenin alla keskmise ja jõin vett',
          ],
    },
    {
        type: 'expand',
      message: 'Vali palju koristad',
      name: 'koristas',
      choices: [
        {
          key: 'k',
          name: 'Kõik',
          value: 'koristus',
        },
        {
          key: 'a',
          name: 'Mitte midagi',
          value: 'lebolus',
        },
        {
          key: 'd',
          name: 'Oksenda edasi',
          value: 'Oksendus',
        },
        new inquirer.Separator(),
        {
          key: 'x',
          name: 'Mine magama',
          value: 'magandus',
        },
      ],
    },
    {
        type: 'password',
        name: 'sõnum',
        message: 'Jäta hommikuks sõnum',
    },
    {
        type: 'editor',
        name: 'editor',
        message: 'Kirjuta 300 sõnaline aruanne oma õhtust',
    }
]).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
})
.catch((error) => {
    if (error.isTtyError) {
      console.log("Suur renderdus error on tekkinud");
    } else {
      console.log("Kriitiline error on tekkinud, soovitan arvuti visata aknast välja");
    }
  });