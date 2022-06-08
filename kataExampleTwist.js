const populateWithCodeWars = () => {
    // let websites = [];

    // while (websites.length < 1000) {
    //     websites.push('codewars');
    // }

    // return websites;
    let websites = new Array(1000).fill('codewars');
    return websites
}

console.log(populateWithCodeWars());