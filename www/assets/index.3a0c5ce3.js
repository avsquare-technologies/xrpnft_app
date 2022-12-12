import{$ as S,c as ue,g as pe,F as fe}from"./vendor.643e067d.js";import Z from"https://dev.jspm.io/npm:xrpl";const me=function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))k(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const b of a.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&k(b)}).observe(document,{childList:!0,subtree:!0});function p(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerpolicy&&(a.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?a.credentials="include":c.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function k(c){if(c.ep)return;c.ep=!0;const a=p(c);fetch(c.href,a)}};me();var H={f7:null,handleSplashscreen:function(){var s=H.f7;!window.navigator.splashscreen||s.device.electron||setTimeout(()=>{window.navigator.splashscreen.hide()},2e3)},handleAndroidBackButton:function(){var s=H.f7;const v=s.$;s.device.electron||document.addEventListener("backbutton",function(p){if(v(".actions-modal.modal-in").length)return s.actions.close(".actions-modal.modal-in"),p.preventDefault(),!1;if(v(".dialog.modal-in").length)return s.dialog.close(".dialog.modal-in"),p.preventDefault(),!1;if(v(".sheet-modal.modal-in").length)return s.sheet.close(".sheet-modal.modal-in"),p.preventDefault(),!1;if(v(".popover.modal-in").length)return s.popover.close(".popover.modal-in"),p.preventDefault(),!1;if(v(".popup.modal-in").length){if(v(".popup.modal-in>.view").length){const c=s.views.get(".popup.modal-in>.view");if(c&&c.router&&c.router.history.length>1)return c.router.back(),p.preventDefault(),!1}return s.popup.close(".popup.modal-in"),p.preventDefault(),!1}if(v(".login-screen.modal-in").length)return s.loginScreen.close(".login-screen.modal-in"),p.preventDefault(),!1;if(v(".page-current .searchbar-enabled").length)return s.searchbar.disable(".page-current .searchbar-enabled"),p.preventDefault(),!1;if(v(".page-current .card-expandable.card-opened").length)return s.card.close(".page-current .card-expandable.card-opened"),p.preventDefault(),!1;const k=s.views.current;if(k&&k.router&&k.router.history.length>1)return k.router.back(),p.preventDefault(),!1;if(v(".panel.panel-in").length)return s.panel.close(".panel.panel-in"),p.preventDefault(),!1},!1)},handleKeyboard:function(){var s=H.f7;if(!(!window.Keyboard||!window.Keyboard.shrinkView||s.device.electron)){var v=s.$;window.Keyboard.shrinkView(!1),window.Keyboard.disableScrollingInShrinkView(!0),window.Keyboard.hideFormAccessoryBar(!0),window.addEventListener("keyboardWillShow",()=>{s.input.scrollIntoView(document.activeElement,0,!0,!0)}),window.addEventListener("keyboardDidShow",()=>{s.input.scrollIntoView(document.activeElement,0,!0,!0)}),window.addEventListener("keyboardDidHide",()=>{document.activeElement&&v(document.activeElement).parents(".messagebar").length||window.Keyboard.hideFormAccessoryBar(!1)}),window.addEventListener("keyboardHeightWillChange",p=>{var k=p.keyboardHeight;k>0?(document.body.style.height=`calc(100% - ${k}px)`,v("html").addClass("device-with-keyboard")):(document.body.style.height="",v("html").removeClass("device-with-keyboard"))}),v(document).on("touchstart","input, textarea, select",function(p){var k=p.target.nodeName.toLowerCase(),c=p.target.type,a=["datetime-local","time","date","datetime"];k==="select"||a.indexOf(c)>=0?window.Keyboard.hideFormAccessoryBar(!1):window.Keyboard.hideFormAccessoryBar(!0)},!0)}},init:function(s){H.f7=s,document.addEventListener("deviceready",()=>{H.handleAndroidBackButton(),H.handleSplashscreen(),H.handleKeyboard()})}};function te(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/";let T=[],D="rnjk7SyUmLrYKtSLAg1dAxHWRjAyyabY3w";const L=()=>{a.preloader.show(),a.request({url:x+"connect_xumm/",method:"POST",timeout:0,success:function(i){var y=JSON.parse(i);console.log(y),a.preloader.hide(),window.location.href=y.next.always}})},u=()=>{var i=localStorage.getItem("user_profile_data");T=JSON.parse(i),console.log("User Data",T),D=T.data.wallet_account,console.log(D),$()},m=async()=>{console.log(D);const i=new Z.Client("wss://xls20-sandbox.rippletest.net:51233");await i.connect();const y=await i.request({method:"account_info",account:D});console.log(y)};return b("pageInit",(i,y)=>{u(),m()}),function(i){var y=i.$,g=i.$h,t=i.$root,e=i.$f7,o=i.$f7route,r=i.$f7router,f=i.$theme,I=i.$update,h=i.$store;return g`
  <div class="page home" data-name="home">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
    <div class="page-content">
       

<div class="block">
<h1>Welcome <span>XRP NFT</span></h1>
</div>

<div class="block">

<a href="#" @click="${L}" class="customTab animate__animated animate__bounceIn">Connect XUMM</a>  

<a href="/allxrpltokens/" class="customTab animate__animated animate__bounceIn">XRPL Tokens</a>



<a href="/gettokens/" class="customTab animate__animated animate__bounceIn ">All My NFTs</a>

<a href="/createnft/" class="customTab animate__animated animate__bounceIn ">Create NFT</a>

<a href="/browsenft/" class="customTab animate__animated animate__bounceIn ">Browse NFTs</a>

<a href="/accountinfo/" class="customTab animate__animated animate__bounceIn ">Account Info.</a>




</div>
   

 

    
    </div>
  </div>
`}}te.id="d2582cdb2d";function se(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",T=()=>{a.preloader.show(),a.request({url:x+"get_categories/",method:"GET",timeout:0,success:function(u){var m=JSON.parse(u);S(".ad_cat").html(m),a.preloader.hide()}})},D=()=>{a.preloader.show(),a.request({url:x+"get_locations/",method:"GET",timeout:0,success:function(u){var m=JSON.parse(u);S(".ad_loc").html(m),a.preloader.hide()}})},L=()=>{a.preloader.show();var u=a.form.convertToData("#createNftForm");console.log(u),a.request({url:x+"create-classified/",method:"POST",timeout:0,data:u,success:function(m){console.log(m),a.preloader.hide();var i=JSON.parse(m);console.log(i),i.status?(a.dialog.alert("Account has been Created"),a.views.main.router.navigate("/login/")):a.dialog.alert(i.message)}})};return b("pageInit",(u,m)=>{T(),D()}),function(u){var m=u.$,i=u.$h,y=u.$root,g=u.$f7,t=u.$f7route,e=u.$f7router,o=u.$theme,r=u.$update,f=u.$store;return i`
  <div class="page" data-name="create-nft">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           <a href="/"  class="link" ><i class="icons f7-icons">chevron_up</i></a>
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
        </div>
         
      </div>
    </div>
 
    <!-- Scrollable page content-->
    <div class="page-content">
       

<div class="block">
<h2>Create NFT</h2>
</div>
 
    
<form class="createNftForm list" id="createNftForm">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Item Name</div>
                <div class="item-input-wrap">
                   <input type="text" placeholder="Enter item name" name="itemName" class="itemName" required />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">External Link</div>
                <div class="item-input-wrap">
                   <input type="text" placeholder="Enter External Link" name="itemExternal" class="itemExternal" required />
                   <small>xNFT will include a link to this URL on this item\'s detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</small>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Item Description</div>
                <div class="item-input-wrap">
                   <textarea class="desc" name="description" class="description" required></textarea>
                   <small>The description will be included on the item\'s detail page underneath its image. Markdown syntax is supported.</small>
                </div>
              </div>
            </div>
          </li>

 

          <li>
          <a class="item-link smart-select smart-select-init ad_cat">
            


          </a>
        </li>

        <li>
          <a class="item-link smart-select smart-select-init ad_loc">
            
          </a>
        </li>

        <li>
          <input type="hidden" name="userId"  />
          <div class="block block-strong">
          <a href="#" @click="${L}" class="col button button-fill button-large button-raised">Next</a>
           </div>
        </li>

        </ul>
</form>


 

    
    </div>
  </div>
`}}se.id="7c27df24ca";function ie(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){var x=0;let T=!1,D=[],L=[],u=[],m;const i="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",y=e=>{e.target.checked==!0?S("#password").attr("type","text"):S("#password").attr("type","password")},g=()=>{a.preloader.show();var e=a.form.convertToData("#login-form");if(e.username==""||e.password=="")return a.dialog.alert("All Fields are required."),a.preloader.hide(),!1;a.request({url:i+"user_login/",method:"POST",timeout:0,data:e,crossDomain:!0,success:function(o){console.log(o);var r=JSON.parse(o);if(console.log(r),r.ID){var f=window.localStorage;(async()=>await localStorage.setItem("store_Login",!0))(),(async()=>await localStorage.setItem("user_profile_data",o))(),a.views.main.router.navigate("/")}else m=a.toast.create({text:"Entered Credential is Wrong",position:"top",closeTimeout:3e3}),m.open();a.preloader.hide()}})},t=()=>{var e=window.localStorage,o=e.getItem("shop_Login");o=="true"&&(T=!0,$())};return b("pageInit",(e,o)=>{t(),a.views.main.router.clearPreviousHistory()}),function(e){var o=e.$,r=e.$h,f=e.$root,I=e.$f7,h=e.$f7route,R=e.$f7router,J=e.$theme,M=e.$update,j=e.$store;return r`
  <div class="page" data-name="booknow">
    <!-- Top Navbar -->
    <div class="navbar no-hairline">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
           
        </div>
        <div class="right">
         <a href="/"  class="link" ><i class="icons material-icons">roofing</i></a>
           
         
        </div>
      </div>
    </div>
    <!-- Toolbar-->
  
 


  <div class="page-content login-screen-content">
     

<div class="block heading-block animate__animated animate__fadeIn">
            <div class="row">
                <div class="col-60">
                  <h1><small></small><br/> Login</h1></div>
                 
            </div>     
</div>
     
      <form id="login-form">
            <div class="list">
              <ul>
                <li class="item-content item-input-outline">
                  <div class="item-inner">
                  <div class="item-input-wrap">
                      <input type="text" name="username" placeholder="Username/Email Address" />
                    </div>
                  </div>
                </li>
               <li class="item-content item-input-outline">
                  <div class="item-inner">
                   <div class="item-input-wrap">
                      <input type="password" name="password" id="password" placeholder="Your password" />

                    </div>
                  </div>
                </li>
                
              </ul>
              <div class="block showpassouter">
                
              <label class="toggle">
                  <input type="checkbox" name="showpass" id="showpass" @change="${y}" />
                  <span class="toggle-icon"></span> 
                </label> Show Password
              </div>
            </div>

<div class="block loginbtnOuter">
            <a class=" button button-large button-fill btn-black" @click="${g}" href="#">Log In</a>
</div>
            <div class="list">
               
              <div class="block-footer otherLinks">
                 
                <p><a class="link home" href="/signup/">Create an Account</a> - <a class="link home" href="/">Back to Home</a></p>
              </div>
            </div>
          
        </form>
  
     
  </div>
</div>
`}}ie.id="95d21d19e4";function ne(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){var x=0;let T=!1,D=[],L=[],u=[],m;const i="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",y=()=>{a.preloader.show();var e=a.form.convertToData("#signup-form");a.request({url:i+"customer-registration/",method:"POST",timeout:0,data:e,success:function(o){a.preloader.hide();var r=JSON.parse(o);console.log(r),r.status?(a.dialog.alert("Account has been Created"),a.views.main.router.navigate("/login/")):a.dialog.alert(r.message)}})},g=e=>{e.target.checked==!0?S(".signup #password").attr("type","text"):S(".signup #password").attr("type","password")},t=()=>{var e=window.localStorage,o=e.getItem("shop_Login");o=="true"&&(T=!0,$())};return b("pageInit",(e,o)=>{t(),a.views.main.router.clearPreviousHistory()}),function(e){var o=e.$,r=e.$h,f=e.$root,I=e.$f7,h=e.$f7route,R=e.$f7router,J=e.$theme,M=e.$update,j=e.$store;return r`
  <div class="page" data-name="booknow">
    <!-- Top Navbar -->
    <div class="navbar no-hairline">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          
        </div>
        <div class="right">
          <a href="/"  class="link" ><i class="icons f7-icons">multiply</i></a>
           
         
        </div>
      </div>
    </div>
    <!-- Toolbar-->


  <div class="page-content login-screen-content signup">
     

<div class="block heading-block animate__animated animate__fadeIn">
            <div class="row">
                <div class="col-60">
                  <h1><small></small><br/> Sign Up</h1></div>
                 
            </div>     
</div>
     
  
<form class="list" id="signup-form">
  <ul>
    <li>
      <div class="item-content item-input-outline">
        <div class="item-inner">
           <div class="item-input-wrap">
            <input type="text" name="first_name" placeholder="First name" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content item-input-outline">
        <div class="item-inner">
          <div class="item-input-wrap">
            <input type="text" name="last_name" placeholder="Last name" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content item-input-outline">
        <div class="item-inner">
          <div class="item-input-wrap">
            <input type="email" name="email" placeholder="E-mail" />
          </div>
        </div>
      </div>
    </li>
     <li>
      <div class="item-content item-input-outline">
        <div class="item-inner">
          <div class="item-input-wrap">
            <input type="text" name="username" placeholder="Username" />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content item-input-outline">
        <div class="item-inner">
           <div class="item-input-wrap">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
        </div>
      </div>
    </li>
 
   </ul>

   <div class="block showpassouter">
                
              <label class="toggle">
                  <input type="checkbox" name="showpass" id="showpass" @change="${g}" />
                  <span class="toggle-icon"></span> 
                </label> Show Password
              </div>


<div class="block loginbtnOuter">
            <a class=" button button-large button-fill btn-black" @click="${y}" href="#">Create an Account</a>
</div>

<div class="list">
   <div class="block-footer">
                
                <p><a class="link home" href="/login/">Login</a> | <a class="link home" href="/">Back to Home</a></p>
              </div>
            </div>

<input type="hidden" name="token" class="token" id="token" />


</form>
 
  
     
  </div>
</div>
`}}ne.id="7689f851b8";function re(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/";let T=[],D="",L="",u;const m=()=>{var t=localStorage.getItem("user_profile_data");T=JSON.parse(t),D=T.data.wallet_account,$()},i=t=>{for(var e=t.toString(),o="",r=0;r<e.length;r+=2)o+=String.fromCharCode(parseInt(e.substr(r,2),16));return o},y=async()=>{console.log(D);const t=new Z.Client("wss://xls20-sandbox.rippletest.net:51233");await t.connect();const e=await t.request({method:"account_nfts",account:D}),o=e.result.account_nfts.length,r=e.result.account_nfts;console.log(r);for(var f=0;f<o;f++){var I=i(r[f].URI),h=I.replace("ipfs://",""),R=g(r[f].Flags);L+='<div class="card demo-card-header-pic animate__animated animate__bounceIn card'+r[f].nft_serial+'">         <div class="CardMedia"><div class="cardImage"><img src="https://'+h+'.ipfs.nftstorage.link/" width="100" /></div><div class="cardCnt"><p>Serial: '+r[f].nft_serial+'</p><p class="date">Transfer Fee: <span>'+r[f].TransferFee/1e3+"%</span></p>          <p>"+R+"</p>          <p>TokenTaxon: <span>"+r[f].TokenTaxon+'</span></p>          <a href="#" class="viewTokenID" data-serial="'+r[f].nft_serial+'" >View Token ID</a></div></div>        <div class="card-content card-content-padding animate__animated animate__fadeIn">          Token ID<div class="code_block">'+r[f].TokenID+'</div>        </div>        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>      </div>'}u=L,$(),t.disconnect()},g=t=>{var e;return t==1?e="Burnable":t==2?e="OnlyXRP":t==3?e="Burnable, OnlyXRP":t==4?e="TrustLine":t==5?e="Burnable, TrustLine":t==6?e="OnlyXRP, TrustLine":t==7?e="Burnable, OnlyXRP, TrustLine":t==8?e="Transferable":t==9?e="Burnable, Transferable":t==10?e="OnlyXRP, Transferable":t==11?e="Burnable, OnlyXRP, Transferable":t==12&&(e="Burnable, OnlyXRP, TrustLine, Transferable"),"Flag: <span>"+e+"</span>"};return b("pageInit",(t,e)=>{m(),y()}),S(document).on("click",".viewTokenID",function(t){var e=S(this).attr("data-serial");S(".card"+e+" .card-content").toggleClass("active")}),function(t){var e=t.$,o=t.$h,r=t.$root,f=t.$f7,I=t.$f7route,h=t.$f7router,R=t.$theme,J=t.$update,M=t.$store;return o`
  <div class="page home" data-name="get-tokens">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
          <a href="/"  class="link" ><i class="icons f7-icons">chevron_up</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
    <div class="page-content">
       

<div class="block">
<h1>All My <span>xNFTs</span></h1>
</div>

 

<div class="tokenList" innerHTML="${u}">
   
<div class="skeleton-effect-wave skeleton-text">   


  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>

  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>




</div>

 



</div>




 
   

 

    
    </div>
  </div>
`}}re.id="fc74b1d6f5";function oe(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",T="https://api.xrpldata.com/api/v1/tokens";let D=[],L="",u="",m="",i,y,g,t,e,o,r,f,I,h=[],R=!0,J=!0,M=20;const j=w=>{for(var C=w.toString(),F="",B=0;B<C.length;B+=2)F+=String.fromCharCode(parseInt(C.substr(B,2),16));return F},W=()=>{a.request({url:T,method:"GET",timeout:0,success:function(w){var C=JSON.parse(w);console.log(C);let F=C.issuers;h=Object.keys(F).map(G=>[G,F[G]]),console.log(h),y=h.length;for(var B=0;B<20;B++)g=h[B][0],t=h[B][1].data.domain,e=h[B][1].data.username,o=h[B][1].data.twitter,r=h[B][1].data.kyc,f=h[B][1].tokens,I=f[0].currency,I.length>3?I=j(f[0].currency):I=I,t!=null?t='<p class="date">Domain: <span><a href="'+t+'" class="external colorGreen">'+t+"</a></span></p>":t="",e?e='<p class="date">Username: <span>'+e+"</span></p>":e="",o!=null?o='<p class="date">Twitter: <span><a href="https://twitter.com/'+o+'" class="external colorGreen">@'+o+"</a></span></p>":o="",r==!1?r='<i class="icons f7-icons colorGreen">checkmark_circle_fill</i>':r='<i class="icons f7-icons colorRed">checkmark_circle_fill</i>',u+='<div class="card demo-card-header-pic animate__animated animate__pulse ">         <div class="TokenImage"> '+I+' </div><div class="CardMedia"><div class="cardCnt"><p class="fs12">Issuer: '+g+"</p>"+t+e+o+'          <p class="kycCheckmark">KYC: <span>'+r+' </span></p>          <a href="#" class="viewTokenID" data-serial="" >View Token Detail</a></div></div>        <div class="card-content card-content-padding animate__animated animate__fadeIn">          View Token Detail<div class="code_block"> </div>        </div>        <div class="card-footer"><a href="" class="burnLink">Set Trustline</a><a href="https://bithomp.com/explorer/'+g+'" class="link external">Bithomp</a><a href="https://xrpscan.com/account/'+g+'" class="link external">XRPScan</a></div>      </div>';i=u,$()}})},z=()=>{!R||(R=!1,setTimeout(function(){if(M>=y){J=!1,$();return}let w=M+20;m="";for(var C=M;C<w;C++)g=h[C][0],t=h[C][1].data.domain,e=h[C][1].data.username,o=h[C][1].data.twitter,r=h[C][1].data.kyc,f=h[C][1].tokens,I=f[0].currency,I.length>3?I=j(f[0].currency):I=I,t!=null?t='<p class="date">Domain: <span><a href="'+t+'" class="external colorGreen">'+t+"</a></span></p>":t="",e?e='<p class="date">Username: <span>'+e+"</span></p>":e="",o!=null?o='<p class="date">Twitter: <span><a href="https://twitter.com/'+o+'" class="external colorGreen">@'+o+"</a></span></p>":o="",r==!1?r='<i class="icons f7-icons colorGreen">checkmark_circle_fill</i>':r='<i class="icons f7-icons colorRed">checkmark_circle_fill</i>',m+='<div class="card demo-card-header-pic animate__animated animate__pulse ">         <div class="TokenImage"> '+I+' </div><div class="CardMedia"><div class="cardCnt"><p class="fs12">Issuer: '+g+"</p>"+t+e+o+'          <p class="kycCheckmark">KYC: <span>'+r+' </span></p>          <a href="#" class="viewTokenID" data-serial="" >View Token Detail</a></div></div>        <div class="card-content card-content-padding animate__animated animate__fadeIn">          View Token Detail<div class="code_block"> </div>        </div>        <div class="card-footer"><a href="" class="burnLink">Set Trustline</a><a href="https://bithomp.com/explorer/'+g+'" class="link external">Bithomp</a><a href="https://xrpscan.com/account/'+g+'" class="link external">XRPScan</a></div>        </div>';R=!0,M+=20,S(".tokenList").append(m),$()},300))};return b("pageInit",(w,C)=>{W()}),function(w){var C=w.$,F=w.$h,B=w.$root,G=w.$f7,ee=w.$f7route,n=w.$f7router,d=w.$theme,l=w.$update,_=w.$store;return F`
  <div class="page home" data-name="get-tokens">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
          <a href="/"  class="link" ><i class="icons f7-icons">chevron_up</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
<div class="page-content infinite-scroll-content infinite-scroll-bottom" data-infinite-distance="100" @infinite=${z}>
        
       

<div class="block">
<h1>All XRPL <span>Tokens</span></h1>
</div>

 

<div class="tokenList" innerHTML="${i}">
   
<div class="skeleton-effect-wave skeleton-text">   


  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>

  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>




</div>

 



</div>




 
   

 
      ${J&&F`
      <div class="preloader infinite-scroll-preloader"></div>
      `}
    
    </div>
  </div>
`}}oe.id="ed8d3b8cb0";function le(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",T="https://api.xrpldata.com/api/v1/xls20-nfts/all/issuers",D="https://api.xrpldata.com/api/v1/xls20-nfts/issuer/";let L=[],u="",m="",i="",y,g,t,e,o,r,f,I,h,R,J=[],M=[],j=[],W=!0,z=!0,w=20;const C=n=>{for(var d=n.toString(),l="",_=0;_<d.length;_+=2)l+=String.fromCharCode(parseInt(d.substr(_,2),16));return l};async function F(n){const d=new Z.Client("wss://xrplcluster.com/");await d.connect();const l=await d.request({command:"account_nfts",account:n,ledger_index:"validated"});console.log(l),await d.disconnect(),l.result.account_nfts.forEach(_=>{if(_.URI!=null){let N=C(_.URI);if(N.includes("https://")){let P=N.includes("ipfs"),A=N.includes(".json");if(P||A)fetch(N).then(U=>U.json()).then(U=>{if(U.image!=null&&U.image!=""){let O='<div class="col-50 animate__animated animate__fadeIn"><a href="/nft-detail/'+l.result.account+"/"+_.NFTokenID+'"><img src="'+U.image+'" /></a></div>';S(".tokenList").append(O)}});else if(N!=null&&N!=""){let U='<div class="col-50 animate__animated animate__fadeIn"><a href="/nft-detail/'+l.result.account+"/"+_.NFTokenID+'"><img src="'+N+'" /></a></div>';S(".tokenList").append(U)}}S(".skeleton-text").hide()}})}function B(n){n.sort(()=>Math.random()-.5)}const G=()=>{a.request({url:T,method:"GET",timeout:0,success:function(n){var d=JSON.parse(n);console.log(d),j=d.data.issuers;for(var l=10-1;l>=0;l--)F(j[l]);w=10,$()}})},ee=()=>{!W||(W=!1,setTimeout(function(){if(w>=g){z=!1,$();return}let n=w+20;for(var d=n-1;d>=0;d--)F(j[d]);W=!0,w+=20,$()},300))};return b("pageInit",(n,d)=>{G()}),function(n){var d=n.$,l=n.$h,_=n.$root,N=n.$f7,q=n.$f7route,P=n.$f7router,A=n.$theme,U=n.$update,O=n.$store;return l`
  <div class="page home" data-name="get-tokens">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
          <a href="/"  class="link" ><i class="icons f7-icons">chevron_up</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
<div class="page-content infinite-scroll-content infinite-scroll-bottom" data-infinite-distance="100" @infinite=${ee}>
        
       

<div class="block">
<h1>Browse <span>NFTs</span></h1>
</div>

 
<div class="block">
<div class="tokenList row" innerHTML="${y}">
   
<div class="skeleton-effect-wave skeleton-text">   


  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>

  <div class="card demo-card-header-pic">
         <div class="CardMedia">
            <div class="cardImage">
              <div class="skeleton-block" style="width: 100px;height:100px;"></div>
            </div>
         

            <div class="cardCnt">
              <p>----------</p>
              <p class="date">----------------------</p>
              <p>TokenTaxon: <span>----------------</span></p>
            </div> 

        </div>

        <div class="card-content card-content-padding">
          Token ID<div class="code_block">0000000000000</div>
        </div>
        
        <div class="card-footer"><a href="" class="burnLink">Burn Token</a><a href="#" class="link checkOffer">Check Offer</a></div>
  </div>




</div>

 



</div>

</div>


 
   

 
      ${z&&l`
      <div class="preloader infinite-scroll-preloader"></div>
      `}
    
    </div>
  </div>
`}}le.id="734f2dd39e";function ce(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/",T="https://api.xrpldata.com/api/v1/xls20-nfts/all/issuers",D="https://api.xrpldata.com/api/v1/xls20-nfts/issuer/";let L=[],u="",m="",i="",y,g,t,e,o,r,f,I,h,R,J=[],M=[],j=[],W=!0,z=!0,w=20;const C=n=>{for(var d=n.toString(),l="",_=0;_<d.length;_+=2)l+=String.fromCharCode(parseInt(d.substr(_,2),16));return l};function F(n){return n&&typeof n=="object"&&n.constructor===Object}const B=n=>{if(F(n)){let _="";for(var l in n)_+=n[l]+", ";return _}else return n};async function G(n,d){const l=new Z.Client("wss://xrplcluster.com/");await l.connect();const _=await l.request({command:"account_nfts",account:n,ledger_index:"validated"});console.log(_),await l.disconnect(),M=_.result.account_nfts,console.log("nftid:",d);let N=M.filter(A=>{if(A.NFTokenID==d)return A});console.log(N);let q=C(N[0].URI);if(console.log("item_url",q),q.includes("https://")){let A=q.includes("ipfs"),U=q.includes(".json");if(A||U)fetch(q).then(O=>O.json()).then(O=>{if(console.log(O),O.image!=null&&O.image!=""){let Y='<div class="colanimate__animated animate__fadeIn textcenter"><img src="'+O.image+'" /></div>';Y+='<div class="row mbTop50"><div class="col-50"> <button class="col button button-fill button-round">View Offer</button></div><div class="col-50"> <button class="col button button-fill button-round">Create Offer</button></div></div>',Y+='<div class="list media-list nfts_data"><ul>',Y+='<li>              <div class="item-inner">                <div class="item-title-row">                  <div class="item-title">Owner</div>                </div>                <div class="item-text">'+_.result.account+'</div>              </div>          </li><li>              <div class="item-inner">                <div class="item-title-row">                  <div class="item-title">Issuer</div>                </div>                <div class="item-text">'+N[0].Issuer+'</div>              </div>          </li><li>              <div class="item-inner">                <div class="item-title-row">                  <div class="item-title">Transfer Fee</div>                </div>                <div class="item-text">'+N[0].TransferFee/1e3+'%</div>              </div>          </li><li>              <div class="item-inner">                <div class="item-title-row">                  <div class="item-title">Taxon</div>                </div>                <div class="item-text">'+N[0].NFTokenTaxon+"</div>              </div>          </li>";for(var Q in O)O[Q]!=""&&Q!="attributes"&&Q!="id"&&(Y+='<li>              <div class="item-inner">                <div class="item-title-row">                  <div class="item-title">'+Q+'</div>                </div>                <div class="item-text">'+B(O[Q])+"</div>              </div>          </li>");Y+="</ul></div>",S(".nftDetailContent").html(Y)}});else if(q!=null&&q!=""){let O='<div class="col-50 animate__animated animate__fadeIn textcenter"><a href="/nft-detail/"><img src="'+q+'" /></a></div>';S(".nftDetailContent").html(O)}}ee(n)}const ee=n=>{M.forEach(d=>{if(d.URI!=null){let l=C(d.URI);if(l.includes("https://")){let N=l.includes("ipfs"),q=l.includes(".json");if(N||q)fetch(l).then(P=>P.json()).then(P=>{if(P.image!=null&&P.image!=""){let A='<div class="col-50 animate__animated animate__fadeIn"><a href="/nft-detail/'+n+"/"+d.NFTokenID+'"><img src="'+P.image+'" /></a></div>';S(".sameCollection").append(A)}});else if(l!=null&&l!=""){let P='<div class="col-50 animate__animated animate__fadeIn"><a href="/nft-detail/'+n+"/"+d.NFTokenID+'"><img src="'+l+'" /></a></div>';S(".sameCollection").append(P)}}}})};return b("pageInit",(n,d)=>{G(d.route.params.owneraddress,d.route.params.nftid)}),function(n){var d=n.$,l=n.$h,_=n.$root,N=n.$f7,q=n.$f7route,P=n.$f7router,A=n.$theme,U=n.$update,O=n.$store;return l`
  <div class="page home" data-name="get-tokens">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
          <a href="/"  class="link" ><i class="icons f7-icons">chevron_up</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
<div class="page-content" >
        
       

<div class="block">
<h1>NFT <span>Detail</span></h1>
</div>

 
<div class="block">
<div class="nftDetailContent" >
   
</div>
</div>

<div class="block">
<h2>More from same Collections</h2>
<div class="sameCollection row"></div>
</div>
 
    
    </div>
  </div>
`}}ce.id="b7de486379";function de(s,{app:v,Dom7:p,$store:k,$:c,$f7:a,$on:b,$onBeforeMount:E,$onMounted:X,$onBeforeUnmount:V,$onUnmounted:K,$update:$}){const x="https://dev.avsquaretechnologies.com/xrpnft/wp-json/api/v1/";let T=[],D,L;const u=()=>{var i=localStorage.getItem("user_profile_data");T=JSON.parse(i),console.log("User Data",T),D=T.data.wallet_account,$()},m=async()=>{console.log(D);const i=new Z.Client("wss://xls20-sandbox.rippletest.net:51233");await i.connect(),L=await i.request({method:"account_info",account:D}),console.log(L),$()};return b("pageInit",(i,y)=>{u(),m()}),function(i){var y=i.$,g=i.$h,t=i.$root,e=i.$f7,o=i.$f7route,r=i.$f7router,f=i.$theme,I=i.$update,h=i.$store;return g`
  <div class="page home" data-name="account-info">
    <!-- Top Navbar -->
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
           
        </div>
        <div class="title sliding">NFT using XRPL</div>
        <div class="right">
           <a href="/signup/"  class="link" ><i class="icons f7-icons">square_arrow_right</i></a>
           <a href="/signup/"  class="link" ><i class="icons f7-icons">person</i></a>
           <a href="#"  class="link" ><i class="icons f7-icons">wallet</i></a>
        </div>
         
      </div>
    </div>
    




    <!-- Scrollable page content-->
    <div class="page-content">
       

<div class="block">
<h1>Account <span>Information</span></h1>
</div>

<div class="block">

<div class="address">rKWyJtR86jdgou4awpA92N5LXqVz4311Lo</div>
<div class="widget-balances"><ul class="fa-ul">
      <li class="currency-xrp">
        <i class="fa-li fa-money fa-xrp"></i>
        <h5>XRP</h5>
        <div><span class="balance hint--left" data-hint="9 998.539795">9 998.53</span></div>
        <div class="dl">
        
        <div class="lower-list">
          <span class="dt">Reserved</span>
          <span class="dd"><span class="rightunder hint--top" data-hint="45">45.00</span></span>
        </div>
        <div class="lower-list">
          <span class="dt">Available</span>
          <span class="dd"><span class="rightunder hint--top" data-hint="9 953.539795">9 953.53</span></span>
        </div>
        
        </div>
  </li></ul></div>


<div class="infotext">
   

  ${L&&g` 
  <div>Minted NFTs: <b class="green">${L.result.account_data.MintedTokens}</b></div>
  <div>Burned NFTs: <b class="orange">${L.result.account_data.BurnedTokens}</b></div>
  <div>Next sequence: <b>#${L.result.account_data.Sequence}</b></div>
  <div>Last affecting tx: <a href="AF3980FF92B9D4733C040338219559AE03D868860B2D2FD7FC068FD3A204850D"><u>${L.result.account_data.PreviousTxnID}</u></a></div>

  `}
   
  </div>


</div>
   

 

    
    </div>
  </div>
`}}de.id="625ebc8763";var he=[{path:"/",component:te},{path:"/login/",component:ie},{path:"/signup/",component:ne},{path:"/createnft/",component:se},{path:"/gettokens/",component:re},{path:"/allxrpltokens/",component:oe},{path:"/browsenft/",component:le},{path:"/nft-detail/:owneraddress/:nftid",component:ce},{path:"/accountinfo/",component:de}];const ge=ue({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:s}){return s.products}},actions:{addProduct({state:s},v){s.products=[...s.products,v]}}});function ve(){return function(s){var v=s.$,p=s.$h,k=s.$root,c=s.$f7,a=s.$f7route,b=s.$f7router,E=s.$theme,X=s.$update,V=s.$store;return p`
  <div id="app">




  <!-- Your main view, should have "view-main" class -->
  <div class="view view-main view-init safe-areas" data-url="/"></div>

  </div>
`}}ve.id="e74d68c281";var ae=pe(),be=new fe({name:"XRP NFT",theme:"auto",el:"#app",component:ve,id:"io.avsquare.xrp",store:ge,routes:he,iosTranslucentBars:!1,input:{scrollIntoViewOnFocus:ae.cordova&&!ae.electron,scrollIntoViewCentered:ae.cordova&&!ae.electron},statusbar:{iosOverlaysWebView:!1,androidOverlaysWebView:!1,iosBackgroundColor:"#000000",iosTextColor:"white",androidTextColor:"white",androidBackgroundColor:"#000000"},on:{init:function(){var s=this;s.device.cordova&&H.init(s)}}});
