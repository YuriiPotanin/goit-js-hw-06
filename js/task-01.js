
const items = document.querySelectorAll(".item");
console.log("Number of categories: " + items.length);

const arr = Array.from(items);

for (const item of arr) {
   
    console.log(`Category: ${item.firstElementChild.innerHTML}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
        
}
