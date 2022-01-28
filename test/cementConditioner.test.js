const {cementConditioner} = require('../cementConditioner');
const {expect} = require("chai");
// cement rules
//
// minimal sales unit: 20 kg bag
// another sales unit: 80 kg box ( 4 bags)

// test list
//  input: 3 bags, output: 3 bags <=>
//  input: 4 bags, output: 1 box
//  input: 5 bags, output: 1 bag and 1 box
//  input: 1 + 2*4 = 9 bags, output: 1 bag and 2 box

describe('cementConditioner', ()=>{
   it("should return 3 bags when given 3 bags",()=>{
      // given
      const input = { bag: 3 };

      // when
      const actual = cementConditioner(input)

      // then
      expect(actual).to.deep.equal({ bag: 3})
   })
})
