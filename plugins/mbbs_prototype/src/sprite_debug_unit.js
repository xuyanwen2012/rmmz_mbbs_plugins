/**
 * @extends {Sprite}
 */
export default class SpriteDebugUnit extends Sprite {
  /**
   * @param {{x: number, y: number}} state
   */
  constructor(state = {x: 0, y: 0}) {
    super();

    /**
     * @type {{x: number, y: number}}
     * @private
     */
    this._state = state;
  }

  /**
   * @override
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

  /**
   * @override
   */
  update() {
    super.update();

    // this.updatePosition();
    const tileWidth = $gameMap.tileWidth();
    const tileHeight = $gameMap.tileHeight();
    const x = this._state.x;
    const y = this._state.y;
    this.x = ($gameMap.adjustX(x) + 0.5) * tileWidth;
    this.y = ($gameMap.adjustY(y)) * tileHeight;
  }
}
