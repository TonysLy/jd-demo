window.addEventListener("load",function(){var e=new categoryObj;e.setCategoryHeight(),e.leftSlide(),e.rightSlide()});var categoryObj=function(){};categoryObj.prototype={setCategoryHeight:function(){function e(){var e=document.body.offsetHeight||document.documentElement.offsetHeight;console.log(e);var t=e-document.querySelector("#header").offsetHeight;document.querySelector(".category-left").style.height=t+"px",document.querySelector(".category-right").style.height=t+"px"}window.addEventListener("resize",e),e()},leftSlide:function(){var e=0,t=document.querySelector(".category-left ul");t.addEventListener("touchstart",function(t){e=t.touches[0].clientY});var n=0,o=0;t.addEventListener("touchmove",function(a){n=a.touches[0].clientY,c+(o=n-e)<r&&c+o>l&&(t.style.transform="translateY("+(c+o)+"px)",t.style.transition="none")});var r=150,a=t.offsetHeight,i=t.parentNode.offsetHeight,l=i-a-150,s=i-a,c=0;t.addEventListener("touchend",function(e){(c+=o)>0&&(t.style.transform="translateY(0px)",t.style.transition="all 0.2s",c=0),c<s&&(t.style.transform="translateY("+s+"px)",t.style.transition="all 0.2s",c=s)});for(var d=t.querySelectorAll("li"),f=0;f<d.length;f++)d[f].index=f;t.addEventListener("click",function(e){for(var n=e.target.parentNode,o=0;o<d.length;o++)d[o].classList.remove("active");n.classList.add("active");var r=-n.index*n.offsetHeight;c=r<s?s:r,t.style.transform="translateY("+c+"px)",t.style.transition="all 0.2s"})},rightSlide:function(){new IScroll(".category-right",{mouseWheel:!0})}};