
const recipes = [
  {
    id: 1,
    name: "鶏肉の照り焼き",
    category: "主菜",
    cookingTime: 20,
    servings: 2,
    image: "images/teriyaki.jpg",
    description: "甘辛いタレが鶏肉によく絡む、ご飯に合う定番料理です。",
    ingredients: [
      { name: "鶏もも肉", amount: "300g" },
      { name: "醤油", amount: "大さじ2" },
      { name: "みりん", amount: "大さじ2" },
      { name: "砂糖", amount: "大さじ1" },
      { name: "サラダ油", amount: "小さじ1" }
    ],
    steps: [
      "鶏肉の余分な脂を取り、厚い部分に切り込みを入れます。",
      "フライパンに油を熱し、鶏肉を皮目から焼きます。",
      "裏返して火を通し、醤油・みりん・砂糖を加えます。",
      "タレを煮絡め、食べやすい大きさに切って完成です。"
    ]
  },
  {
    id: 2,
    name: "ナポリタン",
    category: "主食",
    cookingTime: 15,
    servings: 2,
    image: "images/pasta.jpg",
    description: "ケチャップの甘みと香ばしさが楽しめる定番パスタです。",
    ingredients: [
      { name: "スパゲッティ", amount: "200g" },
      { name: "ウインナー", amount: "4本" },
      { name: "玉ねぎ", amount: "1/2個" },
      { name: "ピーマン", amount: "2個" },
      { name: "ケチャップ", amount: "大さじ5" },
      { name: "サラダ油", amount: "大さじ1" }
    ],
    steps: [
      "スパゲッティを袋の表示時間どおりに茹でます。",
      "ウインナー、玉ねぎ、ピーマンを食べやすく切ります。",
      "フライパンで具材を炒め、ケチャップを加えます。",
      "スパゲッティを加えて全体を炒め合わせたら完成です。"
    ]
  },
  {
    id: 3,
    name: "肉じゃが",
    category: "主菜",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
    description: "じゃがいもとお肉を甘辛く煮込んだ、家庭料理の定番です。",
    ingredients: [
      { name: "牛肉または豚肉", amount: "150g" },
      { name: "じゃがいも", amount: "2個" },
      { name: "玉ねぎ", amount: "1個" },
      { name: "にんじん", amount: "1/2本" },
      { name: "醤油", amount: "大さじ2" },
      { name: "みりん", amount: "大さじ2" },
      { name: "砂糖", amount: "大さじ1" },
      { name: "水", amount: "200ml" }
    ],
    steps: [
      "肉と野菜を食べやすい大きさに切ります。",
      "鍋で肉を炒め、野菜を加えてさらに炒めます。",
      "水と調味料を加え、落とし蓋をして煮込みます。",
      "じゃがいもが柔らかくなったら完成です。"
    ]
  },
  {
    id: 4,
    name: "野菜たっぷり味噌汁",
    category: "汁物",
    cookingTime: 15,
    servings: 2,
    image: "images/miso-soup.jpg",
    description: "冷蔵庫にある野菜で作れる、ほっとする味噌汁です。",
    ingredients: [
      { name: "キャベツ", amount: "2枚" },
      { name: "にんじん", amount: "1/3本" },
      { name: "豆腐", amount: "150g" },
      { name: "だし汁", amount: "400ml" },
      { name: "味噌", amount: "大さじ2" }
    ],
    steps: [
      "野菜と豆腐を食べやすい大きさに切ります。",
      "鍋にだし汁と野菜を入れて煮ます。",
      "野菜が柔らかくなったら豆腐を加えます。",
      "火を弱めて味噌を溶き入れたら完成です。"
    ]
  },
  {
    id: 5,
    name: "オムライス",
    category: "主食",
    cookingTime: 25,
    servings: 2,
    image: "images/omurice.jpg",
    description: "ふんわり卵とケチャップライスを楽しめる定番料理です。",
    ingredients: [
      { name: "ご飯", amount: "400g" },
      { name: "鶏肉", amount: "100g" },
      { name: "玉ねぎ", amount: "1/2個" },
      { name: "卵", amount: "4個" },
      { name: "ケチャップ", amount: "大さじ6" },
      { name: "バター", amount: "10g" }
    ],
    steps: [
      "鶏肉と玉ねぎを小さく切ります。",
      "フライパンで鶏肉と玉ねぎを炒めます。",
      "ご飯とケチャップを加えて炒め、皿に盛ります。",
      "溶き卵をフライパンで半熟状に焼き、ご飯にのせて完成です。"
    ]
  }
  
];

