import { MovieDescriptionPipe } from './movie-description.pipe';

describe('MovieDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
