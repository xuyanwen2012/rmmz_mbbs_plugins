import 'pixi.js';

export default class SpriteDebugUnit extends Sprite {
  private _state: {x: number; y: number};

  constructor({x, y}: {x: number; y: number}) {
    super();
    this._state = {x, y};
  }

  /**
   * TODO: [.d.ts] did not define 'initialize'
   */
  initialize() {
    const size = 48;
    const bitmap = new Bitmap(size, size);
    bitmap.drawCircle(size / 2, size / 2, size / 2, '#FF00FF');

    super.initialize();

    this.bitmap = bitmap;

    this.anchor.x = 0.5;
    this.anchor.y = 1;
  }

  update() {
    super.update();

    // this.updatePosition();
    const tileWidth = $gameMap.tileWidth();
    const tileHeight = $gameMap.tileHeight();
    const x = this._state.x;
    const y = this._state.y;
    this.x = ($gameMap.adjustX(x) + 0.5) * tileWidth;
    this.y = $gameMap.adjustY(y) * tileHeight;
  }
}
