import { VeganPage } from './app.po';

describe('vegan App', () => {
  let page: VeganPage;

  beforeEach(() => {
    page = new VeganPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
