export {};

function importTest(name, path) {
  // tslint:disable-next-line:only-arrow-functions
  describe(name, function () {
    require(path);
  });
}

describe('Repository tests', () => {
  // importTest('Icon repository', './icon.ts');
});