console.clear();

const randomNamePicker = () => {
  const students = [
    "Elaine",
    "Fakhara",
    "Giselle",
    "Gizem",
    "Gladys",
    "Joseph",
    "Lia",
    "Mihaela",
    "Moataz",
    "Mouhammad",
    "Nikola",
    "Nikolaus",
    "Satyajit",
    "Sorina",
    "Yu-An",
  ];

  const randomPresenter = Math.floor(Math.random() * students.length);

  const quotesArr = [
    `I am so clever that sometimes I don’t understand a single word of what I am saying.`,
    `People say nothing is impossible, but I do nothing every day.`,
    `I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.`,
    `When life gives you lemons, squirt someone in the eye.`,
    `I believe that if life gives you lemons, you should make lemonade… And try to find somebody whose life has given them vodka, and have a party.`,
    `Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.`,
    `I’m not insane. My mother had me tested.`,
    `My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.`,
    `My IQ test results came back. They were negative.`,
    `Their first daughter was born with a silver spoon in her mouth. Now they’re hoping for triplets so they can have a whole set.`,
    `If athletes get athlete’s foot, what do astronauts get? Missile toe.`,
    `Why did the teddy bear say no to dessert? Because he was stuffed.`,
    `Apparently I snore so loudly that it scares everyone in the car I'm driving.`,
    `When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.`,
    `eBay is so useless. I tried to look up lighters and all they had was 13,749 matches.`,
    `Just burned 2,000 calories. That's the last time I leave brownies in the oven while I nap.`,
    `My wife just found out I replaced our bed with a trampoline; she hit the roof.`,
    `Bazzinga!`,
  ];

  const randomQuote = Math.floor(Math.random() * quotesArr.length);

  const emojiArr = [
    "😈",
    "😂",
    "🤔",
    "🤐",
    "🤫",
    "🤷",
    "🥷",
    "🤣",
    "🙃",
    "😉",
    "😁",
    "😛",
    "🤪",
    "😎",
    "😌",
  ];

  const randomEmoji = Math.floor(Math.random() * emojiArr.length);

  const presenter = students[randomPresenter];
  console.log(
    `JavaScript: Hey ${presenter} 😈, you are the chosen one! May the force be with you 😈`
  );
  return `\n${students[randomPresenter]}: ${quotesArr[randomQuote]} ${emojiArr[randomEmoji]} \n`;
};

console.log(randomNamePicker());
