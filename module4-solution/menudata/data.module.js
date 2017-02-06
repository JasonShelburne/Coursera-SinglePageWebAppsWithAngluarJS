// 4. Create `data.module.js` file and declare another module in it called `data`. Make sure the `MenuApp` module lists the `data` module as a dependency.

(function () {
'use strict';

angular.module('Data', []);

// angular.module('data')
// .config(function () {
//   console.log("data config fired.");
// })
// .run(function () {
//   console.log("data run fired.");
// });

})();
