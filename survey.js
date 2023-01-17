const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `What's your name? Nicknames are also acceptable :) `,
  (nickname) => {
    rl.question(`What's an activity you like doing? `, (activity) => {
      rl.question(`What do you listen to while doing that? `, (listen) => {
        rl.question(
          `Which meal is your favourite (eg: dinner, brunch, etc.) `,
          (meal) => {
            rl.question(
              `What's your favourite thing to eat for that meal? `,
              (food) => {
                rl.question(
                  `Which sport is your absolute favourite? `,
                  (sport) => {
                    rl.question(
                      `What is your superpower? In a few words, tell us what you are amazing at! `,
                      (superpower) => {
                        console.log(
                          `Hi, I'm ${nickname}! I like ${activity} while listening to ${listen}. My favourite meal is ${meal} because I can eat ${food}. I also enjoy ${sport}. Finally, my superpower is: ${superpower}.`
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
