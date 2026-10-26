
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
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredRecipes = recipes.filter((recipe) => {
    // 料理名・カテゴリを検索
    const matchesName =
      recipe.name.toLowerCase().includes(keyword);

    const matchesCategory =
      recipe.category.toLowerCase().includes(keyword);

    // 材料名を検索
    const matchesIngredient = recipe.ingredients.some(
      (ingredient) =>
        ingredient.name.toLowerCase().includes(keyword)
    );

    return (
      keyword === "" ||
      matchesName ||
      matchesCategory ||
      matchesIngredient
    );
  });

  displayRecipes(filteredRecipes);
}

// 入力するたびに検索
searchInput.addEventListener("input", searchRecipes);

// 初期表示
displayRecipes(recipes);
