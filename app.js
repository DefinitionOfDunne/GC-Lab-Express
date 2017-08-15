module.exports = function() {

    var collection = [
        "We build our programs the way we build our cities: over time, without a plan, on top of ruins. - Ellen Ullman",
        "What one programmer can do in one month, two programmers can do in two months. - Fred Brooks",
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
        "Rules of Optimization: Rule 1 - Don't do it. Rule 2 - (for experts only): Don't do it yet. - Michael A. Jackson",
        "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.- Niklaus Wirth",
        "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first. - Andy Hunt",
        "Java is to JavaScript as ham is to hamster. - Jeremy Keith",
        "One of the best programming skills you can have is knowing when to walk away for awhile. - Oscar Godson",
        "Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley",
        "In the happy land of elegant code and pretty rainbows, there lives a spoil-sport monster called inefficiency - Marijn Haverbeke"
    ];

    var randomized = collection[Math.floor(Math.random() * collection.length)];

    return randomized;

}