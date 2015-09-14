/****************** Query hashchange ***************/
/*
 * jQuery hashchange event, v1.4, 2013-11-29
 * https://github.com/georgekosmidis/jquery-hashchange
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};var d=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();d&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this)

/* 
 * Boxer v3.3.0 - 2014-11-25 
 * A jQuery plugin for displaying images, videos or content in a modal overlay. Part of the Formstone Library. 
 * http://formstone.it/boxer/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */
!function(a,b){"use strict";function c(b){return L.formatter=j,I=a("body"),G=F(),H=G!==!1,H||(G="transitionend.boxer"),a(this).on("click.boxer",a.extend({},L,b||{}),d)}function d(c){if("undefined"==typeof J.$boxer){var d=a(this),f=c.data.$object,g=d[0].href?d[0].href||"":"",i=d[0].hash?d[0].hash||"":"",j=g.toLowerCase().split(".").pop().split(/\#|\?/),l=j[0],m=d.data("boxer-type")||"",o="image"===m||a.inArray(l,c.data.extensions)>-1||"data:image"===g.substr(0,10),p=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,w="url"===m||!o&&!p&&"http"===g.substr(0,4)&&!i,x="element"===m||!o&&!p&&!w&&"#"===i.substr(0,1),y="undefined"!=typeof f;if(x&&(g=i),a("#boxer").length>1||!(o||p||w||x||y))return;if(C(c),J=a.extend({},{$window:a(b),$body:a("body"),$target:d,$object:f,visible:!1,resizeTimer:null,touchTimer:null,gallery:{active:!1},isMobile:K||c.data.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},c.data),J.margin*=2,J.type=o?"image":p?"video":"element",o||p){var z=J.$target.data("gallery")||J.$target.attr("rel");"undefined"!=typeof z&&z!==!1&&(J.gallery.active=!0,J.gallery.id=z,J.gallery.$items=a("a[data-gallery= "+J.gallery.id+"], a[rel= "+J.gallery.id+"]"),J.gallery.index=J.gallery.$items.index(J.$target),J.gallery.total=J.gallery.$items.length-1)}var A="";if(J.isMobile||(A+='<div id="boxer-overlay" class="'+J.customClass+'"></div>'),A+='<div id="boxer" class="loading animating '+J.customClass,J.fixed&&(A+=" fixed"),J.isMobile&&(A+=" mobile"),w&&(A+=" iframe"),(x||y)&&(A+=" inline"),A+='">',A+='<span class="boxer-close">'+J.labels.close+"</span>",A+='<span class="boxer-loading"></span>',A+='<div class="boxer-container">',A+='<div class="boxer-content">',(o||p)&&(A+='<div class="boxer-meta">',J.gallery.active?(A+='<div class="boxer-control previous">'+J.labels.previous+"</div>",A+='<div class="boxer-control next">'+J.labels.next+"</div>",A+='<p class="boxer-position"',J.gallery.total<1&&(A+=' style="display: none;"'),A+=">",A+='<span class="current">'+(J.gallery.index+1)+"</span> "+J.labels.count+' <span class="total">'+(J.gallery.total+1)+"</span>",A+="</p>",A+='<div class="boxer-caption gallery">'):A+='<div class="boxer-caption">',A+=J.formatter.apply(J.$body,[J.$target]),A+="</div></div>"),A+="</div></div></div>",J.$body.append(A),J.$overlay=a("#boxer-overlay"),J.$boxer=a("#boxer"),J.$container=J.$boxer.find(".boxer-container"),J.$content=J.$boxer.find(".boxer-content"),J.$meta=J.$boxer.find(".boxer-meta"),J.$position=J.$boxer.find(".boxer-position"),J.$caption=J.$boxer.find(".boxer-caption"),J.$controls=J.$boxer.find(".boxer-control"),J.paddingVertical=J.isMobile?J.$boxer.find(".boxer-close").outerHeight()/2:parseInt(J.$boxer.css("paddingTop"),10)+parseInt(J.$boxer.css("paddingBottom"),10),J.paddingHorizontal=J.isMobile?0:parseInt(J.$boxer.css("paddingLeft"),10)+parseInt(J.$boxer.css("paddingRight"),10),J.contentHeight=J.$boxer.outerHeight()-J.paddingVertical,J.contentWidth=J.$boxer.outerWidth()-J.paddingHorizontal,J.controlHeight=J.$controls.outerHeight(),h(),J.gallery.active&&r(),J.$window.on("resize.boxer",M.resize).on("keydown.boxer",s),J.$body.on("touchstart.boxer click.boxer","#boxer-overlay, #boxer .boxer-close",e).on("touchmove.boxer",C),J.gallery.active&&J.$boxer.on("touchstart.boxer click.boxer",".boxer-control",q),J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),o?k(g):p?n(g):w?u(g):x?t(g):y?v(J.$object):a.error("BOXER: '"+g+"' is not valid."))}),I.addClass("boxer-open"),H||J.$boxer.trigger(G),y)return J.$boxer}}function e(b){C(b),"undefined"!=typeof J.$boxer&&(J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),J.$overlay.remove(),J.$boxer.remove(),J={})}).addClass("animating"),I.removeClass("boxer-open"),H||J.$boxer.trigger(G),E(J.resizeTimer),J.$window.off("resize.boxer").off("keydown.boxer"),J.$body.off(".boxer").removeClass("boxer-open"),J.gallery.active&&J.$boxer.off(".boxer"),J.isMobile&&"image"===J.type&&J.gallery.active&&J.$container.off(".boxer"),J.$window.trigger("close.boxer"))}function f(){{var b=i();J.isMobile?0:J.duration}J.isMobile||J.$controls.css({marginTop:(J.contentHeight-J.controlHeight-J.metaHeight)/2}),!J.visible&&J.isMobile&&J.gallery.active&&J.$content.on("touchstart.boxer",".boxer-image",y),(J.isMobile||J.fixed)&&J.$body.addClass("boxer-open"),J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),J.$container.on(G,function(b){C(b),a(b.target).is(J.$container)&&(J.$container.off(G),J.$boxer.removeClass("animating"),J.isAnimating=!1)}),J.$boxer.removeClass("loading"),H||J.$content.trigger(G),J.visible=!0,J.callback.apply(J.$boxer),J.$window.trigger("open.boxer"),J.gallery.active&&p())}),J.isMobile||J.$boxer.css({height:J.contentHeight+J.paddingVertical,width:J.contentWidth+J.paddingHorizontal,top:J.fixed?0:b.top});var c=J.oldContentHeight!==J.contentHeight||J.oldContentWidth!==J.contentWidth;!J.isMobile&&H&&c||J.$boxer.trigger(G),J.oldContentHeight=J.contentHeight,J.oldContentWidth=J.contentWidth}function g(){if(J.visible&&!J.isMobile){var a=i();J.$controls.css({marginTop:(J.contentHeight-J.controlHeight-J.metaHeight)/2}),J.$boxer.css({height:J.contentHeight+J.paddingVertical,width:J.contentWidth+J.paddingHorizontal,top:J.fixed?0:a.top})}}function h(){var a=i();J.$boxer.css({top:J.fixed?0:a.top})}function i(){if(J.isMobile)return{left:0,top:0};var a={left:(J.$window.width()-J.contentWidth-J.paddingHorizontal)/2,top:J.top<=0?(J.$window.height()-J.contentHeight-J.paddingVertical)/2:J.top};return J.fixed!==!0&&(a.top+=J.$window.scrollTop()),a}function j(a){var b=a.attr("title");return void 0!==b&&""!==b.trim()?'<p class="caption">'+b.trim()+"</p>":""}function k(b){J.$image=a("<img />"),J.$image.load(function(){J.$image.off("load, error");var a=B(J.$image);J.naturalHeight=a.naturalHeight,J.naturalWidth=a.naturalWidth,J.retina&&(J.naturalHeight/=2,J.naturalWidth/=2),J.$content.prepend(J.$image),""===J.$caption.html()?J.$caption.hide():J.$caption.show(),l(),f()}).error(x).attr("src",b).addClass("boxer-image"),(J.$image[0].complete||4===J.$image[0].readyState)&&J.$image.trigger("load")}function l(){var a=0;for(J.windowHeight=J.viewportHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.viewportWidth=J.$window.width()-J.paddingHorizontal,J.contentHeight=1/0,J.contentWidth=1/0,J.imageMarginTop=0,J.imageMarginLeft=0;J.contentHeight>J.viewportHeight&&2>a;)J.imageHeight=0===a?J.naturalHeight:J.$image.outerHeight(),J.imageWidth=0===a?J.naturalWidth:J.$image.outerWidth(),J.metaHeight=0===a?0:J.metaHeight,0===a&&(J.ratioHorizontal=J.imageHeight/J.imageWidth,J.ratioVertical=J.imageWidth/J.imageHeight,J.isWide=J.imageWidth>J.imageHeight),J.imageHeight<J.minHeight&&(J.minHeight=J.imageHeight),J.imageWidth<J.minWidth&&(J.minWidth=J.imageWidth),J.isMobile?(J.$meta.css({width:J.windowWidth}),J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight=J.viewportHeight-J.paddingVertical,J.contentWidth=J.viewportWidth-J.paddingHorizontal,m(),J.imageMarginTop=(J.contentHeight-J.targetImageHeight-J.metaHeight)/2,J.imageMarginLeft=(J.contentWidth-J.targetImageWidth)/2):(0===a&&(J.viewportHeight-=J.margin+J.paddingVertical,J.viewportWidth-=J.margin+J.paddingHorizontal),J.viewportHeight-=J.metaHeight,m(),J.contentHeight=J.targetImageHeight,J.contentWidth=J.targetImageWidth),J.$meta.css({width:J.contentWidth}),J.$image.css({height:J.targetImageHeight,width:J.targetImageWidth,marginTop:J.imageMarginTop,marginLeft:J.imageMarginLeft}),J.isMobile||(J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight+=J.metaHeight),a++}function m(){var a=J.isMobile?J.contentHeight-J.metaHeight:J.viewportHeight,b=J.isMobile?J.contentWidth:J.viewportWidth;J.isWide?(J.targetImageWidth=b,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal,J.targetImageHeight>a&&(J.targetImageHeight=a,J.targetImageWidth=J.targetImageHeight*J.ratioVertical)):(J.targetImageHeight=a,J.targetImageWidth=J.targetImageHeight*J.ratioVertical,J.targetImageWidth>b&&(J.targetImageWidth=b,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal)),(J.targetImageWidth>J.imageWidth||J.targetImageHeight>J.imageHeight)&&(J.targetImageHeight=J.imageHeight,J.targetImageWidth=J.imageWidth),(J.targetImageWidth<J.minWidth||J.targetImageHeight<J.minHeight)&&(J.targetImageWidth<J.minWidth?(J.targetImageWidth=J.minWidth,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal):(J.targetImageHeight=J.minHeight,J.targetImageWidth=J.targetImageHeight*J.ratioVertical))}function n(b){J.$videoWrapper=a('<div class="boxer-video-wrapper" />'),J.$video=a('<iframe class="boxer-video" seamless="seamless" />'),J.$video.attr("src",b).addClass("boxer-video").prependTo(J.$videoWrapper),J.$content.prepend(J.$videoWrapper),o(),f()}function o(){J.windowHeight=J.viewportHeight=J.contentHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.viewportWidth=J.contentWidth=J.$window.width()-J.paddingHorizontal,J.videoMarginTop=0,J.videoMarginLeft=0,J.isMobile?(J.$meta.css({width:J.windowWidth}),J.metaHeight=J.$meta.outerHeight(!0),J.viewportHeight-=J.metaHeight,J.targetVideoWidth=J.viewportWidth,J.targetVideoHeight=J.targetVideoWidth*J.videoRatio,J.targetVideoHeight>J.viewportHeight&&(J.targetVideoHeight=J.viewportHeight,J.targetVideoWidth=J.targetVideoHeight/J.videoRatio),J.videoMarginTop=(J.viewportHeight-J.targetVideoHeight)/2,J.videoMarginLeft=(J.viewportWidth-J.targetVideoWidth)/2):(J.viewportHeight=J.windowHeight-J.margin,J.viewportWidth=J.windowWidth-J.margin,J.targetVideoWidth=J.videoWidth>J.viewportWidth?J.viewportWidth:J.videoWidth,J.targetVideoWidth<J.minWidth&&(J.targetVideoWidth=J.minWidth),J.targetVideoHeight=J.targetVideoWidth*J.videoRatio,J.contentHeight=J.targetVideoHeight,J.contentWidth=J.targetVideoWidth),J.$meta.css({width:J.contentWidth}),J.$videoWrapper.css({height:J.targetVideoHeight,width:J.targetVideoWidth,marginTop:J.videoMarginTop,marginLeft:J.videoMarginLeft}),J.isMobile||(J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight=J.targetVideoHeight+J.metaHeight)}function p(){var b="";J.gallery.index>0&&(b=J.gallery.$items.eq(J.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),J.gallery.index<J.gallery.total&&(b=J.gallery.$items.eq(J.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function q(b){C(b);var c=a(this);J.isAnimating||c.hasClass("disabled")||(J.isAnimating=!0,J.gallery.index+=c.hasClass("next")?1:-1,J.gallery.index>J.gallery.total&&(J.gallery.index=J.gallery.total),J.gallery.index<0&&(J.gallery.index=0),J.$container.on(G,function(b){if(C(b),a(b.target).is(J.$container)){J.$container.off(G),"undefined"!=typeof J.$image&&J.$image.remove(),"undefined"!=typeof J.$videoWrapper&&J.$videoWrapper.remove(),J.$target=J.gallery.$items.eq(J.gallery.index),J.$caption.html(J.formatter.apply(J.$body,[J.$target])),J.$position.find(".current").html(J.gallery.index+1);var c=J.$target.attr("href"),d=c.indexOf("youtube.com/embed")>-1||c.indexOf("player.vimeo.com/video")>-1;d?n(c):k(c),r()}}),J.$boxer.addClass("loading animating"),H||J.$content.trigger(G))}function r(){J.$controls.removeClass("disabled"),0===J.gallery.index&&J.$controls.filter(".previous").addClass("disabled"),J.gallery.index===J.gallery.total&&J.$controls.filter(".next").addClass("disabled")}function s(a){!J.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&J.$boxer.find(".boxer-close").trigger("click"):(C(a),J.$controls.filter(37===a.keyCode?".previous":".next").trigger("click"))}function t(b){var c=a(b).find(">:first-child").clone();v(c)}function u(b){b+=b.indexOf("?")>-1?"&"+L.requestKey+"=true":"?"+L.requestKey+"=true";var c=a('<iframe class="boxer-iframe" src="'+b+'" />');v(c)}function v(a){J.$content.append(a),w(a),f()}function w(a){J.windowHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.$window.width()-J.paddingHorizontal,J.objectHeight=a.outerHeight(!0),J.objectWidth=a.outerWidth(!0),J.targetHeight=J.targetHeight||J.$target.data("boxer-height"),J.targetWidth=J.targetWidth||J.$target.data("boxer-width"),J.maxHeight=J.windowHeight<0?L.minHeight:J.windowHeight,J.isIframe=a.is("iframe"),J.objectMarginTop=0,J.objectMarginLeft=0,J.isMobile||(J.windowHeight-=J.margin,J.windowWidth-=J.margin),J.contentHeight=void 0!==J.targetHeight?J.targetHeight:J.isIframe||J.isMobile?J.windowHeight:J.objectHeight,J.contentWidth=void 0!==J.targetWidth?J.targetWidth:J.isIframe||J.isMobile?J.windowWidth:J.objectWidth,(J.isIframe||J.isObject)&&J.isMobile?(J.contentHeight=J.windowHeight,J.contentWidth=J.windowWidth):J.isObject&&(J.contentHeight=J.contentHeight>J.windowHeight?J.windowHeight:J.contentHeight,J.contentWidth=J.contentWidth>J.windowWidth?J.windowWidth:J.contentWidth)}function x(){var b=a('<div class="boxer-error"><p>Error Loading Resource</p></div>');J.type="element",J.$meta.remove(),J.$image.off("load, error"),v(b)}function y(a){if(C(a),E(J.touchTimer),!J.isAnimating){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;J.xStart=b?b.pageX:a.clientX,J.leftPosition=0,J.touchMax=1/0,J.touchMin=-1/0,J.edge=.25*J.contentWidth,0===J.gallery.index&&(J.touchMax=0),J.gallery.index===J.gallery.total&&(J.touchMin=0),J.$boxer.on("touchmove.boxer",z).one("touchend.boxer",A)}}function z(a){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;J.delta=J.xStart-(b?b.pageX:a.clientX),J.delta>20&&C(a),J.canSwipe=!0;var c=-J.delta;c<J.touchMin&&(c=J.touchMin,J.canSwipe=!1),c>J.touchMax&&(c=J.touchMax,J.canSwipe=!1),J.$image.css({transform:"translate3D("+c+"px,0,0)"}),J.touchTimer=D(J.touchTimer,300,function(){A(a)})}function A(a){C(a),E(J.touchTimer),J.$boxer.off("touchmove.boxer touchend.boxer"),J.delta&&(J.$boxer.addClass("animated"),J.swipe=!1,J.canSwipe&&(J.delta>J.edge||J.delta<-J.edge)?(J.swipe=!0,J.$image.css(J.delta<=J.leftPosition?{transform:"translate3D("+J.contentWidth+"px,0,0)"}:{transform:"translate3D("+-J.contentWidth+"px,0,0)"})):J.$image.css({transform:"translate3D(0,0,0)"}),J.swipe&&J.$controls.filter(J.delta<=J.leftPosition?".previous":".next").trigger("click"),D(J.resetTimer,J.duration,function(){J.$boxer.removeClass("animated")}))}function B(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function C(a){a.preventDefault&&(a.stopPropagation(),a.preventDefault())}function D(a,b,c){return E(a),setTimeout(c,b)}function E(a){a&&(clearTimeout(a),a=null)}function F(){var a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},b=document.createElement("div");for(var c in a)if(a.hasOwnProperty(c)&&c in b.style)return a[c];return!1}var G,H,I=null,J={},K=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(b.navigator.userAgent||b.navigator.vendor||b.opera),L={callback:a.noop,customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:a.noop,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,opacity:.75,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},M={close:function(){"undefined"!=typeof J.$boxer&&(J.$boxer.off(".boxer"),J.$overlay.trigger("click"))},defaults:function(b){return L=a.extend(L,b||{}),"object"==typeof this?a(this):!1},destroy:function(){return a(this).off(".boxer")},resize:function(b){return"undefined"!=typeof J.$boxer&&("object"!=typeof b&&(J.targetHeight=arguments[0],J.targetWidth=arguments[1]),"element"===J.type?w(J.$content.find(">:first-child")):"image"===J.type?l():"video"===J.type&&o(),g()),a(this)}};a.fn.boxer=function(a){return M[a]?M[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.boxer=function(c,e){return M[c]?M[c].apply(b,Array.prototype.slice.call(arguments,1)):c instanceof a?d.apply(b,[{data:a.extend({$object:c},L,e||{})}]):void 0}}(jQuery,window);





/****************** Scroll Depth ***************/
/*!
 * @preserve
 * jquery.scrolldepth.js | v0.4.1
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(a,b,c){"use strict";var e={elements:[],minHeight:0,percentage:!0,testing:!1},f=a(b),g=[];a.scrollDepth=function(d){function i(b,c,e){d.testing?a("#console").html(b+": "+c):"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventValue:1,eventNonInteraction:!0}),arguments.length>2&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventTiming:e})):("function"==typeof ga&&(ga("send","event","Scroll Depth",b,c,1,{nonInteraction:1}),arguments.length>2&&ga("send","timing","Scroll Depth",b,e,c)),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(_gaq.push(["_trackEvent","Scroll Depth",b,c,1,!0]),arguments.length>2&&_gaq.push(["_trackTiming","Scroll Depth",b,e,c,100])))}function j(a){return{"25%":parseInt(.25*a,10),"50%":parseInt(.5*a,10),"75%":parseInt(.75*a,10),"100%":a-1}}function k(b,c,d){a.each(b,function(b,e){-1===a.inArray(b,g)&&c>=e&&(i("Percentage",b,d),g.push(b))})}function l(b,c,d){a.each(b,function(b,e){-1===a.inArray(e,g)&&a(e).length&&c>=a(e).offset().top&&(i("Elements",e,d),g.push(e))})}function m(a,b){var c,d,e,f=null,g=0,h=function(){g=new Date,f=null,e=a.apply(c,d)};return function(){var i=new Date;g||(g=i);var j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}var h=+new Date;d=a.extend({},e,d),a(c).height()<d.minHeight||(i("Percentage","Baseline"),f.on("scroll.scrollDepth",m(function(){var e=a(c).height(),i=b.innerHeight?b.innerHeight:f.height(),m=f.scrollTop()+i,n=j(e),o=+new Date-h;return g.length>=4+d.elements.length?(f.off("scroll.scrollDepth"),void 0):(d.elements&&l(d.elements,m,o),d.percentage&&k(n,m,o),void 0)},500)))}}(jQuery,window,document);




jQuery(document).ready(function($){


    if (typeof _gaq === 'object') {
      
      // listen to clicks
      $('a[href]').click(function(){
        if (this.href.indexOf('mailto:') === 0) {
//_gaq.push(['_trackPageview', '/mailtos/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'mailto', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf|doc|zip|ppt|jpg|gif|exe|xls|docx)$/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf)/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (!this.href.match(document.domain)) {
//_gaq.push(['_trackPageview', '/external/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'external', 'click', $(this).attr('href')]);
        }
      });
		
		$('#nav-button').mousedown(function(e){
_gaq.push(['_trackEvent', 'Mobile-Menu-Icon', 'click', $(this).attr('href')]);
		});	
	
		
    }



/****************** Track Hash Clicks ***************/	

$(window).hashchange( function(){
	//console.log(location.hash);
    _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
})



/****************** Scroll to Hash ***************/
var hashTagActive = "";
$(".scrollto").click(function (event) {
	event.preventDefault();
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() -
$(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	$('html,body').animate({
		scrollTop: dest
	}, 1000, 'swing');
	hashTagActive = this.hash;
//}
});

/****************** Sticky Navigation ***************/
//if($(window).width() > 990){
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 1)  {
		$(".banner").addClass("fixed");} 
	else {
		$(".banner").removeClass("fixed");}
		});

//}; 

/****************** Scroll Depth ***************/
$.scrollDepth();



/****************** Responsive Navigation ***************/
$("#nav-button").on("click",function(event){
	$(".nav-main").toggleClass("active");
	$("#nav-button").toggleClass("active"); 
	$("#body-wrapper").toggleClass("active");   
	event.stopPropagation();


	$("#nav-wrap > li > a").on("click",function(event){
            $('.nav-main').removeClass('active');
            $('#nav-button').removeClass('active');
			$("#body-wrapper").removeClass("active");  
	})

	$(document).on('click', function(e){
        if($('.nav-main').has(e.target).length === 0){
            $('.nav-main').removeClass('active');
            $('#nav-button').removeClass('active');
			$("#body-wrapper").removeClass("active");   
        }
	})
});



$(document).on('click', function(event) {
	if (!$(event.target).closest('#nav-wrap').length) {
	}
});

/****************** Activate boxer ***************/
$(".boxer").boxer({
	callback: function($target) {
	$(".icon-search").focus();
	},
	mobile:true
});





});