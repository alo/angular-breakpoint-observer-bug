
#### Bug, feature request, or proposal:
Bug

#### What is the expected behavior?
Components using BreakpointObserver should be destroyed when the path is changed.

#### What is the current behavior?
Components that use BreakpointObserver are not destroyed correctly causing memory leaks

#### What are the steps to reproduce?
stackblitz: https://stackblitz.com/edit/breakpoint-observer-bug (Open in new window)
github: https://github.com/alo/angular-breakpoint-observer-bug

Only start the project (github: yarn start / stackblitz: Open in new window) and navigate between the two paths (foo & bar).
Open Chrome dev tools and take a Heap Snapshot (in memory tab). You will see the component as many times as you have created it (so it has never been destroyed)

<img width="991" alt="captura de pantalla 2018-11-19 a las 17 01 34" src="https://user-images.githubusercontent.com/234613/48719257-563f5d00-ec1d-11e8-8493-921ab8b65df0.png">


#### Which versions of Angular, Material, OS, TypeScript, browsers are affected?
```

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 7.0.6
Node: 10.13.0
OS: darwin x64
Angular: 7.0.4
... animations, cdk, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.10.6
@angular-devkit/build-angular     0.10.6
@angular-devkit/build-optimizer   0.10.6
@angular-devkit/build-webpack     0.10.6
@angular-devkit/core              7.0.6
@angular-devkit/schematics        7.0.6
@angular/cli                      7.0.6
@ngtools/webpack                  7.0.6
@schematics/angular               7.0.6
@schematics/update                0.10.6
rxjs                              6.3.3
typescript                        3.1.6
webpack                           4.19.1
```
