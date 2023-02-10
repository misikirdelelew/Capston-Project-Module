// Object about the eotc section
const eotc = [
  {
    spimg: './assets/images/abunemahias4.jpg',
    Pname: 'Patriarch Abune Mathias',
    Churchinfo: '122 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
  {
    spimg: './assets/images/Saint-Abune-Paulos.jpg',
    Pname: 'Patriarch Abune Paulos',
    Churchinfo: '121 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
  {
    spimg: './assets/images/AbuneMerkoriosss.jpg',
    Pname: 'Patriarch Abune Merkorios',
    Churchinfo: '121 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
  {
    spimg: './assets/images/his-holiness-abune-teklehaimanot.jpg',
    Pname: 'Abune Teklehaimanot',
    Churchinfo: '120 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
  {
    spimg: './assets/images/abunetewofelos1.jpg',
    Pname: 'Abune Tewofelos',
    Churchinfo: '119 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
  {
    spimg: './assets/images/Abuna-basilios.jpg',
    Pname: 'Abune Basilios',
    Churchinfo: '118 th Patriarch of Oriential Orthodox Church',
    yearpat: 'Ethiopian Patriarch from 1900-1900',
  },
];

// for each loop to create the section as per the members

eotc.forEach((element, i) => {
  const thirdSection = document.querySelector('.third-section');
  const speakerCard = document.createElement('article');
  speakerCard.classList = 'featured-eotc';

  const spCard = `
    <div class="grid-two-parts">
        <div class="featured-photo-holder">
           <img src="${eotc[i].spimg}">
        </div>
        <div class="featured-text-holder">
            <h3 class="featured-name">${eotc[i].Pname}</h3>
            <h4 class="featured-info">${eotc[i].Churchinfo}</h4>
            <p class="featured-details">${eotc[i].yearpat}</p>
        </div>
    </div>
  `;
  speakerCard.innerHTML += spCard;
  thirdSection.appendChild(speakerCard);
});

// Hamburger menu code

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
