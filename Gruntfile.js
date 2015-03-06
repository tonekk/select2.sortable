module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    wiredep: {
      app: {
        src: [
          'index.html',
        ],
        options: { }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['wiredep']);
};
