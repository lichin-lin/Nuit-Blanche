import bike from '../static/image/bike.jpg';
import bubble from '../static/image/bubble.jpg';
import dance from '../static/image/dance.jpg';
import peter from '../static/image/peter.jpg';

export const chapterPoints = {
    'baker': {
        bearing: 27,
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        pitch: 20
    },
    'aldgate': {
        duration: 3000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'london-bridge': {
        bearing: 90,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    'woolwich': {
        bearing: 90,
        center: [0.05991101, 51.48752939],
        zoom: 12.3
    },
    'gloucester': {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'caulfield-gardens': {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3
    },
    'telegraph': {
        bearing: 90,
        center: [-0.10669358, 51.51433123],
        zoom: 17.3,
        pitch: 40
    },
    'charing-cross': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 14.3,
        pitch: 20
    }
};

export const chapterContents = {
  'baker': {
    type: 'left',
    title: 'Cycling Wheel : The Orchestra',
    content: "“To see that wheel turning was very soothing, very comforting…I enjoyed looking at it, just as I enjoy looking at the flames dancing in a fireplace.”"
  },
  'aldgate': {
    type: 'long',
    title: '小事無差別｜No-Style Jam',
    content: "小事無差別\nYour Courage, Your Cheerfulness, Your Love Will Bring City FREEDOM.\n當代藝術是自由的，愛不分彼此，不分表演形式。我們在城市裡角色扮演，在街頭舞蹈、歌唱，一起思考能在這個城市做些什麼，又能留下什麼。Love is love，藝術也是一樣，沒有差別。"
  },
  'london-bridge': {
    type: 'right',
    title: '白晝那道光｜Nuimière',
    content: '騎樓下與光交會，會有什麼樣的火花？'
  },
  'woolwich': {
    type: 'left',
    title: 'Peter 智堯',
    content: '厭世 | 攝影師 | 最帥那種'
  },
  'gloucester': {
    type: 'right',
    title: '',
    content: ''
  },
  'caulfield-gardens': {
    type: 'left',
    title: '',
    content: ''
  },
  'telegraph': {
    type: 'long',
    title: '',
    content: ''
  },
  'charing-cross': {
    type: 'right',
    title: '',
    content: ''
  }
}

export const chapterImage = {
  'baker': {
    imgSrc: bike
  },
  'aldgate': {
    imgSrc: dance
  },
  'london-bridge': {
    imgSrc: bubble
  },
  'woolwich': {
    imgSrc: peter
  },
  'gloucester': {
    imgSrc: 'src/static/image/food.jpg'
  },
  'caulfield-gardens': {
    imgSrc: 'src/static/image/song.jpg'
  },
  'telegraph': {
    imgSrc: 'src/static/image/bike.jpg'
  },
  'charing-cross': {
    imgSrc: 'src/static/image/bike.jpg'
  }
}
