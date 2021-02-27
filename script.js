function deleteByKey(arr, key) {
    let newList = []
    for( let c in arr) {
        if( c != key) {
            newList.push(arr[c])
        }
    }
    return newList
}
function deleteByItem(arr, itm) {
    let newList = []
    for( let c in arr) {
        if( arr[c] !== itm) {
            newList.push(arr[c])
        }
    }
    return newList
}
function sortNumber(arr, inv=false) {
    let num = arr[0]
    let newList = []
    while( arr.length > 0) {
        for( let c in arr) {
            if( inv? arr[c] > num : arr[c] < num) {
                num = arr[c]
            }
        }
        arr = deleteByKey(arr, arr.indexOf(num))
        newList.push(num)
        num = arr[0]
    }
    return newList
}





const input_num = document.querySelector( 'input#txtnum')
const add_button = document.querySelector( 'button#btn')
const res = document.querySelector( 'div#res')
let main_list = []

add_button.addEventListener( 'click', function() {
    main_list.push( Number(input_num.value))
    res.innerHTML = `<p> Lista principal: <span class="list"> [${main_list}] </span> </p>
        <ul>
            <li> Lista na ordem: <span class="list">[${sortNumber(main_list)}] </span> </li>
            <li> Lista na ordem invertida: <span class="list"> [${sortNumber(main_list, inv=true)}] </span> </li>
            <li> Deletando o item <span class="list">${main_list[0]}</span> da lista: <span class="list"> [${deleteByItem(main_list, main_list[0])}] </span> </li>
            <li> Deletando o primeiro valor: <span class="list"> [${deleteByKey(main_list, 0)}] </span> </li>
        </ul>`
})