 module.exports = function (grunt) {

  /* do clean, meta, jshint, lint, csslint, etc */
  grunt.initConfig({

    server : {
      port: 8888,
      base: './'
    },
    watch : {
    }
  });

  grunt.registerTask("launch", "server watch");

};
