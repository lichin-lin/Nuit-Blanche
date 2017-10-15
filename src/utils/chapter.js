import bike from '../static/image/bike.jpg';
import bubble from '../static/image/bubble.jpg';
import dance from '../static/image/dance.jpg';
import peter from '../static/image/peter.jpg';
import open from '../static/image/open.jpg';
import Yeemon from '../static/image/Yeemon.jpg';

export const chapterPoints = {
  'coffee': {
      duration: 2000,
      bearing: 0,
      center: [121.531480, 25.015886],
      speed: 0.6,
      zoom: 16
  },
  'open': {
    duration: 2000,
    bearing: 50,
    center: [121.538842, 25.017336],
    zoom: 15.5,
    pitch: 90
  },
  'bike': {
    duration: 2000,
    bearing: 27,
    center: [121.537063, 25.017156],
    zoom: 15.5,
    pitch: 20
  },
  'dance': {
      duration: 3000,
      center: [121.525570, 25.020024],
      bearing: 20,
      zoom: 16,
      pitch: 0
  },
  'bubble': {
      bearing: 90,
      center: [121.530183, 25.018610],
      zoom: 16,
      speed: 0.6,
      pitch: 40
  },
  'yeemon': {
      bearing: 45,
      center: [121.530668, 25.017844],
      zoom: 15.3,
      pitch: 20,
      speed: 0.5
  }
};

export const chapterContents = {
  'coffee': {
    type: 'left',
    title: 'Peter 智堯',
    content: '厭世 | 攝影師 | 最帥那種'
  },
  'open': {
    type: 'right',
    title: '開幕踩街｜Parade',
    content: '2017 台北白晝之夜 Nuit Blanche 將於 10/7（六）18:00，在以恢宏的臺大總圖書館為背景的「椰林大舞台」盛大開幕！'
  },
  'dance': {
    type: 'long',
    title: '小事無差別｜No-Style Jam',
    content: "小事無差別\nYour Courage, Your Cheerfulness, Your Love Will Bring City FREEDOM.\n當代藝術是自由的，愛不分彼此，不分表演形式。我們在城市裡角色扮演，在街頭舞蹈、歌唱，一起思考能在這個城市做些什麼，又能留下什麼。Love is love，藝術也是一樣，沒有差別。"
  },
  'bubble': {
    type: 'right',
    title: '白晝那道光｜Nuimière',
    content: '騎樓下與光交會，會有什麼樣的火花？'
  },
  'bike': {
    type: 'left',
    title: 'Cycling Wheel : The Orchestra',
    content: "“To see that wheel turning was very soothing, very comforting…I enjoyed looking at it, just as I enjoy looking at the flames dancing in a fireplace.”"
  },
  'yeemon': {
    type: 'long',
    title: '夜貓組｜Yeemao',
    content: '管他媽什麼饒不饒舌嘻不嘻哈的，既然踏上這艘賊船來就是要大鬧一場！'
  },
}

export const chapterImage = {
  'open': {
    imgSrc: open
  },
  'bike': {
    imgSrc: bike
  },
  'dance': {
    imgSrc: dance
  },
  'bubble': {
    imgSrc: bubble
  },
  'coffee': {
    imgSrc: peter
  },
  'yeemon': {
    imgSrc: Yeemon
  }
}
