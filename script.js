function aply_settings() {
  let pattern = document.getElementById("select-pattern").value;
  let N = document.getElementById("n-input").value;
  console.log({ pattern, N });

  url_params = getURLParams();
  url_params.n = N;
  url_params.pattern = pattern;
  createDrawCell();

  WFC = {};
  readyToGenerate = false;
  finished = false;

  const imagePath = `data/${pattern || "demo-3"}.png`;

  sampleImage = loadImage(imagePath, createField, () => {
    alert("Image couldn't be loaded");
  });

  document.getElementById("my-link").value = generate_link();
}

function generate_link() {
  return `http://localhost:5500/?pattern=${url_params.pattern}&n=${url_params.n}`;
}

function copy_sharable_link() {
  let linkText = document.getElementById("my-link");
  linkText.focus();
  linkText.select();

  linkText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");

  alert("Copied the text: " + linkText.value);
}
