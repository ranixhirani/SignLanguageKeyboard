const keys = document.querySelectorAll('.key');
const keyDisplay = document.getElementById('key-display');
const deleteKey = document.getElementById('delete');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key');
        keyDisplay.value += keyValue;
    });
});
deleteKey.addEventListener('click', () => {
    const currentValue = keyDisplay.value;
    if (currentValue !== null && currentValue !== undefined && currentValue.length > 0){
        keyDisplay.value = currentValue.slice(0, -1);
    }
});

