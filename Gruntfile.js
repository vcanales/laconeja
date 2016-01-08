module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [
          {
            expand: true,
            cwd: 'src/less',
            // Compile each LESS component excluding "bootstrap.less", 
            // "mixins.less" and "variables.less" 
            src: ['*.less', '!{boot,var,mix}*.less'],
            dest: 'public/css/',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      styles: {
        files: ['src/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};