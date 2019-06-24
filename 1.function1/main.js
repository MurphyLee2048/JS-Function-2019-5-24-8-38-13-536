function reverseString(message){

        var fuckString = "";
        for (var i = message.length - 1; i >= 0; i--) {
            fuckString += message[i];
        }
        console.log(fuckString)

}
reverseString('hello'); // should return 'olleh'
