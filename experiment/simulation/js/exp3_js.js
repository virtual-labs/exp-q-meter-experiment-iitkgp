
var v,r1,r,rsh,l,c,f;
var Qt, Qm, cd, vc, vsh;
var sw=0;
function changeImage() {
	
		var image = document.getElementById('myImage');
		var im1= document.getElementById('v');
		var im2= document.getElementById('r1');
		var im3= document.getElementById('rsh');
		var im4= document.getElementById('l');
		var im5= document.getElementById('r');
		if (image.src.match("s1")) {
			sw=1;
			image.src = "./images/s2.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly'); 
			document.f1.VSH.value = 10;
			document.f1.VC.value = -14;
			perform_meter1(); perform_meter2();
			execute_ckt();
		} else {
			sw=0;
			image.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); 
			document.f1.VSH.value = 0;
			document.f1.VC.value = 0;
			perform_meter1(); perform_meter2();
		}
	}
	function execute_ckt()
	{
		if (sw==1)
		{
			v = parseFloat(document.getElementById('v').value);
			f=parseFloat(document.getElementById('f').value);
			r1=parseFloat(document.getElementById('r1').value);
			rsh=parseFloat(document.getElementById('rsh').value);
			l=parseFloat(document.getElementById('l').value);
			r=parseFloat(document.getElementById('r').value);
			c=parseFloat(document.getElementById('c').value);
			
			var i=v/(rsh+r1);
			vsh = i*rsh;
			var t = (1/(2*3.141*f*c));
			var i1 = vsh / ((2*3.141*f*l)+r-t);
			vc = i1*t;
			Qm = (2*3.141*f*l)/(r+rsh);
			document.f1.VSH.value = vsh;
			document.f1.VC.value = vc;
			perform_meter1(); perform_meter2();
			
			Qt = Qm*(1+(rsh/r));
			cd = 2E-11;
		}
		else
		{
			alert('Switch on the supply to simulate.')
		}
		
	}
	function simulate1()
	{
		document.f1.vc1.value = vc;
		document.f1.vsh1.value = vsh;
		document.f1.qm.value = Qm;
		execute_ckt();
	}
	function simulate2()
	{
		document.f1.qt.value = Qt;
		execute_ckt();
	}
	function simulate3()
	{
		document.f1.vc2.value = vc;
		document.f1.vsh2.value = vsh;
		document.f1.cd.value = cd;
		execute_ckt();
	}





