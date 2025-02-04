//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('infi-list');
    
    // Function to add new list items
    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(newItem);
        }
    }

    // Initially add 10 items to the list
    addListItems(10);

    // Check if the user has scrolled to the bottom
    list.addEventListener('scroll', () => {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // User has reached the bottom, add 2 more items
            addListItems(2);
        }
    });
});
