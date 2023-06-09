/* Desenvolva sua lógica aqui */

export const handleModal = () => {
    const modal = document.querySelector('#modal__controller');
    const buttonModal = document.querySelector('.button__register');

    const divModal = document.querySelector('.list__empty')
    divModal.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    });

    buttonModal.addEventListener('click', () => {
        modal.showModal();
        closeModal();
    });
};

export const closeModal = () => {
    const button = document.querySelector('.modal__controller--close');
    const modal = document.querySelector('#modal__controller');
    const cancel = document.querySelector('.button-cancel__values');

    button.addEventListener('click', () => {
        modal.close();
    });

    cancel.addEventListener('click', () => {
        modal.close();
    });
};

