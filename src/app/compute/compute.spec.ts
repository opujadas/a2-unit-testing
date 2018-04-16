import { compute } from './compute';
import { greet } from './compute';

describe('compute', () => 
{
  it('should return 0 if input is negative', () => 
  {
    const result = compute(-1);
    expect(result).toBe(0); 
  });

  it('should return N+1 if input is positive', () => 
  {
    const result = compute(1);
    expect(result).toBe(2); 
  });  



});

describe('greet', () => 
{
  it('should include the name in the mssg', () => 
  {
    expect(greet('Olivier')).toContain('Olivier'); 
  });

});