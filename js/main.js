
const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

// 追加した絞り込み欄を取得
const categoryFilter = document.getElementById("category-filter");
const timeFilter = document.getElementById("time-filter");

// レシピ一覧を画面に表示する
function displayRecipes(recipeData) {
  recipeList.replaceChildren();

  recipeData.forEach((recipe) => {
    const card = document.createElement("a");
    card.className = "recipe-card";
    card.href = `recipe.html?id=${recipe.id}`;

    // 料理写真
    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.name;
    image.loading = "lazy";

    // レシピ情報
    const content = document.createElement("div");
    content.className = "recipe-card-content";

    const title = document.createElement("h3");
    title.textContent = recipe.name;

    const category = document.createElement("p");
    category.textContent = recipe.category;

    const time = document.createElement("p");
    time.textContent = `調理時間：約${recipe.cookingTime}分`;

    content.append(title, category, time);
    card.append(image, content);
    recipeList.append(card);
  });

  // 検索結果が0件ならメッセージを表示
  noResults.hidden = recipeData.length > 0;
}

// 検索・絞り込み処理
function searchRecipes() {
  // 検索欄の文字を空白で分割する
  const keywords = searchInput.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((keyword) => keyword !== "");

  // 選択されたカテゴリと調理時間
  const selectedCategory = categoryFilter.value;
  const maxTime = timeFilter.value;

  // すべての条件に合うレシピを探す
  const filteredRecipes = recipes.filter((recipe) => {
    // カテゴリが一致するか
    const matchesCategory =
      selectedCategory === "" ||
      recipe.category === selectedCategory;

    // 調理時間が指定以内か
    const matchesTime =
      maxTime === "" ||
      recipe.cookingTime <= Number(maxTime);

    // レシピ名・カテゴリ・説明・材料名を検索対象にする
    const searchableText = [
      recipe.name,
      recipe.category,
      recipe.description,
      ...recipe.ingredients.map((ingredient) => ingredient.name)
    ]
      .join(" ")
      .toLowerCase();

    // すべてのキーワードが含まれているか
    const matchesKeywords = keywords.every((keyword) =>
      searchableText.includes(keyword)
    );

    // すべての条件を満たした場合だけ表示する
    return matchesCategory && matchesTime && matchesKeywords;
  });

  displayRecipes(filteredRecipes);
}

// 検索欄への入力で検索
searchInput.addEventListener("input", searchRecipes);

// カテゴリ変更で検索
categoryFilter.addEventListener("change", searchRecipes);

// 調理時間変更で検索
timeFilter.addEventListener("change", searchRecipes);

// 初期表示
displayRecipes(recipes);
