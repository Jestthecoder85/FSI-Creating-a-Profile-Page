
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let header3 = document.createElement('h3')
header3.append('Description:')
dogDetails.append(header3)

let pTag = document.createElement('p')
pTag.append(`This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her, and
dislikes other animals.`)
dogDetails.append(pTag)

let header4 = document.createElement('h3')
header4.append('Feeding Times:')
dogDetails.append(header4)

let ul = document.createElement('ul')

let times = [ '9:00 am', '12:00 pm', '5:00 pm' ]

for(let i = 0; i < times.length; i++) {
    let li = document.createElement('li');
    li.textContent = times[i]
    ul.append(li)

}

dogDetails.append(ul)
