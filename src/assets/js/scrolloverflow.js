/* Scrolloverflow 2.0.0 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/

import IScroll from "./IScroll.min";

(function(window,document){window.fp_scrolloverflow=(function(){var SCROLLABLE='fp-scrollable';var SCROLLABLE_SEL='.'+SCROLLABLE;var ACTIVE='active';var ACTIVE_SEL='.'+ACTIVE;var SECTION='fp-section';var SECTION_SEL='.'+SECTION;var SECTION_ACTIVE_SEL=SECTION_SEL+ACTIVE_SEL;var SLIDE='fp-slide';var SLIDE_SEL='.'+SLIDE;var SLIDE_ACTIVE_SEL=SLIDE_SEL+ACTIVE_SEL;var SLIDES_WRAPPER='fp-slides';var SLIDES_WRAPPER_SEL='.'+SLIDES_WRAPPER;var TABLE_CELL='fp-tableCell';var TABLE_CELL_SEL='.'+TABLE_CELL;var RESPONSIVE='fp-responsive';var AUTO_HEIGHT_RESPONSIVE='fp-auto-height-responsive';
if(IScroll){
    IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener('wheel',this);this.wrapper.addEventListener('mousewheel',this);this.wrapper.addEventListener('DOMMouseScroll',this);};
    IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener('wheel',this);this.wrapper.removeEventListener('mousewheel',this);this.wrapper.removeEventListener('DOMMouseScroll',this);};    
}else if(global.IScroll){
    IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener('wheel',this);this.wrapper.addEventListener('mousewheel',this);this.wrapper.addEventListener('DOMMouseScroll',this);};
    IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener('wheel',this);this.wrapper.removeEventListener('mousewheel',this);this.wrapper.removeEventListener('DOMMouseScroll',this);};    
}

function getPaddings(element){var section=fp_utils.closest(element,SECTION_SEL);if(section!=null){return parseInt(getComputedStyle(section)['padding-bottom'])+parseInt(getComputedStyle(section)['padding-top']);}
return 0;}
function scrollBarHandler(){var self=this;self.options=null;self.init=function(options,iscrollOptions){self.options=options;self.iscrollOptions=iscrollOptions;if(document.readyState==='complete'){createScrollBarForAll();fullpage_api.shared.afterRenderActions();}
window.addEventListener('load',function(){createScrollBarForAll();fullpage_api.shared.afterRenderActions();});return self;};function createScrollBarForAll(){if(fp_utils.hasClass(document.body,RESPONSIVE)){removeResponsiveScrollOverflows();}
else{forEachSectionAndSlide(createScrollBar);}}
function createScrollBar(element){if(fp_utils.hasClass(element,'fp-noscroll'))return;fp_utils.css(element,{'overflow':'hidden'});var scrollOverflowHandler=self.options.scrollOverflowHandler;var wrap=scrollOverflowHandler.wrapContent();var section=fp_utils.closest(element,SECTION_SEL);var scrollable=scrollOverflowHandler.scrollable(element);var contentHeight;var paddings=getPaddings(section);if(scrollable!=null){contentHeight=scrollOverflowHandler.scrollHeight(element);}
else{contentHeight=element.scrollHeight-paddings;if(self.options.verticalCentered){contentHeight=$(TABLE_CELL_SEL,element)[0].scrollHeight-paddings;}}
var scrollHeight=fp_utils.getWindowHeight()-paddings;if(contentHeight>scrollHeight){if(scrollable!=null){scrollOverflowHandler.update(element,scrollHeight);}
else{if(self.options.verticalCentered){fp_utils.wrapInner($(TABLE_CELL_SEL,element)[0],wrap.scroller);fp_utils.wrapInner($(TABLE_CELL_SEL,element)[0],wrap.scrollable);}else{fp_utils.wrapInner(element,wrap.scroller);fp_utils.wrapInner(element,wrap.scrollable);}
scrollOverflowHandler.create(element,scrollHeight,self.iscrollOptions);}}
else{scrollOverflowHandler.remove(element);}
fp_utils.css(element,{'overflow':''});}
function forEachSectionAndSlide(callback){$(SECTION_SEL).forEach(function(section){var slides=$(SLIDE_SEL,section);if(slides.length){slides.forEach(function(slide){callback(slide);});}else{callback(section);}});}
function removeResponsiveScrollOverflows(){var scrollOverflowHandler=self.options.scrollOverflowHandler;forEachSectionAndSlide(function(element){if(fp_utils.hasClass(fp_utils.closest(element,SECTION_SEL),AUTO_HEIGHT_RESPONSIVE)){scrollOverflowHandler.remove(element);}});}
self.createScrollBarForAll=createScrollBarForAll;}
var $=null;var iscrollHandler={refreshId:null,iScrollInstances:[],iscrollOptions:{scrollbars:true,mouseWheel:true,hideScrollbars:false,fadeScrollbars:false,disableMouse:true,interactiveScrollbars:true},init:function(options){$=fp_utils.$;var isTouch=(('ontouchstart'in window)||(navigator.msMaxTouchPoints>0)||(navigator.maxTouchPoints));iscrollHandler.iscrollOptions.click=isTouch;iscrollHandler.iscrollOptions=fp_utils.deepExtend(iscrollHandler.iscrollOptions,options.scrollOverflowOptions);return new scrollBarHandler().init(options,iscrollHandler.iscrollOptions);},toggleWheel:function(value){var scrollable=$(SCROLLABLE_SEL,$(SECTION_ACTIVE_SEL)[0]);scrollable.forEach(function(item){var iScrollInstance=item.fp_iscrollInstance;if(iScrollInstance!=null){if(value){iScrollInstance.wheelOn();}
else{iScrollInstance.wheelOff();}}});},onLeave:function(){iscrollHandler.toggleWheel(false);},beforeLeave:function(){iscrollHandler.onLeave()},afterLoad:function(){iscrollHandler.toggleWheel(true);},create:function(element,scrollHeight,iscrollOptions){var scrollable=$(SCROLLABLE_SEL,element);scrollable.forEach(function(item){fp_utils.css(item,{'height':scrollHeight+'px'});var iScrollInstance=item.fp_iscrollInstance;if(iScrollInstance!=null){iscrollHandler.iScrollInstances.forEach(function(instance){instance.destroy();});}
iScrollInstance=new IScroll(item,iscrollOptions);iscrollHandler.iScrollInstances.push(iScrollInstance);if(!fp_utils.hasClass(fp_utils.closest(element,SECTION_SEL),ACTIVE)){iScrollInstance.wheelOff();}
item.fp_iscrollInstance=iScrollInstance;});},isScrolled:function(type,scrollable){var scroller=scrollable.fp_iscrollInstance;if(!scroller){return true;}
if(type==='top'){return scroller.y>=0&&!fp_utils.getScrollTop(scrollable);}else if(type==='bottom'){return(0-scroller.y)+fp_utils.getScrollTop(scrollable)+1+scrollable.offsetHeight>=scrollable.scrollHeight;}},scrollable:function(activeSection){if($(SLIDES_WRAPPER_SEL,activeSection).length){return $(SCROLLABLE_SEL,$(SLIDE_ACTIVE_SEL,activeSection)[0])[0];}
return $(SCROLLABLE_SEL,activeSection)[0];},scrollHeight:function(element){return $('.fp-scroller',$(SCROLLABLE_SEL,element)[0])[0].scrollHeight;},remove:function(element){if(element==null)return;var scrollable=$(SCROLLABLE_SEL,element)[0];if(scrollable!=null){var iScrollInstance=scrollable.fp_iscrollInstance;if(iScrollInstance!=null){iScrollInstance.destroy();}
scrollable.fp_iscrollInstance=null;$('.fp-scroller',element)[0].outerHTML=$('.fp-scroller',element)[0].innerHTML;$(SCROLLABLE_SEL,element)[0].outerHTML=$(SCROLLABLE_SEL,element)[0].innerHTML;}},update:function(element,scrollHeight){clearTimeout(iscrollHandler.refreshId);iscrollHandler.refreshId=setTimeout(function(){iscrollHandler.iScrollInstances.forEach(function(instance){instance.refresh();fullpage_api.silentMoveTo(fp_utils.index($(SECTION_ACTIVE_SEL)[0])+1);});},150);fp_utils.css($(SCROLLABLE_SEL,element)[0],{'height':scrollHeight+'px'});fp_utils.css($(SCROLLABLE_SEL,element)[0].parentNode,{'height':scrollHeight+getPaddings(element)+'px'});},wrapContent:function(){var scrollable=document.createElement('div');scrollable.className=SCROLLABLE;var scroller=document.createElement('div');scroller.className='fp-scroller';return{scrollable:scrollable,scroller:scroller};}};return{iscrollHandler:iscrollHandler};})();})(window,document);