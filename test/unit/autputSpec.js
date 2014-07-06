describe('Autoput object', function() {

  it('Should be exist the Autoput object on window', function() {
    expect(Autoput).toBeDefined();
    expect(Autoput.customOptions).toBeDefined();
    expect(Autoput.on).toBeDefined();
  });

});

describe('Set custom options', function() {
  beforeEach(function () {
    Autoput.customOptions({
      text: 'Other text',
      email: 'other@email.com',
      date: '2000-04-04',
      datetime: '2000-10-16T12:12',
      week: '2000-W12',
      month: '2000-11',
      tel: '(1) 555-111-333',
      baseNumber: 100,
      url: 'http://www.webplatform.org',
      search: 'Found Unicorns OMG!',
      radio: false,
      checkbox: false,
      range: 0.5
    });
  });

  it('Custom text should be set Other text', function() {
    expect(api_test.text).toEqual('Other text');
  });
  it('Custom email should be set other@email.com', function() {
    expect(api_test.email).toEqual('other@email.com');
  });
  it('Custom date should be set 2000-04-04', function() {
    expect(api_test.date).toEqual('2000-04-04');
  });
  it('Custom datetime should be set 2000-10-16T12:12', function() {
    expect(api_test.datetime).toEqual('2000-10-16T12:12');
  });
  it('Custom week should be set 2000-W12', function() {
    expect(api_test.week).toEqual('2000-W12');
  });
  it('Custom month should be set 2000-W12', function() {
    expect(api_test.month).toEqual('2000-11');
  });
  it('Custom tel should be set (1) 555-111-333', function() {
    expect(api_test.tel).toEqual('(1) 555-111-333');
  });
  it('Custom baseNumber should be set 100', function() {
    expect(api_test.baseNumber).toBe(100);
  });
  it('Custom url should be set http://www.webplatform.org', function() {
    expect(api_test.url).toEqual('http://www.webplatform.org');
  });
  it('Custom url should be set Found Unicorns OMG!', function() {
    expect(api_test.search).toEqual('Found Unicorns OMG!');
  });
  it('Custom radio should be set false', function() {
    expect(api_test.radio).toBe(false);
  });
  it('Custom checkbox should be set false', function() {
    expect(api_test.checkbox).toBe(false);
  });
  it('Custom range should be set 0.5', function() {
    expect(api_test.range).toEqual(0.5);
  });
});
