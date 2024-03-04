console.log (window.location.hostname);
var activeItem;
var cabin;
var inited = false;
var throtle;
var zoom = 5;
var old, subOld, oldVal;
var inner = 0;
var width = {
	i : 1010,
	o : 1146
}
var depth = {
	i : 1010,
	o : 1146
};
var height = {
	i : 2090,
	o : 2194
}
var thickness = 70;
var dblWalls = false;
var winMarginV = 200, winMarginH = 200;
var doorMarginV = 100, doorMarginH = 200;
var holeMarginV = 100, holeMarginV = 100;
var delta;
var demensions = ["x", "y", "w", "h"];
var drawSizes = false;

class Window {
	constructor(disabled, active, visible, wall, x, y, w, h) {
		this.type = "window";
		this.wall = wall;
		this.name = this.type + this.wall;
		this.disabled = disabled;
		this.active = active;
		this.visible = visible;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	
	get disabled() {
		return this._disabled;
	}
	set disabled(value){
		this._disabled = value;
		if (value) {
			var e = document.querySelector("#"+this.name);
			e.setAttribute("disabled", "disabled");
			e.checked = false;
			if (this._active) this._active = false;
		} else {
			document.querySelector("#"+this.name).removeAttribute("disabled");
		}
	}
	
	get active() {
		return this._active;
	}
	set active(value) {
		if (this.disabled) return;
		this._active = value;
		var e = document.querySelector("#"+this.name);
		if (value) {
			document.querySelector("#"+this.name+"_params").classList.add("active");
		} else {
			document.querySelector("#"+this.name+"_params").classList.remove("active");
			e.checked = false;
		}
		var contentHeight = e.closest(".content_wrapper").getBoundingClientRect().height;
		e.closest(".accordion_item").setAttribute("data-height", contentHeight);
		if (document.querySelector(".windows_accordion").classList.contains("active")){
			e.closest(".accordion_content").style.height = contentHeight+"px";
		}
	}
	
	get visible() {
		return this._visible;
	}
	set visible(value) {
		this._visible = value;
	}
	
	xmin() {
		if (this.wall == "D") return 138;	//138
		else return (cabin.dblWalls ? 256 : 138);	//138, 256
	}
	xmax() {
		if (this.wall == "S" || this.wall == "N") return cabin.width.o - (cabin.dblWalls ? 456 : 338);	//138+wmin, 256+wmin
		else if (this.wall == "E" || this.wall == "W") return cabin.depth.o - (cabin.dblWalls ? 456 : 338);	//138+wmin, 256+wmin
		else return cabin.door.w - 338;
	}
	
	wmin() {
		return 200;
	}
	wmax() {
		if (this.wall == "S" || this.wall == "N") return cabin.width.o - (cabin.dblWalls ? 512 : 276);	//w-2*hamrgin
		else if (this.wall == "E" || this.wall == "W") return cabin.depth.o - (cabin.dblWalls ? 512 : 276);	//w-2*hamrgin
		else return cabin.door.w - 276;
	}
	
	ymin() {
		if (this.wall == "D") return 138;	//138
		else return (cabin.dblWalls ? 256 : 138);	//296
	}
	ymax() {
		if (this.wall == "D") return cabin.door.h - (cabin.dblWalls ? 338 : 338);
		else return cabin.height.o - (cabin.dblWalls ? 496 : 338);
	}
	
	hmin() {
		return 200;
	}
	hmax() {
		if (this.wall == "D") return cabin.door.h - (cabin.dblWalls ? 276 : 276);
		else return cabin.height.o - (cabin.dblWalls ? 552 : 276);
	}
}
class Door {
	constructor(active, visible, wall, origin, x, y, w, h){
		this.type = "door";
		this.wall = wall;
		this.name = "door";
		this.active = active;
		this.visible = visible;
		this.origin = origin;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	get active() {
		return this._active;
	}
	set active(value) {
		this._active = value;
	}
	
	get visible() {
		return this._visible;
	}
	set visible(value) {
		this._visible = value;
	}
	
	get origin() {
		return this._origin;
	}
	set origin(value) {
		this._origin = value;
	}
	
	xmin() {
		return (cabin.dblWalls ? 236 : 108);
	}
	xmax() {
		return cabin.width.o - (cabin.dblWalls ? 436 : 308);
	}
	
	wmin() {
		//return 442;
		return 200;
	}
	wmax() {
		return cabin.width.o - (cabin.dblWalls ? 472 : 216);
	}
	
	ymin() {
		return (cabin.dblWalls ? 118 : 118);
	}
	ymax() {
		return cabin.height.o - (cabin.dblWalls ? 506 : 318);
	}
	
	hmin() {
		//return 1564;
		return 200;
	}
	hmax() {
		return cabin.height.o - (cabin.dblWalls ? 424 : 236);
	}
};

class Cable {
	constructor(disabled, active, visible, wall, x, y){
		this.type = "cable";
		this.wall = wall;
		this.name = this.type + this.wall;
		this.disabled = disabled;
		this.active = active;
		this.visible = visible;
		this.x = x;
		this.y = y;
		this.d = 60;
	}
	get disabled() {
		return this._disabled;
	}
	set disabled(value){
		this._disabled = value;
		if (value) {
			var e = document.querySelector("#"+this.name);
			e.setAttribute("disabled", "disabled");
			e.checked = false;
			if (this._active) this._active = false;
		} else {
			document.querySelector("#"+this.name).removeAttribute("disabled");
		}
	}
	
	set active(value) {
		if (this.disabled) return;
		this._active = value;
		var e = document.querySelector("#"+this.name);
		if (value) {
			document.querySelector("#"+this.name+"_params").classList.add("active");
		} else {
			document.querySelector("#"+this.name+"_params").classList.remove("active");
			e.checked = false;
		}
		var contentHeight = e.closest(".content_wrapper").getBoundingClientRect().height;
		e.closest(".accordion_item").setAttribute("data-height", contentHeight);
		e.closest(".accordion_content").style.height = contentHeight+"px";
	}
	get active() {
		return this._active;
	}
	
	get visible() {
		return this._visible;
	}
	set visible(value) {
		this._visible = value;
	}
	
	xmin() {
		return this.d/2 + (cabin.dblWalls ? 180 : 90);
	}
	xmax() {
		if (this.wall == "S" || this.wall == "N") return cabin.width.o - this.d/2 - (cabin.dblWalls ? 180 : 90);
		else return cabin.depth.o - this.d/2 - (cabin.dblWalls ? 180 : 90);
	}
	
	ymin() {
		return this.d/2 + (cabin.dblWalls ? 90 : 90);
	}
	ymax() {
		return cabin.height.o - this.d/2 - (cabin.dblWalls ? 90 : 90);
	}
};

class Vent {
	constructor(disabled, active, visible, wall, x, y){
		this.type = "vent";
		this.wall = wall;
		this.name = this.type + this.wall;
		this.disabled = disabled;
		this.active = active;
		this.visible = visible;
		this.x = x;
		this.y = y;
		this.d = 100;
	}
	get disabled() {
		return this._disabled;
	}
	set disabled(value){
		this._disabled = value;
		if (value) {
			var e = document.querySelector("#"+this.name);
			e.setAttribute("disabled", "disabled");
			e.checked = false;
			if (this._active) this._active = false;
		} else {
			document.querySelector("#"+this.name).removeAttribute("disabled");
		}
	}
	
	set active(value) {
		if (this.disabled) return;
		this._active = value;
		var e = document.querySelector("#"+this.name);
		if (value) {
			document.querySelector("#"+this.name+"_params").classList.add("active");
		} else {
			document.querySelector("#"+this.name+"_params").classList.remove("active");
			e.checked = false;
		}
		var contentHeight = e.closest(".content_wrapper").getBoundingClientRect().height;
		e.closest(".accordion_item").setAttribute("data-height", contentHeight);
		e.closest(".accordion_content").style.height = contentHeight+"px";
	}
	get active() {
		return this._active;
	}
	
	get visible() {
		return this._visible;
	}
	set visible(value) {
		this._visible = value;
	}
	
	xmin() {
		return this.d/2 + (cabin.dblWalls ? 180 : 90);
	}
	xmax() {
		if (this.wall == "S" || this.wall == "N") return cabin.width.o - this.d/2 - (cabin.dblWalls ? 180 : 90);
		else return cabin.depth.o - this.d/2 - (cabin.dblWalls ? 180 : 90);
	}
	
	ymin() {
		return this.d/2 + (cabin.dblWalls ? 90 : 90);
	}
	ymax() {
		return cabin.height.o - this.d/2 - (cabin.dblWalls ? 90 : 90);
	}
};

var fontProps;

var sliders;
var activeSlider, activeCTRL, activeInput, activeMax, activeMin, activeStep, activeSide, activeRole, activeDir, activeWall, activeBuffer;
var sliderPair, pairCTRL, pairInput, pairMax, pairMin, pairStep, pairSide, pairRole, pairDir, pairBuffer;
document.addEventListener("DOMContentLoaded", function(){
	var fp = new THREE.FontLoader().load( 'configurator/js/helvetiker_regular.typeface.json', function ( f ) {
		fontProps = {
			font: f,
			size: 45,
			height: 0,
			curveSegments: 12
		}
		build3d();
	});
	//build3d();
	
	cabin = {
		dblWalls : dblWalls,
		width : {
			i : width.i,
			o : width.o,
			imin : function(){ return 532 },
			imax : function(){ return (cabin.dblWalls ? 9668 : 9864) },	//single: 2 * (18 + 50)	= 136	double: 2 * ( (18 + 50) + 30 + (18 + 50) ) = 332
			omin : function(){ return (cabin.dblWalls ? 864 : 668) },//332 	136//864
			omax : function(){ return 10000 }
		},
		height : {
			i : height.i,
			o : height.o,
			imin : function(){ return 332 },
			imax : function(){ return (cabin.dblWalls ? 9720 : 9896) },	//single: (18 + 50) + 18 * 2 = 104	double: (18 + 50) + 72 + (18 + 50) + 18 * 4 = 280
			omin : function(){ return (cabin.dblWalls ? 612 : 436) },
			omax : function(){ return 10000 }
		},
		depth : {
			i : depth.i,
			o : depth.o,
			imin : function(){ return 532 },
			imax : function(){ return (cabin.dblWalls ? 9668 : 9864) },
			omin : function(){ return (cabin.dblWalls ? 864 : 668) },
			omax : function(){ return 10000 }
		},
		thickness : thickness,
		windowN : new Window(false, false, true, "N", 138, 800, 750, 800),
		windowS : new Window(false, false, true, "S", 1110, 800, 200, 800),
		windowE : new Window(false, false, true, "E", 138, 800, 750, 800),
		windowW : new Window(false, false, true, "W", 138, 800, 750, 800),
		windowD : new Window(false, false, true, "D", 138, 1000, 285, 500),
		door : new Door(false, true, "S", "r", 200, 118, 700, 1860),
		cableN : new Cable(false, false, true, "N", 990, 100),
		cableS : new Cable(false, false, true, "S", 990, 100),
		cableE : new Cable(false, false, true, "E", 990, 100),
		cableW : new Cable(false, false, true, "W", 990, 100),
		ventN : new Vent(false, false, true, "N", 160, 100),
		ventS : new Vent(false, false, true, "S", 160, 100),
		ventE : new Vent(false, false, true, "E", 160, 100),
		ventW : new Vent(false, false, true, "W", 160, 100)
		/*windowN : new Window(false, false, true, "N", 200, 800, 750, 800),
		windowS : new Window(true, false, true, "S", 200, 800, 200, 800),
		windowE : new Window(false, false, true, "E", 200, 800, 750, 800),
		windowW : new Window(false, false, true, "W", 200, 800, 750, 800),
		windowD : new Window(false, false, true, "D", 200, 1000, 285, 500),
		door : new Door(true, true, "S", "r", 200, 100, 700, 1860),
		cableN : new Cable(false, false, true, "N", 990, 100),
		cableS : new Cable(false, false, true, "S", 990, 100),
		cableE : new Cable(false, false, true, "E", 990, 100),
		cableW : new Cable(false, false, true, "W", 990, 100),
		ventN : new Vent(false, false, true, "N", 160, 100),
		ventS : new Vent(true, false, true, "S", 160, 100),
		ventE : new Vent(false, false, true, "E", 160, 100),
		ventW : new Vent(false, false, true, "W", 160, 100)*//*,
		ventD : new Vent(false, false, true, "D", 160, 100)*/
	}
	
	document.querySelector(".zoomin").addEventListener("click", function(){
		console.log(zoom);
		if (zoom>=8) return
		zoom++;
		cabin3d.zoomin();
	});
	document.querySelector(".zoomout").addEventListener("click", function(){
		console.log(zoom);
		if (zoom<=2) return
		zoom--;
		cabin3d.zoomout();
	});
	
	settingsButton = document.querySelector(".settings_btn");
	settingsButton.addEventListener("click", function(){
		document.querySelector(".main_wrapper").classList.toggle("show_settings");
	});
	document.querySelector(".collapse_btn").addEventListener("click", function(){
		document.querySelector(".main_wrapper").classList.remove("show_settings");
	});
	reset = document.querySelector(".reset");
	reset.addEventListener("click", function(){
		cabin = {
			dblWalls : dblWalls,
			width : {
				i : width.i,
				o : width.o,
				imin : function(){ return 564 },
				imax : function(){ return (cabin.dblWalls ? 4668 : 4864) },	//single: 2 * (18 + 50)	= 136	double: 2 * ( (18 + 50) + 30 + (18 + 50) ) = 332
				omin : function(){ return (cabin.dblWalls ? 896 : 700) },
				omax : function(){ return 5000 }
			},
			height : {
				i : height.i,
				o : height.o,
				imin : function(){ return 1696 },
				imax : function(){ return (cabin.dblWalls ? 4720 : 4896) },	//single: (18 + 50) + 18 * 2 = 104	double: (18 + 50) + 72 + (18 + 50) + 18 * 4 = 280
				omin : function(){ return (cabin.dblWalls ? 1976 : 1800) },
				omax : function(){ return 5000 }
			},
			depth : {
				i : depth.i,
				o : depth.o,
				imin : function(){ return 564 },
				imax : function(){ return (cabin.dblWalls ? 4668 : 4864) },
				omin : function(){ return (cabin.dblWalls ? 896 : 700) },
				omax : function(){ return 5000 }
			},
			thickness : thickness,
			windowN : new Window(false, false, true, "N", 200, 800, 750, 800),
			windowS : new Window(true, false, true, "S", 1110, 800, 200, 800),
			windowE : new Window(false, false, true, "E", 200, 800, 750, 800),
			windowW : new Window(false, false, true, "W", 200, 800, 750, 800),
			windowD : new Window(false, false, true, "D", 200, 1000, 285, 500),
			door : new Door(true, true, "S", "r", 200, 100, 700, 1860),
			cableN : new Cable(false, false, true, "N", 990, 100),
			cableS : new Cable(false, false, true, "S", 990, 100),
			cableE : new Cable(false, false, true, "E", 990, 100),
			cableW : new Cable(false, false, true, "W", 990, 100),
			ventN : new Vent(false, false, true, "N", 160, 100),
			ventS : new Vent(true, false, true, "S", 160, 100),
			ventE : new Vent(false, false, true, "E", 160, 100),
			ventW : new Vent(false, false, true, "W", 160, 100)/*,
			ventD : new Vent(false, false, true, "D", 160, 100)*/
		}
		accordionItems = document.querySelectorAll(".accordion_item");
		document.querySelector(".accordion_item.active").classList.remove("active");
		for (var a=0; a<accordionItems.length; a++){
			if (a==0){
				console.log(accordionItems[a].getAttribute("data-height"));
				accordionItems[a].classList.add("active");
				accordionItems[a].querySelector(".accordion_content").style.height = accordionItems[a].getAttribute("data-height")+"px";
			} else {
				accordionItems[a].querySelector(".accordion_content").style.height = "0";
			}
		}
		
		checkSouth();
		reposSliders();
		build3d();
	});
	saveButton = document.querySelector(".save");
	saveButton.addEventListener("click", function(){
		//var context = canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
		//var context = canvas.getContext("2d");
		
		var img = new Image(180, 180); // Размер изображения
		var cw = canvas.getBoundingClientRect().width;
		var ch = canvas.getBoundingClientRect().height;
		console.log(cw, ch);
		img.onload = function(){
			var temp = document.createElement('canvas');
			temp.width = cw;
			temp.height = ch;
			var tempContext = temp.getContext("2d");
			tempContext.drawImage(canvas,0,0)
			
			tempContext.drawImage(img, cw/2-134, ch/2-21, 268, 42);
			
			var image = temp.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
			//window.location.href=image; // it will save locally
			
			var element = document.createElement('a');
			var filename = 'draft.png';
			element.setAttribute('href', image);
			element.setAttribute('download', filename);
			
			element.click();
		}
	});
	
	document.querySelector(".apply-btn").addEventListener("click", function(){
		checkSouth();
		reposSliders();
		build3d();
	});
	
	document.querySelector(".accordion").style.opacity = 0;
	setTimeout(function(){
		accordionItems = document.querySelectorAll(".accordion_item");
		for (var a=0; a<accordionItems.length; a++){
			accordionItems[a].setAttribute("data-height", accordionItems[a].querySelector(".accordion_content").getBoundingClientRect().height);
			if (a!=0) accordionItems[a].querySelector(".accordion_content").style.height = 0;
			else accordionItems[a].querySelector(".accordion_content").style.height = accordionItems[a].getAttribute("data-height")+"px";
			accordionItems[a].querySelector(".accordion_title").addEventListener("click", function(e){
				if (document.querySelector(".accordion_item.active")) {
					activeItem = document.querySelector(".accordion_item.active");
					activeItem.querySelector(".accordion_content").style.height = 0+"px";
					activeItem.classList.remove("active");
				}
				if (activeItem!=this.closest(".accordion_item")){
					this.closest(".accordion_item").classList.add("active");
					this.closest(".accordion_item").querySelector(".accordion_content").style.height = this.closest(".accordion_item").getAttribute("data-height")+"px";
					if (this.closest(".accordion_item").classList.contains("door_accordion")){
						/*document.querySelector("#doorx").value = cabin.door.x;
						document.querySelector("#doorx_range .range_control").style.left = (cabin.door.x - cabin.door.xmin())/((cabin.door.xmax() - cabin.door.xmin())/100)+"%";
						document.querySelector("#doorw").value = cabin.door.w;
						document.querySelector("#doorw_range .range_control").style.left = (cabin.door.w - cabin.door.wmin())/((cabin.door.wmax() - cabin.door.wmin())/100)+"%";
						document.querySelector("#doory").value = cabin.door.y;
						document.querySelector("#doory_range .range_control").style.left = (cabin.door.y - cabin.door.ymin())/((cabin.door.ymax() - cabin.door.ymin())/100)+"%";
						document.querySelector("#doorh").value = cabin.door.h;
						document.querySelector("#doorh_range .range_control").style.left = (cabin.door.h - cabin.door.hmin())/((cabin.door.hmax() - cabin.door.hmin())/100)+"%";*/
					}
				}
				checkSouth();
				reposSliders();
			});
		}
		document.querySelector(".accordion").style.opacity = 1;
	}, 1000);
	presets = document.querySelectorAll(".preset_item");
	for (var p=0; p<presets.length; p++){
		presets[p].addEventListener("click", function(){
			if ((this.getAttribute("data-double")==1 && cabin.dblWalls==true) || (this.getAttribute("data-double")==0) && cabin.dblWalls==false) return;
			if (this.getAttribute("data-double")==1) {
				cabin.width.o = cabin.width.i + 332;
				document.querySelector("#width").value = cabin.width.o;
				cabin.depth.o = cabin.depth.i + 332;
				document.querySelector("#depth").value = cabin.depth.o;
				cabin.height.o = cabin.height.i + 280;
				if (cabin.height.o > 5000){
					cabin.height.o = 5000;
					cabin.height.i -= 280;
				}
				document.querySelector("#height").value = cabin.height.o;
				cabin.windowN.x += 90;
				cabin.windowN.y += 90;
				cabin.windowS.x += 90;
				cabin.windowS.y += 90;
				cabin.windowE.x += 90;
				cabin.windowE.y += 90;
				cabin.windowW.x += 90;
				cabin.windowW.y += 90;
				cabin.door.x += 90;
				cabin.door.y += 90;
				cabin.dblWalls = true;
			} else {
				cabin.width.o = cabin.width.i + 136;
				document.querySelector("#width").value = cabin.width.o;
				cabin.depth.o = cabin.depth.i + 136;
				document.querySelector("#depth").value = cabin.depth.o;
				cabin.height.o = cabin.height.i + 104;
				document.querySelector("#height").value = cabin.height.o;
				cabin.windowN.x -= 90;
				cabin.windowN.y -= 90;
				cabin.windowS.x -= 90;
				cabin.windowS.y -= 90;
				cabin.windowE.x -= 90;
				cabin.windowE.y -= 90;
				cabin.windowW.x -= 90;
				cabin.windowW.y -= 90;
				cabin.door.x -= 90;
				cabin.door.y -= 90;
				cabin.dblWalls = false;
			}
			reposSliders();
			build3d();
		});
	}
	origins = document.querySelectorAll('input[name="origin"]');
	for (var o=0; o<origins.length; o++){
		origins[o].addEventListener("change", function(e){
			cabin.door.origin = document.querySelector('input[name="origin"]:checked').value;
			reposSliders();
			build3d();
		});
	}
	
	checkboxes = document.querySelectorAll(".window_checkbox");
	for (var c=0; c<checkboxes.length; c++){
		checkboxes[c].addEventListener("change", function(){
			var win = cabin[this.getAttribute("id")];
			win.active = this.checked;
			if (win.active){
				if (win.wall=="S"){
					if (win.xmin() + win.wmin() + 210 < cabin.door.x) win.x = win.xmin();
					else if (cabin.door.x + cabin.door.w < cabin.width.o - win.xmin() - win.wmin() - 210) win.x = cabin.door.x + cabin.door.w + 210;
					else {
						win.h = win.hmin();
						win.y = cabin.door.y + cabin.door.h + 200;
					}
				}
				if (win.wall=="N" || win.wall=="S"){
					if (win.x + win.w + win.xmin() > cabin.width.o){
						win.x = win.xmin();
						if (win.x + win.w + win.xmin() > cabin.width.o) win.w = cabin.width.o - win.xmin()*2;
					}
					if (win.y + win.h + win.ymin() > cabin.height.o){
						win.y = win.ymin();
						if (win.y + win.h + win.ymin() > cabin.height.o) win.h = cabin.height.o - win.ymin()*2;
					}
				} else if (win.wall=="W" || win.wall=="E"){
					if (win.x + win.w + win.xmin() > cabin.depth.o){
						win.x = win.xmin();
						if (win.x + win.w + win.xmin() > cabin.depth.o) win.w = cabin.depth.o - win.xmin()*2;
					}
					if (win.y + win.h + win.ymin() > cabin.height.o){
						win.y = win.ymin();
						if (win.y + win.h + win.ymin() > cabin.height.o) win.h = cabin.height.o - win.ymin()*2;
					}
				} else if (win.wall=="D"){
					if (win.x + win.w + win.xmin() > cabin.door.w){
						win.x = win.xmin();
						if (win.x + win.w + win.xmin() > cabin.door.w) win.w = cabin.door.w - win.xmin()*2;
					}
					if (win.y + win.h + win.ymin() > cabin.door.h){
						win.y = win.ymin();
						if (win.y + win.h + win.ymin() > cabin.door.h) win.h = cabin.door.h - win.ymin()*2;
					}
				}
			}
			reposSliders();
			build3d();
		});
	}
	
	cableCheckboxes = document.querySelectorAll(".cable_checkbox");
	for (var c=0; c<cableCheckboxes.length; c++){
		cableCheckboxes[c].addEventListener("change", function(){
			cabin[this.getAttribute("id")].active = this.checked;
			if (this.checked) {
				var cab = cabin[this.getAttribute("id")];
				if (cab.wall=="S"){
					if (cabin.cableS.xmin() + cabin.cableS.d + 200 < cabin.door.x) cabin.cableS.x = cabin.door.x - 200;
					else if (cabin.door.x + cabin.door.w < cabin.width.o - cabin.cableS.xmin() - cabin.cableS.d - 200) cabin.cableS.x = cabin.cableS.xmax();
					else {
						cabin.cableS.h = cabin.cableS.d;
						cabin.cableS.y = cabin.door.y + cabin.door.h + 200;
					}
				}
			}
			reposSliders();
			build3d(); 
		});
	}
	
	ventCheckboxes = document.querySelectorAll(".vent_checkbox");
	for (var v=0; v<ventCheckboxes.length; v++){
		ventCheckboxes[v].addEventListener("change", function(){
			cabin[this.getAttribute("id")].active = this.checked;
			if (this.checked) {
				var ven = cabin[this.getAttribute("id")];
				if (ven.wall=="S"){
					if (cabin.ventS.xmin() + cabin.ventS.d + 200 < cabin.door.x) cabin.ventS.x = cabin.ventS.xmin();
					else if (cabin.door.x + cabin.door.w < cabin.width.o - cabin.ventS.xmin() - cabin.cableS.d - 200) cabin.ventS.x = cabin.door.x + cabin.door.w + 200;
					else {
						cabin.ventS.h = cabin.ventS.d;
						cabin.ventS.y = cabin.door.y + cabin.door.h + 200;
					}
				}
			}
			reposSliders();
			build3d(); 
		});
	}
	
	sliders = document.querySelectorAll(".range_wrapper");
	for (var s=0; s<sliders.length; s++){
		sliderInit(sliders[s]);
	}
});

function sliderInit(el){				//el = .range_wrapper
	var slider = el.querySelector(".range_slide");
	var input = el.querySelector(".range_input");
	var ctrl = el.querySelector(".range_control");
	var selected = false;
	var role = el.getAttribute("data-role");
	var dir = el.getAttribute("data-dir");
	input.value = cabin[role][dir];
	var min = cabin[role][dir+"min"]();
	var max = cabin[role][dir+"max"]();
	
	var step = input.getAttribute("data-step")*1;
	if (input.value != min){
		ctrl.style.left = ((input.value-min)/(max-min)*100)+"%";
	}
	
	input.addEventListener("keydown", function(e){
		if (e.keyCode == 27){
			this.blur();
		}
		if ((!e.key.match(/\d/) || (this.value.length>=4 && !selected)) && e.keyCode != 9 && e.keyCode != 8 && e.keyCode != 13 && e.keyCode != 46 && e.keyCode != 46 && e.keyCode != 39 && e.keyCode != 37 && e.keyCode != 27){
			e.preventDefault();
			e.stopPropagation();
			return;
		}
	});
	input.addEventListener("keypress", function(e){
		actSlider = this.closest(".range_wrapper");
		activeCtrl = actSlider.querySelector(".range_control");
		activeRole = actSlider.getAttribute("data-role");
		activeDir = actSlider.getAttribute("data-dir");
		//input.value = cabin[role][dir];
		activeMin = cabin[activeRole][activeDir+"min"]();
		activeMax = cabin[activeRole][activeDir+"max"]();
		step = this.getAttribute("data-step")*1;
		if (e.keyCode == 13){
			if (this.value < activeMin) this.value = activeMin;
			if (this.value > activeMax) this.value = activeMax;
			this.value = Math.round(this.value/step)*step;
			cabin[activeRole][activeDir] = this.value*1;
			activeCtrl.style.left = ((this.value - activeMin)/(activeMax - activeMin)*100)+"%";
			this.blur();
		}
		selected = false;
	});
	input.addEventListener("blur", function(e){
		actSlider = this.closest(".range_wrapper");
		activeCtrl = actSlider.querySelector(".range_control");
		activeRole = actSlider.getAttribute("data-role");
		activeDir = actSlider.getAttribute("data-dir");
		activeMin = cabin[activeRole][activeDir+"min"]();
		activeMax = cabin[activeRole][activeDir+"max"]();
		activeWall = cabin[activeRole].wall;
		step = this.getAttribute("data-step")*1;
		if (this.value < activeMin) this.value = activeMin;
		if (this.value > activeMax) this.value = activeMax;
		this.value = Math.round(this.value/step)*step;
		val = this.value*1;
		cabin[activeRole][activeDir] = val;
		activeCtrl.style.left = ((val - activeMin)/(activeMax - activeMin)*100)+"%";
		if (actSlider.getAttribute("data-pair")){
			sliderPair = document.querySelector("#"+actSlider.getAttribute("data-pair"));
			pairCTRL = sliderPair.querySelector(".range_control");
			pairInput = sliderPair.querySelector(".range_input");
			pairStep = pairInput.getAttribute("data-step")*1;
			pairRole = sliderPair.getAttribute("data-role");
			pairDir =  sliderPair.getAttribute("data-dir");
			pairSide =  sliderPair.getAttribute("data-side");
			pairMax = cabin[pairRole][pairDir+"max"]();
			pairMin = cabin[pairRole][pairDir+"min"]();
			pairBuffer = cabin[pairRole][pairDir];
		}
		if (sliderPair) {
			if (activeRole == "width" || activeRole == "depth"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 332 : 136);
				else pairVal = val - (cabin.dblWalls ? 332 : 136);
			} else if (activeRole == "height"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 280 : 104);
				else pairVal = val - (cabin.dblWalls ? 280 : 104);
			} else {
				if ((val + pairInput.value*1) > pairMax + activeMin) pairVal = pairMax - val + activeMin;
				else pairVal = pairInput.value;
			}
			cabin[pairRole][pairDir] = pairVal*1;
			pairInput.value = pairVal*1;
			pairCTRL.style.left = (pairVal - pairMin)/((pairMax - pairMin)/100)+"%";
		}
		selected = false;
		checkIntersection();
		if (cabin[activeRole].visible == false){
			cabin[activeRole][activeDir] = activeBuffer;
			if (sliderPair) cabin[pairRole][pairDir] = pairBuffer;
			cabin[activeRole].visible = true;
		}
		reposSliders();
		build3d();
	});
	input.addEventListener("focus", function(e){
		var len = this.value.length;
		if (this.setSelectionRange) {
			this.focus();
			this.setSelectionRange(0, len);
			selected = true;
		}
	});
	input.addEventListener("change", function(e){
		activeInput = e.currentTarget;
	});
	
	slider.addEventListener("mousedown", sliderSrart);
	slider.addEventListener("touchstart", sliderSrart);
	function sliderSrart(e){				//e = .range_slide
		activeSlide = e.currentTarget;
		activeSlider = activeSlide.closest(".range_wrapper");
		activeCTRL = activeSlider.querySelector(".range_control");
		activeCTRL.classList.add("active");
		activeInput = activeSlider.querySelector(".range_input");
		activeStep = activeInput.getAttribute("data-step")*1;
		activeRole = activeSlider.getAttribute("data-role");
		activeDir =  activeSlider.getAttribute("data-dir");
		activeSide =  activeSlider.getAttribute("data-side");
		activeMax = cabin[activeRole][activeDir+"max"]();
		activeMin = cabin[activeRole][activeDir+"min"]();
		activeBuffer = cabin[activeRole][activeDir];
		if (cabin[activeRole].wall) {
			activeWall = cabin[activeRole].wall;
		}
		if (activeSlider.getAttribute("data-pair")){
			sliderPair = document.querySelector("#"+activeSlider.getAttribute("data-pair"));
			pairCTRL = sliderPair.querySelector(".range_control");
			pairInput = sliderPair.querySelector(".range_input");
			pairStep = pairInput.getAttribute("data-step")*1;
			pairRole = sliderPair.getAttribute("data-role");
			pairDir =  sliderPair.getAttribute("data-dir");
			pairSide =  sliderPair.getAttribute("data-side");
			pairMax = cabin[pairRole][pairDir+"max"]();
			pairMin = cabin[pairRole][pairDir+"min"]();
			pairBuffer = cabin[pairRole][pairDir];
		}
		pointerX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
		var percents = Math.round((pointerX - activeSlide.getBoundingClientRect().left)/(activeSlide.getBoundingClientRect().width + activeCTRL.getBoundingClientRect().width/2)*100);
		var val = Math.round(((activeMax - activeMin)/100*percents + activeMin)/activeStep)*activeStep;
		if (val < activeMin) val = activeMin;
		if (val > activeMax) val = activeMax;
		cabin[activeRole][activeDir] = val*1;
		activeInput.value = val*1;
		activeCTRL.style.left = (pointerX - activeSlider.getBoundingClientRect().left - activeCTRL.getBoundingClientRect().width/2) + "px";
		if (activeRole == "width") checkWidth();
		else if (activeRole == "depth") checkDepth();
		else if (activeRole == "height") checkHeight();
		if (sliderPair) {
			if (activeRole == "width" || activeRole == "depth"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 332 : 136);
				else pairVal = val - (cabin.dblWalls ?  332 : 136);
			} else if (activeRole == "height"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 280 : 104);
				else pairVal = val - (cabin.dblWalls ? 280 : 104);
			} else {
				if ((val + pairInput.value*1) > pairMax + activeMin) pairVal = pairMax - val + activeMin;
				else pairVal = pairInput.value;
			}
			cabin[pairRole][pairDir] = pairVal*1;
			pairInput.value = pairVal*1;
			pairCTRL.style.left = (pairVal - pairMin)/((pairMax - pairMin)/100)+"%";
		}
		build3d();
	}
	
	document.addEventListener("mousemove", sliderMove);
	document.addEventListener("touchmove", sliderMove);
	function sliderMove(e){
		if (!activeSlider) return;
		pointerX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
		var percents = Math.round((pointerX - activeSlide.getBoundingClientRect().left)/(activeSlide.getBoundingClientRect().width + activeCTRL.getBoundingClientRect().width/2)*100);
		var val = Math.round(((activeMax - activeMin)/100*percents + activeMin)/activeStep)*activeStep;
		if (val < activeMin) val = activeMin;
		if (val > activeMax) val = activeMax;
		cabin[activeRole][activeDir] = val*1;
		activeInput.value = val*1;
		if (pointerX<=activeSlide.getBoundingClientRect().left) {
			percents = 0;
			activeCTRL.style.left = 0;
		} else if (pointerX>=activeSlide.getBoundingClientRect().left+activeSlider.querySelector(".range_slide").getBoundingClientRect().width) {
			percents = 100;
			activeCTRL.style.left = "100%";
		} else {
			activeCTRL.style.left = (pointerX - activeSlide.getBoundingClientRect().left) + "px";
		}
		if (activeRole == "width") checkWidth();
		else if (activeRole == "depth") checkDepth();
		else if (activeRole == "height") checkHeight();
		if (sliderPair) {
			if (activeRole == "width" || activeRole == "depth"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 332 : 136);
				else pairVal = val - (cabin.dblWalls ?  332 : 136);
			} else if (activeRole == "height"){
				if (activeDir=="i") pairVal = val + (cabin.dblWalls ? 280 : 104);
				else pairVal = val - (cabin.dblWalls ? 280 : 104);
			} else {
				if ((val + pairInput.value*1) > pairMax + activeMin) pairVal = pairMax - val + activeMin;
				else pairVal = pairInput.value;
			}
			cabin[pairRole][pairDir] = pairVal*1;
			pairInput.value = pairVal*1;
			pairCTRL.style.left = (pairVal - pairMin)/((pairMax - pairMin)/100)+"%";
		}
		
		if (activeWall) {
			checkIntersection();
		}
		
		if (!throtle) throtle = setInterval(build3d, 50);
	}
}
	
document.addEventListener("mouseup", sliderEnd);
document.addEventListener("touchend", sliderEnd);
function sliderEnd(e){
	if (!activeSlider) return;
	if (cabin[activeRole].visible == false){
		console.log(activeBuffer);
		cabin[activeRole][activeDir] = activeBuffer;
		if (sliderPair) cabin[pairRole][pairDir] = pairBuffer;
		cabin[activeRole].visible = true;
	}
	pointerX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
	activeSlider.classList.remove("range_active");
	activeSlider = "";
	activeCTRL = "";
	activeInput = "";
	activeWall = "";
	sliderPair = "";
	clearInterval(throtle);
	throtle = "";
	old = "";
	reposSliders();
	build3d();
};

/*
H<----90---->W
H<--50-->D
*/
function checkIntersection(){
	if (cabin[activeRole].type == "window"){
		if (activeWall == "S"){
			if ((cabin.door.x > cabin["windowS"].x - 210 && cabin.door.x < cabin["windowS"].x + cabin["windowS"].w + 210) || (cabin.door.x + cabin.door.w < cabin["windowS"].x + cabin["windowS"].w + 210 && cabin.door.x + cabin.door.w > cabin["windowS"].x - 210) || cabin["vent"+activeWall].active && (cabin["vent"+activeWall].x > cabin[activeRole].x - cabin["vent"+activeWall].d/2 - 200 && cabin["vent"+activeWall].x < cabin[activeRole].x + cabin[activeRole].w + cabin["vent"+activeWall].d/2 + 200 && cabin["vent"+activeWall].y > cabin[activeRole].y - cabin["vent"+activeWall].d/2 - 200 && cabin["vent"+activeWall].y < cabin[activeRole].y + cabin[activeRole].h + cabin["vent"+activeWall].d/2 + 200)) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
		} else {
			if ((cabin["cable"+activeWall].active && (cabin["cable"+activeWall].x > cabin[activeRole].x - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].x < cabin[activeRole].x + cabin[activeRole].w + cabin["cable"+activeWall].d/2 + 90 && cabin["cable"+activeWall].y > cabin[activeRole].y - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].y < cabin[activeRole].y + cabin[activeRole].h + cabin["cable"+activeWall].d/2 + 90)) || (cabin["vent"+activeWall].active && (cabin["vent"+activeWall].x > cabin[activeRole].x - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].x < cabin[activeRole].x + cabin[activeRole].w + cabin["vent"+activeWall].d/2 + 90 && cabin["vent"+activeWall].y > cabin[activeRole].y - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].y < cabin[activeRole].y + cabin[activeRole].h + cabin["vent"+activeWall].d/2 + 90))) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
		}
	} else if (cabin[activeRole].type == "cable"){
		if (activeWall == "S"){
			if ((cabin["cableS"].x > cabin.door.x - cabin["cableS"].d/2 - 50 && cabin["cableS"].x < cabin.door.x + cabin.door.w + cabin["cableS"].d/2 + 50 && cabin["cableS"].y > cabin.door.y - cabin["cableS"].d/2 - 50 && cabin["cableS"].y < cabin.door.y + cabin.door.h + cabin["cableS"].d/2 + 50) || (cabin["window"+activeWall].active && (cabin["cable"+activeWall].x > cabin["window"+activeWall].x - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].x < cabin["window"+activeWall].x + cabin["window"+activeWall].w + cabin["cable"+activeWall].d/2 + 90 && cabin["cable"+activeWall].y > cabin["window"+activeWall].y - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].y < cabin["window"+activeWall].y + cabin["window"+activeWall].h + cabin["cable"+activeWall].d/2 + 90)) || (cabin["vent"+activeWall].active && (cabin["cable"+activeWall].x > cabin["vent"+activeWall].x - 110 && cabin["cable"+activeWall].x < cabin["vent"+activeWall].x + 110 && cabin["cable"+activeWall].y > cabin["vent"+activeWall].y - 110 && cabin["cable"+activeWall].y < cabin["vent"+activeWall].y + 110))) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
		} else {
			if ((cabin["window"+activeWall].active && (cabin["cable"+activeWall].x > cabin["window"+activeWall].x - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].x < cabin["window"+activeWall].x + cabin["window"+activeWall].w + cabin["cable"+activeWall].d/2 + 90 && cabin["cable"+activeWall].y > cabin["window"+activeWall].y - cabin["cable"+activeWall].d/2 - 90 && cabin["cable"+activeWall].y < cabin["window"+activeWall].y + cabin["window"+activeWall].h + cabin["cable"+activeWall].d/2 + 90)) || (cabin["vent"+activeWall].active && (cabin["cable"+activeWall].x > cabin["vent"+activeWall].x - 110 && cabin["cable"+activeWall].x < cabin["vent"+activeWall].x + 110 && cabin["cable"+activeWall].y > cabin["vent"+activeWall].y - 110 && cabin["cable"+activeWall].y < cabin["vent"+activeWall].y + 110))) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
			
		}
	} else if (cabin[activeRole].type == "vent"){
		if (activeWall == "S"){
			if ((cabin["ventS"].x > cabin.door.x - cabin["ventS"].d/2 - 50 && cabin["ventS"].x < cabin.door.x + cabin.door.w + cabin["ventS"].d/2 + 50 && cabin["ventS"].y > cabin.door.y - cabin["ventS"].d/2 - 50 && cabin["ventS"].y < cabin.door.y + cabin.door.h + cabin["ventS"].d/2 + 50) || (cabin["window"+activeWall].active && (cabin["vent"+activeWall].x > cabin["window"+activeWall].x - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].x < cabin["window"+activeWall].x + cabin["window"+activeWall].w + cabin["vent"+activeWall].d/2 + 90 && cabin["vent"+activeWall].y > cabin["window"+activeWall].y - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].y < cabin["window"+activeWall].y + cabin["window"+activeWall].h + cabin["vent"+activeWall].d/2 + 90)) || (cabin["cable"+activeWall].active && (cabin["vent"+activeWall].x > cabin["cable"+activeWall].x - 110 && cabin["vent"+activeWall].x < cabin["cable"+activeWall].x + 110 && cabin["vent"+activeWall].y > cabin["cable"+activeWall].y - 110 && cabin["vent"+activeWall].y < cabin["cable"+activeWall].y + 110))) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
		} else {
			if ((cabin["window"+activeWall].active && (cabin["vent"+activeWall].x > cabin["window"+activeWall].x - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].x < cabin["window"+activeWall].x + cabin["window"+activeWall].w + cabin["vent"+activeWall].d/2 + 90 && cabin["vent"+activeWall].y > cabin["window"+activeWall].y - cabin["vent"+activeWall].d/2 - 90 && cabin["vent"+activeWall].y < cabin["window"+activeWall].y + cabin["window"+activeWall].h + cabin["vent"+activeWall].d/2 + 90)) || (cabin["cable"+activeWall].active && (cabin["vent"+activeWall].x > cabin["cable"+activeWall].x - 110 && cabin["vent"+activeWall].x < cabin["cable"+activeWall].x + 110 && cabin["vent"+activeWall].y > cabin["cable"+activeWall].y - 110 && cabin["vent"+activeWall].y < cabin["cable"+activeWall].y + 110))) cabin[activeRole].visible = false;
			else cabin[activeRole].visible = true;
		}
	} else if (cabin[activeRole].type == "door"){
		if (cabin["windowS"].active && (((cabin["door"].x > cabin["windowS"].x - 210 && cabin["door"].x < cabin["windowS"].x + cabin["windowS"].w + 210) || (cabin["door"].x + cabin["door"].w > cabin["windowS"].x - 210 && cabin["door"].x + cabin["door"].w < cabin["windowS"].x + cabin["windowS"].w + 210) || (cabin["windowS"].x - 210 > cabin["door"].x && cabin["windowS"].x + cabin["windowS"].w + 210 < cabin["door"].x + cabin["door"].w)) && ((cabin["door"].y > cabin["windowS"].y - 210 && cabin["door"].y < cabin["windowS"].y + cabin["windowS"].h + 210) || (cabin["door"].y + cabin["door"].h > cabin["windowS"].y - 210 && cabin["door"].y + cabin["door"].h < cabin["windowS"].y + cabin["windowS"].h + 210) || (cabin["windowS"].y - 210 > cabin["door"].y && cabin["windowS"].y + cabin["windowS"].h + 210 < cabin["door"].y + cabin["door"].h)))) cabin[activeRole].visible = false;
		else cabin[activeRole].visible = true;
		
		if (cabin["cableS"].active && (((cabin["door"].x > cabin["cableS"].x - 50 && cabin["door"].x < cabin["cableS"].x + cabin["cableS"].d + 50) || (cabin["door"].x + cabin["door"].w > cabin["cableS"].x - 50 && cabin["door"].x + cabin["door"].w < cabin["cableS"].x + cabin["cableS"].d + 50) || (cabin["cableS"].x - 50 > cabin["door"].x && cabin["cableS"].x + cabin["cableS"].d + 50 < cabin["door"].x + cabin["door"].w)) && ((cabin["door"].y > cabin["cableS"].y - 50 && cabin["door"].y < cabin["cableS"].y + cabin["cableS"].d + 50) || (cabin["door"].y + cabin["door"].h > cabin["cableS"].y - 50 && cabin["door"].y + cabin["door"].h < cabin["cableS"].y + cabin["cableS"].d + 50) || (cabin["cableS"].y - 50 > cabin["door"].y && cabin["cableS"].y + cabin["cableS"].d + 50 < cabin["door"].y + cabin["door"].h)))) cabin[activeRole].visible = false;
		else cabin[activeRole].visible = true;
		
		if (cabin["ventS"].active && (((cabin["door"].x > cabin["ventS"].x - 50 && cabin["door"].x < cabin["ventS"].x + cabin["ventS"].d + 50) || (cabin["door"].x + cabin["door"].w > cabin["ventS"].x - 50 && cabin["door"].x + cabin["door"].w < cabin["ventS"].x + cabin["ventS"].d + 50) || (cabin["ventS"].x - 50 > cabin["door"].x && cabin["ventS"].x + cabin["ventS"].d + 50 < cabin["door"].x + cabin["door"].w)) && ((cabin["door"].y > cabin["ventS"].y - 50 && cabin["door"].y < cabin["ventS"].y + cabin["ventS"].d + 50) || (cabin["door"].y + cabin["door"].h > cabin["ventS"].y - 50 && cabin["door"].y + cabin["door"].h < cabin["ventS"].y + cabin["ventS"].d + 50) || (cabin["ventS"].y - 50 > cabin["door"].y && cabin["ventS"].y + cabin["ventS"].d + 50 < cabin["door"].y + cabin["door"].h)))) cabin[activeRole].visible = false;
		else cabin[activeRole].visible = true;
		
		if (cabin["windowD"].active && (cabin.door.w < cabin["windowD"].wmin() + 276 || cabin.door.h < cabin["windowD"].hmin() + 276)) {
			cabin["windowD"].active = false;
			cabin["windowD"].disabled = true;
		} else if (cabin.door.w < cabin["windowD"].wmin() + 276 && cabin.door.h > cabin["windowD"].hmin() + 276){
			cabin["windowD"].disabled = false;
		}
	}
}

function checkSouth(){
	if (cabin.windowS.xmin() + cabin.windowS.wmin() + 210 < cabin.door.x || cabin.door.x + cabin.door.w < cabin.width.o - cabin.windowS.xmin() - cabin.windowS.wmin() - 210 || cabin.windowS.hmin() + cabin.windowS.ymin() + 210 <= cabin.height.o - cabin.door.y - cabin.door.h){
		cabin.windowS.disabled = false;
	} else {
		cabin.windowS.disabled = true;		
	}
	
	if (cabin.cableS.xmin() + cabin.cableS.d + 200 < cabin.door.x || cabin.door.x + cabin.door.w < cabin.width.o - cabin.cableS.xmin() - cabin.cableS.d - 200 || cabin.cableS.d + cabin.cableS.ymin() + 200 <= cabin.height.o - cabin.door.y - cabin.door.h){
		cabin.cableS.disabled = false;
	} else {
		cabin.cableS.disabled = true;		
	}
	
	if (cabin.ventS.xmin() + cabin.ventS.d + 200 < cabin.door.x || cabin.door.x + cabin.door.w < cabin.width.o - cabin.ventS.xmin() - cabin.ventS.d - 200 || cabin.ventS.d + cabin.ventS.ymin() + 200 <= cabin.height.o - cabin.door.y - cabin.door.h){
		cabin.ventS.disabled = false;
	} else {
		cabin.ventS.disabled = true;		
	}
}

function checkWidth(){
	if (cabin.windowN.active && (cabin.windowN.x + cabin.windowN.w + (cabin.dblWalls ? 256 : 138) > cabin.width.o)) {
		if (cabin.windowN.x > (cabin.dblWalls ? 256 : 138)) cabin.windowN.x = cabin.width.o - cabin.windowN.w - (cabin.dblWalls ? 256 : 138);
		else cabin.windowN.w = cabin.width.o - cabin.windowN.x - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowS.active && (cabin.windowS.x + cabin.windowS.w + (cabin.dblWalls ? 256 : 138) > cabin.width.o)) {
		if (cabin.windowS.x > (cabin.dblWalls ? 256 : 138)) cabin.windowS.x = cabin.width.o - cabin.windowS.w - (cabin.dblWalls ? 256 : 138);
		else cabin.windowS.w = cabin.width.o - cabin.windowS.x - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.door.x + cabin.door.w + (cabin.dblWalls ? 256 : 138) > cabin.width.o) {
		if (cabin.door.x > (cabin.dblWalls ? 256 : 138)) cabin.door.x = cabin.width.o - cabin.door.w - (cabin.dblWalls ? 256 : 138);
		else cabin.door.w = cabin.width.o - cabin.door.x - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowD.active && (cabin.windowD.x + cabin.windowD.w + (cabin.dblWalls ? 256 : 138) > cabin.door.w)) {
		if (cabin.windowD.w < cabin.windowD.wmin()) {
			cabin.windowD.active = false;
			cabin.windowD.disabled = true;
			document.querySelector(".windows_accordion .accordion_content").style.height = 0+"px";
		} else {
			if (cabin.windowD.x > (cabin.dblWalls ? 138 : 138)) cabin.windowD.x = cabin.door.w - cabin.windowD.w - (cabin.dblWalls ? 138 : 138);
			else cabin.windowD.w = cabin.door.w - cabin.windowD.x - (cabin.dblWalls ? 138 : 138);
		}
	}
	if (cabin.cableN.active && (cabin.cableN.x > cabin.cableN.xmax())) cabin.cableN.x = cabin.cableN.xmax();
	if (cabin.cableS.active && (cabin.cableS.x > cabin.cableS.xmax())) cabin.cableS.x = cabin.cableS.xmax();
	if (cabin.ventN.active && (cabin.ventN.x > cabin.ventN.xmax())) cabin.ventN.x = cabin.ventN.xmax();
	if (cabin.ventS.active && (cabin.ventS.x > cabin.ventS.xmax())) cabin.ventS.x = cabin.ventS.xmax();
	reposSliders();
}

function checkDepth(){
	if (cabin.windowW.active && (cabin.windowW.x + cabin.windowW.w + (cabin.dblWalls ? 256 : 138) > cabin.depth.o)) {
		if (cabin.windowW.x > (cabin.dblWalls ? 256 : 138)) cabin.windowW.x = cabin.depth.o - cabin.windowW.w - (cabin.dblWalls ? 256 : 138);
		else cabin.windowW.w = cabin.depth.o - cabin.windowW.x - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowE.active && (cabin.windowE.x + cabin.windowE.w + (cabin.dblWalls ? 256 : 138) > cabin.depth.o)) {
		if (cabin.windowE.x > (cabin.dblWalls ? 256 : 138)) cabin.windowE.x = cabin.depth.o - cabin.windowE.w - (cabin.dblWalls ? 256 : 138);
		else cabin.windowE.w = cabin.depth.o - cabin.windowE.x - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.cableE.active && (cabin.cableE.x > cabin.cableE.xmax())) cabin.cableE.x = cabin.cableE.xmax();
	if (cabin.cableW.active && (cabin.cableW.x > cabin.cableW.xmax())) cabin.cableW.x = cabin.cableW.xmax();
	if (cabin.ventE.active && (cabin.ventE.x > cabin.ventE.xmax())) cabin.ventE.x = cabin.ventE.xmax();
	if (cabin.ventW.active && (cabin.ventW.x > cabin.ventW.xmax())) cabin.ventW.x = cabin.ventW.xmax();
	reposSliders();
}

function checkHeight(){
	if (cabin.windowN.active && (cabin.windowN.y + cabin.windowN.h + (cabin.dblWalls ? 256 : 138) > cabin.height.o)) {
		if (cabin.windowN.y > (cabin.dblWalls ? 256 : 138)) cabin.windowN.y = cabin.height.o - cabin.windowN.h - (cabin.dblWalls ? 256 : 138);
		else cabin.windowN.h = cabin.height.o - cabin.windowN.y - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowS.active && (cabin.windowS.y + cabin.windowN.h + (cabin.dblWalls ? 256 : 138) > cabin.height.o)) {
		if (cabin.windowS.y > (cabin.dblWalls ? 256 : 138)) cabin.windowS.y = cabin.height.o - cabin.windowS.h - (cabin.dblWalls ? 256 : 138);
		else cabin.windowS.h = cabin.height.o - cabin.windowS.y - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowW.active && (cabin.windowW.y + cabin.windowW.h + (cabin.dblWalls ? 256 : 138) > cabin.height.o)) {
		if (cabin.windowW.y > (cabin.dblWalls ? 256 : 138)) cabin.windowW.y = cabin.height.o - cabin.windowW.h - (cabin.dblWalls ? 256 : 138);
		else cabin.windowW.h = cabin.height.o - cabin.windowW.y - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.windowE.active && (cabin.windowE.y + cabin.windowE.h + (cabin.dblWalls ? 256 : 138) > cabin.height.o)) {
		if (cabin.windowE.y > (cabin.dblWalls ? 256 : 138)) cabin.windowE.y = cabin.height.o - cabin.windowE.h - (cabin.dblWalls ? 256 : 138);
		else cabin.windowE.h = cabin.height.o - cabin.windowE.y - (cabin.dblWalls ? 256 : 138);
	}
	if (cabin.door.y + cabin.door.h + (cabin.dblWalls ? 306 : 118) > cabin.height.o) {
		if (cabin.door.y > (cabin.dblWalls ? 306 : 118)) cabin.door.y = cabin.height.o - cabin.door.h - (cabin.dblWalls ? 306 : 118);
		else cabin.door.h = cabin.height.o - cabin.door.y - (cabin.dblWalls ? 306 : 118);
	}
	if (cabin.windowD.active && (cabin.windowD.y + cabin.windowD.h + (cabin.dblWalls ? 138 : 138) > cabin.door.h)) {
		if (cabin.windowD.y > (cabin.dblWalls ? 138 : 138)) cabin.windowD.y = cabin.door.h - cabin.windowD.h - (cabin.dblWalls ? 138 : 138);
		else cabin.windowD.h = cabin.door.h - cabin.windowD.y - (cabin.dblWalls ? 138 : 138);
	}
	if (cabin.cableN.active && (cabin.cableN.y > cabin.cableN.ymax())) cabin.cableN.y = cabin.cableN.ymax();
	if (cabin.cableS.active && (cabin.cableS.y > cabin.cableS.ymax())) cabin.cableS.y = cabin.cableS.ymax();
	if (cabin.cableE.active && (cabin.cableE.y > cabin.cableE.ymax())) cabin.cableE.y = cabin.cableE.ymax();
	if (cabin.cableW.active && (cabin.cableW.y > cabin.cableW.ymax())) cabin.cableW.y = cabin.cableW.ymax();
	if (cabin.ventN.active && (cabin.ventN.y > cabin.ventN.ymax())) cabin.ventN.y = cabin.ventN.ymax();
	if (cabin.ventS.active && (cabin.ventS.y > cabin.ventS.ymax())) cabin.ventS.y = cabin.ventS.ymax();
	if (cabin.ventE.active && (cabin.ventE.y > cabin.ventE.ymax())) cabin.ventE.y = cabin.ventE.ymax();
	if (cabin.ventW.active && (cabin.ventW.y > cabin.ventW.ymax())) cabin.ventW.y = cabin.ventW.ymax();
	reposSliders();
}

function reposSliders(){
	for (var s=0; s<sliders.length; s++){
		var curSlider = sliders[s];
		curRole = curSlider.getAttribute("data-role");
		if (!cabin[curRole].active && curRole!="door") continue;
		curDir = curSlider.getAttribute("data-dir");
		var curCTRL = curSlider.querySelector(".range_control");
		var curMin = cabin[curRole][curDir+"min"]();
		var curMax = cabin[curRole][curDir+"max"]();
		if (cabin[curRole][curDir] > curMax) cabin[curRole][curDir] = curMax;
		if (cabin[curRole][curDir] < curMin) cabin[curRole][curDir] = curMin;
		var curValue = cabin[curRole][curDir];
		curSlider.querySelector(".range_input").value = curValue;
		curCTRL.style.left = (curValue-curMin)/((curMax - curMin)/100)+"%";
	}
}

function build3d(){
	//return;
	data3d = {
		"sizes" : [cabin.width.o, cabin.height.o, cabin.depth.o, cabin.thickness],
		"walls" : (cabin.dblWalls ? 2 : 1),
		"measure" : inner,
		"door" : { origin : cabin.door.origin, x : cabin.door.x, y : cabin.door.y, w : cabin.door.w, h : cabin.door.h, visible : cabin.door.visible },
		"drawSizes" : drawSizes
	}
	if (cabin.windowN.active) data3d.windowN = cabin.windowN;
	if (cabin.windowS.active) data3d.windowS = cabin.windowS;
	if (cabin.windowD.active) data3d.windowD = cabin.windowD;
	if (cabin.windowE.active) data3d.windowE = cabin.windowE;
	if (cabin.windowW.active) data3d.windowW = cabin.windowW;
	if (cabin.cableN.active) data3d.cableN = cabin.cableN;
	if (cabin.cableS.active) data3d.cableS = cabin.cableS;
	if (cabin.cableE.active) data3d.cableE = cabin.cableE;
	if (cabin.cableW.active) data3d.cableW = cabin.cableW;
	if (cabin.ventN.active) data3d.ventN = cabin.ventN;
	if (cabin.ventS.active) data3d.ventS = cabin.ventS;
	if (cabin.ventE.active) data3d.ventE = cabin.ventE;
	if (cabin.ventW.active) data3d.ventW = cabin.ventW;
	//console.log(data3d);
	if (!inited){
		var scene = document.createElement("div");
		scene.classList.add("scene");
		document.querySelector(".left_model").appendChild(scene);
		data3d['domElement'] = scene;
		cabin3d.init(data3d, fontProps);
		canvas = document.querySelector(".scene CANVAS");
		inited = true;
	} else {
		cabin3d.show(data3d);
		cabin3d.showSizes(data3d);
	}
}