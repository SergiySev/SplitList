import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('provides right transform', () => {
    expect(pipe.transform('   AAA  BBB  CCC    ')).toBe('AAA  BBB  CCC');
  });
});
