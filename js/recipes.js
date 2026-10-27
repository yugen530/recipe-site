
const recipes = [
  {
    id: 1,
    name: "麻婆豆腐(丸美屋の麻婆豆腐の素使用)", // 料理名
    category: "主菜", //料理分類
    cookingTime: 60, //調理時間
    servings: 3, // 何人前
    image: "images/Mabodoufu.jpeg",
    ingredients: [
      { name: "玉ねぎ", amount: "1/4個" },
      { name: "にんじん", amount: "1/2本" },
      { name: "きざみねぎ", amount: "適量" },
      { name: "豆腐", amount: "1丁" },
      { name: "丸美屋麻婆豆腐の素(中辛)", amount: "1袋" },
      { name: "トロミ粉", amount: "1袋" },
      { name: "ひき肉", amount: "150g" },
      { name: "水(麻婆豆腐用)", amount: "180mL" },
      { name: "水(トロミ粉液用)", amount: "大さじ2杯" }
    ],
    steps: [
      "玉ねぎ1/4切れとにんじん1/2切れをみじん切りにします。",
      "豆腐1丁を1.5cm角ぐらいにカットします。",
      "トロミ粉を大さじ2の水に溶き、トロミ粉液を作ります。",
      "フライパンに油を敷き、中火で玉ねぎが飴色になるまでみじん切りにした玉ねぎとにんじんを炒めます。",
      "ひき肉150gをフライパンに入れて茶色くなるまで炒めます。",
      "フライパンに麻婆豆腐の素1回分、水180mL、豆腐を入れて軽く混ぜながらひと煮立ちさせます。",
      "いったん火を止め、トロミ粉液をよくかき混ぜながら少しずつ回しかけ、全体を混ぜ合わせます。",
      "再度火をつけ、中火で全体を混ぜながら煮込み、トロミがついたら完成。、お好みできざみねぎをトッピングしてください。"
    ]
  },
  {
    id: 2,
    name: "ミートソーススパゲティ(作成中)",
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
    name: "ハヤシライス(作成中)",
    category: "主食",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
    name: "味噌汁",
    category: "汁物",
    cookingTime: 15,
    servings: 2,
    image: "images/miso-soup.jpg",
    description: "冷蔵庫にある野菜で作れる、ほっとする味噌汁です。",
    ingredients: [
      { name: "玉ねぎ", amount: "1/4個" },
      { name: "豆腐", amount: "1/4丁" },
      { name: "乾燥わかめ", amount: "適量" },
      { name: "乾燥わけさ", amount: "適量" },
      { name: "だし入り味噌", amount: "32g" },
      { name: "水", amount: "320cc" }
    ],
    steps: [
      "玉ねぎ1/4個をくし切りにします。",
      "水320ccを鍋に入れて、乾燥わかめと玉ねぎをいれて煮立たせます。",
      "水が沸騰したら火を止めて、沸騰が治まったら味噌を溶き入れます。",
      "火を弱めて味噌を溶き入れたら、沸騰する直前まで加熱して完成です。"
    ],
    sourceUrl: "https://www.marukome.co.jp/recipe/misosoup/recipe/easy/",
  },
  {
    id: 5,
    name: "ヨーグルトケーキ",
    category: "デザート",
    cookingTime: 30,
    servings: 2,
    image: "images/YogurtCake.jpeg",
    ingredients: [
      { name: "ビスケット", amount: "100g" },
      { name: "バター", amount: "50g" },
      { name: "牛乳", amount: "100mL" },
      { name: "ゼラチン", amount: "10g" },
      { name: "無糖ヨーグルト", amount: "400g" },
      { name: "レモン汁", amount: "大さじ1"}
    ],
    steps: [
      "ビスケットを細かく砕いて、溶かしバターを加えてよくかき混ぜる。溶かしバターは電子レンジでラップをして作る。(バターは跳ねます)",
      "生地を型に敷き詰めて、そこが平らコップやスプーンを使って押し固める。",
      "牛乳100mLを600Wで40~50秒温めて、ゼラチン10gを入れて溶かす。",
      "3. に砂糖60~70g、無糖ヨーグルト400g、レモン汁大さじ1杯の順に入れてよく混ぜる。",
      "型に流しいれて冷やし固めて完成。"
    ]
  },
  {
    id: 6,
    name: "ベイクドチーズケーキ(作成中)",
    category: "デザート",
    cookingTime: 120,
    servings: 2,
    image: "images/BakedCheeseCake.jpeg",
    ingredients: [
      { name: "ビスケット", amount: "100g" },
      { name: "バター", amount: "50g" },
      { name: "牛乳", amount: "100mL" },
      { name: "ゼラチン", amount: "10g" },
      { name: "無糖ヨーグルト", amount: "400g" },
      { name: "レモン汁", amount: "大さじ1"}
    ],
    steps: [
      "ビスケットを細かく砕いて、溶かしバターを加えてよくかき混ぜる。溶かしバターは電子レンジでラップをして作る。(バターは跳ねます)",
      "生地を型に敷き詰めて、そこが平らコップやスプーンを使って押し固める。",
      "牛乳100mLを600Wで40~50秒温めて、ゼラチン10gを入れて溶かす。",
      "3. に砂糖60~70g、無糖ヨーグルト400g、レモン汁大さじ1杯の順に入れてよく混ぜる。",
      "型に流しいれて冷やし固めて完成。"
    ],
    sourceUrl: "https://delishkitchen.tv/recipes/135430820792893825",
  },
  {
    id: 7,
    name: "プリン",
    category: "デザート",
    cookingTime: 180,
    servings: 2,
    image: "images/Pudding.jpeg",
    ingredients: [
      { name: "グラニュー糖(カラメル用)", amount: "60g" },
      { name: "水(カラメル用)", amount: "大さじ1杯" },
      { name: "お湯(カラメル用)", amount: "大さじ1杯" },
      { name: "牛乳(プリン用)", amount: "400cc" },
      { name: "卵(プリン用)", amount: "2個" },
      { name: "グラニュー糖(プリン用)", amount: "80g"}
    ],
    steps: [
      "鍋にグラニュー糖60g、水を大さじ1杯入れて中火にかけ、茶色くなるまで煮詰める。",
      "茶色くなったら火を止めてお湯大さじ1杯を加えて混ぜる。(跳ねるのでやけど注意)",
      "カラメルソースが鍋に冷えて固まる前に耐熱容器に均等に流しいれる。",
      "ボウルに卵2個を割り入れてほぐし、グラニュー糖80g加えて混ぜる。",
      "鍋に牛乳を入れて熱し、温まったら沸騰する前に火を止める。",
      "4.のボウルに少しずつ加熱した牛乳を加え、その都度よく混ぜる。",
      "濾しながらカラメルソースの入った容器に均等に流し入れる。",
      "鍋に薄い布巾(もしくはクッキングペーパー)を敷き、プリン容器を並べる。容器の半分ぐらいの高さになるように水を注ぐ。",
      "蓋をして中火で熱し、湯気が立ってきたらごく弱火にする。20~30分蒸して、粗熱が取れてきたら冷蔵庫で冷やす。",
      "カップの底をお湯で温めて、カラメルを溶かし、皿を乗せて上下をひっくり返して取り出す。"
    ],
    sourceUrl: "https://delishkitchen.tv/recipes/135430820792893825",
  },
  {
    id: 8,
    name: "カレーライス(作成中)",
    category: "主食",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
    id: 9,
    name: "たこ焼き(作成中)",
    category: "主菜",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
    id: 10,
    name: "豚の生姜焼き(作成中)",
    category: "主菜",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
    id: 11,
    name: "餃子(作成中)",
    category: "主菜",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
    id: 12,
    name: "そうめん(作成中)",
    category: "主食",
    cookingTime: 20,
    servings: 1,
    image: "images/nikujaga.jpg",
    ingredients: [
      { name: "そうめん", amount: "2束" },
      { name: "水(茹で用)", amount: "1L" },
      { name: "きざみのり", amount: "適量" },
      { name: "乾燥わけさ", amount: "適量" },
      { name: "めんつゆ", amount: "濃縮度合い次第" },
    ],
    steps: [
      "水を1L沸騰させます。",
      "鍋から噴きこぼれないように火を調節しながらそうめんを1分半から2分茹でる。",
      "茹で終わったそうめんをざるに移し、粗熱を流水で取りながらもみ洗いする。",
      "きざみのり適量をそうめんの上にのせる。",
      "めんつゆを表示通りに薄めて乾燥わけさを適量載せて完成。"
    ]
  },
  {
    id: 13,
    name: "たまご焼き(甘め)(作成中)",
    category: "副菜",
    cookingTime: 35,
    servings: 2,
    image: "images/nikujaga.jpg",
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
];

