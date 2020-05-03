var app = new Vue({
  el: '#app',
  data: {
    explanation:{
      vbind: 'v-bindはhtmlの属性にscriptで書いたデータをプロパティ名でバインド（データとhtmlの属性の結びつけ）する時に使用します。',
      vmodel: '<br/>v-modelもよく似た働きをしますが、v-modelはinputイベントが発生し、Enterキーを押すとchangeイベントが発生します。<br/>このタイミングでVueはv-modelに指定したプロパティに入力内容を代入します。<br/>つまりv-bindはモデル（データ）→view(html）への一方通行,<br/>v-modleはその双方向の繋がりを作ることができる点で異なります。',
      vfor: 'v-forはリスト型で定義したデータをバインドする際に用います。' ,
      vhtml: '<br/>v−htmlはテキストデータなどにhtml書式を適応する際などに使用<br/>ここらへんの文v-html使用して改行を機能させています。<br/>またそれぞれの内容はv-forを使用し、リストをバインドさせて表示しています',
      von: '<p>v-onはイベントバンドラを登録する際に使用します。<br/><strong>イベント</strong>とはクリックすると何かが表示されたりといった主にユーザの操作をきっかけとしてブラウザの中で発生する出来事のこと。<br/>そのイベントの発生を関数などで定めておきプログラムで検知して何らかの処理を行うものを<strong>イベントバンドラ</strong>と言います。<br/>今回であれば、「ボタンをクリックした時（イベント）、メッセージをアラートする（イベントバンドラ）」</p>'
    },
    userData: {
      vmodel: '自由に何か記入してみて！(←初期値の値)',
      vbind: '自由に何か記入してみて！(←初期値の値)',

    },
    show:true,
    url: {
      bootstrap_url: 'https://hackerthemes.com/bootstrap-cheatsheet/#form-inline',
      img_url: 'images/bootstrap4.png',
      event_url: 'https://blog-asnpce.com/technology/744'
    },
  items:[
    {
      // staticに画像いれるならこう',
      img: 'images/deer.png',
      title: '鹿',
      text: '奈良県の神様の使い鹿。車で引くと罰金です。<br/>でも歩道に普通に飛び出してきます。'
    },
    {
      img: 'images/buddha.png',
      title: '大仏',
      text: '鼻の穴は人が通れる大きさ。<br/>通ったら一年は風邪引かない。<br/>効力の期限一年＆風邪のみ。',
    },
    {
      img: 'images/naraduke.jpg',
      title: '奈良漬け',
      text: '美味しくない。なんの味かホンマによくわからん。<br/>奈良県民の3割が好き<br/>おじいちゃんおばあちゃんはみんな好き。',
    },
  ],
  eventItems:[
    {
      eventname: 'focus',
      eventEx: 'フォーム要素にフォーカスがあたった時'
    },
    {
      eventname: 'change',
      eventEx: 'フォーム要素の選択肢や入力内容が変更された時'
    },
    {
      eventname: 'submit',
      eventEx: 'フォームを送信しようとした時'
    },
    {
      eventname: 'click',
      eventEx: '要素をクリックした時'
    },
    {
      eventname: 'select',
      eventEx: 'ォーム要素内のテキストが選択された時'
    },
  ],
},
  methods:{
    sayit: function(comment) {
      alert(comment)
      }
    }
});
