const expect = chai.expect;
const assert = chai.assert
describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should correctly update player scores after playing a turn', () => {
    game.player1.hand = [{ suit: 'Hearts', rank: 'Ace' }];
    game.player2.hand = [{ suit: 'Diamonds', rank: 'King' }];

    game.playTurn();

    expect(game.player1.score).to.equal(1);
    expect(game.player2.score).to.equal(0);
  });
});
