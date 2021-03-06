jQuery(function(){
  jQuery("a").bind("focus",function(){if(this.blur)this.blur();});

  jQuery(".menu > li:first-child").addClass("first_menu");
  jQuery(".menu > li:first-child.current_page_item, .menu > li:first-child.current-cat, .menu > li:first-child.current-menu-item").addClass("first_menu_active").removeClass("first_menu");
  jQuery(".menu > li:last-child").addClass("last_menu");
  jQuery(".menu > li:last-child.current_page_item, .menu > li:last-child.current-cat, .menu > li:last-child.current-menu-item").addClass("last_menu_active").removeClass("last_menu");
  jQuery(".menu li ul li:has(ul)").addClass("parent_menu");

  jQuery("#right_col ul > li:last-child").css({marginBottom:"0"});

  jQuery("#comment_area ol > li:even").addClass("even_comment");
  jQuery("#comment_area ol > li:odd").addClass("odd_comment");
  jQuery(".even_comment > .children > li").addClass("even_comment_children");
  jQuery(".odd_comment > .children > li").addClass("odd_comment_children");
  jQuery(".even_comment_children > .children > li").addClass("odd_comment_children");
  jQuery(".odd_comment_children > .children > li").addClass("even_comment_children");
  jQuery(".even_comment_children > .children > li").addClass("odd_comment_children");
  jQuery(".odd_comment_children > .children > li").addClass("even_comment_children");

  jQuery("#guest_info input,#comment_textarea textarea")
    .focus( function () { jQuery(this).css({borderColor:"#33a8e5"}) } )
    .blur( function () { jQuery(this).css({borderColor:"#ccc"}) } );

  jQuery("#tag_list ul").hide();
  jQuery(".search_tag").toggle(function(){
   jQuery(this).addClass("active_search_tag"); 
    }, function () {
   jQuery(this).removeClass("active_search_tag");
    });
  jQuery(".search_tag").click(function(){
    jQuery(this).next("#tag_list ul").slideToggle("400");
   });

  jQuery("#trackback_switch").click(function(){
    jQuery("#comment_switch").removeClass("comment_switch_active");
    jQuery(this).addClass("comment_switch_active");
    jQuery("#comment_area").animate({opacity: 'hide'}, 0);
    jQuery("#trackback_area").animate({opacity: 'show'}, 1000);
    return false;
  });

  jQuery("#comment_switch").click(function(){
    jQuery("#trackback_switch").removeClass("comment_switch_active");
    jQuery(this).addClass("comment_switch_active");
    jQuery("#trackback_area").animate({opacity: 'hide'}, 0);
    jQuery("#comment_area").animate({opacity: 'show'}, 1000);
    return false;
  });

  jQuery("#guest_info input,#comment_textarea textarea")
    .focus( function () { jQuery(this).css({borderColor:"#33a8e5"}) } )
    .blur( function () { jQuery(this).css({borderColor:"#ccc"}) } );

  jQuery("blockquote").append('<div class="quote_bottom"></div>');

  jQuery(".side_box:first").addClass("first_side_box");

});


function changefc(color){
  document.getElementById("search_input").style.color=color;
}


/*
dropdowm menu
*/


var menu=function(){
var t=15,z=50,s=6,a;
function dd(n){this.n=n; this.h=[]; this.c=[]}
dd.prototype.init=function(p,c){
a=c; //Old code: var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;

var w=p, s=w.getElementsByTagName('ul'), l=s.length, i=0;
for(i;i<l;i++){
var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
h.onmouseover=new Function(this.n+'.st('+i+',true)');
h.onmouseout=new Function(this.n+'.st('+i+')');
}
}
dd.prototype.st=function(x,f){
var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
clearInterval(c.t); c.style.overflow='hidden';
if(f){
p.className+=' '+a;
if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
if(c.mh==c.offsetHeight){c.style.overflow='visible'}
else{c.style.zIndex=z; z++; c.t=setInterval(function(){sl(c,1)},t)}
}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
}
function sl(c,f){
var h=c.offsetHeight;
if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
clearInterval(c.t); return
}
var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
c.style.opacity=o; c.style.filter='alpha(opacity='+(o*100)+')';
c.style.height=h+(d*f)+'px'
}
return{dd:dd}
}();

document.getElementsByClassName = function (c, t) {
  t = this.getElementsByTagName(t ? t : "*");
  for (var i = 0, r = new Array(), l = t.length; i < l; i++)
    if (t[i].className == c)
      r[r.length] = t[i];
  return r;
}

var _Menus = new Array();
function initializeDateDropDowns(){
var box = document.getElementsByClassName('menu','ul');
if (box.length > 0) {
for(i = 0; i < box.length; i++) {
var id = box[i];
_Menus[i] = new menu.dd('_Menus[' + i + ']');
_Menus[i].init(id,"menuhover");
}
}
}
window.onload = initializeDateDropDowns;