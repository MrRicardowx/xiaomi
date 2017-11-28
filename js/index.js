	window.onload=function(){
		let a=document.getElementsByClassName("jsx")
		let b=document.getElementsByClassName("xxk1-box")
		let c=document.querySelectorAll('.jsx span')
		let d=document.querySelector('.hah')
		let e=document.querySelector('.hard')
		let up=true;
		let down=false;	
		for(let i=0;i<b.length;i++){
			a[i].onmouseenter=function(){
				e.classList.add('active')
				for(let j=0;j<b.length;j++){
					b[j].style.display='none'
				}
				b[i].style.display='block'
		}							
		a[i].onmouseleave=function(){
			e.classList.remove('active')
		}
		b[i].onmouseenter=function(){
			e.classList.add('active')
		}
		b[i].onmouseleave=function(){
			e.classList.remove('active')
		}
	}	
		let bun=document.getElementsByClassName("wang")	
		let ban=document.getElementsByClassName("bt11")
//			console.log(bun)
		for(let a=0;a<bun.length;a++){
//			ban[a].onmouseenter=function(){
//				bun[a].style.display="block"
//
//			}
			ban[a].onmouseleave=function(){
				bun[a].style.display="none"
				ban[a].id=""
			}
			bun[a].onmouseenter=function(){
				bun[a].style.display='block'
				ban[a].id="se"
			}
			bun[a].onmouseleave=function(){
				bun[a].style.display="none"
				ban[a].id=""
			}
			
		}

		for(let i=0;i<ban.length;i++){
			ban[i].onmouseenter=function(){
				for(let j=0;j<ban.length;j++){
				ban[j].id=""
				bun[j].style.display="none"
			}
				ban[i].id="se"
				bun[i].style.display="block"
			}
			
			
		}
	
		let zn1=document.getElementsByClassName("xxk44")
		let zn2=document.getElementsByClassName("znjd")
//			console.log(zn2,zn1)
		for(let i=zn2.length-1;i>=0;i--){
			zn2[i].onmouseenter=function(){
				for(let j=zn2.length-1;j>=0;j--){
					zn1[j].style.display="none"
//					zn2[j].className="btn znjd"
					zn2[j].id=""
				}
//				zn2[i].className="btn znjd jdcolor";
				zn1[i].style.display="block"
				zn2[i].id="jdcolor"
			}
		}
		
		
		let zn3=document.getElementsByClassName("xxk555")
		let zn4=document.getElementsByClassName("znjd1")
//		console.log(zn3,zn4)
		for(let i=zn3.length-1;i>=0;i--){
			zn4[i].onmouseenter=function(){
				for(let j=zn3.length-1;j>=0;j--){
					zn3[j].style.display="none"
//					zn4[j].className='znjd1 btn'
					zn4[j].id=""
				}
						zn3[i].style.display="block"
//						zn4[i].className="znjd1 btn jdcolor"
						zn4[i].id="jdcolor"
			}

		}
		let zn5=document.getElementsByClassName("zndpxx")
		let zn6=document.getElementsByClassName("zndp")
//		console.log(zn4,zn6)
		for(let i=zn5.length-1;i>=0;i--){
			zn6[i].onmouseenter=function(){
				for(let j=zn5.length-1;j>=0;j--){
					zn5[j].style.display="none"
//					zn6[j].className="btn zndp"
					zn6[j].id=""
				}
				zn5[i].style.display='block'
//				zn6[i].className='btn zndp jdcolor'
				zn6[i].id="jdcolor"
			}
		}
		let zn7=document.getElementsByClassName('pjksa')
		let zn8=document.getElementsByClassName("pjks")
//		console.log()
		for( let i=zn7.length-1;i>=0;i--){
			zn7[i].onmouseenter=function(){
				for(let j=zn7.length-1;j>=0;j--){
//					zn7[j].className="btn pjksa"
					zn8[j].style.display="none"	
					zn7[j].id=""
				}
//				zn7[i].className="btn pjksa jdcolor"
				zn8[i].style.display="block"
				zn7[i].id="jdcolor"
			}
			
		}
		let zn9=document.getElementsByClassName("zbks")
		let zn10=document.getElementsByClassName("zbksa")
//		console.log(zn9,zn10)
		for(let i=zn9.length-1;i>=0;i--){
			zn10[i].onmouseenter=function(){
				for(let j=zn9.length-1;j>=0;j--){
					zn9[j].style.display='none'
//					zn10[j].className="btn zbksa"
					zn10[j].id="none"
				}
				zn9[i].style.display="block"
//				zn10[i].className='btn zbksa jdcolor'
				zn10[i].id="jdcolor"
			}
		}
		let gwc=document.getElementsByClassName("gwc1")[0]
		let gwc2=gwc.getElementsByTagName("span")
		let gwc3=document.getElementsByClassName("gwc")[0]
//		console.log(gwc,gwc2)
		gwc.onmouseenter=function(){
			gwc.id="bai"
			gwc2[0].style.color="#FF6700"
			gwc2[1].style.color="#FF6700"
			gwc3.style.height="98px"
			
		}
		gwc.onmouseleave=function(){
			gwc.id=""
			gwc2[0].style.color="#757575"
			gwc2[1].style.color="#757575"
			gwc3.style.height='0px'
		}
//	banner 轮播	
	function lunbotu(){
		let banner=document.getElementsByTagName("section")[0]
//		console.log(banner);
		let img=document.getElementsByClassName("imgim")[0]
		let imgs=img.getElementsByTagName("li")//图片的集合
		let left=img.getElementsByClassName("leftle")[0]
		let right=img.getElementsByClassName("rightri")[0]
		let circle=document.getElementsByClassName("circleci")[0]
		let circles=document.querySelectorAll('.circleci>li>a')//小圆点
//		console.log(imgs,left,right,circles)	
		let num=0;
		let flag=true;
		let t=setInterval(fn1,2000)
				right.onclick=function(){	
					if(flag){
						flag=false;
						fn1()
					}
				
				}
				left.onclick=function(){
					if(flag){	
					flag=false;	
						fn2()
					}
					
				}		
		function fn1(){
			num++;
			if(num==imgs.length){
				num=0;
			}
			for(let i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},400);
			circles[i].className="";
			
		}
			animate(imgs[num],{opacity:1},400,function(){
				flag=true;
			});
			circles[num].className="first"
		}
		function fn2(){
			num--;
			if(num==-1){
				num=imgs.length-1;
			}
		  	for(let i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},400);	
			circles[i].className="";
			
		}
			animate(imgs[num],{opacity:1},400,function(){
				flag=true;
			});
			circles[num].className="first"
		}
//		left.onclick=function(){
//			fn2()
//		}
//
//		right.onclick=function(){
//			fn1()
//		}
		banner.onmouseenter=function(){
			clearInterval(t)
		}
		banner.onmouseleave=function(){
			clearInterval(t)
			t=setInterval(fn1,2000)
		}
		for ( let i=0;i<circles.length;i++){
            circles[i].onclick=function(){
                circles[num].className=``
                circles[i].className=`first`
                animate(imgs[i],{opacity:1},400)
                animate(imgs[num],{opacity:0},400)
                num=i
            }
       }		
	}
	lunbotu()
//明星单品		
	function mingx(){
		let mxbox=document.querySelector(".jsbottom-box")	
		let imgs=document.querySelectorAll('.jsbottom-box > div')
		let buns=document.querySelectorAll('.title .more div a')
		let bun=document.querySelector('.title .more')
		let bunl=buns[0]
		let bunr=buns[1]
		let num=0;

		bunl.onclick=function(){
			if(num==0){
				return
			}
			num++;
			mxbox.style.transform=`translateX(0px)`
			bunl.style.color='#999999'
			bunr.style.color='black'
		}
		bunr.onclick=function(){
			if(num==-1){
				return
			}
			num--
			mxbox.style.transform=`translateX(-1226px)`
			bunr.style.color='#999999'
			bunl.style.color='black'
		}
		let s=0;
		function move(){		
			s++;
			if(s==3){
				s=1;
			}
			if(s==1){
//				let t1=setTimeout(function(){
//				mxbox.style.transform=`translateX(-1226px)`
//				},5000)
			mxbox.style.transform=`translateX(-1226px)`					
			}
			if(s==2){
//				let t2=setTimeout(function(){
//					mxbox.style.transform=`translateX(0px)`
//				},5000)
			mxbox.style.transform=`translateX(0px)`
			}
		}			
	let t=setInterval(move,5000)
		mxbox.onmouseenter=function(){
			
			clearInterval(t)
		}
		mxbox.onmouseleave=function(){
			t=setInterval(move,5000)
		}
		bun.onmouseenter=function(){
			clearInterval(t)
		}
		bun.onmouseleave=function(){
			t=setInterval(move,5000)
		}
	
//		console.log(buns)
	}
		mingx()
	function fn10(){
		let nr1=document.getElementsByClassName('nr-one')
		let nr1box=document.getElementById('box1')
		let nr1circles=document.getElementsByClassName('threecircle1')[0]
		let nr1right=document.getElementsByClassName('nr-left-2')[0]
		let nr1left=document.getElementsByClassName('nr-left-1')[0]
		let nr1lis=nr1circles.getElementsByTagName('li')			
		let next=now=0;
		let flag=true;
//		let t=setInterval(fn,1000)
		let flag1=true;
				nr1right.onclick=function(){
					if(flag1){	
						flag1=false;
						fn3()
					}
					
				}//点击左边箭头，图片换成前一张
				nr1left.onclick=function(){
					if(flag1){	
						flag1=false;
						fn4()
					}
					
				}//点击右边箭头，图片换成后一张
		function fn3(){
				next++;
				console.log(next)
				if(next>=nr1.length){		
					next=2;
					flag1=true;
					return;
			}
			nr1[next].style.left="296px"
			nr1[now].style.left="0px"
			animate(nr1[now],{left:-296},function(){
							for(let i=0;i<nr1.length;i++){
			nr1lis[i].className="";
			flag1=true;
		}
			nr1lis[now].className='aaa'
			
			});
			
			animate(nr1[next],{left:0});
			now=next;
		}

		nr1box.onmouseenter=function(){
			nr1right.style.opacity=1;
			nr1left.style.opacity=1;
		}
		nr1box.onmouseleave=function(){
			nr1right.style.opacity=0;
			nr1left.style.opacity=0
		}
		function fn4(){
			console.log(2)
			next--;
			
			if(next<=-1){
//				next=nr1.length-1;
				console.log(next)
				next=0;
				flag1=true;
				return;
			}
			nr1[next].style.left="-296px";
			animate(nr1[now],{left:296},function(){
				for(let i=0;i<nr1.length;i++){
					nr1lis[i].className=""
					flag1=true;
				}
				nr1lis[now].className="aaa"
				
			})
			animate(nr1[next],{left:0})
			now=next;
		}
		
//		left.onclick=fn1
		for(let i=0;i<nr1lis.length;i++){
			nr1lis[i].onclick=function(){
				if(flag){
					flag=false;
				if(i==now){flag=true;}
			else if(i<now){
				nr1[i].style.left='-296px'
				nr1[now].style.left=0;
				animate(nr1[now],{left:296})
				animate(nr1[i],{left:0},function(){
					flag=true;
				})


			}
			else if(i>now){
				nr1[i].style.left='296px'
				nr1[now].style.left=0;
				animate(nr1[now],{left:-296})
				animate(nr1[i],{left:0},function(){
					flag=true;
				})
			}
				for(let j=0;j<nr1lis.length;j++){
				nr1lis[j].style.cssText=`border:2px solid #ffffff;background:#B0B0B0;`
				}
				nr1lis[i].style.cssText=`background:#ffffff;border:2px solid  #FF6700;`
				next=now=i	
				}
		}
		}		
	}fn10()
		
		function find1(){
		let g=document.getElementsByClassName('nr-one2')
		let h=document.getElementsByClassName('boxs2')[0]
		let c=document.getElementsByClassName('threecircle2')[0]
		let d=document.getElementsByClassName('nr-left-4')[0]
		let e=document.getElementsByClassName('nr-left-3')[0]
		let f=c.getElementsByTagName('li')
		
//	console.log(g,b,c,d,e,f)
		let next1=now1=0;
//		let t=setInterval(fn,1000)
		let flag1=true;
				e.onclick=function(){
					if(flag1){
						flag1=false;
						fn4()
					}
				
				}//点击左边箭头，图片换成前一张
				d.onclick=function(){
					if(flag1){	
						flag1=false;
						fn3()
					}
					
				}//点击右边箭头，图片换成后一张
		function fn3(){
				next1++;
				if(next1>=g.length){
				next1=3
				flag1=true;
				return;
			}
			g[next1].style.left="296px"
			g[now1].style.left="0px"
			animate(g[now1],{left:-296},function(){
							for(let i=0;i<g.length;i++){
			f[i].className="";
			flag1=true;
		}
			f[now1].className='aaa'
			
			});
			
			animate(g[next1],{left:0});
			now1=next1;
		}

		h.onmouseenter=function(){
			d.style.opacity=1;
			e.style.opacity=1;
		}
		h.onmouseleave=function(){
			d.style.opacity=0;
			e.style.opacity=0
		}
		function fn4(){
			next1--;
			if(next1<=-1){
//				next1=g.length-1;
				next1=0;
				flag1=true;
				return;
			}
			g[next1].style.left="-296px";
			animate(g[now1],{left:296},function(){
				for(let i=0;i<g.length;i++){
					f[i].className=""
					flag1=true;
				}
				f[now1].className="aaa"
				
			})
			animate(g[next1],{left:0})
			now1=next1;
		}
		
//		left.onclick=fn1
		for(let i=0;i<f.length;i++){
			f[i].onclick=function(){
				if(flag1){
					flag1=false
			if(i==now1){flag1=true;}
			else if(i<now1){
				g[now1].style.left='0px'
				g[i].style.left='-296px';
				animate(g[now1],{left:296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
			else if(i>now1){
				g[i].style.left='296px'
				g[now1].style.left=0;
				animate(g[now1],{left:-296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
				for(let j=0;j<f.length;j++){
				f[j].className=''
				f[j].style.cssText=`border:2px solid #ffffff;background:#B0B0B0;`
				}
				f[i].style.cssText=`background:#ffffff;border:2px solid  #FF6700;`	
				next1=now1=i	
				}
		}
		}			
		}
		find1()




		function find2(){
		let g=document.getElementsByClassName('nr-one3')
		let h=document.getElementsByClassName('boxs3')[0]
		let c=document.getElementsByClassName('threecircle3')[0]
		let d=document.getElementsByClassName('nr-left-6')[0]
		let e=document.getElementsByClassName('nr-left-5')[0]
		let f=c.getElementsByTagName('li')
		
//	console.log(g,b,c,d,e,f)
	
//	window.onload=function(){
//		let g=document.getElementsByClassName('nr-one')
//		let b=document.getElementById('box1')
//		let c=document.getElementById('threecircle')
//		let d=document.getElementsByClassName('nr-left-2')[0]
//		let e=document.getElementsByClassName('nr-left-1')[0]
//		let f=c.getElementsByTagName('li')
//		console.log(g,b,f,d,e)
		let next2=now2=0;
//		let t=setInterval(fn,1000)
		let flag1=true;
				e.onclick=function(){
					if(flag1){
						flag1=false;
						fn4()
					}
					
				}//点击左边箭头，图片换成前一张
				d.onclick=function(){
					if(flag1){	
					flag1=false;
						fn3()
					}
				
				}//点击右边箭头，图片换成后一张
		function fn3(){
				next2++;
				if(next2>=g.length){
				next2=3;
				flag1=true;
				return;
			}
			g[next2].style.left="296px"
			g[now2].style.left="0px"
			animate(g[now2],{left:-296},function(){
							for(let i=0;i<g.length;i++){
			f[i].className="";
			flag1=true;
		}
			f[now2].className='aaa'
			
			});
			
			animate(g[next2],{left:0});
			now2=next2;
		}

		h.onmouseenter=function(){
			d.style.opacity=1;
			e.style.opacity=1;
		}
		h.onmouseleave=function(){
			d.style.opacity=0;
			e.style.opacity=0
		}
		function fn4(){
			next2--;
			if(next2<=-1){
				next2=0;
				flag1=true;
				return;
			}
			g[next2].style.left="-296px";
			animate(g[now2],{left:296},function(){
				for(let i=0;i<g.length;i++){
					f[i].className=""
					flag1=true;
				}
				f[now2].className="aaa"
				
			})
			animate(g[next2],{left:0})
			now2=next2;
		}
	
		for(let i=0;i<f.length;i++){
			f[i].onclick=function(){
				if(flag1){
					flag1=false
			if(i==now2){flag1=true;}
			else if(i<now2){
				g[now2].style.left='0px'
				g[i].style.left='-296px';
				animate(g[now2],{left:296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
			else if(i>now2){
				g[i].style.left='296px'
				g[now2].style.left=0;
				animate(g[now2],{left:-296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
				for(let j=0;j<f.length;j++){
				f[j].style.cssText=`border:2px solid #ffffff;background:#B0B0B0;`
				}
				f[i].style.cssText=`background:#ffffff;border:2px solid  #FF6700;`	
				next2=now2=i	
				}
		}
		}			

		}
		find2()
		
	
	function find3(){
		let g=document.getElementsByClassName('nr-one4')
		let h=document.getElementsByClassName('boxs4')[0]
		let c=document.getElementsByClassName('threecircle4')[0]
		let d=document.getElementsByClassName('nr-left-8')[0]
		let e=document.getElementsByClassName('nr-left-7')[0]
		let f=c.getElementsByTagName('li')
	
//	window.onload=function(){
//		let g=document.getElementsByClassName('nr-one')
//		let b=document.getElementById('box1')
//		let c=document.getElementById('threecircle')
//		let d=document.getElementsByClassName('nr-left-2')[0]
//		let e=document.getElementsByClassName('nr-left-1')[0]
//		let f=c.getElementsByTagName('li')
//		console.log(g,b,f,d,e)
		let next3=now3=0;
//		let t=setInterval(fn,1000)
		let flag1=true;
				e.onclick=function(){
					if(flag1){
					flag1=false;	
						fn4()
					}
					
				}//点击左边箭头，图片换成前一张
				d.onclick=function(){
					if(flag1){
					flag1=false;	
						fn3()
					}
					
				}//点击右边箭头，图片换成后一张
		function fn3(){
				next3++;
				if(next3==g.length){
					next3=3;
					flag1=true;
					return;
			}
			g[next3].style.left="296px"
			g[now3].style.left="0px"
			animate(g[now3],{left:-296},function(){
							for(let i=0;i<g.length;i++){
			f[i].className="";
			flag1=true;
		}
			f[now3].className='aaa'
			
			});
			
			animate(g[next3],{left:0});
			now3=next3;
		}

		h.onmouseenter=function(){
			d.style.opacity=1;
			e.style.opacity=1;
		}
		h.onmouseleave=function(){
			d.style.opacity=0;
			e.style.opacity=0
		}
		function fn4(){
			next3--;
			if(next3==-1){
				next3=0;
				flag1=true;
				return;
			}
			g[next3].style.left="-296px";
			animate(g[now3],{left:296},function(){
				for(let i=0;i<g.length;i++){
					f[i].className=""
					flag1=true;
				}
				f[now3].className="aaa"
				
			})
			animate(g[next3],{left:0})
			now3=next3;
		}
		
//		left.onclick=fn1

		for(let i=0;i<f.length;i++){
			f[i].onclick=function(){
				if(flag1){
					flag1=false
			if(i==now3){flag1=true;}
			else if(i<now3){
				g[now3].style.left='0px'
				g[i].style.left='-296px';
				animate(g[now3],{left:296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
			else if(i>now3){
				g[i].style.left='296px'
				g[now3].style.left=0;
				animate(g[now3],{left:-296})
				animate(g[i],{left:0},function(){
					flag1=true;
				})

			}
				for(let j=0;j<f.length;j++){
				f[j].style.cssText=`border:2px solid #ffffff;background:#B0B0B0;`
				}
				f[i].style.cssText=`background:#ffffff;border:2px solid  #FF6700;`	
				next3=now3=i	
				}
		}
		}				
		}
		find3()
//		function circle(){
//			let a=document.querySelectorAll('.threecircle li')
//			a.forEach(function(val,index){
//				val.onclick=function(){
//					for(let i=0;i<a.length;i++){
//						a[i].style.cssText=`background:##B0B0B0;border:2px solid #ffffff;`
//					}
//					val.style.cssText=`background:#ffffff;border:2px solid #ff6700`
//					fn10()
//				}
//			})
//		}
//		circle()
	}


