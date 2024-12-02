let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')
let nameFile = document.getElementById('nameFile')
let name = document.getElementById('name')


name.style.display = "none"

const generatePassword = (len) =>{
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()-_+={[}]|\:;'<>,.?/`~"
    const data = lowerAlphabet+upperAlphabet+numeric+symbol;


    let generator = '';
    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}
const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value  =newPassword;
    name.style.display ="block"
    // setTimeout(() =>(
    //     alert('password has a been generated!')
    // ),1000)
    
}
const savePassword = () => {
    let namaFile = nameFile.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya : ${document.title}`))
    saveButton.setAttribute('download',`${namaFile}.txt`)
    // setTimeout(() =>(
    // alert('password berhasil disimpan')
    // ),1000)

}