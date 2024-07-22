import { Container, Sprite, Texture } from 'pixi.js';

export default class PairResult extends Container {
  _headTextures: Texture[];
  _buttTextures: Texture[];

  constructor() {
    super();
    this._headTextures = [
      Texture.from('bearHeadSide'),
      Texture.from('gorillaHeadSide'),
      Texture.from('hippoHeadSide'),
      Texture.from('pigHeadSide')
    ];
    this._buttTextures = [
      Texture.from('bearButtSide'),
      Texture.from('gorillaButtSide'),
      Texture.from('hippoButtSide'),
      Texture.from('pigButtSide')
    ];
  }

  set head(n: number) {
    const head = this.getChildByLabel('head');
    if (head) {
      this.removeChild(head);
    }

    if (typeof n === 'number' && n >= 0) {
      const t = this._headTextures[n];
      const head = new Sprite(t);
      head.x = -t.width;
      head.label = 'head';
      this.addChild(head);
    }
  }

  set butt(n: number | null) {
    const butt = this.getChildByLabel('butt');
    if (butt) {
      this.removeChild(butt);
    }

    if (typeof n === 'number') {
      const t = this._buttTextures[n];
      const butt = new Sprite(t);
      butt.x = 0;
      butt.label = 'butt';
      this.addChild(butt);
    }
  }
}