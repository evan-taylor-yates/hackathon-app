import { HackathonAppPage } from './app.po';

describe('hackathon-app App', () => {
  let page: HackathonAppPage;

  beforeEach(() => {
    page = new HackathonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
