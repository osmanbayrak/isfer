/*
 * Welcome to the new js2coffee 2.0, now
 * rewritten to use the esprima parser.
 * try it out!
 */
'use strict';
module.exports = function(grunt) {
  var appConfig, pkg;
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  pkg = require('./bower.json');
  appConfig = {
    src: 'app',
    dist: 'dist',
    module: 'myApp',
    name: 'isfer'
  };
  grunt.initConfig({
    appConfig: appConfig,
    pkg: pkg,
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      coffee: {
        files: ['<%= appConfig.src %>/scripts/config.coffee', '<%= appConfig.src %>/scripts/{,**/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:dist']
      },
      coffeeTest: {
        files: ['web/test/spec/{,**/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:test', 'karma']
      },
      scripts: {
        files: ['<%= appConfig.src %>/scripts/{,**/}*.js'],
        tasks: ['newer:copy:scripts']
      },
      scriptsTest: {
        files: ['web/test/spec/{,**/}*.js'],
        tasks: ['newer:copy:scripts']
      },
      styles: {
        files: ['<%= appConfig.src %>/styles/{,**/}*.css', '<%= appConfig.src %>/scss/{,**/}*.scss'],
        tasks: ['sass', 'newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.coffee']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['<%= appConfig.src %>/{,**/}*.html', '.tmp/styles/{,**/}*.css', '.tmp/scripts/{,**/}*.js', '<%= appConfig.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      proxies: [
        {
          context: ['/api', '/admin'],
          host: '10.133.151.151',
          port: 8000
        }
      ],
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [require('grunt-connect-proxy/lib/utils').proxyRequest, connect["static"]('.tmp'), connect().use('/bower_components', connect["static"]('./web/bower_components')), connect().use('/app/styles', connect["static"]('./web/app/styles')), connect["static"](appConfig.src)];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [connect["static"]('.tmp'), connect["static"]('web/test'), connect().use('/web/bower_components', connect["static"]('./web/bower_components')), connect["static"](appConfig.src)];
          }
        }
      },
      dist: {
        options: {
          open: true,
          middleware: function(connect) {
            return [require('grunt-connect-proxy/lib/utils').proxyRequest, connect["static"](appConfig.dist)];
          }
        }
      }
    },
    coffeelint: {
      app: ['<%= appConfig.src %>/{,**/}*.coffee'],
      options: {
        use: 'tabs',
        configFile: 'coffeelint.json'
      }
    },
    prettier: {
      options: ['.prettierrc'],
      files: {
        'dest/default_options': ['web/app/scripts/*.coffee', 'web/app/scripts/**/*.coffee']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: ['.tmp/scripts/*.js', '.tmp/scripts/**/*.js']
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: ['.tmp', '<%= appConfig.dist %>/{,*/}*', '!<%= appConfig.dist %>/.git{,*/}*']
          }
        ]
      },
      server: '.tmp'
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true
        },
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },
    wiredep: {
      app: {
        src: ['<%= appConfig.src %>/index.html'],
        ignorePath: /\.\.\//,
        exclude: ['sekomswatch', 'jQuery', 'es5-shim', 'json3']
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        exclude: ['sekomswatch', 'jQuery', 'es5-shim', 'json3'],
        ignorePath: /\.\.\//,
        fileTypes: {
          coffee: {
            block: /(([\s\t]*)#\s*?bower:\s*?(\S*))(\n|\r|.)*?(#\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi,
              coffee: /'(.*\.coffee)'/gi
            },
            replace: {
              js: '\'{{filePath}}\'',
              coffee: '\'{{filePath}}\''
            }
          }
        }
      }
    },
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.src %>/scripts',
            src: '{,**/}*.coffee',
            dest: '.tmp/scripts',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'web/test/spec',
            src: '{,**/}*.coffee',
            dest: '.tmp/spec',
            ext: '.js'
          }
        ]
      }
    },
    filerev: {
      dist: {
        src: ['<%= appConfig.dist %>/scripts/{,**/}*.js', '<%= appConfig.dist %>/styles/{,**/}*.css', '<%= appConfig.dist %>/fonts/*']
      }
    },
    useminPrepare: {
      html: '<%= appConfig.src %>/index.html',
      options: {
        dest: '<%= appConfig.dist %>',
        cwd: '<%= appConfig.src %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.src %>/scss',
            src: 'main.scss',
            dest: '<%= appConfig.src %>/styles',
            ext: '.css'
          }
        ]
      }
    },
    usemin: {
      html: ['<%= appConfig.dist %>/{,*/}*.html'],
      css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= appConfig.dist %>', '<%= appConfig.dist %>/images', '<%= appConfig.dist %>/styles', '<%= appConfig.dist %>/fonts']
      }
    },
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.src %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif,ico}',
            dest: '<%= appConfig.dist %>/images'
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.src %>/images',
            src: '{,*/}*.svg',
            dest: '<%= appConfig.dist %>/images'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.dist %>',
            src: ['*.html', 'views/{,*/}*.html'],
            dest: '<%= appConfig.dist %>'
          }
        ]
      }
    },
    ngAnnotate: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '*.js',
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },
    remove_usestrict: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '*.js',
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },
    ngtemplates: {
      app: {
        cwd: '<%= appConfig.src %>',
        src: 'views/{,*/}{,*/}{,*/}*.html',
        dest: '.tmp/scripts/app.js',
        options: {
          module: '<%= appConfig.module %>',
          append: true
        }
      }
    },
    cdnify: {
      dist: {
        html: ['<%= appConfig.dist %>/*.html']
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= appConfig.src %>',
            dest: '<%= appConfig.dist %>',
            src: ['*.{ico,png,txt}', '.htaccess', '*.html', 'images/{,*/}*.{webp}', 'fonts/{,*/}*.*', 'logo/{,*/}*.*', 'device/{,*/}*.*']
          }, {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= appConfig.dist %>/images',
            src: ['generated/*']
          }, {
            expand: true,
            cwd: '',
            dest: '<%= appConfig.dist %>/',
            src: ['bower.json']
          }, {
            expand: true,
            flatten: true,
            cwd: 'web/bower_components',
            dest: '<%= appConfig.dist %>/fonts',
            src: ['font-awesome/fonts/*', 'sekomswatch/fonts/{,*/}*.*']
          }, {
            expand: true,
            cwd: 'web/app/localize',
            src: '*',
            dest: '<%= appConfig.dist %>/localize'
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= appConfig.src %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      json: {
        expand: true,
        cwd: '',
        dest: '<%= appConfig.dist %>',
        src: 'bower.json'
      }
    },
    concurrent: {
      server: ['coffee:dist', 'copy:styles'],
      test: ['coffee', 'copy:styles'],
      dist: ['coffee', 'copy:styles', 'imagemin', 'svgmin']
    },
    karma: {
      unit: {
        configFile: 'karma.conf.coffee',
        singleRun: true
      }
    },
    compress: {
      deploy: {
        options: {
          archive: 'deploy_<%= appConfig.module %>_<%= pkg.version %>.zip'
        },
        files: [
          {
            expand: true,
            cwd: '<%= appConfig.virtualenv %>/lib/python2.7/site-packages',
            src: ['**', '!**.pyc'],
            dest: 'service'
          }, {
            expand: true,
            src: ['web/dist/**', 'service/**', '!**.pyc', '!node_modules']
          }
        ]
      }
    },
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['*.json'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: 'rc',
        metadata: '',
        regExp: false
      }
    }
  });
  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'configureProxies:server', 'connect:dist:keepalive']);
    }
    grunt.task.run(['clean:server', 'wiredep', 'concurrent:server', 'sass', 'autoprefixer:server', 'configureProxies:server', 'connect:livereload', 'watch']);
  });
  grunt.registerTask('test', ['clean:server', 'prettier', 'coffeelint']);
  grunt.registerTask('build', ['clean:dist', 'wiredep', 'useminPrepare', 'concurrent:dist', 'ngtemplates', 'sass', 'autoprefixer', 'concat', 'ngAnnotate', 'remove_usestrict', 'copy:dist', 'copy:json', 'cssmin', 'uglify', 'filerev', 'usemin', 'htmlmin']);
  grunt.registerTask('package', ['compress:deploy']);
  grunt.registerTask('default', ['newer:jshint', 'test', 'build']);
};

// ---
// generated by coffee-script 1.9.2