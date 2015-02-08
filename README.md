# HeadlessDrupalApp
Ionic app for headless drupal


1. import git repo

2. create dummy project

$ ionic start dummy blank
$ cd dummy
//Check if this is needed for workflow?
//this folder should be in repo if custom changes are made in ionoc.app.scss
$ ionic setup sass
$ ionic platform add android

3. copy all folders but  the www and bower.json into project

4. update dependencies
$ bower install

done

check plugins with 
cordova plugin list
