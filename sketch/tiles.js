class Tile {
  constructor(states, total_states, x, y) {
    this.states = states;
    this.pLen = this.states.length;
    this.total_states = total_states;
    this.x = x || 0;
    this.y = y || 0;
    this._hasCollapsed = false;
    this.first_pass = true;
  }

  collapse() {
    this._hasCollapsed = true;
    // Picks a random state and makes it the only one in the list
    this.states = [random(this.states)];
  }

  hasCollapsed() {
    return this._hasCollapsed;
  }

  getEntropy() {
    // Returns infinity if the tile has collapsed and returns the
    // length of the states if the tile hasn't collapsed
    if (this.states.length > 1) {
      return this.states.length;
    } else {
      this._hasCollapsed = true;
      return Infinity;
    }
  }

  display() {
    // set x coordinate to be the x index of the tile * the size of the tile
    let x = this.x * tileW;
    // set y coordinate to be the y index of the tile * the size of the tile
    let y = this.y * tileH;
    // Set w, h to size
    let w = tileW;
    let h = tileH;

    if (this.pLen > 1) {
      if (false) {
        // fill(background_color);
        // stroke(background_color);
        // drawCell(x, y, w, h, true);

        // stroke(this.color);
        // fill(this.color);
        // drawCell(x, y, w, h);

        this.pLen = 1;
      } else {
        if (this.states.length / this.pLen < 0.9999 || this.first_pass) {
          fill(background_color);
          stroke(background_color);
          drawCell(x, y, w, h, true);

          fill(this.color || color(255, 0, 0));
          stroke(this.color || color(255, 0, 0));
          drawCell(x, y, w, h);
          this.first_pass = false;
        }
      }
      // Update pLen.
      this.pLen = this.states.length;
    }
  }
}
