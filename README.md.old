# Windyty API
Windyty API is set of utilities, that will enable you to:
 - Create plugins that will enhance Windyty.com functionality
 - Run Windyty inside your own web app, use most of the Windyty weather data files, and customize it
 - Create Windyty plugins that can, without any modification, run on both: in your own web app and also on Windyty.com
 - Visualise your own weather data sets, that can, without any modification, run on both: on your own web Windyty app and also on Windyty.com
 - Since plugins can contain logo and links, displaying plugin on Windyty.com can be good propagation of your own web app

## Conditions of use of Windyty API
Any develper can use Windyty API for his web app for free as long as following conditions are met:
 - Daily amount of rqsts to Windyty data files is limited, exact number to be figured up later
 - Logo and windyty.com link will be visible and unobscured on your web app
 - If you use Windyty for your own weather data, we can (after your prior permition) visualise these data on Windyty.com, togeter with logo and link to your website

## What are Windyty plugins
- Windyty plugin is html, css and Javascript files and other resources, that reside in same directory
- Windyty plugins have full access to Leaflet API (window.L object) and Windyty API (window.W object), and can modify look and functionality of Windyty
- Each plugin is stored in Windyty plugin repository
- Each plugin is identified by unique lowercase string, longer than 4 characters (for example "tracker"). Id must be unique in Windyty plugin repository
- Each plugin is described with standard `package.json` file
- Plugins are packed and published in Windyty repository via standard `npm` manager
- Each plugin must "listen" to `close` event, and clean all installed objects from Leaflet map

## Invoking Windyty plugin 
Plugins stored in repository are launched by navigating to `www.windyty.com/pluginID` or `api.windyty.com/pluginID/APIkey`. 

If you want to use Windyty API to build or enhance your own web application, just put the following code in your html file:

        <iframe src="//api.windyty.com/pluginID/yourAPIkey"></iframe>

`api.windyty.com` is nothing else, than a slightly modified version of `www.windyty.com` with some limitations.

## Testing Windyty plugin
Plugins can be tested on both, www.windyty.com and api.windyty.com server by refering to plugin as `pluginId-test`. So for example plugin named "tracker" is available via `https://www.windyty.com/tracker-test` and `https://api.windyty.com/tracker-test`. API key can be ommited for test.

This simple way of testing can be achieved only if you run `grunt watch` in your `windyty` directory, since only then `grunt` monitors all changes in your code, and automatically uploads your work to plugin registry with `-test` suffix.

## Why we use iframe instead of creating windyty.js library
 - Windyty is not just JS library, but set of HTML, CSS, Leaflet, JS and a lot of weather data files. If we provide just some kind of windyty.js library, it will be up to you to put all this together and make it work. And we do not have a time to make any documentation or help you with it
 - Using iframe instead of windyty.js lib will mean, that we need just one developement branch since 95% of codes of api.windyty.com will be same as on www.windyty.com. Developement of both will be fast. Windyty API will have same new data files, features and bug fixes as Windyty.com.
 - Having same codebase for API and Windyty.com is the only way how plugins can run on both sides without modification: on Windyty.com and on api server
 - Encapsulating all Windyty codes into iframe can provide some protection, that amount of bad or malformed requests to our weather data files will be limited
 
## Limitation of api.windyty.com
Api.windyty.com has some limitation compared to www.windyty.com:
 - It does not contain search, settings, and detail of spot
 - It does not contain METARs, and other POIs displayed on a map
 - It does not contain NEMS4 or other local forecasts
 - It does not contain snowcover and snow & rain accumulations
 
## API key
Each user of Windyty API will recieve unique API key, that will be used for usage of api.windyty.com. Any misuse will lead to cancelling a key.

## Windyty plugins repository
 - Windyty plugins are uploaded as NMP packages to local Windyty NPM repository server
 - Developers will first need to create user account via `npm adduser --registry http://npm.windyty.com/`
 - Then set registry `npm set registry http://npm.windyty.com`
 - Each plug-in is packed and published via `npm publish`
 - After publishing we will identify new package, untarbal it and store main JS file into www.windyty.com/plugins directory
 - Immediatedlly after publishing plugin is available on www.windyty.com/pluginID
 - Test plugins are uploaded automatically to repository of tested plugins

## Windyty internal notes
 - For storage of Windyty plugins I propose [Sinopia](https://github.com/rlidwka/sinopia) server, that could run on npm.windyty.com. It is lightweight local version of npmjs.org, installed in 5 minutes.
 - There will be two instances of Sinopa running. One for finished and one for tested plugins. It is our sole responsibility to synchronize user databases of both, so only one registration will be necessary.
 - Uploaded plugins are stored in `~/.local/share/sinopia/storage`
 - After installation of Sinopia it is necessary to delete whole section refering to npmjs.org in `~/.config/sinopia/config.yaml`

## Getting started
Create your Windyty API key at [this address](https://www.windyty.com/api/)

Install windyty API libraries and examples.

`npm install windyty`

Install dependencies

`cd windyty`

`sudo npm install`

In separate terminal window launch 

`grunt watch`

This process will monitor any changes and updates in your plugin and automatilly publish your plugin to test repository so you can test them, just after you hit the SAVE FILE in your editor.

## Your first Hello world plugin

Go to plugins directory and create new directory with your future plugin id.

    cd windyty/plugins
    mkdir hello_world
    cd hello_world
    nmp init

Now you will be prompted about various aspects, about your plugin. 

Now create `index.html`, `index.js` and `index.css` files inside `hello_world` directory with following content:

    index.html:

        <div id="hello_world">Hello world!</div>

    index.css:    

        #hello_world {
            position: fixed;
            left: 50%;
            top: 50%;
        }


    index.js:

        console.log('Whoa my first Windyty plugin')

If your `grunt watch` is properlly running you should be able to test the plugin on www.windyty.com or api.windyty.com

