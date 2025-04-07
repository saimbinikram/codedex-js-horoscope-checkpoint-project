// Decalaring and Initializing Variables

let birthMonth = "January";
let starSign;
let starSymbol;
let randomQuote;
console.log(`Your Birth Month is ${birthMonth}.`);

// Switch statement to determine star sign and symbol based on the birth month

switch (birthMonth) {
    case "January":
        starSign = "Capricorn";
        starSymbol = "♑";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "February":
        starSign = "Aquarius";
        starSymbol = "♒";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "March":
        starSign = "Pisces";
        starSymbol = "♓";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "April":
        starSign = "Aries";
        starSymbol = "♈";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "May":
        starSign = "Taurus";
        starSymbol = "♉";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "June":
        starSign = "Gemini";
        starSymbol = "♊";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "July":
        starSign = "Cancer";
        starSymbol = "♋";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "August":
        starSign = "Leo";
        starSymbol = "♌";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "September":
        starSign = "Virgo";
        starSymbol = "♍";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "October":
        starSign = "Libra";
        starSymbol = "♎";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "November":
        starSign = "Scorpio";
        starSymbol = "♏";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;
    case "December":
        starSign = "Sagittarius";
        starSymbol = "♐";
        console.log(`Your Star Sign is ${starSign}.`);
        console.log(`Your Star Symbol is ${starSymbol}`);
        break;

    default:
        console.log("This month does not exist");
        break;
}

// Assigning a random quote based on a randomly generated number

randomQuote = Math.floor((Math.random() * 15) + 1);

switch (randomQuote) {
    case 1:
        randomQuote = "A new adventure is waiting for you—step forward with confidence.";
        break;
    case 2:
        randomQuote = "Your energy is magnetic—people will soon be drawn to your positivity.";
        break;
    case 3:
        randomQuote = "The stars align in your favor, bringing you closer to your dreams.";
        break;
    case 4:
        randomQuote = "A moment of clarity is approaching—use it to make your next big decision.";
        break;
    case 5:
        randomQuote = "The winds of change are blowing, and they will lead you toward success.";
        break;
    case 6:
        randomQuote = "Trust that the universe is guiding you toward a path of happiness.";
        break;
    case 7:
        randomQuote = "An exciting new chapter of your life is just beginning—embrace it with open arms.";
        break;
    case 8:
        randomQuote = "Your perseverance will soon bear fruit, and great things are on the way.";
        break;
    case 9:
        randomQuote = "Now is the time to take risks—fortune favors the brave.";
        break;
    case 10:
        randomQuote = "Your efforts are about to be recognized—get ready for a well-deserved reward.";
        break;
    case 11:
        randomQuote = "Look to the future with hope—the best is yet to come.";
        break;
    case 12:
        randomQuote = "A burst of creativity will spark new opportunities—follow your inspiration.";
        break;
    case 13:
        randomQuote = "An unexpected turn will lead you to exactly where you need to be.";
        break;
    case 14:
        randomQuote = "Soon, you'll find yourself in a place of peace and contentment—enjoy the journey.";
        break;
    case 15:
        randomQuote = "Your passion will light the way toward success—don't be afraid to follow it.";
        break;
    default:
        console.log("Error, just in case");
        break;
}

console.log(`Your fortune: ${randomQuote}`)



// 1. "A new adventure is waiting for you—step forward with confidence."
// 2. "Your energy is magnetic—people will soon be drawn to your positivity."
// 3. "The stars align in your favor, bringing you closer to your dreams."
// 4. "A moment of clarity is approaching—use it to make your next big decision."
// 5. "The winds of change are blowing, and they will lead you toward success."
// 6. "Trust that the universe is guiding you toward a path of happiness."
// 7. "An exciting new chapter of your life is just beginning—embrace it with open arms."
// 8. "Your perseverance will soon bear fruit, and great things are on the way."
// 9. "Now is the time to take risks—fortune favors the brave."
// 10. "Your efforts are about to be recognized—get ready for a well-deserved reward."
// 11. "Look to the future with hope—the best is yet to come."
// 12. "A burst of creativity will spark new opportunities—follow your inspiration."
// 13. "An unexpected turn will lead you to exactly where you need to be."
// 14. "Soon, you'll find yourself in a place of peace and contentment—enjoy the journey."
// 15. "Your passion will light the way toward success—don’t be afraid to follow it."
