
import HomePage from '../pages/home.f7';
import CreateNFTPage from '../pages/create-nft.f7';



import LoginPage from '../pages/login.f7';
import SignupPage from '../pages/signup.f7';

import GetTokensPage from '../pages/get-tokens.f7';
import GetXRPLTokensPage from '../pages/all-xrpl-tokens.f7';
import browseNftPage from '../pages/browse-nfts.f7';
import DetailNftPage from '../pages/nft-details.f7';


import AccountPage from '../pages/account-info.f7';


import IssueTokenPage from '../pages/issuetoken-nft.f7';



var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage,

  },
  {
    path: '/signup/',
    component: SignupPage,

  },
  {
    path: '/createnft/',
    //component: CreateNFTPage,
    async({ resolve }) {
      var storage = window.localStorage;
      var login_status = storage.getItem('store_Login');
      if (login_status == 'true') {
          resolve({ component: CreateNFTPage })
           
         
      } else {
          resolve({ component: LoginPage })
          
        
      }
    },
  },
   
  {
     path: '/gettokens/',
     component: GetTokensPage,
  },
  {
    path: '/issuetoken/',
    component: IssueTokenPage,

  },
  {
     path: '/allxrpltokens/',
     component: GetXRPLTokensPage,
  },
  {
     path: '/browsenft/',
     component: browseNftPage,
  },
  {
     path: '/nft-detail/:owneraddress/:nftid',
     component: DetailNftPage,
  },
  {
     path: '/accountinfo/',
     //component: AccountPage,
     async({ resolve }) {
      var storage = window.localStorage;
      var login_status = storage.getItem('store_Login');
      if (login_status == 'true') {
          resolve({ component: AccountPage })
           
         
      } else {
          resolve({ component: LoginPage })
          
        
      }
    },
  }
];

export default routes;