const quotes = [
    {
        quote: "The best way to teach your kids about taxes is by eating 30% of their ice cream.",
        author: "Bill Murray",
        profession: "Actor",
        image: "url(https://www.dropbox.com/s/oviqwgy25tnhamh/bill-murray.jpg?raw=1)"
    },
    {
        quote: "You know you're getting old when the candles cost more than the cake.",
        author: "Bob Hope",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/a5cm9m3bxld3w9r/bob-hope.jpg?raw=1)"
    },
    {
        quote: "I hope that when I die, people say about me, 'Boy, that guy sure owed me a lot of money.'",
        author: "Jack Handey",
        profession: "Humorist",
        image: "url(https://www.dropbox.com/s/siuvidlmf3f1qgp/jack-handey.jpg?raw=1)"
    },
    {
        quote: "I love deadlines. I love the whooshing noise they make as they go by.",
        author: "Douglas Adams",
        profession: "Author",
        image: "url(https://www.dropbox.com/s/puta5vk07hvkx4e/douglas-adams.jpg?raw=1)"
    },
    {
        quote: "People say nothing is impossible, but I do nothing every day.",
        author: "A.A. Milne",
        profession: "Author",
        image: "url(https://www.dropbox.com/s/b8xn6rl48cw80xl/a-milne.jpg?raw=1)"
    },
    {
        quote: "What if everything is an illusion and nothing exists? In that case, I definitely overpaid for my carpet.",
        author: "Woody Allen",
        profession: "Director",
        image: "url(https://www.dropbox.com/s/hjb6v5pzfqogzhk/woody-allen.jpg?raw=1)"
    },
    {
        quote: "I used to sell furniture for a living. The trouble was, it was my own.",
        author: "Les Dawson",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/kgycnm56v6uvc9g/Les-Dawson.jpg?raw=1)"
    },
    {
        quote: "It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.",
        author: "Jerry Seinfeld",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/dc50ahgouaw4niy/jerry-seinfeld.jpg?raw=1)"
    },
    {
        quote: "My neighbour asked if he could use my lawnmower and I told him of course he could, so long as he didn't take it out of my garden.",
        author: "Eric Morecambe",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/utkd6ruw29la7x8/eric-morecambe.jpg?raw=1)"
    },
    {
        quote: "How long was I in the army? Five foot eleven.",
        author: "Spike Milligan",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/b4a030tent9js9t/spike-milligan.jpg?raw=1)"
    },
    {
        quote: "Before you judge a man, walk a mile in his shoes. After that who cares?… He’s a mile away and you’ve got his shoes!",
        author: "Billy Connolly",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/rb33izjtorenghi/billy-connolly.jpg?raw=1)"
    },
    {
        quote: "I always arrive late at the office, but I make up for it by leaving early.",
        author: "Charles Lamb",
        profession: "Author",
        image: "url(https://www.dropbox.com/s/qnve1w4d9hs1kly/charles-lamb.jpg?raw=1)"
    },
    {
        quote: "A pessimist is a person who has had to listen to too many optimists.",
        author: "Don Marquis",
        profession: "Humorist",
        image: "url(https://www.dropbox.com/s/aouvp98f4qjsoc4/don-marquis.jpg?raw=1)"
    },
    {
        quote: "Happiness is having a large, loving, caring, close-knit family in another city",
        author: "George Burns",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/uz6jc1lrx248hqe/george_burns.jpg?raw=1)"
    },
    {
        quote: "It’s only when you look at an ant through a magnifying glass on a sunny day that you realize how often they burst into flames.",
        author: "Harry Hill",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/m7kgvdu4cidkxr6/harry-hill.jpg?raw=1)"
    },
    {
        quote: "Never put off till tomorrow what you can do the day after tomorrow.",
        author: "Mark Twain",
        profession: "Writer",
        image: "url(https://www.dropbox.com/s/pmo9e7v0m3vanfe/mark-twain.jpg?raw=1)"
    },
    {
        quote: "My doctor told me that jogging could add years to my life. I think he was right. I feel ten years older already.",
        author: "Milton Berle",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/urmrmyj4gc141xl/milton-berle.jpg?raw=1)"
    },
    {
        quote: "When a man opens a car door for his wife, it’s either a new car or a new wife.",
        author: "Prince Philip",
        profession: "British Prince",
        image: "url(https://www.dropbox.com/s/y7af5ep7oyigd0u/prince-philip.jpg?raw=1)"
    },
    {
        quote: "Always borrow money from a pessimist. He won’t expect it back.",
        author: "Oscar Wilde",
        profession: "Poet",
        image: "url(https://www.dropbox.com/s/i1zblkp650bkfhs/oscar-wilde.jpg?raw=1)"
    },
    {
        quote: "I have learned from my mistakes, and I am sure I can repeat them exactly.",
        author: "Peter Cook",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/sa4mu10omrxd5x1/peter-cook.jpg?raw=1)"
    },
    {
        quote: "We spend the first twelve months of our children’s lives teaching them to walk and talk and the next twelve telling them to sit down and shut up.",
        author: "Phyllis Diller",
        profession: "Actress",
        image: "url(https://www.dropbox.com/s/8sbohs7yih4reyt/phyllis-diller.jpg?raw=1)"
    },
    {
        quote: "The man who smiles when things go wrong has thought of someone to blame it on.",
        author: "Robert Bloch",
        profession: "Writer",
        image: "url(https://www.dropbox.com/s/pc0hu710jp3h05b/robert-bloch.jpg?raw=1)"
    },
    {
        quote: "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you’re ugly too.",
        author: "Rodney Dangerfield",
        profession: "Comedian",
        image: "url(https://www.dropbox.com/s/ubvcgxsgyvzpipt/rodney-dangerfield.jpg?raw=1)"
    },
    {
        quote: "It’s true hard work never killed anybody, but I figure, why take the chance",
        author: "Ronald Reagan",
        profession: "40th U.S. President",
        image: "url(https://www.dropbox.com/s/4htttxrfx2bokq5/ronald-reagan.jpg?raw=1)"
    }


];
const container = document.querySelector('.container');
const quoteBox = document.querySelector('#quote-box');
const text = document.querySelector('#text');
const button = document.querySelector('#new-quote');
const author = document.querySelector('#author__text h3');
const profession = document.querySelector('#author__text p');
const image = document.querySelector('.author__image');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const fbIcon = document.querySelector('.fab');

let lastNum;

function getRandomInt() {
    let randInt = Math.floor(Math.random() * 23 + 1);
    if (lastNum === randInt) {
        return getRandomInt();
    }
    lastNum = randInt;
    return randInt;
}

function nextQuote() {
    if (event.type == 'click') {
        quoteBox.classList.add('animate');
        setTimeout(() => {
            quoteBox.classList.remove('animate');
        }, 1200);
    }   
    setTimeout(() => {
        const number = getRandomInt();
        text.innerHTML = quotes[number].quote;
        author.innerHTML = quotes[number].author;
        profession.innerHTML = quotes[number].profession;
        image.style = `background: ${quotes[number].image};
                       background-size: cover`;
        }, 600);
}

function colorChange() {
    setTimeout(() => {
        const hueNum = Math.floor(360 * Math.random());
        const color = `hsla( ${hueNum}, 50%, 50%, `;
        const complementary = `hsla( ${hueNum + 180}, 50%, 50%, `;
        console.log(color);
        container.style.backgroundColor = color + '.2 )';
        circle1.style.backgroundColor = color  + '1 )';
        circle2.style.backgroundColor = color + '.6 )';
        button.style.backgroundColor = complementary + ' 1 )';
        fbIcon.style.color = complementary + '.6 )';
    }, 600);
}


button.addEventListener('click', nextQuote);
button.addEventListener('click', colorChange);    
window.addEventListener('load', nextQuote);
window.addEventListener('load', colorChange);