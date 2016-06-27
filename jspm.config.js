SystemJS.config({
  paths: {
    "chrome6/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {}
  },
  transpiler: false,
  packages: {
    "chrome6": {
      "main": "chrome6.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [],
  map: {},
  packages: {}
});
