function movie(card, ticket, perc) {
    let cardSystem = 0;
    let ticketsOnly = 0;
    let counter = 0;

    while ((cardSystem + card) >= ticketsOnly) {
        counter++;
        ticketsOnly += ticket;
        cardSystem += ticket * Math.pow(perc, counter);
    }

    return counter;
};

console.log(movie(100, 10, 0.95));