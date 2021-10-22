let $character = document.getElementById('emojis')
for (let i=129410; i<=129510; i++) {
    $character.innerHTML += `<div> 
                                <div>&#${i};</div> 
                                <p>${i}</p>
                            </div>`
}