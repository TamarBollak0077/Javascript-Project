let cards = [
    { color: 'red', number: 1, img: '../images/r1.png' },
    { color: 'red', number: 2, img: '../images/r2.png' },
    { color: 'red', number: 3, img: '../images/r3.png' },
    { color: 'red', number: 4, img: '../images/r4.png' },
    { color: 'red', number: 5, img: '../images/r5.png' },
    { color: 'red', number: 6, img: '../images/r6.png' },
    { color: 'red', number: 7, img: '../images/r7.png' },
    { color: 'red', number: 8, img: '../images/r8.png' },
    { color: 'red', number: 9, img: '../images/r9.png' },
    { color: 'red', number: '+', img: '../images/r+.png' },
    { color: 'red', number: `-`, img: '../images/rtaki.png' },
    { color: 'blue', number: 1, img: '../images/b1.png' },
    { color: 'blue', number: 2, img: '../images/b2.png' },
    { color: 'blue', number: 3, img: '../images/b3.png' },
    { color: 'blue', number: 4, img: '../images/b4.png' },
    { color: 'blue', number: 5, img: '../images/b5.png' },
    { color: 'blue', number: 6, img: '../images/b6.png' },
    { color: 'blue', number: 7, img: '../images/b7.png' },
    { color: 'blue', number: 8, img: '../images/b8.png' },
    { color: 'blue', number: 9, img: '../images/b9.png' },
    { color: 'blue', number: '+', img: '../images/b+.png' },
    { color: 'blue', number: `-`, img: '../images/btaki.png' },
    { color: 'green', number: 1, img: '../images/g1.png' },
    { color: 'green', number: 2, img: '../images/g2.png' },
    { color: 'green', number: 3, img: '../images/g3.png' },
    { color: 'green', number: 4, img: '../images/g4.png' },
    { color: 'green', number: 5, img: '../images/g5.png' },
    { color: 'green', number: 6, img: '../images/g6.png' },
    { color: 'green', number: 7, img: '../images/g7.png' },
    { color: 'green', number: 8, img: '../images/g8.png' },
    { color: 'green', number: 9, img: '../images/g9.png' },
    { color: 'green', number: '+', img: '../images/g+.png' },
    { color: 'green', number: `-`, img: '../images/gtaki.png' },
    { color: 'yellow', number: 1, img: '../images/y1.png' },
    { color: 'yellow', number: 2, img: '../images/y2.png' },
    { color: 'yellow', number: 3, img: '../images/y3.png' },
    { color: 'yellow', number: 4, img: '../images/y4.png' },
    { color: 'yellow', number: 5, img: '../images/y5.png' },
    { color: 'yellow', number: 6, img: '../images/y6.png' },
    { color: 'yellow', number: 7, img: '../images/y7.png' },
    { color: 'yellow', number: 8, img: '../images/y8.png' },
    { color: 'yellow', number: 9, img: '../images/y9.png' },
    { color: 'yellow', number: '+', img: '../images/y+.png' },
    { color: 'yellow', number: `-`, img: '../images/ytaki.png' },
    { color: 'anycolor', number: 0, img: '../images/crown.png' },
    { color: 'anycolor', number: 0, img: '../images/superTaki.png' },
    { color: 'anycolor', number: 0, img: '../images/colorChanger.png' },
    { color: 'red', number: 1, img: '../images/r1.png' },
    { color: 'red', number: 2, img: '../images/r2.png' },
    { color: 'red', number: 3, img: '../images/r3.png' },
    { color: 'red', number: 4, img: '../images/r4.png' },
    { color: 'red', number: 5, img: '../images/r5.png' },
    { color: 'red', number: 6, img: '../images/r6.png' },
    { color: 'red', number: 7, img: '../images/r7.png' },
    { color: 'red', number: 8, img: '../images/r8.png' },
    { color: 'red', number: 9, img: '../images/r9.png' },
    { color: 'red', number: '+', img: '../images/r+.png' },
    { color: 'red', number: `-`, img: '../images/rtaki.png' },
    { color: 'blue', number: 1, img: '../images/b1.png' },
    { color: 'blue', number: 2, img: '../images/b2.png' },
    { color: 'blue', number: 3, img: '../images/b3.png' },
    { color: 'blue', number: 4, img: '../images/b4.png' },
    { color: 'blue', number: 5, img: '../images/b5.png' },
    { color: 'blue', number: 6, img: '../images/b6.png' },
    { color: 'blue', number: 7, img: '../images/b7.png' },
    { color: 'blue', number: 8, img: '../images/b8.png' },
    { color: 'blue', number: 9, img: '../images/b9.png' },
    { color: 'blue', number: '+', img: '../images/b+.png' },
    { color: 'blue', number: `-`, img: '../images/btaki.png' },
    { color: 'green', number: 1, img: '../images/g1.png' },
    { color: 'green', number: 2, img: '../images/g2.png' },
    { color: 'green', number: 3, img: '../images/g3.png' },
    { color: 'green', number: 4, img: '../images/g4.png' },
    { color: 'green', number: 5, img: '../images/g5.png' },
    { color: 'green', number: 6, img: '../images/g6.png' },
    { color: 'green', number: 7, img: '../images/g7.png' },
    { color: 'green', number: 8, img: '../images/g8.png' },
    { color: 'green', number: 9, img: '../images/g9.png' },
    { color: 'green', number: '+', img: '../images/g+.png' },
    { color: 'green', number: `-`, img: '../images/gtaki.png' },
    { color: 'yellow', number: 1, img: '../images/y1.png' },
    { color: 'yellow', number: 2, img: '../images/y2.png' },
    { color: 'yellow', number: 3, img: '../images/y3.png' },
    { color: 'yellow', number: 4, img: '../images/y4.png' },
    { color: 'yellow', number: 5, img: '../images/y5.png' },
    { color: 'yellow', number: 6, img: '../images/y6.png' },
    { color: 'yellow', number: 7, img: '../images/y7.png' },
    { color: 'yellow', number: 8, img: '../images/y8.png' },
    { color: 'yellow', number: 9, img: '../images/y9.png' },
    { color: 'yellow', number: '+', img: '../images/y+.png' },
    { color: 'yellow', number: `-`, img: '../images/ytaki.png' },
    { color: 'anycolor', number: 0, img: '../images/crown.png' },
    { color: 'anycolor', number: 0, img: '../images/superTaki.png' },
    { color: 'anycolor', number: 0, img: '../images/colorChanger.png' }
];
let moves = 0;
let numOfcards = 94;
let countCards = 8;
let removeCards = 0;
let nextTurn = true;
let outOfCards = false;
let usedCards = [];
const countdownTime = 60;
let firstCard = randomCard();
let countdownInterval;
let timeRemaining = countdownTime;
const timer = document.createElement('div');
timer.className = 'text';
document.body.appendChild(timer);
const timerText = document.createElement('div');
timerText.innerHTML = 'timer:';
timer.appendChild(timerText);
const timerElement = document.createElement('div');
timerElement.id = 'timer';
timer.appendChild(timerElement);
const move = document.createElement('div');
move.className = 'text';
document.body.appendChild(move);
const moveText = document.createElement('div');
moveText.innerHTML = 'moves:';
move.appendChild(moveText);
const moveElement = document.createElement('div');
moveElement.id = 'move';
move.appendChild(moveElement);
const pileAndFirstCard = document.createElement('div');
pileAndFirstCard.className = 'pileAndFirstcard';
const pile = document.createElement('img');
pile.id = 'pile';
pile.setAttribute('src', "../images/pile1.png");
pileAndFirstCard.appendChild(pile);
const firstCardImg = document.createElement('img');
firstCard.id = `${firstCard.color}-${firstCard.number}`;
firstCard.name='firstCard';
firstCardImg.className = 'cards';
firstCardImg.setAttribute('src', firstCard.img);
pileAndFirstCard.appendChild(firstCardImg);
document.body.appendChild(pileAndFirstCard);
const UserCards = document.createElement('div');
UserCards.setAttribute('id', 'userCards');
document.body.appendChild(UserCards);
let createUserCard;

//פתיחת שולחן קלפים למשתמש
function createUserCards() {
    for (let index = 0; index < 8; index++) {
        createUserCard = document.createElement('img');
        let img = randomCard();
        createUserCard.setAttribute('src', img.img);
        createUserCard.setAttribute('class', 'cards');
        createUserCard.id = `${img.color}-${img.number}`;
        createUserCard.addEventListener('click', () => { checkCorrectCard(img) });
        UserCards.appendChild(createUserCard);

    }
}

//יוצרת כפתורים
function createButtons() {
    const startGame = document.createElement("button");
    startGame.className = 'buttons';
    startGame.innerHTML = "Start Game";
    document.body.appendChild(startGame);
    startGame.addEventListener('click', () => { reset() });

    const homepage = document.createElement("button");
    homepage.innerHTML = "homepage";
    homepage.className = 'buttons';
    document.body.appendChild(homepage);
    homepage.addEventListener('click', redirectToHomepage);
}
function reset() {
    localStorage.setItem('start', JSON.stringify(1));
    location.reload();
}

function redirectToHomepage() {
    window.location = '../html/homePage.html';
}

//הגרלת קלף רנדומלי
function randomCard() {
    let randomIndex = Math.floor(Math.random() * (numOfcards--));
    let card;
    if (!(outOfCards)) {
        if (numOfcards == 0)
            outOfCards = true;
        card = cards[randomIndex];
        passesCard(randomIndex);
    }
    else {
        numberOfCards = usedCards.length;
        card = usedCards[1];
    }
    return card;
}
//העברת הקלפים למערך המשומשים
function passesCard(index) {
    usedCards.push(cards.slice(index, index + 1));
    cards.splice(index, 1);
}
//טיימר
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
}
function startCountdown() {
    updateTimerDisplay();
    countdownInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            updateTimerDisplay();
            const clock = document.createElement('div');
            clock.innerHTML = '⏰';
            clock.className = 'pulse-text';
            const TimeOver = document.createElement('div');
            TimeOver.innerHTML = 'Time Over';
            TimeOver.className = 'pulse-text';
            document.body.appendChild(clock);
            document.body.appendChild(TimeOver);
            // for(var e = 0; e < removeCards.length; e++) { // For each element
            //    var elt = removeCards[e];
            //    elt.removeAttribute("src");
            // }
            document.getElementById("pile").removeAttribute("src");
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}
function stopCountdown() {
    clearInterval(countdownInterval);
    console.log('Timer stopped at:', new Date());
}

function countMoves() {
    moves++;
    moveElement.innerHTML = `${moves}`;
    move.appendChild(moveElement);
    console.log(moves);
}
//הוספת קלף לקלפי המשתמש
function addCard() {
    let anotherCard = randomCard();
    let anothercardImg = document.createElement('img');
    anothercardImg.setAttribute('src', anotherCard.img);
    anothercardImg.setAttribute('class', 'cards');
    anothercardImg.id = `${anotherCard.color}-${anotherCard.number}`;
    UserCards.appendChild(anothercardImg);
    anothercardImg.addEventListener('click', () => { checkCorrectCard(anotherCard) });
    countCards++;
}
//בדיקה האם הקלף יכול לעלות לערימה הפתוחה
function checkCorrectCard(img) {
    let number = img.number;
    let color = img.color;
    let numberOffirstCard = firstCard.id.slice(-1);
    let colorOffirstCard = firstCard.id.slice(0, -2);
    if (number == numberOffirstCard || color == colorOffirstCard || colorOffirstCard == 'anycolor' || color == 'anycolor') {
        if (number == 2) {
            addCard();
            addCard();
        }
        firstCardImg.setAttribute('src', img.img);
        firstCard.id = `${img.color}-${img.number}`;
        let deleteCard = document.getElementById(`${img.color}-${img.number}`);
        deleteCard.parentNode.removeChild(deleteCard);
        removeCards++;
        if (nextTurn || (!nextTurn && colorOffirstCard != color)) {
            countMoves();
            nextTurn = true;
        }
        if (number == '+') {
            moves--;
        }
        if (numberOffirstCard == `-`) //טאקי 
        {
            nextTurn = false;
        }
        console.log(colorOffirstCard)
        if (countCards == removeCards) {
            winning();
        }
    }
}
//ניצחון!!
function winning() {
    createConfetti();
    winAnimaition();
    stopCountdown();

    const score = document.createElement('div');
    score.id = 'score';
    score.innerHTML = `you did it in ${moves}  moves and in ${60 - timeRemaining} seconds!!`
    document.body.appendChild(score);
}

//קונפטי
function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    for (let i = 0; i < 200; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.className = "confetti-piece";
        confettiPiece.classList.add(`color-${Math.floor(Math.random() * 6) + 1}`);
        confettiPiece.style.left = Math.random() * 100 + "vw";
        confettiPiece.style.animationDuration = Math.random() * 2 + 1 + "s";
        confettiPiece.style.animationDelay = Math.random() + "s";
        confettiContainer.appendChild(confettiPiece);
    }
}
function winAnimaition() {
    const winner = document.createElement('h1');
    winner.setAttribute('class', 'winner');
    const y = document.createElement('span');
    y.innerHTML = 'y'
    winner.appendChild(y);
    const o = document.createElement('span');
    o.innerHTML = 'o'
    winner.appendChild(o);
    const u = document.createElement('span');
    winner.appendChild(u);
    u.innerHTML = 'u'
    const br = document.createElement('br');
    winner.appendChild(br);
    const w = document.createElement('span');
    w.innerHTML = 'w'
    winner.appendChild(w);
    const i = document.createElement('span');
    i.innerHTML = 'o'
    winner.appendChild(i);
    const n = document.createElement('span');
    n.innerHTML = 'n'
    winner.appendChild(n);
    const extrimationMark = document.createElement('span');
    extrimationMark.innerHTML = '!'
    winner.appendChild(extrimationMark);
    document.body.appendChild(winner);
}

window.onload = function () {
    if (localStorage.getItem("start") == 1) {
        startCountdown();
    }
};


pile.addEventListener('click', () => { addCard() });
pile.addEventListener('click', () => { countMoves() });
createUserCards();
createButtons();




















