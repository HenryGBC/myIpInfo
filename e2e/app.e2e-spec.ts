import { MyIpInfoPage } from './app.po';

describe('my-ip-info App', function() {
  let page: MyIpInfoPage;

  beforeEach(() => {
    page = new MyIpInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
