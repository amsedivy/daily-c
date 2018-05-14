import { expect } from 'chai';
import { describe, it } from 'mocha';
import SingletonTest from './singletonTest';


describe('singleton verfier', () => {
  it('', () => {
    const single = new SingletonTest();
    const double = new SingletonTest();

    expect(single.idInt).to.equal(double.idInt);
  });
});
