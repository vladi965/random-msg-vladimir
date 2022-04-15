const messages = [
    "Adrian",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura",
    "Vladimir",
    "Hener"
];

const randomMsg = () => {
    const messages = messages[Math.floor(Math.random() * messages.length)];
    console.log(messages);
};

module.exports = { randomMsg };
