
<script>
 var svgContainer = document.getElementById("animation");
 var nS="http://www.w3.org/2000/svg";
 var animation = new TimelineMax();
 animation.pause();
 var svgPaths = a.getElementsByTagNameNS(nS,"path");
 for(var x = 0; x<svgPaths.length;x++){
 var path = svgPaths[x];
 var pathDimensions = path.getTotalLength();
 var strokeWidth = path.getAttribute("stroke-width");
 path.style.strokeDasharray = (pathDimensions)+" "+(pathDimensions);
 path.style.strokeDashoffset = (/Firefox/i.test(navigator.userAgent))? pathDimensions/strokeWidth : pathDimensions;
 animation.add(TweenMax.to(path.style,1,{strokeDashoffset:0,onUpdate:function(){
 var n = document.createTextNode(' ');
 document.body.appendChild(n);
 document.body.removeChild(n);
 }}),(x>0)?"-=0.8":"");
 }
 animation.play();
 </script>