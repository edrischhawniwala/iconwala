export {};

function importTest(name, path) {
  // tslint:disable-next-line:only-arrow-functions
  describe(name, function () {
    require(path);
  });
}

describe('API Tests', () => {
  importTest('Auth Module', './auth/test.ts');
  importTest('User Module', './mdm/user/test.ts');
  importTest('Extras', './extras/test.ts');
  after((done) => {
    done(); process.exit(0);
  });
});