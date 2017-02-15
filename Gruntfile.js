module.exports = grunt => {
  require('load-grunt-tasks')(grunt);

  const port = parseInt(grunt.option('port') || '7777', 10);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        processors: [
          require('postcss-simple-vars')(),
          require('postcss-cssnext')()
        ]
      },
      dist: {
        src: 'src/css/main.css',
        dest: 'tmp/css/main.css'
      }
    },
    clean: {
      tmp: ['tmp']
    },
    connect: {
      server: {
        options: {
          port,
          base: 'tmp'
        }
      }
    },
    copy: {
      assets: {
        expand: true,
        cwd: 'assets',
        src: [
          'fonts/*',
          'images/*'
        ],
        dest: 'tmp/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: [
          'css/bootstrap.min.css',
          'js/bootstrap.min.js'
        ],
        dest: 'tmp/'
      },
      html: {
        expand: true,
        cwd: 'src',
        src: ['**/*.html'],
        dest: 'tmp/'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: 'tmp/js/'
      }
    },
    stylelint: {
      src: ['src/css/**/*.css']
    },
    watch: {
      styles: {
        files: 'src/**/*.css',
        tasks: ['postcss'],
      },
      html: {
        files: 'src/**/*.html',
        tasks: ['copy:html'],
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['tmp/**/*']
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'postcss',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean',
    'postcss',
    'stylelint'
  ]);
};
