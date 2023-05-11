let tbody = document.querySelector('tbody')
let form = document.querySelector('form')
let input_name = document.querySelector('.names')
let input_age = document.querySelector('.ages')
let modal = document.querySelectorAll('.modal_bg')
let form_edit = document.querySelector('.form_edit')
let form_edit_btn = document.querySelector('.xamro')


let data = new Date
data = data.getFullYear()
let arr = []

function reload(params) {
    let tr = document.createElement('tr')
    let num = document.createElement('td')
    let nomash = document.createElement('td')
    let year = document.createElement('td')
    let icons = document.createElement('td')
    let edit = document.createElement('img')
    let udalit   = document.createElement('img')

    tr.classList.add('tr')
    num.classList.add('num')
    nomash.classList.add('names')
    year.classList.add('year')
    icons.classList.add('icons')
    edit.classList.add('edit')
    udalit.classList.add('delet')

    for (let item of arr) {
        num.innerHTML = item.num
        nomash.innerHTML = item.name
        year.innerHTML = item.age
        edit.src = "img/outline_edit_black_24dp.png"
        udalit.src = "img/outline_delete_outline_black_24dp.png"

        tbody.append(tr)
        tr.append(num, nomash, year, icons)
        icons.append(edit, udalit)

        udalit.onclick = () => {
            arr = arr.filter(el => el.id !== item.id)
            tr.remove()
        }

        edit.onclick = () => {
            modal.style.display = 'block'
            console.log('click');
        }
    }

    close.onclick = () => {
        bg.style.display = 'none'
        modal.style.display = 'none'
    }

    form_edit_btn.onclick = () => {
        tr.remove()
    }


}


form.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: arr.length + 1,
        name: input_name.value,
        age: input_age.value
    }

    if (input_name.value.length !== 0 && input_age.value.length !== 0) {
        arr.push(list)
    }
    console.log(arr);
    reload()
}

form_edit.onsubmit = (event) => {
    event.preventDefault();
    bg.style.display = 'none'
    modal.style.display = 'none'
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: arr.length + 1,
        name: model_name.value,
        age: model_age.value
    }

    reload()
}



