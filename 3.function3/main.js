function alphabetSort(message){
    // wirte your code here
    var words = message.split("");

    words.sort();
    for (var key in words)
        console.log(words[key]);

}
alphabetSort('hello'); // should return 'ehllo'
