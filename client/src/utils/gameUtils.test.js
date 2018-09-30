import { getScore } from './gameUtils';

describe('scoring', () => {

  it('It returns an integer and not a float', () => {

    const result = getScore(Date.now(), 9);
    expect(typeof result).toBe("number");
  })

  it('Completing the game in a shorter time returns a higher score', () => {
    const fastTime = Date.now()
    const slowTime = fastTime + 60000 // 1 minute slower
    const fastScore = getScore(fastTime, 5);
    const slowScore = getScore(slowTime, 5);
    expect(fastScore > slowScore).toBeTruthy();
  })

  it('Completing the game with more turns left returns a higher score', () => {
    const fastTime = Date.now() - 10000 // completed 10s ago
    const highScore = getScore(fastTime, 10);
    const lowScore = getScore(fastTime, 5);
    expect(highScore > lowScore).toBeTruthy();
  })
});
