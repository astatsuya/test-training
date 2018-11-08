/* global browser, expect, describe */

const expect = require('chai').expect;

describe('Test-training App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('test training');
  });

  it('Should get input element and delete', () => {
    const InputText = 'input';
    browser.url('http://localhost:3000/');
    browser.element('.input-alert').setValue(InputText);
    browser.click('.button-click');
    expect(browser.alertText()).to.eql('input');
    browser.alertAccept();
    expect(browser.element('.input-alert').getText()).to.eql('');
  });
});
