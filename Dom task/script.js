let unique = document.getElementById('unique')
unique.style.backgroundColor = 'blue'
unique.style.fontSize = '20px'

let classname = document.getElementsByClassName('classname')
for(i=0;i<classname.length;i++){
    classname[1].style.color ='red'
    classname[3].style.color ='red'
}

let tagname = document.getElementsByTagName('h4')
for(i=0;i<tagname.length;i++){
    tagname[i].style.border = '2px solid black'
}

let selector = document.querySelector('h5')
selector.style.fontStyle = 'italic'

let selectors = document.querySelectorAll('.selectors')
// for(i=0;i<selectors.length;i++){
//     selectors[0].style.margin 
// }
selectors[2].style.margin = '50px'
selectors[0].style.margin = '50px'

let quote = document.getElementById('quote')
quote.style.backgroundColor = 'orange'
quote.style.margin = '50px'
quote.style.border = '4px solid black'
quote.style.color = 'green'
quote.style.fontSize = '30px'
quote.style.fontStyle = 'bold'
