const field = document.querySelector('.field');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

let itemCount = 0;

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = field.value;
    
    if (field.value.length === 0) {
        return;
    }

    item.classList.add('item');
    list.appendChild(item);
    field.value = '';

    item.addEventListener('click', () => {
        item.classList.add('done');
    });

    item.addEventListener('dblclick', () => {
        list.removeChild(item);
        itemCount = Math.max(0, itemCount - 1);

        if (itemCount < 6) {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    });

    itemCount++;
    
    if (itemCount >= 6) {
        alert(`You have too many things to do. The best practice is to add no more than 5-6 per day! Please, finish some of them first!`);
        btn.disabled = true;
        btn.classList.add('disabled');
    }
});