createField = async (_) => {
  const N = Number(url_params.n || "3");
  const symmetry = Number(url_params.symmetry || "1");
  Field.createFromImage(
    sampleImage,
    N,
    symmetry,
    (w =
      floor(floor(width / widthDivider) / sampleImage.width + 1) *
      sampleImage.width),
    (h = floor(height / heightDivider))
  ).then((field) => {
    WFC = field;
    WFC.seed();

    readyToGenerate = true;
    background(background_color);

    console.log("Succesfully finished loading...");
    console.log(`%c width: ${WFC.W}, height: ${WFC.H}`, "color: #00ffaa");
    main_timer -= performance.now();
  });
};
