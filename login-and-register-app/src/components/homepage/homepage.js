import React from "react"
import {Helmet} from "react-helmet";
import "./homepage.css"

const Homepage = ({setLoginUser}) =>
{
    return (
        // <div className="homepage">
            // <h1>Hello world</h1>
    <div>    
    <nav>
      <div className="container">
        <h2 className="log">social media</h2>
        <div className="search_bar">
          <i className="uil uil-search"></i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search" width="20" length="14">
            <g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g>
          </svg>
          <input type="search" placeholder="search here" />
        </div>
        <div className="create">
          <label className="btn btn-primary" for="create-post">Create</label>
          <div className="profile-photo">
            <img src="img2.png" />
          </div>
        </div>
      </div>
    </nav>
    {/* <!---------------------------------main-----------------------> */}
    <main>
        <div class="container">
            {/* <!--------------------------left---------> */}
            <div class="left">
                <a class="profile">
                    <div class="profile-photo">
                        <img src="img2.png" />
                    </div>
                    <div class="handle">
                        <h4>Diana Ayi</h4>
                        <p class="text-muted">
                            @play
                        </p>
                    </div>
                </a>
                {/* <!--------sidebar------> */}
                <div class="sidebar">
                    <a class="menu-item active">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="home"><path fill="none" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023" transform="translate(2.5 2)"></path></svg></span><h3>Home</h3>
                    </a>
                    <a class="menu-item">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="explore"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path></svg></span><h3>Explore</h3>
                    </a>
                    <a class="menu-item" id="messages-notifications">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="message"><g data-name="Layer 2"><g data-name="message-circle"><circle cx="12" cy="12" r="1"></circle><circle cx="16" cy="12" r="1"></circle><circle cx="8" cy="12" r="1"></circle><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z"></path></g></g></svg><small class="notification-count">6</small></span><h3>Messages</h3>
                    </a>
                        <a class="menu-item" id="notification">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="notification"><g fill="none" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)"><path d="M.00082545485 11.7871203L.00082545485 11.568135C.0329512746 10.9202451.240598836 10.2924906.602355621 9.74960514 1.20450201 9.09746185 1.61670318 8.29830554 1.79571385 7.43597814 1.79571385 6.76950123 1.79571385 6.09350321 1.85392645 5.4270263 2.15469153 2.21841601 5.32727806 3.37507799e-14 8.46105618 3.37507799e-14L8.53867298 3.37507799e-14C11.6724511 3.37507799e-14 14.8450376 2.21841601 15.1555048 5.4270263 15.2137174 6.09350321 15.1555048 6.76950123 15.2040153 7.43597814 15.3854338 8.30030508 15.7972211 9.10194449 16.3973735 9.75912624 16.7618363 10.2972046 16.9698126 10.9226612 16.9989037 11.568135L16.9989037 11.7775992C17.0205591 12.6480449 16.720769 13.4968208 16.1548211 14.167395 15.4069586 14.9514753 14.392113 15.4392693 13.3024038 15.5384332 10.1069938 15.8812057 6.8830333 15.8812057 3.68762325 15.5384332 2.59914366 15.4349924 1.58575794 14.9479001.835206008 14.167395.278 13.496309-.0177593319 12.6525831.00082545485 11.7871203zM6.05493552 18.8517756C6.55421005 19.478449 7.28739599 19.8840184 8.09222803 19.978725 8.89706007 20.0734316 9.70716835 19.8494655 10.3432635 19.3563938 10.5389031 19.2105605 10.7149406 19.0410062 10.8671768 18.8517756"></path></g></svg><small class="notification-count">9+</small></span><h3>Notification</h3>
                        <div class="notification-popup">
                            <div>
                                <div class="profile-photo">
                                    <img src="img2.png" />
                                </div>
                                <div class="notification-body">
                                    <b>keke benjamin </b>accepted your request
                                    <small class="text-muted">2 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="img2.png" />
                                </div>
                                <div class="notification-body">
                                    <b>Jhon doe </b>connected on your post
                                    <small class="text-muted">1 HOUR AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="img2.png" />
                                </div>
                                <div class="notification-body">
                                    <b>Mary oppong </b> and <b>283 others </b>liked your post
                                    <small class="text-muted">4 MINUTES AGO</small>
                                </div>
                            </div>
                        </div>
                      {/* <!--------------------------end notification popup--------------->          */}
                    </a>
                    <a class="menu-item" >
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="bookmark"><g fill="none" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)"><path d="M8.16475977,16.631579 L2.23340962,19.881007 C1.75983818,20.1271252 1.17640846,19.9529066 0.915331812,19.4874143 L0.915331812,19.4874143 C0.839799009,19.3432192 0.79904873,19.1833528 0.796338677,19.0205951 L0.796338677,4.62242565 C0.796338677,1.87643022 2.67276889,0.778032041 5.37299774,0.778032041 L11.7162472,0.778032041 C14.3340962,0.778032041 16.2929063,1.80320367 16.2929063,4.43935929 L16.2929063,19.0205951 C16.2929063,19.2803494 16.1897192,19.5294649 16.0060452,19.713139 C15.8223711,19.8968131 15.5732556,20.0000001 15.3135012,20.0000001 C15.1478164,19.9973723 14.9849578,19.9566576 14.8375287,19.881007 L8.86956526,16.631579 C8.64965001,16.5127732 8.38467502,16.5127732 8.16475977,16.631579 Z"></path><line x1="4.87" x2="12.165" y1="7.323" y2="7.323"></line></g></svg></span><h3>Bookmarks</h3>                           
                    </a>
                    <a class="menu-item">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-name="Layer 1" viewBox="0 0 53 53" id="analytics"><path d="M49.5 44.74h-3.12v-27a1 1 0 0 0-1-1h-6.05a1 1 0 0 0-1 1v27H34V23.3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v21.44h-4.3V30.86a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v13.88h-3.29V11.07a1 1 0 0 0-2 0v34.67a1 1 0 0 0 1 1H49.39a1 1 0 0 0 0-2zm-9.17-26h4.05v26h-4.05zM28 24.3h4v20.44h-4zm-12.35 7.56h4v12.88h-4zM3.5 14.89h1.8a1 1 0 1 0 0-2H3.5a1 1 0 0 0 0 2zm0 5.99h1.8a1 1 0 1 0 0-2H3.5a1 1 0 0 0 0 2zm0 5.98h1.8a1 1 0 1 0 0-2H3.5a1 1 0 0 0 0 2zm0 5.99h1.8a1 1 0 0 0 0-2H3.5a1 1 0 0 0 0 2zm0 5.99h1.8a1 1 0 0 0 0-2H3.5a1 1 0 0 0 0 2zm0 5.99h1.8a1 1 0 0 0 0-2H3.5a1 1 0 0 0 0 2z"></path><path d="M15.12 21.88a1 1 0 0 0-.79 1.18 1 1 0 0 0 1 .81h.19c.63-.13 14.58-3 24.32-13.52l-.07.93a1 1 0 0 0 .93 1.06h.07a1 1 0 0 0 1-.94L42 7.31a1 1 0 0 0-1.16-1.06l-4 .66a1 1 0 1 0 .32 2l1.44-.23C29.31 19 15.27 21.86 15.12 21.88Z"></path></svg></span><h3>Analytics</h3>
                    </a>
                    <a class="menu-item">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" id="theme"><path d="M32 .58a31.19 31.19 0 0 0-14 3.27 1 1 0 1 0 .9 1.79A29.14 29.14 0 0 1 32 2.58a29.43 29.43 0 0 1 24.45 45.79 1 1 0 0 0 .27 1.39 1.07 1.07 0 0 0 .56.17 1 1 0 0 0 .83-.44A31.43 31.43 0 0 0 32 .58zm22.17 50.76a28 28 0 0 1-2.83 2.83 1 1 0 0 0-.09 1.41 1 1 0 0 0 .75.34 1 1 0 0 0 .66-.24 31.88 31.88 0 0 0 3-3 1 1 0 0 0-1.51-1.32zm-5.42 4.86A29.43 29.43 0 0 1 9.62 12.89a1 1 0 0 0-1.52-1.3 31.43 31.43 0 0 0 41.79 46.25 1 1 0 0 0 .25-1.39 1 1 0 0 0-1.39-.25zM11.34 10.67a1 1 0 0 0 .66-.27c.41-.38.82-.74 1.25-1.09A1 1 0 1 0 12 7.77c-.46.37-.9.76-1.34 1.16a1 1 0 0 0 .68 1.74zm3.6-2.86a1 1 0 0 0 .56-.17l.25-.17a1 1 0 1 0-1.11-1.67l-.27.2a1 1 0 0 0-.26 1.39 1 1 0 0 0 .83.42z"></path><path d="m51.13 36.8-.68-20.45a3.33 3.33 0 0 0-6.65 0l-.69 20.53c-2.11 3.29-1.28 4.89-.11 6.49a4.89 4.89 0 0 1 .83 1.42c.55 1.81-1.56 4-2.41 4.63a1 1 0 0 0 .49 1.78 11.63 11.63 0 0 0 1.65.11 9 9 0 0 0 7.57-14.51zm-5.34-20.38a1.33 1.33 0 0 1 2.66 0l.66 19.75h-4zm4.42 29.05a6.83 6.83 0 0 1-5.84 3.81c1-1.27 2-3.12 1.4-5.07a6.48 6.48 0 0 0-1.14-2c-.82-1.09-1.31-1.8 0-4h5a6.88 6.88 0 0 1 .58 7.26zM39.44 28.25a10.35 10.35 0 0 0-1.23-10.79 11.4 11.4 0 0 0-10.86-4.65 19.37 19.37 0 0 0 3 38.51 18.88 18.88 0 0 0 3.16-.26 4.32 4.32 0 0 0 3.29-2.51 4.53 4.53 0 0 0-.23-4.22 1.47 1.47 0 0 0-.23-.31c-5.13-4.79-2.79-7.73.17-11.45a24.68 24.68 0 0 0 2.93-4.32zm-4.6 17.13a2.58 2.58 0 0 1 .16 2.34 2.38 2.38 0 0 1-1.8 1.37 17.37 17.37 0 0 1-12.79-31.38 17 17 0 0 1 7.25-2.92 8.75 8.75 0 0 1 1.34-.11 9.52 9.52 0 0 1 7.6 4 8.36 8.36 0 0 1 1 8.73 22.31 22.31 0 0 1-2.72 3.95c-2.97 3.75-6.38 8.02-.04 14.02z"></path><path d="M30.4 17.64a5 5 0 1 0-3.06 8.87h.63a5 5 0 0 0 2.43-8.84zm-.71 5.73a2.94 2.94 0 0 1-2 1.12A3 3 0 0 1 25 19.74a2.87 2.87 0 0 1 2-1.12 2.31 2.31 0 0 1 .37 0 3 3 0 0 1 1.81.62 3 3 0 0 1 1.12 2 2.91 2.91 0 0 1-.61 2.13zm-9.44 9.98a4.53 4.53 0 0 0 .52 0 4.19 4.19 0 1 0-.52 0zM20 27h.27a2.17 2.17 0 0 1 .27 4.33 2.17 2.17 0 0 1-2.42-1.88A2.17 2.17 0 0 1 20 27zm4.7 11.14a3.76 3.76 0 1 0-3.7 4.23h.48a3.77 3.77 0 0 0 3.22-4.23zm-3.51 2.21a1.76 1.76 0 1 1-.44-3.49h.22a1.76 1.76 0 0 1 .22 3.51zm6.43.29a3.5 3.5 0 0 0-3 3.9A3.48 3.48 0 0 0 28 47.6h.45a3.5 3.5 0 0 0-.87-6.94zm.62 5a1.49 1.49 0 1 1-.37-3h.19a1.47 1.47 0 0 1 .91.31 1.5 1.5 0 0 1-.73 2.66z"></path></svg></span><h3>Theme</h3>
                    </a>
                    <a class="menu-item ">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="setting"><g fill="none" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.5 1.5)"><path d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z"></path><circle cx="9.675" cy="10.389" r="2.636"></circle></g></svg></span><h3>Settings</h3>
                    </a>
                    </div>
            {/* <!-----------------end of sidebar-----------> */}
            <label for="create-post" class="btn btn-primary" >Create Post</label>
        </div>
        {/* <!-- ---------------------------------end of sidebar------------------------------ -->
            <!-----------------middle------> */}
            <div class="middle">
                    {/* <!-- ----------------------------------stories-------------------- --> */}
                    <div class="stories">
                        <div class="story">
                            <div class="profile-photo">
                                <img src="img2.png" />
                            </div>
                            <p class="name"> your story</p>
                        </div>
                        <div class="story">
                            <div class="profile-photo">
                                <img src="img2.png" />
                            </div>
                            <p class="name">lilla james</p>
                        </div>
                        <div class="story">
                            <div class="profile-photo">
                                <img src="img2.png"/>
                            </div>
                            <p class="name">winniw hale</p>
                        </div>
                        <div class="story">
                            <div class="profile-photo">
                                <img src="img2.png" />
                            </div>
                            <p class="name"> danile bale</p>
                        </div>
                    </div>
            {/* <!-- --------------------------end of stories------------------------ --> */}
            <form class="create-post">
                <div class="profile-photo">
                    <img src="img2.png" />
                </div>
                <input type="text" placeholder="what on the world  diana?" id="create-post" />
                <input type="submit" value="post" class="btn btn-primary"/>
            </form>

            </div>
            {/* <!----------------------right------> */}
            <div class="right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit.S
            </div>
    
        </div>
        </main>
        <h1>hello world</h1>
        <div className="button" onClick={()=>setLoginUser({})}>Logout</div>
    </div>
    
    )
}

export default Homepage