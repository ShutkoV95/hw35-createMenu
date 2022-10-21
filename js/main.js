const doc = document;
const menu = doc.querySelector('.menu');
const data = [
    {name: 'home', link: '#',},
    {name: 'About', link: '#',}, 
    {name: 'Gallery', link: '#',}, 
    {name: 'Contact', link: '#',},  
];

createMenu(menu, data, function(obj) {
    return `
        <li class = "menu_item">
            <a href="${obj.link}">${obj.name}</a>
        </li>`;
});


function createMenu (parent, data, callback) {
    const htmlEls = 
        data
            .map(function(item) {
                const info = item.title;
                return  callback(item, info);
            })
            .join('');

        parent.innerHTML = htmlEls;
}
