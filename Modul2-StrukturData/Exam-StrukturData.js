//! Exam No.1
const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];

console.log(artistsAndSongs);


//! Exam No.2
const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);