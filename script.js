function aply_settings() {
  window.location.assign(
    "http://127.0.0.1:5500/?symmetry=0&n=" +
      document.getElementById("n-input").value +
      "&pattern=" +
      document.getElementById("select-pattern").value
  );
}
