const nav = document.querySelector('nav')
const navLi = document.querySelectorAll('nav ul li')
const bars = document.querySelector('.fa-bars')
const header = document.querySelector('header')
const dead_line = document.querySelectorAll('.dead-line h4')
const countdowns = document.querySelector('countdown')

// nav display 
bars.addEventListener('click', function() {
    nav.classList.toggle('nav_show')
})
// li hide 
const lists = document.querySelectorAll('.list')
lists.forEach(function(list) {
    list.addEventListener('click', function(l) {
        nav.classList.remove('nav_show')

        l.preventDefault()

        const id = l.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)


        const headerHeight = header.getBoundingClientRect().height
        const navHeight = nav.getBoundingClientRect().height
        const fixedHeader = header.classList.contains('headerheight')
        let position = element.offsetTop - headerHeight
        
        // if(!fixedHeader) {
        //         position = position - headerHeight
        //     }
            // if(headerHeight > 0) {
            //     position = position + navHeight
            // }
        
        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})

// footer date 
const footerDate = document.getElementById('date')
const currentD = new Date()
footerDate.innerHTML = currentD.toLocaleString('eng', {
    year: 'numeric' 
})
// scroll function 
window.addEventListener('scroll', function() {
    const to_top = document.querySelector('.to_top')
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect().height

    const scrollHeight = window.pageYOffset
    // to top scroll 
    if (scrollHeight > 500) {
        to_top.classList.add('show_to_top')
    }else {
        to_top.classList.remove('show_to_top')
    }
    // fixed header 
    if (scrollHeight > headerHeight) {
        header.classList.add('header_fixed')
        header.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }else {
        header.classList.remove('header_fixed')
        header.style.boxShadow ='none'
    }
})
// -------------giveaway---------- 
const weeks = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
]

const months = [
    'jan',
    'feb',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

const giveaway = document.querySelector('.giveaway')

const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = months[futureDate.getMonth()]
let weekday = weeks[futureDate.getDay()]
const date = futureDate.getDate()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const fututeTime = futureDate.getTime()
function getRemainingTime() {
    const todayTime = new Date().getTime()

    let currentTime = fututeTime - todayTime
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    // calculate all value 
    let days = currentTime / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((currentTime % oneDay) / oneHour);
    let minutes = Math.floor((currentTime % oneHour) / oneMinute);
    let seconds = Math.floor((currentTime % oneMinute) / 1000);

    const value = [days, hours, minutes, seconds]
    function format(dead) {
        if (dead < 10) {
          return (dead = `0${dead}`);
        }
        return dead;
    }

    dead_line.forEach(function(dead, index) {
        dead.innerHTML = format(value[index]);
    })
    // countdown 
    if (currentTime < 0) {
        clearInterval(countdown);
        countdowns.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
      }
}
// countdown 
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()


// ----------about tab----------- 

const about1 = document.querySelector('.about1')
const btns = document.querySelectorAll('.btn')
const contents = document.querySelectorAll('.content')
about1.addEventListener('click', function(ab) {
    const id = ab.target.dataset.id
    // console.log(id);

    if (id) {
        btns.forEach(function(btn) {
            btn.classList.remove('active')
            ab.target.classList.add('active')
        })

        contents.forEach(function(content) {
            content.classList.remove('active')
            const element = document.getElementById(id)
            element.classList.add('active')
        })

    }
})

// ----------service-----------------
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./image/food/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./image/food/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./image/food/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./image/food/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./image/food/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./image/food/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./image/food/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./image/food/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./image/food/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const servicePage = document.querySelector('.service_container')

  window.addEventListener('DOMContentLoaded', function() {
    contentLoaded(menu)
    contentLoadedBtn()
  })

  function contentLoaded(contents) {
    let contentLoad = contents.map(function(item) {

        return `
            <div class="container">
                <!-- image container  -->
                <div class="image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <!-- content  -->
                <div class="content">
                    <!-- name / price -->
                    <div class="name_price">
                        <h1>${item.title}</h1>
                        <h1 class="price">${item.price}</h1>
                    </div>
                    <!-- content text  -->
                    <p class="content_text">
                        ${item.desc}
                    </p>
                </div>
            </div>`
    })

    contentLoad = contentLoad.join('')
    servicePage.innerHTML = contentLoad
}

function contentLoadedBtn() {
    const contentBtn = document.querySelectorAll('.s_btn')

    contentBtn.forEach(function(conBtn) {
        conBtn.addEventListener('click', function(e) {
            const btnid = e.currentTarget.dataset.food
            const menuCategory = menu.filter(function(menuitem) {

                if (menuitem.category === btnid) {
                    return menuitem
                }
            })
            if (btnid === 'all') {
                contentLoaded(menu)
            }
            else{
                contentLoaded(menuCategory)
            }
        })
    })
}

// ---------slider-------------- 

const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.slider_btn .nextbtn')
const prevBtn = document.querySelector('.slider_btn .prevbtn')

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
}) 
let counter = 0
nextBtn.addEventListener('click', function() {
    counter++
    carousel()
})
prevBtn.addEventListener('click', function() {
    counter--
    carousel()
})

function carousel() {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
}