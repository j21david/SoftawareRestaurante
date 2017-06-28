import { AvanceLogPage } from './app.po';

describe('avance-log App', () => {
  let page: AvanceLogPage;

  beforeEach(() => {
    page = new AvanceLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
