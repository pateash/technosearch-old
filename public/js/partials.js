!function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/account/account.page.html","")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/contact/contact.page.html",'\n<navbar></navbar>\n<!-- ############ section container ############ -->\n<div class="at-section container clearfix">\n\n    <!-- ############ content header ############ -->\n    <header class="content-header">\n        <h1 class="content-title">Get in Touch</h1>\n        <!--<span class="sub-heading">Do not hesitate to booking me!</span>-->\n        <hr class="content-line">\n    </header>\n    <!-- /content header -->\n\n    <div class="row clearfix">\n        <br>\n        <!-- column icon -->\n        <div class="col-1-3 column-icon">\n            <span class="icon-home icon"></span>\n            <span class="txt"><strong>Maulana Azad National Institute of Technology </strong><br>Bhopal, India</span>\n        </div>\n        <!-- /column icon -->\n        <!-- column icon -->\n        <div class="col-1-3 column-icon">\n            <span class="icon-phone icon"></span>\n            <span class="txt"><strong>(0755) 405-1784</strong><br>(+91) 7692-932-545</span>\n        </div>\n        <!-- /column icon -->\n        <!-- column icon -->\n        <div class="col-1-3 last column-icon">\n            <span class="icon-pencil-2 icon"></span>\n            <span class="txt"><strong><a href="mailto:contact@technosearch.in">contact@technosearch.in</a></strong><br><a href="mailto:manit.studentcouncil@gmail.com">manit.studentcouncil@gmail.com</a> </span>\n        </div>\n        <!-- /column icon -->\n    </div>\n</div>\n\n<contact></contact>\n<footer></footer>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/event/event.page.html","<navbar></navbar>\n<event></event>\n<footer></footer>")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/events/events.page.html","<navbar></navbar>\n\n<event-table></event-table>\n<social></social>\n<footer></footer>\n")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/events-all/events-all.page.html","<navbar></navbar>\n<events-list></events-list>\n<footer></footer>")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/footer/footer.page.html","<footer></footer>")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/gallery/gallery.page.html","    <navbar></navbar>\n    <gallery></gallery>\n    <social></social>\n    <footer></footer>\n")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/header/header.page.html","")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/home/home.page.html",'<welcome></welcome>\n<navbar></navbar>\n<countdown></countdown>\n<events></events>\n<event-list></event-list>\n<div id="contact-map" class="gmap clearfix" map-lazy-load="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaFKpve25K3b2X_ge_J1s0kGKM6YOoU1Y" map-lazy-load-params="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaFKpve25K3b2X_ge_J1s0kGKM6YOoU1Y">\n    <div style="width: 100%;height: 100%;position: absolute;z-index: 1"></div>\n    <ng-map center="[23.215177, 77.409950]" zoom="14" style="height:500px">\n        <marker position="[23.215177, 77.409950]" title="MANIT"></marker>\n    </ng-map>\n</div>\n<contact></contact>\n<social></social>\n<sponsors></sponsors>\n<footer></footer>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/pronites/pronites.page.html","<navbar></navbar>\n<events-list></events-list>\n<footer></footer>")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/team/team.page.html","    <navbar></navbar>\n    <team></team>\n    <footer></footer>\n\n")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/pages/workshops/workshops.page.html","<navbar></navbar>\n<events-list></events-list>\n<footer></footer>")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/contact/contact.component.html",'\n<!-- ############################# contact ############################# -->\n<section id="contact">\n\n\n    <!-- ############ section container ############ -->\n    <div class="container clearfix">\n\n        <hr class="divider">\n        <div class="row clearfix">\n            <h2 class="heading-m text-center">Send us a message</h2>\n            <span class="sub-heading text-center">Please fill in your contact details</span>\n        </div>\n\n        <!-- contact form -->\n        <form name="vm.contactForm" class="form contact-form" ng-submit="vm.submit()">\n            <div class="row clearfix">\n                <div class="col-1-3">\n                    <label for="contact-name"><strong>Name</strong> (required)</label>\n                    <input type="text" name="name" id="contact-name" required ng-model="vm.name">\n                </div>\n                <div class="col-1-3">\n                    <label for="contact-email"><strong>Email</strong> (required)</label>\n                    <input type="email" name="email" id="contact-email" required ng-model="vm.email">\n                </div>\n                <div class="col-1-3 last">\n                    <label for="contact-contact"><strong>Contact</strong> (required)</label>\n                    <input type="tel" name="contact" id="contact-contact" ng-model="vm.contact">\n                </div>\n            </div>\n            <div class="row clearfix">\n                <div class="col-1-1">\n                    <label for="contact-message"><strong>Your Message</strong> (required)</label>\n                    <textarea name="message" id="contact-message" cols="88" rows="6" required ng-model="vm.message"></textarea>\n                </div>\n            </div>\n            <div class="row clearfix">\n                <div vc-recaptcha key="vm.captchakey" on-create="setWidgetId(widgetId)"></div>\n            </div>\n            <div class="row clearfix">\n                <input type="submit" value="Submit Message" class="large" ng-disabled="vm.contactForm.$invalid">\n            </div>\n            <div class="row clearfix" ng-show="vm.success">\n                <div style="color: #ffffff;font-size: 18px;padding: 10px 0px">\n                    Form submitted successfully!\n                </div>\n            </div>\n\n            <div class="clear"></div>\n        </form>\n        <!-- /contact form -->\n\n    </div>\n    <!-- /section container -->\n\n</section>\n<!-- /contact -->')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/countdown/countdown.component.html",'<!-- ############################# upcoming event ############################# -->\n<section id="upcoming-event" class="event-countdown">\n    <!-- container -->\n    <div class="container clearfix">\n        <!-- ############ content header ############ -->\n        <header class="content-header">\n            <h6 class="upcoming-event">Coming soon</h6>\n            <h2 class="content-title">Technosearch</h2>\n            <span class="sub-heading">Manit Bhopal India</span>\n        </header>\n        <!-- /content header -->\n        <!-- countdown -->\n        <div class="countdown">\n            <timer countdown="vm.countTime" interval="1000">\n                <div class="days" data-label="Days">{{ddays}}</div>\n                <div class="hours" data-label="Hours">{{hhours}}</div>\n                <div class="minutes" data-label="Minutes">{{mminutes}}</div>\n                <div class="seconds" data-label="Seconds">{{sseconds}}</div>\n            </timer>\n        </div>\n        <!-- /countdown -->\n    </div>\n    <!-- /container -->\n</section>\n<!-- /upcoming event -->\n\n')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/event/event.component.html",'\n<div class="container clearfix at-section">\n\n    <div id="event-single" class="row clearfix">\n        <!-- column -->\n        \n        <!-- /column -->\n        <!-- column -->\n        <div class="col-1-2">\n            <!--<h2>Promotion</h2>-->\n            <!-- image poster -->\n            <img ng-src="/img/events/{{vm.item.slug}}.jpg" alt="{{vm.item.name | capitalize}}" class="event-item">\n        </div>\n        <div class="col-1-2 last">\n            <h1>{{vm.item.name | capitalize}}</h1>\n            <p>{{vm.item.description}} </p>\n            <a ng-if="vm.item.problem_statement" class="btn large alignleft" href="/problemstatements/{{vm.item.slug}}.pdf" target="_self" download="{{vm.item.slug}}.pdf">Download Problem Statement</a>\n        </div>\n        <!-- /column -->\n    </div>\n    <div class="row clearfix coordinator">\n        <div class="col-1-3">\n            <h3>Coordinator</h3>\n            <h5>{{vm.item.name1 | capitalize}}</h5>\n            <p>{{vm.item.email1 | lowercase}} </p>\n            <p>{{vm.item.contact1}} </p>\n        </div>\n        <div class="col-1-3">\n            <h3>Faculty Coordinator</h3>\n            <h5>{{vm.item.faculty | capitalize}}</h5>\n        </div>\n        <div class="col-1-3 last">\n            <h3>Coordinator</h3>\n            <h5>{{vm.item.name2 | capitalize}}</h5>\n            <p>{{vm.item.email2 | lowercase}} </p>\n            <p>{{vm.item.contact2}} </p>\n        </div>\n    </div>\n    <!-- /row -->\n</div>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/event-list/event-list.component.html",'<section id="events" class="section">\n    <ul id="events-list">\n        <li style="background-image: url(img/workshops.jpg)">\n            <div class="inner">\n                <!--<span class="event-date">21-23</span>-->\n                <h2><a ui-sref="app.workshops" class="event-by-ajax">Workshops</a></h2>\n                <span class="event-location">Come, Learn and Ideate</span>\n            </div>\n        </li>\n        <li style="background-image: url(img/guest-lectures.jpg)">\n            <div class="inner">\n                <!--<span class="event-date">09/02</span>-->\n                <h2><a ui-sref="app.guestlectures" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Guest Lectures</a></h2>\n                <span class="event-location">Seek, Inspire and Innovate</span>\n            </div>\n        </li>\n        <li style="background-image: url(img/pro-nites.jpg)">\n            <div class="inner">\n                <!--<span class="event-date">09/18</span>-->\n                <h2><a ui-sref="app.pronites" class="event-by-ajax" data-ajax-options=\'{"target" :"#event"}\'>Pro Nites</a></h2>\n                <span class="event-location">Enjoy, Relish and Relive</span>\n            </div>\n        </li>\n    </ul>\n</section>\n')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/events/events.component.html",'<section id="portfolio" class="section">\n    <div id="portfolio-header" class="section-header parallax clearfix" style="background-image: url(placeholders/release-header-1920x1000.jpg)" data-interia="0.1">\n        <div class="overlay"></div>\n        <div class="container clearfix">\n            <div class="row">\n                <h2 class="section-heading">ABOUT TECHNOSEARCH</h2>\n            </div>\n\n            <div class="row">\n                <div class="info-box">\n                    <p class="text-center">TECHNOSEARCH\'16 will be adding another milestone in the history of MANIT.\n                        Our technical festival boasts the status of Largest Technical event in Central India, and this\n                        year we\'ll be showcasing ourselves beyond the expectations of attendees. From extravagant events\n                        to lecture series from distinguished personalities, from highly learning workshops to various\n                        fun events, there will be no stone unturned. Along with these, exhibitions, gaming zone and\n                        techno cultural nights will be adding charm to the fest.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id="portfolio-main-filter" class="filter">\n        <ul class="filter-list item-filter active-filter clearfix">\n            <li class="filter-label"><span class="label">Events</span></li>\n            <li><a data-filter="*" class="active">All</a></li>\n            <li><a data-filter=".robotics">Robotics</a></li>\n            <li><a data-filter=".coding">Coding</a></li>\n            <li><a data-filter=".departmental">Departmental</a></li>\n            <li><a data-filter=".aerodrome">Aerodrome</a></li>\n            <li><a data-filter=".literary">Literary</a></li>\n            <li><a data-filter=".strategical">Strategical</a></li>\n            <li><a data-filter=".fun">Fun</a></li>\n            <li><a data-filter=".photobooth">Photobooth</a></li>\n        </ul>\n    </div>\n    <div id="portfolio-items" class="fullwidth items clearfix grid">\n\n            <div class="item {{event.category}}" ng-repeat="event in vm.items" data-filter="{{event.category}}" ng-class="{ departmental : event.departmental }">\n                <a ui-sref="app.event({slug: event.slug})" class="thumb project-thumb">\n                    <div class="inner">\n                        <h6>{{event.name | capitalize}}</h6>\n                        <h6 style="font-size: 12px;margin-top: 50px">{{event.category | humanReadable}}</h6>\n                    </div>\n                    <img class="lazy event-item" ng-src="/img/events/{{event.slug}}.jpg" alt="{{event.name | capitalize}}">\n                </a>\n            </div>\n\n    </div>\n\n</section>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/events-list/events-list.component.html",'<section id="portfolio" class="section">\n    <div id="portfolio-header" class="section-header parallax clearfix" style="background-image: url(placeholders/release-header-1920x1000.jpg)" data-interia="0.1">\n        <div class="overlay"></div>\n        <div class="container clearfix">\n            <h6 class="section-sub-heading">MORE THAN 30+ EVENTS</h6>\n            <h2 class="section-heading">AMAZING EVENTS</h2>\n        </div>\n    </div>\n\n    <div id="portfolio-items" class="fullwidth items clearfix grid">\n\n        <div class="item {{event.category}}" ng-repeat="event in vm.items" data-filter="{{event.category}}">\n            <a ui-sref="app.event({slug: event.slug})" class="thumb project-thumb">\n                <div class="inner">\n                    <h6>{{event.name | capitalize}}</h6>\n                </div>\n                <img class="lazy" ng-src="img/events/{{event.slug}}.jpg" alt="{{event.name | capitalize}}">\n            </a>\n        </div>\n\n\n    </div>\n\n</section>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/footer/footer.component.html",'<div id="footer">\n    <div class="container">\n        <div id="copyrights">\n            <img ng-src="img/logo.png" class="aligncenter" alt="footer-logo">\n            &copy; 2016 TechnoSearch. MANIT-Bhopal\n        </div>\n    </div>\n</div>\n')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/gallery/gallery.component.html",'<section id="gallery">\n\n    <div id="ajax-content" class="at-section">\n\n        <div class="container clearfix">\n\n            <header class="content-header">\n                <h1 class="content-title">Gallery</h1>\n                <span class="sub-heading">Previous Techno Pictures</span>\n                <hr class="content-line">\n            </header>\n\n            <div class="row clearfix">\n\n                <div class="masonry clearfix">\n                    <div class="brick width-1-4 height-1-4" ng-repeat="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]" style="background-image: url(img/gallery/thumb_{{i}}.jpg);background-size: cover">\n                        <a style="height: 100%;width: 100%" href="img/gallery/{{i}}.jpg" class="thumb imagebox" title="Technosearch gallery">\n\n                            <div class="inner">\n                            </div>\n                        </a>\n                    </div>\n\n\n                </div>\n                <!-- /masonry -->\n            </div>\n            <!-- /row -->\n\n            <div class="clear"></div>\n\n\n        </div>\n        <!-- /container -->\n    </div>\n    <!-- /ajax contant -->\n</section>\n<!-- /404 section -->')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/navbar/navbar.component.html",'<!-- ############################# navigation section ############################# -->\n\n<section id="main-nav-wrapper">\n    <!-- main navigation -->\n    <div id="main-nav">\n\n        <!-- navigation container -->\n        <div class="nav-container">\n\n            <!-- ############ logo ############ -->\n            <a ui-sref="app.home" id="logo" class="smooth-scroll">\n                <img src="img/logo.png" alt="Logo">\n            </a>\n            <!-- /logo -->\n\n            <!-- ############ icon navigation ############ -->\n            <nav id="icon-nav">\n                <ul>\n                    <!-- todo show the up arrow button only on the home page -->\n                    <li><a href="#" scroll-to="top" id="nav-up" class="smooth-scroll"><span class="icon-arrow-up-2"></span></a></li>\n                </ul>\n            </nav>\n            <!-- /icon navigation -->\n\n            <!-- ############ navigation ############ -->\n            <nav id="nav" class="one-page-nav">\n                <ul>\n                    <li ui-sref-active="current" ng-class="{ active: vm.submenu }" ng-mouseenter="vm.submenu = true" ng-mouseleave="vm.submenu = false">\n                        <a>Events</a>\n                        <ul ng-class="{ \'hide\' : !vm.submenu }">\n                            <li>\n                                <a ui-sref="app.competitions">Competitions</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.workshops">Workshops</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.guestlectures">Guest Lectures</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.pronites">Pro-Nites</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.gallery">Gallery</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.team">Team</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.sponsors">Sponsors</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.contact">Contact</a>\n                    </li>\n                </ul>\n            </nav>\n            <!-- /navigation -->\n\n            <!-- responsive navigation -->\n            <div id="dl-menu" class="dl-menuwrapper one-page-nav">\n                <button class="dl-trigger" ng-click="vm.openmenu = !vm.openmenu">Open Menu</button>\n                <ul class="dl-menu" ng-class="{\'dl-menuopen\' : vm.openmenu}">\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.events">Events</a>\n                        <ul style="margin-left: 30px">\n                            <li>\n                                <a ui-sref="app.competitions">Competitions</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.workshops">Workshops</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.guestlectures">Guest Lectures</a>\n                            </li>\n                            <li>\n                                <a ui-sref="app.pronites">Pro-Nites</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.account">Account</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.gallery">Gallery</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.team">Team</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.sponsors">Sponsors</a>\n                    </li>\n                    <li ui-sref-active="current">\n                        <a ui-sref="app.contact">Contact</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /responsive navigation -->\n        </div>\n        <!-- /navigation container -->\n    </div>\n    <!-- /main navigation -->\n</section>\n<!-- /navigation section -->')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/pronites-list/pronites-list.component.html","")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/social/social.component.html",'\n<!-- ############################# social ############################# -->\n<section id="social">\n    <div class="flex-col-1-4"><a href="{{social.twitter}}" target="__blank" class="social-twitter"><span class="icon-twitter"></span>Twitter</a></div>\n    <div class="flex-col-1-4"><a href="{{social.fb}}" target="__blank" class="social-facebook"><span class="icon-facebook"></span>Facebook</a></div>\n    <div class="flex-col-1-4"><a href="{{social.youtube}}" target="__blank" class="social-youtube"><span class="icon-youtube"></span>Youtube</a></div>\n    <div class="flex-col-1-4"><a href="{{social.g}}" target="__blank" class="social-google-plus"><span class="icon-google-plus"></span>Google Plus</a></div>\n</section>\n<!-- /social -->\n')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/sponsors/sponsors.component.html","")}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/team/team.component.html",'\n<div class="container">\n    <div class="at-section">\n        <div class="at-section__title">Team</div>\n    </div>\n    <div data-column="3" class="at-grid">\n        <div class="at-column" ng-repeat="member in vm.items">\n            <div class="at-user">\n                <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"></div>\n                <div class="at-user__name">{{member.member_name}}</div>\n                <div class="at-user__title">{{member.member_title}}</div>\n                <ul class="at-social">\n                    <li class="at-social__item">\n                        <a href="{{member.fb_link}}">\n                            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n                                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>\n                            </svg>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/welcome/welcome.component.html",'\n<section id="intro" class="intro-resize parallax clearfix" style="background-image: url(img/intro.jpg)">\n    <!-- animated bg -->\n    <div class="intro-bg"></div>\n    <!-- container -->\n    <div class="container" id="welcome">\n        <img id="manit-logo" class="alignleft" src="img/manit.png" alt="Logo">\n        <img id="intro-logo" class="alignright" src="img/logo.png" alt="Logo">\n\n        <div class="distribute">\n            <h1 class="content-title">Maulana Azad National Institute of Technology</h1>\n\n            <div class="technostyle"><img ng-src="img/tsfont.png" alt="TechnoSearch"></div>\n\n            <div id="ticker-wrap">\n                <ul ticker id="ticker" timing="3000">\n                    <li ng-repeat="item in vm.tickerItems" class="item-{{$index}}">\n                        {{item.title}}\n                    </li>\n                </ul>\n            </div>\n\n\n            <a id="scroll-arrows" class="smooth-scroll" href="#" scroll-to="upcoming-event"><img src="img/scroll-arrows.png" alt="scroll down"></a>\n\n        </div>\n\n\n\n    </div>\n    <!-- /container -->\n\n</section>\n<!--/intro-->\n')}])}(),function(n){try{n=angular.module("app.partials")}catch(a){n=angular.module("app.partials",[])}n.run(["$templateCache",function(n){n.put("./views/app/components/workshops-list/workshops-list.component.html","")}])}();