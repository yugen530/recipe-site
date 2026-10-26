
const detailContainer = document.getElementById("recipe-detail");

// URLからレシピIDを取得
const params = new URLSearchParams(window.location.search);
const recipeId = Number(params.get("id"));

// IDに一致するレシピを検索
const recipe = recipes.find((item) => item.id === recipeId);

function createDetail() {
  if (!recipe) {
    detailContainer.textContent = "レシピが見つかりませんでした。";
    return;
  }

  // レシピタイトル
  const title = document.createElement("h2");
  title.textContent = recipe.name;

  // 写真
  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.name;
  image.className = "detail-image";

  // 説明
  const description = document.createElement("p");
  description.textContent = recipe.description;

  // 基本情報
  const info = document.createElement("p");
  info.textContent =
    `カテゴリ：${recipe.category} / ` +
    `調理時間：約${recipe.cookingTime}分 / ` +
    `${recipe.servings}人分`;

  // 材料
  const ingredientsTitle = document.createElement("h2");
  ingredientsTitle.textContent = "材料";

  const ingredientList = document.createElement("ul");
  ingredientList.className = "ingredient-list";

  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient.name}：${ingredient.amount}`;
    ingredientList.append(li);
  });

  // 作り方
  const stepsTitle = document.createElement("h2");
  stepsTitle.textContent = "作り方";

  const stepList = document.createElement("ol");
  stepList.className = "step-list";

  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepList.append(li);
  });

  detailContainer.replaceChildren(
    title,
    image,
    description,
    info,
    ingredientsTitle,
    ingredientList,
    stepsTitle,
    stepList
  );
}

createDetail();
