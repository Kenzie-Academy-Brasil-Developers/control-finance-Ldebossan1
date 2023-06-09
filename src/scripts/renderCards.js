import { valuesCategory } from './valuesData.js'
import { handleDelete } from './index.js'
import { handleModal } from './modal.js'

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

const sumValues = (arrayList) => {
    const valueStatus = document.querySelector('.total__amount')

    const totalSum = arrayList.reduce((acc, actual) => {
        return acc + Number(actual.value)
    }, 0)

    valueStatus.innerText = totalSum.toFixed(2).replace('.', ',')
}

const verifyEmpty = () => {
    const list = document.querySelector('.list__values')
    const listEmpty = document.querySelector('.list__empty')

    if (list.innerHTML == '') {
        listEmpty.style.display = 'flex';
    } else {
        listEmpty.style.display = "none";
    }
}

const mouseOverDelete = () => {
    const buttonDelete = document.querySelectorAll('.delete__value > img');

    buttonDelete.forEach((button) => {
        button.addEventListener('mouseover', (event) => {
            const classImgOn = event.target.setAttribute('class', 'img__trash--on');
            const srcImgOn = event.target.setAttribute('src', './src/assets/trash-icon-on.svg');
        });

        button.addEventListener('mouseleave', (event) => {
            const classImgOff = event.target.setAttribute('class', 'img__trash--off');
            const srcImgOff = event.target.setAttribute('src', './src/assets/trash-icon-off.svg');
        });
    });
};

export const searchCategory = (array, searchElement) => {

    const findCategory = array.filter((category) => {
        if (category.categoryID === searchElement) {
            return category
        }
    })

    return findCategory
}
