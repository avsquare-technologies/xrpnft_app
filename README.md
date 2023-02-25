# XRP NFT


# What it does
xNFT is a Mobile application Which helps to Browser, View, and Interacts with Fungible Tokens and NFTs from XRP Ledger. The Transactions are Sign with help of XUMM app.

# Non-Fungible Tokens:

# Browse Entire NFTs available in XRPL
NFT detail page will list all useful information about the NFT
View Buy/Sell Offer for each NFTs
You can create Buy Offer from the mobile app for NFT if you like.
Mint Your Own NFTs from xNFT Mobile app
View Your Own NFTs in a separate Page
Fungible Tokens:

# Browse entire Tokens available in XRPL
Create TrustLine From the xNFT app
View Token details using Bithomp, XRPScan.
How we built it
Build using Cordova, Javascript, JS, Node.js, Web3.storage for IPFS, XUMM for secure Transaction Sign. API from xrpldata.com . WordPress for xNFT User Management (Just for Registration and Login).

# Challenges we ran into
Challenges are a learning curve for me. I am new to Blockchain. But XRPL documentations really helpful to make it.

# Accomplishments that we're proud of
I am really proud to build xNFT app.

# What's next for xNFT - Mobile App for NFTs and Tokens in XRP Ledger
I would like to add more features to the xNFT app

# Bulk NFT mint for Product/Lifetime memberships or Tickets
Filter option to Browser NFTs page to easy search
Share NFTs to Social media from xNFT app
Issue Fungible token from app
Mint above Issued Token as NFT ( Owner/Business who owns the token etc )
Graphs For NFT buy/Sell Offers.

--------------



## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/Users/arunanithiarul/Documents/mobile-apps/nft",
  "type": [
    "cordova"
  ],
  "name": "XRP NFT",
  "pkg": "io.avsquare.xrp",
  "framework": "core",
  "template": "blank",
  "bundler": "vite",
  "cssPreProcessor": false,
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen"
    ]
  },
  "theming": {
    "customColor": true,
    "color": "#19ff83",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app
* 📱 `build-cordova-ios` - build cordova iOS app
* 📱 `cordova-ios` - run dev build cordova iOS app
* 📱 `build-cordova-android` - build cordova Android app
* 📱 `cordova-android` - run dev build cordova Android app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.
## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.





## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```



## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)



* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7
