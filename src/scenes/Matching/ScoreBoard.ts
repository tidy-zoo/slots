import { Container, Sprite, Texture } from 'pixi.js';
import { watchStore } from '../../store';
import TextField from '../../components/TextField';

export default class ScoreBoard extends Container {
  constructor() {
    super();

    const textures = [
      Texture.from('bearHead'),
      Texture.from('boarHead'),
      Texture.from('elephantHead'),
      Texture.from('giraffeHead'),
      Texture.from('gorillaHead'),
      Texture.from('hippoHead'),
      Texture.from('oxHead'),
      Texture.from('pigHead'),
      Texture.from('rhinoHead'),
      Texture.from('twbearHead')
    ];
    const maxHeight = textures.reduce((h, t) => Math.max(t.height, h), 0);

    const numCol = 5;

    const scoreTexts = textures.map((t, index) => {
      const score = new Container();
      const col = index % numCol;
      const row = Math.floor(index / 5);
      score.x = col * 600;
      score.y = row * 300;
      this.addChild(score);

      const icon = new Sprite(t);
      icon.scale.x = icon.scale.y = 0.6;
      icon.y = maxHeight * icon.scale.y - icon.height;

      const scoreText = new TextField('', {
        fontSize: 120,
        fill: 0x6a6a6b
      });
      scoreText.x = icon.width + 30;
      scoreText.y = icon.y + icon.height - scoreText.height;

      score.addChild(icon, scoreText);

      return scoreText;
    });

    watchStore(
      state => state.scores,
      state => {
        scoreTexts.forEach((tf, id) => {
          tf.text = `x${state.scores[id] ?? 0}`;
        });
      }
    );
  }
}