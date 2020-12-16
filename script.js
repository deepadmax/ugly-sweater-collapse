let first_load = true;

function aply_settings() {
  if (first_load) {
    url_params = getURLParams();
    document.getElementById("select-pattern").value = url_params.pattern;
    document.getElementById("n-input").value = url_params.n;
    document.getElementById("symmetry-checkbox").checked = Number(
      url_params.symmetry
    );
    document.getElementById("stitches-checkbox").checked = Number(
      url_params.stitches
    );
  }

  let pattern = document.getElementById("select-pattern").value;
  let N = document.getElementById("n-input").value;
  let symmetry = document.getElementById("symmetry-checkbox").checked;
  let stitches = document.getElementById("stitches-checkbox").checked;

  console.log({ pattern, N, symmetry, stitches });

  if (!first_load) {
    url_params.pattern = pattern;
    url_params.n = N;
    url_params.symmetry = symmetry ? "1" : "0";
    url_params.stitches = stitches ? "1" : "0";
  }
  createDrawCell();
  calculate_variables();

  WFC = {};
  readyToGenerate = false;
  finished = false;

  const imagePath = `data/${pattern || "demo-3"}.png`;

  sampleImage = loadImage(imagePath, createField, () => {
    alert("Image couldn't be loaded");
  });

  document.getElementById("my-link").value = generate_link();
  first_load = false;
}

function generate_link() {
  return `https://d-t-666.github.io/ugly-sweater-collapse/?pattern=${url_params.pattern}&n=${url_params.n}&symmetry=${url_params.symmetry}&stitches=${url_params.stitches}`;
}

function copy_sharable_link() {
  copyToClipboard(generate_link());

  alert(`Link copied to clipboard!`);
}

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
