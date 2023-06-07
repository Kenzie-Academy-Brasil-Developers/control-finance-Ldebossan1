import { valuesCategory } from './valuesData.js'
import { handleDelete } from './index.js'

export const render = ((arrayValues) => {
    const ulListValues = document.querySelector('.list__values')
    ulListValues.innerHTML = ''

    arrayValues.forEach((value) => {
        const card = createCard(value)
        ulListValues.appendChild(card)
    })

    verifyEmpty()
    mouseOverDelete()
    sumValues(arrayValues)
    handleDelete(arrayValues)
})

const createCard = ({ id, value, categoryID }) => {
    const card = document.createElement('li')
    const valueTag = document.createElement('p')
    const div = document.createElement('div')
    const entry = document.createElement('p')
    const deleteTag = document.createElement('img')
    const figure = document.createElement('figure')

    deleteTag.classList.add('img__trash--off')
    figure.classList.add('delete__value')
    entry.classList = 'button__greylow button-type__category'

    deleteTag.src = './src/assets/trash-icon-off.svg'
    deleteTag.alt = 'trash icon'
    deleteTag.dataset.deleteId = id

    valueTag.innerText = `R$ ${Number(value).toFixed(2).replace('.', ',')}`
    entry.innerText = valuesCategory[categoryID]
    entry.dataset.entryId = categoryID

    figure.appendChild(deleteTag)
    div.append(entry, figure)
    card.append(valueTag, div)

    return card

}