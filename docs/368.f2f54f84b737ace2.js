"use strict";(self.webpackChunkEducatly=self.webpackChunkEducatly||[]).push([[368],{1368:(V,u,i)=>{i.r(u),i.d(u,{BlogPostListingModule:()=>X});var a=i(6895),r=i(3456),t=i(4650);const C=[];let x=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(C),r.Bz]})}return n})();var l=i(4466);let M=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[a.ez,x,l.m]})}return n})();var O=i(6013),d=i.n(O),b=i(529);let f=(()=>{class n{constructor(o){this.HttpClient=o}getPosts(){return this.HttpClient.get("articles")}static#t=this.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _=i(6575),h=i(577),v=i(8423);let w=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading-indicator"]],decls:3,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","square-jelly-box",3,"fullScreen"],[1,"text-white"]],template:function(e,s){1&e&&(t.TgZ(0,"ngx-spinner",0)(1,"p",1),t._uU(2,"Loading Posts..."),t.qZA()()),2&e&&t.Q6J("fullScreen",!0)},dependencies:[v.Ro]})}return n})();function z(n,p){1&n&&(t.TgZ(0,"div",14),t._UZ(1,"img",15),t.qZA())}function S(n,p){if(1&n&&t._UZ(0,"img",16),2&n){const o=t.oxw();t.s9C("lazyLoad",o.post.cover_image)}}const Z=function(){return{"width.px":24}};let m=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog-post-item"]],inputs:{post:"post"},decls:21,vars:13,consts:[[1,"d-flex","flex-column","justify-content-between","h-100"],["class","not-found",4,"ngIf"],["alt","cover image","class","w-100","loading","lazy",3,"lazyLoad",4,"ngIf"],[1,"text-start"],[1,"type-of"],[1,"d-flex","justify-content-between"],[1,"title"],["src","assets/icons/arrow-up-right.svg",3,"svgStyle"],[1,"description"],[1,"author","d-flex"],["alt","author image",1,"rounded-circle",3,"lazyLoad"],[1,"author-information","text-start"],[1,"author-name","m-0"],[1,"published-date"],[1,"not-found"],["lazyLoad","assets/imgs/not-found.webp","alt","not found image","loading","lazy",1,"w-100","h-100"],["alt","cover image","loading","lazy",1,"w-100",3,"lazyLoad"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div"),t.YNc(2,z,2,0,"div",1),t.YNc(3,S,1,1,"img",2),t.TgZ(4,"div",3)(5,"p",4),t._uU(6),t.qZA(),t.TgZ(7,"div",5)(8,"p",6),t._uU(9),t.qZA(),t._UZ(10,"svg-icon",7),t.qZA(),t.TgZ(11,"p",8),t._uU(12),t.qZA()()(),t.TgZ(13,"div",9),t._UZ(14,"img",10),t.TgZ(15,"div",11)(16,"p",12),t._uU(17),t.qZA(),t.TgZ(18,"p",13),t._uU(19),t.ALo(20,"date"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",!s.post.cover_image),t.xp6(1),t.Q6J("ngIf",s.post.cover_image),t.xp6(3),t.Oqu(s.post.type_of),t.xp6(3),t.Oqu(s.post.title),t.xp6(1),t.Q6J("svgStyle",t.DdM(12,Z)),t.xp6(2),t.Oqu(s.post.description),t.xp6(2),t.s9C("lazyLoad",s.post.user.profile_image),t.xp6(3),t.Oqu(s.post.user.name),t.xp6(2),t.Oqu(t.xi3(20,9,s.post.published_at,"dd MMM yyyy")))},dependencies:[a.O5,_.z1,h.bk,a.uU],styles:["img[_ngcontent-%COMP%], .not-found[_ngcontent-%COMP%]{margin-bottom:24px}.not-found[_ngcontent-%COMP%]{height:141.11px}p.type-of[_ngcontent-%COMP%], p.title[_ngcontent-%COMP%]{margin-bottom:12px}p.type-of[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:14px;line-height:20px;color:#6941c6}p.title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:24px;line-height:32px;color:#101828}svg-icon[_ngcontent-%COMP%]{padding-top:4px}p.description[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:400;font-size:16px;line-height:24px;color:#667085}.author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:200px}.author[_ngcontent-%COMP%]   .author-information[_ngcontent-%COMP%]{margin-left:12px}.author[_ngcontent-%COMP%]   .author-information[_ngcontent-%COMP%]   p.author-name[_ngcontent-%COMP%]{line-height:20px;color:#101828;font-family:Inter,sans-serif;font-weight:500;font-size:14px}.author[_ngcontent-%COMP%]   .author-information[_ngcontent-%COMP%]   p.published-date[_ngcontent-%COMP%]{line-height:20px;color:#667085;font-family:Inter,sans-serif;font-weight:400;font-size:14px}"]})}return n})();var B=i(110);let y=(()=>{class n{constructor(o){this.BlogPostListing=o,this.posts=[],this.postsCopy=[],this.pageSize=10,this.pageIndex=0,this.totalPosts=0,this.pageSizeOptions=[5,10,25,100],this.paginatedPosts=new t.vpe}ngOnInit(){this.getPosts()}getPosts(){this.subscription=this.BlogPostListing.getPosts().subscribe({next:o=>{this.posts=o,this.postsCopy=o,this.totalPosts=this.posts.length,this.pageSizeOptions=[];for(let e=5;e<=this.posts.length;e+=5)this.pageSizeOptions.push(e)}})}handlePageChange(o){this.pageIndex=o.pageIndex,this.pageSize=o.pageSize,this.updateVisibleItems()}handlePageSizeChange(o){this.pageSize=o.pageSize,this.pageIndex=o.pageIndex,this.updateVisibleItems()}updateVisibleItems(){this.posts=this.postsCopy;const o=this.pageIndex*this.pageSize,s=this.posts.slice(o,o+this.pageSize);this.posts=s,this.paginatedPosts.emit(this.posts)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(f))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-pagination-controls"]],outputs:{paginatedPosts:"paginatedPosts"},decls:1,vars:4,consts:[[1,"paginator",3,"length","pageSize","pageIndex","pageSizeOptions","page"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-paginator",0),t.NdJ("page",function(g){return s.handlePageChange(g)})("pageSize",function(g){return s.handlePageSizeChange(g)}),t.qZA()),2&e&&t.Q6J("length",s.totalPosts)("pageSize",s.pageSize)("pageIndex",s.pageIndex)("pageSizeOptions",s.pageSizeOptions)},dependencies:[B.NW],styles:[".paginator[_ngcontent-%COMP%]{background-color:#f9f5ff}"]})}return n})();const I=function(){return{"width.px":20}};let P=(()=>{class n{constructor(){this.fetchingPosts=!1,this.SendRetry=new t.vpe}ngOnInit(){d().error({title:"Error",message:"No blog posts to show",timeout:3e3,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",drag:!0,transitionInMobile:"fadeInDown",transitionOutMobile:"fadeOutDown"})}fetchPosts(){this.fetchingPosts=!0,this.SendRetry.emit(this.fetchingPosts)}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-error-message"]],outputs:{SendRetry:"SendRetry"},decls:4,vars:2,consts:[[1,"text-center"],["type","button",1,"btn",3,"click"],["src","assets/icons/circular-arrow.svg",3,"svgStyle"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return s.fetchPosts()}),t._UZ(2,"svg-icon",2),t._uU(3," Retry "),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("svgStyle",t.DdM(1,I)))},dependencies:[h.bk],styles:["button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:hover{color:#673ec6;background-color:#f3ebff}"]})}return n})();function T(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"app-error-message",12),t.NdJ("SendRetry",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.fetchAgain(s))}),t.qZA()}}const L=function(n){return{"even-card":n}};function A(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"div",18),t.NdJ("click",function(){const c=t.CHM(o).$implicit,g=t.oxw(2);return t.KtG(g.navigateFullPost(c.url))}),t._UZ(1,"app-blog-post-item",19),t.qZA()}if(2&n){const o=p.$implicit;t.Q6J("ngClass",t.VKq(2,L,p.index%2==0)),t.xp6(1),t.Q6J("post",o)}}const J=function(){return{"width.px":20}};function F(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.loadMore())}),t._UZ(1,"svg-icon",21),t._uU(2," Load more "),t.qZA()}2&n&&(t.xp6(1),t.Q6J("svgStyle",t.DdM(1,J)))}function U(n,p){if(1&n){const o=t.EpF();t.TgZ(0,"section")(1,"div",13)(2,"div",14),t.YNc(3,A,2,4,"div",15),t.qZA(),t.YNc(4,F,3,2,"button",16),t.TgZ(5,"app-pagination-controls",17),t.NdJ("paginatedPosts",function(s){t.CHM(o);const c=t.oxw();return t.KtG(c.pagination(s))}),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(3),t.Q6J("ngForOf",o.posts)("ngForTrackBy",o.trackByFn),t.xp6(1),t.Q6J("ngIf",!o.allPostsLoaded)}}const k=function(){return{"width.px":15}},R=[{path:"",component:(()=>{class n{constructor(o,e){this.BlogPostListing=o,this.datePipe=e,this.posts=[],this.postsCopy=[],this.postsSearched=[],this.visiblePosts=[],this.sliceSize=10,this.allPostsLoaded=!1,this.pageSize=10,this.pageIndex=0,this.showErrorMessage=!1}ngOnInit(){this.getPosts()}getPosts(){this.showErrorMessage=!1,this.subscription=this.BlogPostListing.getPosts().subscribe({next:o=>{o&&(this.showErrorMessage=!1,d().success({title:"SUCCESS",message:"OK",timeout:3e3,position:"topRight",transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",drag:!0,transitionInMobile:"fadeInDown",transitionOutMobile:"fadeOutDown"}),this.posts=o,this.postsCopy=o,this.visiblePosts=this.posts.slice(0,this.sliceSize),this.posts=this.visiblePosts)},error:o=>{this.showErrorMessage=!0}})}search(o){o?o&&(o=o.trim().toLowerCase(),this.posts=this.postsCopy,this.postsSearched=this.posts.filter(e=>e.type_of.toLowerCase().includes(o)||e.title.toLowerCase().includes(o)||e.description.toLowerCase().includes(o)||e.user.name.toLowerCase().includes(o)||o==this.datePipe.transform(e.published_at,"dd MMM yyyy")?.split(" ")[0]||this.datePipe.transform(e.published_at,"dd MMM yyyy")?.split(" ")[1]?.toLowerCase()?.includes(o)||o==this.datePipe.transform(e.published_at,"dd MMM yyyy")?.split(" ")[2]),this.posts=this.postsSearched):this.posts=this.postsCopy}navigateFullPost(o){window.open(o,"_blank")}loadMore(){this.visiblePosts.length<=this.posts.length&&(this.posts=this.postsCopy,this.visiblePosts=this.posts.slice(0,this.visiblePosts.length+(this.posts.length-this.visiblePosts.length)),this.allPostsLoaded=!0,this.posts=this.visiblePosts)}pagination(o){this.posts=o,this.visiblePosts=this.posts}fetchAgain(o){o&&this.getPosts()}trackByFn(o,e){return e.id}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(a.uU))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog-post-listing"]],decls:19,vars:4,consts:[[1,"position-relative"],["lazyLoad","assets/icons/Background pattern.svg","alt","",1,"w-100","position-absolute","background-pattern"],[1,"m-auto","text-center","m-0"],[1,"container","text-center","d-flex","flex-column","align-items-center"],[1,"d-flex","justify-content-center","align-items-center","m-auto"],[1,"our-blog"],[1,"pricing-plans"],[1,"input-group"],["src","assets/icons/search.svg",1,"position-absolute","top-50","translate-middle",3,"svgStyle"],["type","text","placeholder","Search",1,"form-control",3,"keyup"],[3,"SendRetry",4,"ngIf"],[4,"ngIf"],[3,"SendRetry"],[1,"container","text-center"],[1,"row","justify-content-center"],["class","col- bg-light",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],["type","button","class","mb-4",3,"click",4,"ngIf"],[3,"paginatedPosts"],[1,"col-","bg-light",3,"ngClass","click"],[3,"post"],["type","button",1,"mb-4",3,"click"],["src","assets/icons/arrow-down.svg",3,"svgStyle"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"section",2)(3,"div",3)(4,"p",4)(5,"span",5),t._uU(6,"Our blog"),t.qZA(),t.TgZ(7,"span",6),t._uU(8,"Pricing plans"),t.qZA()(),t.TgZ(9,"h1"),t._uU(10,"Resources and insights"),t.qZA(),t.TgZ(11,"p"),t._uU(12,"The latest industry news, interviews, technologies, and resources."),t.qZA(),t.TgZ(13,"div",7),t._UZ(14,"svg-icon",8),t.TgZ(15,"input",9),t.NdJ("keyup",function(g){return s.search(g.target.value)}),t.qZA()()()(),t.YNc(16,T,1,0,"app-error-message",10),t.YNc(17,U,6,3,"section",11),t.qZA(),t._UZ(18,"app-loading-indicator")),2&e&&(t.xp6(14),t.Q6J("svgStyle",t.DdM(3,k)),t.xp6(2),t.Q6J("ngIf",s.showErrorMessage),t.xp6(1),t.Q6J("ngIf",!s.showErrorMessage))},dependencies:[a.mk,a.sg,a.O5,_.z1,h.bk,w,m,y,P],styles:[".background-pattern[_ngcontent-%COMP%]{top:310px;left:0;z-index:-1}section[_ngcontent-%COMP%]:first-of-type{padding:96px 0}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]:first-of-type   h1[_ngcontent-%COMP%]{margin-bottom:24px}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(1){width:82px;height:28px;color:#673ec6;border-radius:16px;line-height:20px;background-color:#f3ebff;padding:4px,12px,4px,12px;font-family:Inter,sans-serif;font-weight:500;font-size:14px}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(1)   span.pricing-plans[_ngcontent-%COMP%]{display:none;visibility:hidden;opacity:0}section[_ngcontent-%COMP%]:first-of-type   h1[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:600;font-size:48px;line-height:60px;color:#42307d;letter-spacing:-2%}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(2){font-family:Inter,sans-serif;font-weight:400;font-size:20px;line-height:30px;color:#6941c6}section[_ngcontent-%COMP%]:first-of-type   .input-group[_ngcontent-%COMP%]{width:320px;height:48px}section[_ngcontent-%COMP%]:first-of-type   .input-group[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]{z-index:6;left:20px}section[_ngcontent-%COMP%]:first-of-type   .input-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:35px;border-radius:8px!important}section[_ngcontent-%COMP%]:first-of-type   .input-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder{line-height:24px;font-family:Inter,sans-serif;font-weight:400;font-size:16px}section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]{margin-bottom:32px}section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]   .even-card[_ngcontent-%COMP%]{margin:0 32px}section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]   div[class^=col-][_ngcontent-%COMP%]{width:384px;height:580px;padding:24px,24px,0px,24px;cursor:pointer;margin-bottom:48px;box-shadow:0 12px 16px -4px #10182814}section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;height:48px;padding:12px,20px,12px,20px;border:1px;color:#673ec6;background-color:#f3ebff;border-radius:8px;font-family:Inter,sans-serif;font-weight:500;font-size:16px}@media only screen and (max-width: 992px){.background-pattern[_ngcontent-%COMP%]{top:470px;left:0;z-index:-1}section[_ngcontent-%COMP%]:first-of-type{padding:64px 0}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(1){width:106px;height:24px}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(1)   span.pricing-plans[_ngcontent-%COMP%]{display:block;visibility:visible;opacity:1}section[_ngcontent-%COMP%]:first-of-type   p[_ngcontent-%COMP%]:nth-of-type(1)   span.our-blog[_ngcontent-%COMP%]{display:none;visibility:hidden;opacity:0}section[_ngcontent-%COMP%]:first-of-type   .input-group[_ngcontent-%COMP%]{width:343px}section[_ngcontent-%COMP%]:nth-of-type(2) container   .even-card[_ngcontent-%COMP%]{margin:0}section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:343px}}@media only screen and (max-width: 343px){section[_ngcontent-%COMP%]:first-of-type   .container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], section[_ngcontent-%COMP%]:nth-of-type(2)   .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"]})}return n})()}];let E=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(R),r.Bz]})}return n})();const q=[{path:"",component:m}];let N=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(q),r.Bz]})}return n})(),j=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[a.ez,N,l.m]})}return n})();const Q=[{path:"",component:y}];let D=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(Q),r.Bz]})}return n})(),Y=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[a.ez,D,l.m]})}return n})();const H=[{path:"",component:P}];let K=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(H),r.Bz]})}return n})(),G=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[a.ez,K,l.m]})}return n})(),X=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({providers:[a.uU],imports:[a.ez,E,l.m,M,j,Y,G]})}return n})()}}]);