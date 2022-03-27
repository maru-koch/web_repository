const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    console.log(e)
    insert.innerHTML = `
    <div class="keys">
        ${e.key === ' ' ? 'Space': e.key}
        <small>event.key</small>
    </div>
    <div class="keys">
        ${e.key + e.code}
        <small>event.KeyCode</small>
    </div>
    <div class="keys">
        ${e.code}
        <small>event.code</small>
    </div>

    `
})