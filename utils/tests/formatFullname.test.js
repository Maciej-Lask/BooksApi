const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should correctly format valid full names with mixed case', () => {
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
  });

  it('should return "Error" when fullName is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return "Error" when fullName is not a string', () => {
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return "Error" for invalid fullName format', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
    expect(formatFullname('John ')).to.equal('Error');
    expect(formatFullname(' Doe')).to.equal('Error');
  });
});
