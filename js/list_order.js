const list = document.getElementById('js_list_to_order');
const items = Array.from(list.children);

items.sort(function(a, b) {
    if (a.firstElementChild.firstElementChild.textContent < b.firstElementChild.firstElementChild.textContent)
        return -1;
    if (a.firstElementChild.firstElementChild.textContent > b.firstElementChild.firstElementChild.textContent)
        return 1;
    return 0;
});

// Ajouter les éléments triés à la liste
items.forEach(function(item) {
    list.appendChild(item);
});