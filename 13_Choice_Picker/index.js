
const tags = document.getElementsByClassName("tags")
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
});


function createTags(input){
    const tag = input.split(',')
    console.log(input)
}