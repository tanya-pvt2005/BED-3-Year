const fs = require('fs').promises;
const readline = require('readline');

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const name = await ask("Name of list : ");
  const desc = await ask("Enter Description :  ");

  const info = [
    {
      listName: name,
      description: desc
    }
  ];

  await fs.writeFile('data.json', JSON.stringify(info, null, 2));
  console.log("Saved!");
}

start();
