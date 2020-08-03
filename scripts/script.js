// document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().includes("makes")
// document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?:makes) \d+/g)
// document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?!makes)(\d+) /g)
// document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?!makes)(\d+) /g).join().replace(/\s/g, '')





// gets first number
// +document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?!\W)(\d+)/g)[0]

// for (var i=0;i<10;i++){
//     var oldPortion
// }

// // replace nuber on page
// document.getElementsByClassName('recipe-details__text')[2].innerText = document.getElementsByClassName('recipe-details__text')[2].innerText.replace(/(?!\W)(\d+)/g, 6)

// // divide original portion with new portion
// console.log(+document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?!\W)(\d+)/g)[0] / 6)



function letsCook(yourPortion) {
    // var diff = 0;
    var diff = +document.getElementsByClassName('recipe-details__text')[2].textContent.toLowerCase().match(/(?!\W)(\d+)/g)[0] / yourPortion;
    document.getElementsByClassName('recipe-details__text')[2].innerText = document.getElementsByClassName('recipe-details__text')[2].innerText.replace(/(?!\W)(\d+)/g, yourPortion)

    // replace ingredient portions
    for (var i = 0; i < document.getElementsByClassName('ingredients-list__item').length; i++) {
        // document.getElementsByClassName('ingredients-list__item')[i].innerText = document.getElementsByClassName('ingredients-list__item')[i].innerText.replace(/(?!\W)(\d+)/g, ('$&') / diff)

        for (var i = 0; i < document.getElementsByClassName('ingredients-list__item')[i].innerText.match(/(?!\W)(\d+)/g).length; i++) {
            document.getElementsByClassName('ingredients-list__item')[i].innerText.replace(/(?!\W)(\d+)/g, +document.getElementsByClassName('ingredients-list__item')[0].innerText.match(/(?!\W)(\d+)/g)[0] / diff)

        }
    }

}