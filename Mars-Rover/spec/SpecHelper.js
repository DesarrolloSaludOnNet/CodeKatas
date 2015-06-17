beforeEach(function () {
  jasmine.addMatchers({
    toBePoint: function () {
      return {
        compare: function (actual, expected) {
          var result = {};
          result.pass = actual.getX() === expected.getX() && 
                    actual.getY() === expected.getY();

          if(!result.pass)
            result.message = "Expected ({0},{1}) to be ({2},{3})"
                        .replace('{0}',actual.getX())
                        .replace('{1}',actual.getY())
                        .replace('{2}',expected.getX())
                        .replace('{3}',expected.getY());

          return result;
        }
      };
    }
  });
});
