System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {
    
    'app': './src',
    
    '@angular/core': 'npm:@angular/core@4.2.6/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.2.6/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.2.6/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.2.6/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.2.6/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@4.2.6/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@4.2.6/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.2.6/bundles/forms.umd.js',
    '@angular/animations': 'npm:@angular/animations@4.2.6/bundles/animations.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser@4.2.6/bundles/platform-browser-animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations@4.2.6/bundles/animations-browser.umd.js',
    '@angular/material': 'npm:@angular/material@2.0.0-beta.8/bundles/material.umd.js',
    '@angular/cdk': 'npm:@angular/cdk@2.0.0-beta.8/bundles/cdk.umd.js',
    
    
    'rxjs': 'npm:rxjs@5.4.2',
    'typescript': 'npm:typescript@2.2.1/lib/typescript.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});