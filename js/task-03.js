const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

// const imagesEl = document.querySelectorAll('.gallery');
// console.log(imagesEl);
// const imagesTags = ({ url, alt }) => `<li><img src='${url}' alt='${alt}' width='310'></li>`;
const list = document.querySelector(".gallery");

const createGallery = (array) => {
    list.classList.add('gallery')
    const imagesTags = ({ url, alt }) => `<li><img class="img" src='${url}' alt='${alt}' width='150'></li>`;
    const gallery = images.map(imagesTags).join(" ");
    list.insertAdjacentHTML('beforeend', gallery);
}


createGallery(images);