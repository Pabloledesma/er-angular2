import { DarkSiteAngular2Page } from './app.po';

describe('dark-site-angular2 App', () => {
  let page: DarkSiteAngular2Page;

  beforeEach(() => {
    page = new DarkSiteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
