// Assume you have a club that only people named Flo, Swantje, Sam, Mafe and Irem can enter. Make an if else if algorithm that will check if you can enter that club based on your name. Then do the same with a switch case.If you can not enter the club return ‘Sorry ${name}, you should change your name and come back tomorrow.’


// let myName = 'Vasilis'

// if (myName == 'Flo' || myName == 'Swantje' || myName == 'Sam' || myName == 'Mafe' || myName == 'Irem') {
//     console.log('Welcome to the Babylon Club VIP Exlusive 2019')
// } else {
//     console.log(`Sorry bruder, your name is so 2009`)
// }


// switch(myName) {
//     case 'Flo':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break;
//     case 'Swantje':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break;
//     case 'Sam':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break;
//     case 'Mafe':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break; 
//     case 'Irem':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break; 
//     default:
//         console.log('Sorry bruder, your name is so 2009')
// }



// switch(myName) {
//     case 'Flo':
//     case 'Swantje':
//     case 'Sam':
//     case 'Mafe':
//     case 'Irem':
//         console.log('Welcome to the Babylon Club VIP Exlusive 2019') 
//         break; 
//     default:
//         console.log('Sorry bruder, your name is so 2009')
// }

// let enterDaKlub = (myName == 'Flo' || myName == 'Swantje' || myName == 'Sam' || myName == 'Mafe' || myName == 'Irem') ? 'You are in' : 'You are out'

// console.log(enterDaKlub)


// Assume you have an algorithm that takes as input the name of a band and it returns the genre of music they play. Make an if else if interpretation of that algorithm with 5 music bands. If the music band is not recognized return a statement that says 'Who are ${bandName}. Never heard of them...'


let bandName = 'Pixies'

// if (bandName == 'Slayer' || bandName == 'The National' || bandName == 'Gorillaz' || bandName == 'Pixies' || bandName == 'Aqua') {
//     console.log(`OHMAGORD ${bandName} are so 2019`)
// } else {
//     console.log(`Never heard of ${bandName}. What do the play?`)
// }


// if (bandName == 'Slayer') {
//     console.log(`They play metal`)
// } else if (bandName == 'Aqua') {
//     console.log(`They play Barbie girl right??`)
// } else if (bandName == 'Gorillaz') {
//     console.log(`They are actually really talented gorillas`)
// } else console.log(`Never heard of ${bandName}. What do the play?`)


switch(bandName) {
    case 'Slayer':
        console.log('They play metal') 
        break;
    case 'Gorillaz':
        console.log('They play jungle music') 
        break;
    case 'Aqua':
        console.log('BAAAARBIEEE GGUUURL') 
        break;
    case 'The National':
        console.log('So sad soooooo sad but nice') 
        break; 
    case 'Pixies':
        console.log('Magdalena, you are the meanest') 
        break; 
    default:
        console.log(`Never heard of ${bandName}. What do the play?`)
}