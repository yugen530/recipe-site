
const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

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

// 検索処理
function searchRecipes() {
  // 検索欄の文字を取得し、空白でキーワードを分割する
  const keywords = searchInput.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((keyword) => keyword !== "");

  // すべてのキーワードに一致するレシピを探す
  const filteredRecipes = recipes.filter((recipe) => {
    // レシピ名・カテゴリ・説明・材料名を検索対象にする
    const searchableText = [
      recipe.name,
      recipe.category,
      recipe.description,
      ...recipe.ingredients.map((ingredient) => ingredient.name)
    ]
      .join(" ")
      .toLowerCase();

    // すべてのキーワードが検索対象に含まれているか確認する
    return keywords.every((keyword) =>
      searchableText.includes(keyword)
    );
  });

  // 検索結果を画面に表示する
  displayRecipes(filteredRecipes);
}


// 入力するたびに検索
searchInput.addEventListener("input", searchRecipes);

// 初期表示
displayRecipes(recipes);
