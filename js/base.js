$('.nav a').click(function(){
	$('.nav a').removeClass('on');
	$(this).addClass('on');
});
$('.tab a').click(function(){
	$('.tab a').removeClass('on');
	$(this).addClass('on');
});
function banner(){
	var aImg = document.querySelectorAll('img.banner-img');
    var aLin = document.querySelectorAll('.lin-box span');
    var oNew = document.getElementById('d2');
    var oNext = document.getElementById('next');
    var oPrev = document.getElementById('prev');
    var n = 0
    var z = null;
    autoplay();
    function play(a){
        for (var i = 0; i < aLin.length; i++) {
            for (var j = 0; j < aLin.length; j++) {
                aImg[j].style.opacity = "0";
                aLin[j].style.backgroundColor = "#d8d8d8";
            };
            aImg[a].style.opacity = "1";
            aLin[a].style.backgroundColor = "#fff";
        };
    }
    function autoplay(){
        z = setInterval(function(){
            n++;
            if(n>=4){
                n=0;
            }
            play(n);
        },4000);
    }

    for (var i = 0; i < aLin.length; i++) {
		aLin[i].index = i;
		aLin[i].addEventListener('click',function(){
			n = this.index;
			play(n);
		})
	};
	oNext.addEventListener('click',function(){
		n++;
        if(n>=4){
            n=0;
        }
        play(n);
	});
	oPrev.addEventListener('click',function(){
		n--;
        if(n<0){
            n=3;
        }
        play(n);
	})

	oNew.addEventListener('mouseover',function(){
		clearInterval(z);
	})

	oNew.addEventListener('mouseout',function(){
		autoplay();
	});

};