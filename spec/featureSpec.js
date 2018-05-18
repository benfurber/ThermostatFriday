describe("jasmine.Fixtures", function() {
  jasmine.getFixtures().fixturesPath = './';

  it('loads fixtures', function() {
    loadFixtures('index.html');
    $('#message').myTestedPlugin()
    expect($('#message')).toContain('The Temperature in')
  })
})
