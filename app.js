function generatePassword(){
    var chars = "0123456789abcdefghijlkmnoprstuvyzABCDEFGHIJKLMOPRSTUVYZ!'^+%&/()=?_>£#$½{[]}\|",
    pass = "",
    passLenght = 12;

    for (let i = 0 ; i <= passLenght; i++){
        let rndm = Math.floor(Math.random()* chars.length)
        pass += chars.substring(rndm, rndm +1)
        document.getElementById('pass2').value = pass
    }
}