import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';

var device = getDevice();
var app = new Framework7({
  name: 'XRP NFT', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'io.avsquare.xrp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,
  iosTranslucentBars:false,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: false,
    androidOverlaysWebView: false,

    iosBackgroundColor: '#1d1d1d',
    iosTextColor: 'white',
    androidTextColor: 'white',
    androidBackgroundColor: '#1d1d1d',
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});