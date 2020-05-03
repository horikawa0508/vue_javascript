var app = new Vue({
  el: '#app1',
  data: {
    akina:{
      img: 'images/carouselImage/akina.png',
      alt: 'アキナの画像です。',
      text: '...',
      img1: 'images/carouselImage/akina1.png',
      alt1: 'アキナの画像です。',
      img2: 'images/carouselImage/akina2.png',
      alt2: 'アキナの画像です。',
      img3: 'images/carouselImage/akina3.png',
      alt3: 'アキナの画像です。',
    },
    wagyu: {
        img: 'images/carouselImage/wagyu.jpg',
        alt: '和牛の画像です。',
        text: '...',
        img1: 'images/section/wagyu.png'
      },
    ainsyutain:{
        img: 'images/carouselImage/ainsyutain.jpg',
        alt: 'アインシュタインの画像です。',
        text: '...',
        img1: 'images/section/ainsyutain.png',
        img2: 'images/section/ainsyutain2.png',
        alt2: '河井ゆずるの画像です',
        text2: 'かっこいいのになんか笑えるのが河井ゆずる'
      },
      carditems: [
        {
          img: 'images/cardImages/akina.png',
          h2Class: 'alert alert-primary',
          name: 'アキナ',
          eachName: '山名文和:左<br/>秋山賢太:右',
          text: '別のコンビでデビューした山名を見て秋山は「コイツとやりたい」と考えていた。<br/>山名コンビを解散をしり、秋山が「山名を誰かに取られる！」と自分のコンビを解散し、山名を誘ってコンビ結成！',
          link1: 'https://profile.yoshimoto.co.jp/talent/detail?id=3475',
          link2: 'https://natalie.mu/owarai/artist/10437',
          link3: 'https://www.youtube.com/channel/UC3eIbNXyEDPjLriza8fbIJA'
        },
        {
          img: 'images/cardImages/wagyu.png',
          h2Class: 'alert alert-success',
          name: '和牛',
          eachName: '水田信二:左<br/>川西賢志郎:右',
          text: '2006年、2人から同時期にそれぞれ相方を探しているという相談を受けていたバイク川崎バイクが仲を取り持ち出逢う。<br/>M-1では準優勝が続いているが、2019年を最後にM-1グランプリから卒業する意向を示した',
          link1: 'https://profile.yoshimoto.co.jp/talent/detail?id=2882',
          link2: 'https://natalie.mu/owarai/artist/7366',
          link3: 'https://www.youtube.com/results?search_query=%E5%92%8C%E7%89%9B'
        },
        {
          img: 'images/cardImages/ainsyutain.png',
          h2Class: 'alert alert-danger',
          name: 'アインシュタイン',
          eachName: '稲田直樹:左<br/>河井ゆずる:右',
          text: '『よしもと男前・ブサイク芸人ランキング』では稲田が3年連続ブサイク芸人1位、河井が初の男前芸人1位。稲田が自虐をツカミにするが、漫才に入ってからは会話のやりとりで笑いを取るスタイル。',
          link1: 'https://profile.yoshimoto.co.jp/talent/detail?id=3262',
          link2: 'https://natalie.mu/owarai/artist/9772',
          link3: 'https://www.youtube.com/channel/UCOQbu_y-fT-_ZvzCsz1r-kw'
        },
      ],
  },
  methods:{
    changeColor: function(idname){
      var obj = document.getElementById(idname);
      obj.style.color = '#fafafa';            //文字色を白にする
      obj.style.backgroundColor = '#a2d5f2';  //背景色を赤にする
    },
    changeColor2: function(idname){
      var obj = document.getElementById(idname);
      obj.style.color = '#8785a2';            //文字色を白にする
      obj.style.backgroundColor = '#ffc7c7';  //背景色を赤にする
    },
    changeColor3: function(idname){
      var obj = document.getElementById(idname);
      obj.style.color = '#155724';            //文字色を白にする
      obj.style.backgroundColor = '#d4edda';  //背景色を赤にする
    }
  }
})