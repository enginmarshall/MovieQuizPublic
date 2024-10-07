This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Adding a new service with NSSM

1. CD into the directory C:\Program Files\nssm-2.24\win64 and run command `nssm install`
2. Add the path `C:\Program Files\nodejs\npm.cmd`to the field `path`
3. Add the path to the project's catalog ex: `D:\Githubprojects\moviequizadmin`
4. Add the command `run start` to the field `Arguments`.
5. Add a name for the new service in the field `Service name`.
6. To delete a service: use the command `sc delete [servicename]`

# How to change password of a user inMYSQL

ALTER USER 'root'@'localhost' IDENTIFIED BY 'Password';FLUSH PRIVILEGES;

# How to give MYSQL access to an user:

Run this command
GRANT ALL ON _._ TO 'root'@'' IDENTIFIED BY 'Password';FLUSH PRIVILEGES;

## Instruktioner på svenska

Detta är ett spel som går ut på att gissa vilken film bilden som visas bakom ett rutnät är från genom att ta bort en ruta i rutnätet åt gången.
Man kan spela spelet ensam eller i grupp.

## Beskrivning för spelknapparnas funktion

1. Knappen "Start Game"
   Startar spelet. Detta kommer göra att ett rutnät med 108 rutor visas.

2. Knappen "SHOW MOVIE TITLE"
   Visar filmens titel till höger om knappen. Det rekommenderas att facilitatorn gömmer skärmen för de tävlande när hen gör detta.
   Det går att klicka på knappen "HIDE MOVIE TITLE" för att dölja filmens titel efter att ha visat filmens titel.

3. Knappen "SHOW MOVIE PICTURE"
   Visar den dolda bilden tar bort hela rutnätet. OBS! Det går inte att dölja bilden igen när man väl visat den utan man får då klicka på knappen "NEXT MOVIE" för att välja en annan film.

4. Knappen "NEXT MOVIE"
   Väljer ny slumpvist vald film och gömmer den valda filmens bild bakom ett nytt rutnät och startar nästa omgång.

## Att spela i grupp:

1. Dela upp er i två lag. "Lag 1" och "Lag 2" exempelvis och utse en Facilitator som ska kontrollera spelet genom att klicka på knapparna som visas i gränssnittet.

2. Lag 1 väljer viken ruta som ska tas bort genom att säga numret på rutan och facilitatorn klickar på rutan med det valda numret. Nu får Lag 1 försöka gissa vilken film bilden är
   ifrån genom att kommunicera med varandra utan att det andra laget får höra. När lag 1 kommer överens om vilken film det är, får Lag 1 göra en gissning. Är det rätt gissning, får Lag 1 ett poäng.
   Facilitatorn får då klicka på knappen "SHOW MOVIE TITLE" för att visa den dolda bilden bakom rutnätet och sedan klicka på knappen "NEXT MOVIE" för att starta nästa omgång.

3. Om Lag 1s gissning inte är rätt, är det Lag 2s tur och Lag 2 får välja att ta bort en ruta i rutnätet och försöka sedan gissa vilken film det är genom att endast kommunicera inom sitt eget team.
   Lag 2 får sedan göra en gissning och om det inte är rätt, är det återigen Lag 1s tur att gissa genom att först ta bort en ruta precis som tidigare. Om Lag 2 gissar rätt, får Lag 2 ett poäng i stället naturligtvis.

4. Man fortsätter alltså att ta bort rutor tills ett av lagen gissar rätt men endast det lag var tur det är får göra gissningar. Båda lagen måste vänta med att göra gissningar tills det är deras tur. Om man gissar
   rätt när det är det andra lagets tur, får det andra laget ett poäng så var uppmärksamma på vilket lags tur det är att gissa. :)

5. man spelar tills man tycker att det är tråkigt att spela och räknar i slutet ihop de poäng som båda lagen har samlat för att utse en vinnare.

# Mycket nöje!

## Instructions in English

This is a game that involves guessing which movie the image shown behind a grid is from by removing one square in the grid at a time.
You can play the game alone or as a group.

## Description of the function of the game buttons

1. "Start Game" button
   Starts the game. This will cause a grid of 108 squares to appear.

2. "SHOW MOVIE TITLE" button
   Shows the movie title to the right of the button. It is recommended that the facilitator hides the screen from the contestants when doing this. You can click the "HIDE MOVIE TITLE" button to hide the movie title after showing it.
   "SHOW MOVIE PICTURE" button
   Showing the hidden image removes the entire grid. ATTENTION! It is not possible to hide the image again once you have shown it, but you must then click on the "NEXT MOVIE" button to select another movie.

3. "NEXT MOVIE" button
   Starts the next round by picking a new randomly selected movie and then hiding the movie's image behind a new grid.

## How to play as a group

1. Divide into two teams. "Team 1" and "Team 2" for example and choose Facilitator to control the game by clicking the buttons displayed in the interface.
2. Team 1 chooses which box to remove by saying the number on the box and the facilitator clicks on the box with the selected number. Now Team 1 has to try to guess which movie the picture is from by communicating with each other without the other team being able to hear (use a private chatroom in Microsoft Teams, Zoom, etc. to communicate if you are playing at work or school).
   Once Team 1 agrees on which movie it is, Team 1 makes a guess. If the guess is correct, Team 1 wins a point.
   The facilitator can then click the "SHOW MOVIE TITLE" button to show the hidden picture behind the grid and then click the "NEXT MOVIE" button to start the next round.

3. If Team 1's guess is not correct, it is Team 2's turn, and Team 2 gets to choose to remove a square from the grid and then try to guess which movie it is by communicating only within their team.
   Team 2 then gets to make a guess and if it's not right, it's Team 1's turn again to guess by first removing a square just like before. If Team 2 guesses correctly, Team 2 wins a point instead of course.

4. Continue to remove squares until one of the teams guesses correctly, but only the team which it's turn it is can make guesses. Both teams must wait to make guesses until it is their turn. If you guess right when it's the other team's turn, the other team gets a point so pay attention to which team's turn it is to guess. :)
5. Play until you're bored and add up the points that both teams have accumulated to determine a winner.

# Have fun!
