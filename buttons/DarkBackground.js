(function(){
	 function setBodyBackground(){
		try{
			const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.body.style.background = isDark ? '#191919' : '#ffffff';
		} catch(e) {
			document.body.style.background = '#ffffff';
			}
			}
			if(window.matchMedia){
			window.matchMedia('(prefers-color-scheme: dark)').addListener(setBodyBackground);
			}
			setBodyBackground();
			})();