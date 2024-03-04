var cabin3d = {
    config:     null,
    scene:      null,
    camera:     null,
    renderer:   null,
    controls:   null,
	group:		null,
	font:		null,
	fontProps:	null,
	zoomDist:	1,
	factor:		.8,
	
	init: function(config, fp){
		var _this = this,
            someWidth = 8000;

		

		
		_this.fontProps = fp;
        this.config = config;
		var container = this.config['domElement'],
            w = container.clientWidth,
            h = container.clientHeight;

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, preserveDrawingBuffer: true});
        this.renderer.setSize( w, h );
        this.config['domElement'].appendChild( this.renderer.domElement );
		
		this.scene = new THREE.Scene();
		this.renderer.setClearColor(0xffffff, 0);
		
		this.camera = new THREE.PerspectiveCamera( 60, w/h, 0.1, 5*someWidth )
		this.camera.position.set(2500,2500,-3500);
		this.scene.add(this.camera);
		
		this.scene.background = new THREE.Color( 'white' );	
		
		var light2 = new THREE.AmbientLight(0xFFFFFF, 1);
		this.scene.add(light2);
		
		var plight = new THREE.PointLight(0xffffff, .2);
		this.camera.add(plight);
		
		/*this.camera.zoom = 2;
		this.camera.updateProjectionMatrix();*/
		
		this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );

        this.controls.minPolarAngle = 0;
        this.controls.maxPolarAngle = Math.PI;
        this.controls.enablePan = false;

        this.controls.target.set(
            0, config.sizes[1]/2, 0
        );

        this.controls.update();

        this.controls.addEventListener( 'change', function() {
            _this.renderer.render( _this.scene, _this.camera );
        } );
		
        window.addEventListener('resize', function () {
            _this.renderer.setSize(container.clientWidth, container.clientHeight);
            _this.camera.aspect = container.clientWidth / container.clientHeight;
            _this.camera.updateProjectionMatrix();

            // _this.controls.update();
            _this.renderer.render( _this.scene, _this.camera );

        });
		var lineXMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		var lineYMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
		var lineZMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
		var pointsX = [];
		pointsX.push( new THREE.Vector3( 0, 0, 0 ) );
		pointsX.push( new THREE.Vector3( 5000, 0, 0 ) );
		var pointsY = [];
		pointsY.push( new THREE.Vector3( 0, 0, 0 ) );
		pointsY.push( new THREE.Vector3( 0, 5000, 0 ) );
		var pointsZ = [];
		pointsZ.push( new THREE.Vector3( 0, 0, 0 ) );
		pointsZ.push( new THREE.Vector3( 0, 0, 5000 ) );
		var lineXGeometry = new THREE.BufferGeometry().setFromPoints( pointsX );
		var lineYGeometry = new THREE.BufferGeometry().setFromPoints( pointsY );
		var lineZGeometry = new THREE.BufferGeometry().setFromPoints( pointsZ );
		var lineX = new THREE.Line( lineXGeometry, lineXMaterial );
		var lineY = new THREE.Line( lineYGeometry, lineYMaterial );
		var lineZ = new THREE.Line( lineZGeometry, lineZMaterial );
		/*_this.scene.add( lineX );
		_this.scene.add( lineY );
		_this.scene.add( lineZ );*/
		
		var width = config.sizes[0];
		var height = config.sizes[1];
		var depth = config.sizes[2];
		var thickness = config.sizes[3];
		
		fillMaterial2 = new THREE.MeshBasicMaterial({
			color: 0xffffff,
			transparent:true,
			opacity:.25,
			depthTest: false
		});
		
		fillMaterial5 = new THREE.MeshBasicMaterial({
			color: 0xaaaaaa,
			transparent:true, 
			opacity:.1,
			depthTest: false
		});
		
		floorMaterial = new THREE.MeshBasicMaterial({
			color: 0xaaaaaa,
			transparent:true, 
			opacity:.5,
			depthTest: false
		});
		
		redLineMaterial = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			transparent:true, 
			opacity:1,
			depthTest: false
		});
		
		blackLineMaterial = new THREE.LineBasicMaterial({
			color: 0x333333,
			linewidth: .5,
			transparent:true, 
			opacity:.5
		});
		
		blackLineMaterial2 = new THREE.LineBasicMaterial({
			color: 0x333333,
			linewidth: 1
		});
		
		redLineMaterial2 = new THREE.LineDashedMaterial({
			color: 0xff0000,
			linewidth: 1,
			scale: 1,
			dashSize: 1,
			gapSize: 5
		});
		
		testMaterial = new THREE.LineDashedMaterial({
			color: 0x0000ff
		});
		
		wallN = null;
		wallNouter = null;
		wallS = null;
		wallSouter = null;
		wallE = null;
		wallEouter = null;
		wallW = null;
		wallWouter = null;
		floor = null;
		floorOuter = null;
		roof = null;
		roofOuter = null;
		
		groupLines = new THREE.Group();
		groupFill = new THREE.Group();
		
		doorGroup = new THREE.Group();
		doorGroupOuter = new THREE.Group();
		
		groupLinesOuter = new THREE.Group();
		groupFillOuter = new THREE.Group();
		
		groupSizes = new THREE.Group();
		
		outerMesh = null; 
		wireframeN = null;
		outwireframeN = null;
		wireframeS = null;
		outwireframeS = null;
		wireframeE = null;
		outwireframeE = null;
		wireframeW = null;
		outwireframeW = null;
		
		_this.showSizes( config );
		_this.show( config );
	},
	
	zoomin : function(){
		var _this = this;	
		_this.camera.position.x *= _this.factor;
		_this.camera.position.y *= _this.factor;
		_this.camera.position.z *= _this.factor;
		_this.camera.lookAt(
            0, _this.config.sizes[1]/2, 0
        );
		_this.renderer.render( _this.scene, _this.camera );
	},
	zoomout : function(){
		var _this = this;	
		_this.camera.position.x /= _this.factor;
		_this.camera.position.y /= _this.factor;
		_this.camera.position.z /= _this.factor;
		_this.camera.lookAt(
            0, _this.config.sizes[1]/2, 0
        );
		_this.renderer.render( _this.scene, _this.camera );
	},
	
	remove: function(){
		var _this = this;
		_this.scene.remove(_this.group);
		_this.renderer.render( _this.scene, _this.camera );
	},
	
	showSizes: function(config){
		//return;
		var _this = this;
		var dblWalls = (config.walls == 2 ? true : false);
		var thickness = config.sizes[3];
		var thickness2 = 18;
		var thickness5 = 50;

		var width = config.sizes[0];
		var height = config.sizes[1];
		var depth = config.sizes[2];
		var doorX = config.door.x;
		var doorY = config.door.y;
		var doorW = config.door.w-(dblWalls ? 60 : 0);
		var doorH = config.door.h-(dblWalls ? 60 : 0);
		var oDoorW = config.door.w;
		var oDoorH = config.door.h;
		var oWidth = config.sizes[0]+thickness*4+60;
		var oHeight = config.sizes[1]+thickness*3+30;
		var oDepth = config.sizes[2]+thickness*4+60;
		
		_this.scene.remove(groupSizes);
		groupSizes = new THREE.Group();
		
		_this.buildLine(width/2, (dblWalls ? -40 : 0), depth/2, width/2+400, (dblWalls ? -40 : 0), depth/2+400);
		_this.buildLine((dblWalls ? width/2 : 0), height-(dblWalls ? 40 : 0), (dblWalls ? depth/2 : 0), width/2+400, height-(dblWalls ? 40 : 0), depth/2+400);
		_this.buildLine(width/2+350, (dblWalls ? -40 : 0), depth/2+350, width/2+350, height-(dblWalls ? 40 : 0), depth/2+350);
		var outerHeightText = new THREE.TextGeometry(height+"", _this.fontProps);
		outerHeightText.computeBoundingBox();
		outerHeightText.rotateZ((-90 * Math.PI) / 180);
		outerHeightText.rotateY((135 * Math.PI) / 180);
		outerHeightText.translate(width/2+340, (outerHeightText.boundingBox.max.y - outerHeightText.boundingBox.min.y)/2+(height+(dblWalls ? 20 : 0))/2, depth/2+340);
		var oht = new THREE.Mesh( outerHeightText, redLineMaterial );
		groupSizes.add( oht );
		
		_this.buildLine(width/2, 40, depth/2, width/2+200, 40, depth/2+200);
		_this.buildLine(width/2, height-(dblWalls ? 230 : 70), depth/2, width/2+200, height-(dblWalls ? 230 : 70), depth/2+200);
		_this.buildLine(width/2+150, 40, depth/2+150, width/2+150, height-(dblWalls ? 230 : 70), depth/2+150);
		var innerHeightText = new THREE.TextGeometry( height-(dblWalls ? 238 : 104)+"", _this.fontProps);
		innerHeightText.computeBoundingBox();
		innerHeightText.rotateZ((-90 * Math.PI) / 180);
		innerHeightText.rotateY((135 * Math.PI) / 180);
		innerHeightText.translate(width/2+140, (innerHeightText.boundingBox.max.y - innerHeightText.boundingBox.min.y)/2+(height+(dblWalls ? 20 : 0))/2, depth/2+140);
		var iht = new THREE.Mesh( innerHeightText, redLineMaterial );
		groupSizes.add( iht );
		
		_this.buildLine(-width/2, height-(dblWalls ? 30 : -5), -depth/2, -width/2, height-(dblWalls ? 30 : -5), -depth/2+100);
		_this.buildLine(width/2, height-(dblWalls ? 30 : -5), -depth/2, -width/2, height-(dblWalls ? 30 : -5), -depth/2);
		var outerWidthText = new THREE.TextGeometry( width+"", _this.fontProps);
		outerWidthText.computeBoundingBox();
		outerWidthText.rotateY((180 * Math.PI) / 180);
		outerWidthText.rotateX((90 * Math.PI) / 180);
		outerWidthText.translate((outerWidthText.boundingBox.max.x - outerWidthText.boundingBox.min.x)/2, height-(dblWalls ? 30 : -5), -depth/2+10);
		var owt = new THREE.Mesh( outerWidthText, redLineMaterial );
		groupSizes.add( owt );
		
		_this.buildLine(width/2-(dblWalls ? 160 : 70), height-(dblWalls ? 30 : -5), depth/2-(dblWalls ? 160 : 70), width/2-(dblWalls ? 160 : 70), height-(dblWalls ? 30 : -5), depth/2-(dblWalls ? 260 : 170));
		_this.buildLine(width/2-(dblWalls ? 160 : 70), height-(dblWalls ? 30 : -5), depth/2-(dblWalls ? 160 : 70), -width/2+(dblWalls ? 160 : 70), height-(dblWalls ? 30 : -5), depth/2-(dblWalls ? 160 : 70));
		var innerWidthText = new THREE.TextGeometry( (dblWalls ? width-332 : width-136)+"", _this.fontProps);
		innerWidthText.computeBoundingBox();
		innerWidthText.rotateZ((180 * Math.PI) / 180);
		innerWidthText.rotateY((180 * Math.PI) / 180);
		innerWidthText.rotateX((90 * Math.PI) / 180);
		innerWidthText.translate((-innerWidthText.boundingBox.max.x - innerWidthText.boundingBox.min.x)/2, height-(dblWalls ? 30 : -5), depth/2-(dblWalls ? 170 : 80));
		var iwt = new THREE.Mesh( innerWidthText, redLineMaterial );
		groupSizes.add( iwt );
		
		_this.buildLine(width/2, height-(dblWalls ? 30 : -5), depth/2, width/2-100, height-(dblWalls ? 30 : -5), depth/2);
		_this.buildLine(width/2, height-(dblWalls ? 30 : -5), -depth/2, width/2, height-(dblWalls ? 30 : -5), depth/2);
		var outerDepthText = new THREE.TextGeometry( depth+"", _this.fontProps);
		outerDepthText.computeBoundingBox();
		outerDepthText.rotateY((90 * Math.PI) / 180);
		outerDepthText.rotateZ((90 * Math.PI) / 180);
		outerDepthText.translate(width/2-10, height-(dblWalls ? 30 : -5), (outerDepthText.boundingBox.max.z - outerDepthText.boundingBox.min.z)/2);
		var odt = new THREE.Mesh( outerDepthText, redLineMaterial );
		groupSizes.add( odt );
		
		_this.buildLine((-width+(dblWalls ? 320 : 140))/2, height-(dblWalls ? 30 : -5), (-depth+(dblWalls ? 320 : 140))/2, (-width+(dblWalls ? 320 : 140))/2+100, height-(dblWalls ? 30 : -5), (-depth+(dblWalls ? 320 : 140))/2);
		_this.buildLine((-width+(dblWalls ? 320 : 140))/2, height-(dblWalls ? 30 : -5), (-depth+(dblWalls ? 320 : 140))/2, (-width+(dblWalls ? 320 : 140))/2, height-(dblWalls ? 30 : -5), (depth-(dblWalls ? 320 : 140))/2);
		var innerDepthText = new THREE.TextGeometry( (dblWalls ? depth-332 : depth-136)+"", _this.fontProps);
		innerDepthText.computeBoundingBox();
		innerDepthText.rotateY((-90 * Math.PI) / 180);
		innerDepthText.rotateZ((-90 * Math.PI) / 180);
		innerDepthText.translate((-width+(dblWalls ? 320 : 140))/2+10, height-(dblWalls ? 30 : -5), -(innerDepthText.boundingBox.max.z - innerDepthText.boundingBox.min.z)/2);
		var idt = new THREE.Mesh( innerDepthText, redLineMaterial );
		groupSizes.add( idt );
		
//КОРОБ
		
		if (config.windowN){
			var windowN = config.windowN;
			
			_this.buildLine(-width/2+windowN.x+windowN.w,	windowN.y-(dblWalls ? 40 : 0),	depth/2, -width/2+windowN.x+windowN.w,	windowN.y-(dblWalls ? 40 : 0)+100, 	depth/2);
			_this.buildLine(-width/2+windowN.x, 			windowN.y-(dblWalls ? 40 : 0),	depth/2, -width/2+windowN.x+windowN.w,	windowN.y-(dblWalls ? 40 : 0), 		depth/2);
			var windowNWText = new THREE.TextGeometry( windowN.w+"", _this.fontProps);
			windowNWText.computeBoundingBox();
			windowNWText.translate(-width/2+windowN.x+windowN.w/2-(windowNWText.boundingBox.max.x - windowNWText.boundingBox.min.x)/2, windowN.y-(dblWalls ? 40 : 0)+10, depth/2);
			var wnwt = new THREE.Mesh( windowNWText, redLineMaterial );
			groupSizes.add( wnwt );
			
			_this.buildLine(-width/2+windowN.x+windowN.w/2-50, -(dblWalls ? 40 : 0), depth/2, -width/2+windowN.x+windowN.w/2+50, -(dblWalls ? 40 : 0), 	depth/2);
			_this.buildLine(-width/2+windowN.x+windowN.w/2, -(dblWalls ? 40 : 0),	depth/2, -width/2+windowN.x+windowN.w/2, windowN.y-(dblWalls ? 40 : 0), 	depth/2);
			var windowNYText = new THREE.TextGeometry( windowN.y+"", _this.fontProps);
			windowNYText.computeBoundingBox();
			windowNYText.rotateZ((-90 * Math.PI) / 180);
			windowNYText.translate(-width/2+windowN.x+windowN.w/2+10, windowN.y/2+(windowNYText.boundingBox.max.x - windowNYText.boundingBox.min.x)-(dblWalls ? 40 : 0), depth/2);
			var wnyt = new THREE.Mesh( windowNYText, redLineMaterial );
			groupSizes.add( wnyt );
			
			_this.buildLine(-width/2+windowN.x, windowN.y+windowN.h-(dblWalls ? 40 : 0),	depth/2, -width/2+windowN.x+100, windowN.y+windowN.h-(dblWalls ? 40 : 0), 	depth/2);
			_this.buildLine(-width/2+windowN.x, windowN.y+windowN.h-(dblWalls ? 40 : 0),	depth/2, -width/2+windowN.x, windowN.y-(dblWalls ? 40 : 0), 	depth/2);
			var windowNHText = new THREE.TextGeometry( windowN.h+"", _this.fontProps);
			windowNHText.computeBoundingBox();
			windowNHText.rotateZ((-90 * Math.PI) / 180);
			windowNHText.translate(-width/2+windowN.x+10, windowN.y+windowN.h/2+(windowNHText.boundingBox.max.x - windowNHText.boundingBox.min.x)-(dblWalls ? 40 : 0), depth/2);
			var wnht = new THREE.Mesh( windowNHText, redLineMaterial );
			groupSizes.add( wnht );
		}
		
		if (config.cableN){
			var cableN = config.cableN;
			
			_this.buildLine(-width/2, 			0, 			depth/2, -width/2, 			-200, depth/2);
			_this.buildLine(-width/2+cableN.x,	cableN.y,	depth/2, -width/2+cableN.x,	-200, depth/2);
			_this.buildLine(-width/2,			-150,		depth/2, -width/2+cableN.x,	-150, depth/2);
			var cableNXText = new THREE.TextGeometry( cableN.x+"", _this.fontProps);
			cableNXText.computeBoundingBox();
			cableNXText.translate(-width/2+cableN.x/2-(cableNXText.boundingBox.max.x - cableNXText.boundingBox.min.x)/2, -140, depth/2);
			var cnxt = new THREE.Mesh( cableNXText, redLineMaterial );
			groupSizes.add( cnxt );
			
			_this.buildLine(-width/2,			(dblWalls ? -40 : 0),	depth/2, -width/2-200, (dblWalls ? -40 : 0),	depth/2);
			_this.buildLine(-width/2+cableN.x,	cableN.y, 				depth/2, -width/2-200, cableN.y,				depth/2);
			_this.buildLine(-width/2-150,		(dblWalls ? -40 : 0),	depth/2, -width/2-150, cableN.y,				depth/2);
			var cableNYText = new THREE.TextGeometry( cableN.y+"", _this.fontProps);
			cableNYText.computeBoundingBox();
			cableNYText.rotateZ((-90 * Math.PI) / 180);
			cableNYText.translate(-width/2-140, cableN.y/2+(dblWalls ? -40 : 0)+(cableNYText.boundingBox.max.y - cableNYText.boundingBox.min.y)/2+10, depth/2);
			var cnyt = new THREE.Mesh( cableNYText, redLineMaterial );
			groupSizes.add( cnyt );
			
			_this.buildLine(-width/2+cableN.x-21,	cableN.y-21,	depth/2, -width/2+cableN.x+111,	cableN.y+111, depth/2);
			var cableNDText = new THREE.TextGeometry( 60+"", _this.fontProps);
			cableNDText.computeBoundingBox();
			cableNDText.rotateZ((45 * Math.PI) / 180);
			cableNDText.translate(-width/2+cableN.x+30, cableN.y+40, depth/2);
			var cndt = new THREE.Mesh( cableNDText, redLineMaterial );
			groupSizes.add( cndt );
		}
		
		if (config.ventN){
			var ventN = config.ventN;
			
			_this.buildLine(-width/2, 			0, 			depth/2, -width/2, 			-400, depth/2);
			_this.buildLine(-width/2+ventN.x, 	ventN.y,	depth/2, -width/2+ventN.x,	-400, depth/2);
			_this.buildLine(-width/2, 			-350,		depth/2, -width/2+ventN.x,	-350, depth/2);
			var ventNXText = new THREE.TextGeometry( ventN.x+"", _this.fontProps);
			ventNXText.computeBoundingBox();
			ventNXText.translate(-width/2+ventN.x/2-(ventNXText.boundingBox.max.x - ventNXText.boundingBox.min.x)/2, -340, depth/2);
			var vnxt = new THREE.Mesh( ventNXText, redLineMaterial );
			groupSizes.add( vnxt );
			
			_this.buildLine(-width/2, 			(dblWalls ? -40 : 0),	depth/2, -width/2-400, (dblWalls ? -40 : 0),	depth/2);
			_this.buildLine(-width/2+ventN.x,	ventN.y, 				depth/2, -width/2-400, ventN.y, 				depth/2);
			_this.buildLine(-width/2-350,		(dblWalls ? -40 : 0),	depth/2, -width/2-350, ventN.y, 				depth/2);
			var ventNYText = new THREE.TextGeometry( ventN.y+"", _this.fontProps);
			ventNYText.computeBoundingBox();
			ventNYText.rotateZ((-90 * Math.PI) / 180);
			ventNYText.translate(-width/2-340, ventN.y/2+(dblWalls ? -40 : 0)+(ventNYText.boundingBox.max.y - ventNYText.boundingBox.min.y)/2+10, depth/2);
			var vnyt = new THREE.Mesh( ventNYText, redLineMaterial );
			groupSizes.add( vnyt );
			
			_this.buildLine(-width/2+ventN.x-35,	ventN.y-35,	depth/2, -width/2+ventN.x+125,	ventN.y+125, depth/2);
			var ventNDText = new THREE.TextGeometry( 100+"", _this.fontProps);
			ventNDText.computeBoundingBox();
			ventNDText.rotateZ((45 * Math.PI) / 180);
			ventNDText.translate(-width/2+ventN.x+30, ventN.y+40, depth/2);
			var vndt = new THREE.Mesh( ventNDText, redLineMaterial );
			groupSizes.add( vndt );
		}
		
		if (config.windowS){
			var windowS = config.windowS;
			
			_this.buildLine(width/2-windowS.x-windowS.w,	windowS.y-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x-windowS.w,	windowS.y-(dblWalls ? 40 : 0)+100, 	-depth/2);
			_this.buildLine(width/2-windowS.x,	 			windowS.y-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x-windowS.w,	windowS.y-(dblWalls ? 40 : 0), 		-depth/2);
			var windowSWText = new THREE.TextGeometry( windowS.w+"", _this.fontProps);
			windowSWText.computeBoundingBox();
			windowSWText.rotateY((180 * Math.PI) / 180);
			windowSWText.translate(width/2-windowS.x-windowS.w/2+(windowSWText.boundingBox.max.x - windowSWText.boundingBox.min.x)/2, windowS.y-(dblWalls ? 40 : 0)+10, -depth/2);
			var wnwt = new THREE.Mesh( windowSWText, redLineMaterial );
			groupSizes.add( wnwt );
			
			_this.buildLine(width/2-windowS.x-windowS.w/2+50,	-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x-windowS.w/2-50, -(dblWalls ? 40 : 0), 	-depth/2);
			_this.buildLine(width/2-windowS.x-windowS.w/2,	 	-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x-windowS.w/2, windowS.y-(dblWalls ? 40 : 0), 	-depth/2);
			var windowSYText = new THREE.TextGeometry( windowS.y+"", _this.fontProps);
			windowSYText.computeBoundingBox();
			windowSYText.rotateZ((-90 * Math.PI) / 180);
			windowSYText.rotateY((180 * Math.PI) / 180);
			windowSYText.translate(width/2-windowS.x-windowS.w/2-10, windowS.y/2+(windowSYText.boundingBox.max.x - windowSYText.boundingBox.min.x)-(dblWalls ? 40 : 0), -depth/2);
			var wnyt = new THREE.Mesh( windowSYText, redLineMaterial );
			groupSizes.add( wnyt );
			
			_this.buildLine(width/2-windowS.x, windowS.y+windowS.h-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x-100, windowS.y+windowS.h-(dblWalls ? 40 : 0), 	-depth/2);
			_this.buildLine(width/2-windowS.x, windowS.y+windowS.h-(dblWalls ? 40 : 0),	-depth/2, width/2-windowS.x, 	windowS.y-(dblWalls ? 40 : 0), 	-depth/2);
			var windowSHText = new THREE.TextGeometry( windowS.h+"", _this.fontProps);
			windowSHText.computeBoundingBox();
			windowSHText.rotateZ((-90 * Math.PI) / 180);
			windowSHText.rotateY((180 * Math.PI) / 180);
			windowSHText.translate(width/2-windowS.x-10, windowS.y+windowS.h/2+(windowSHText.boundingBox.max.x - windowSHText.boundingBox.min.x)-(dblWalls ? 40 : 0), -depth/2);
			var wnht = new THREE.Mesh( windowSHText, redLineMaterial );
			groupSizes.add( wnht );
		}
		
		if (config.cableS){
			var cableS = config.cableS;
			
			_this.buildLine(width/2, 			0, 			-depth/2, width/2, 			-200, -depth/2);
			_this.buildLine(width/2-cableS.x,	cableS.y,	-depth/2, width/2-cableS.x,	-200, -depth/2);
			_this.buildLine(width/2,			-150,		-depth/2, width/2-cableS.x,	-150, -depth/2);
			var cableSXText = new THREE.TextGeometry( cableS.x+"", _this.fontProps);
			cableSXText.computeBoundingBox();
			cableSXText.rotateY((180 * Math.PI) / 180);
			cableSXText.translate(width/2-cableS.x/2+(cableSXText.boundingBox.max.x - cableSXText.boundingBox.min.x)/2, -140, -depth/2);
			var csxt = new THREE.Mesh( cableSXText, redLineMaterial );
			groupSizes.add( csxt );
			
			_this.buildLine(-width/2,			(dblWalls ? -40 : 0),	-depth/2, -width/2-200, (dblWalls ? -40 : 0),	-depth/2);
			_this.buildLine(width/2-cableS.x,	cableS.y, 				-depth/2, -width/2-200, cableS.y,				-depth/2);
			_this.buildLine(-width/2-150,		(dblWalls ? -40 : 0),	-depth/2, -width/2-150, cableS.y,				-depth/2);
			var cableSYText = new THREE.TextGeometry( cableS.y+"", _this.fontProps);
			cableSYText.computeBoundingBox();
			cableSYText.rotateZ((90 * Math.PI) / 180);
			cableSYText.rotateY((180 * Math.PI) / 180);
			cableSYText.translate(-width/2-140, cableS.y/2+(dblWalls ? -40 : 0)-(cableSYText.boundingBox.max.y - cableSYText.boundingBox.min.y)/2-10, -depth/2);
			var csyt = new THREE.Mesh( cableSYText, redLineMaterial );
			groupSizes.add( csyt );
			
			_this.buildLine(width/2-cableS.x+21,	cableS.y-21,	-depth/2, width/2-cableS.x-111,	cableS.y+111, -depth/2);
			var cableSDText = new THREE.TextGeometry( 60+"", _this.fontProps);
			cableSDText.computeBoundingBox();
			cableSDText.rotateZ((45 * Math.PI) / 180);
			cableSDText.rotateY((180 * Math.PI) / 180);
			cableSDText.translate(width/2-cableS.x-30, cableS.y+40, -depth/2);
			var csdt = new THREE.Mesh( cableSDText, redLineMaterial );
			groupSizes.add( csdt );
		}
		
		if (config.ventS){
			var ventS = config.ventS;
			
			_this.buildLine(width/2, 			0, 			-depth/2, width/2, 			-400, -depth/2);
			_this.buildLine(width/2-ventS.x, 	ventS.y,	-depth/2, width/2-ventS.x,	-400, -depth/2);
			_this.buildLine(width/2, 			-350,		-depth/2, width/2-ventS.x,	-350, -depth/2);
			var ventSXText = new THREE.TextGeometry( ventS.x+"", _this.fontProps);
			ventSXText.computeBoundingBox();
			ventSXText.rotateY((180 * Math.PI) / 180);
			ventSXText.translate(width/2-ventS.x/2+(ventSXText.boundingBox.max.x - ventSXText.boundingBox.min.x)/2, -340, -depth/2);
			var vsxt = new THREE.Mesh( ventSXText, redLineMaterial );
			groupSizes.add( vsxt );
			
			_this.buildLine(-width/2, 			(dblWalls ? -40 : 0),	-depth/2, -width/2-400, (dblWalls ? -40 : 0),	-depth/2);
			_this.buildLine(width/2-ventS.x,	ventS.y, 				-depth/2, -width/2-400, ventS.y, 				-depth/2);
			_this.buildLine(-width/2-350,		(dblWalls ? -40 : 0),	-depth/2, -width/2-350, ventS.y, 				-depth/2);
			var ventSYText = new THREE.TextGeometry( ventS.y+"", _this.fontProps);
			ventSYText.computeBoundingBox();
			ventSYText.rotateZ((90 * Math.PI) / 180);
			ventSYText.rotateY((180 * Math.PI) / 180);
			ventSYText.translate(-width/2-340, ventS.y/2+(dblWalls ? -40 : 0)-(ventSYText.boundingBox.max.y - ventSYText.boundingBox.min.y)/2, -depth/2);
			var vsyt = new THREE.Mesh( ventSYText, redLineMaterial );
			groupSizes.add( vsyt );
			
			_this.buildLine(width/2-ventS.x+35,	ventS.y-35,	-depth/2, width/2-ventS.x-125,	ventS.y+125, -depth/2);
			var ventSDText = new THREE.TextGeometry( 100+"", _this.fontProps);
			ventSDText.computeBoundingBox();
			ventSDText.rotateZ((45 * Math.PI) / 180);
			ventSDText.rotateY((180 * Math.PI) / 180);
			ventSDText.translate(+width/2-ventS.x-30, ventS.y+40, -depth/2);
			var vsdt = new THREE.Mesh( ventSDText, redLineMaterial );
			groupSizes.add( vsdt );
		}
		
		if (config.windowE){
			var windowE = config.windowE;
			
			_this.buildLine(-width/2,	windowE.y-(dblWalls ? 40 : 0),	-depth/2+windowE.x+windowE.w, -width/2,	windowE.y-(dblWalls ? 40 : 0)+100, 	-depth/2+windowE.x+windowE.w);
			_this.buildLine(-width/2, 	windowE.y-(dblWalls ? 40 : 0),	-depth/2+windowE.x, -width/2,	windowE.y-(dblWalls ? 40 : 0), 		-depth/2+windowE.x+windowE.w);
			var windowEWText = new THREE.TextGeometry( windowE.w+"", _this.fontProps);
			windowEWText.computeBoundingBox();
			windowEWText.rotateY((-90 * Math.PI) / 180);
			windowEWText.translate(-width/2, windowE.y-(dblWalls ? 40 : 0)+10, -depth/2+windowE.x+windowE.w/2-(windowEWText.boundingBox.max.z - windowEWText.boundingBox.min.z)/2);
			var wewt = new THREE.Mesh( windowEWText, redLineMaterial );
			groupSizes.add( wewt );
			
			_this.buildLine(-width/2, -(dblWalls ? 40 : 0),	-depth/2+windowE.x+windowE.w/2-50, -width/2, -(dblWalls ? 40 : 0), 	-depth/2+windowE.x+windowE.w/2+50);
			_this.buildLine(-width/2, -(dblWalls ? 40 : 0),	-depth/2+windowE.x+windowE.w/2, -width/2, windowE.y-(dblWalls ? 40 : 0), 	-depth/2+windowE.x+windowE.w/2);
			var windowEYText = new THREE.TextGeometry( windowE.y+"", _this.fontProps);
			windowEYText.computeBoundingBox();
			windowEYText.rotateY((-90 * Math.PI) / 180);
			windowEYText.rotateX((90 * Math.PI) / 180);
			windowEYText.translate(-width/2, windowE.y/2+(windowEYText.boundingBox.max.z - windowEYText.boundingBox.min.z)-(dblWalls ? 40 : 0), -depth/2+windowE.x+windowE.w/2+10);
			var weyt = new THREE.Mesh( windowEYText, redLineMaterial );
			groupSizes.add( weyt );
			
			_this.buildLine(-width/2, windowE.y+windowE.h-(dblWalls ? 40 : 0),	-depth/2+windowE.x, -width/2, windowE.y+windowE.h-(dblWalls ? 40 : 0), 	-depth/2+windowE.x+100);
			_this.buildLine(-width/2, windowE.y+windowE.h-(dblWalls ? 40 : 0),	-depth/2+windowE.x, -width/2, windowE.y-(dblWalls ? 40 : 0), 	-depth/2+windowE.x);
			var windowEHText = new THREE.TextGeometry( windowE.h+"", _this.fontProps);
			windowEHText.computeBoundingBox();
			windowEHText.rotateY((-90 * Math.PI) / 180);
			windowEHText.rotateX((90 * Math.PI) / 180);
			windowEHText.translate(-width/2, windowE.y + windowE.h/2+(windowEHText.boundingBox.max.z - windowEHText.boundingBox.min.z)-(dblWalls ? 40 : 0), -depth/2+windowE.x+10);
			var weht = new THREE.Mesh( windowEHText, redLineMaterial );
			groupSizes.add( weht );
		}
		
		if (config.cableE){
			var cableE = config.cableE;
			
			_this.buildLine(-width/2, 	0, 			-depth/2,		 	-width/2, 	-200, -depth/2);
			_this.buildLine(-width/2,	cableE.y,	-depth/2+cableE.x,	-width/2,	-200, -depth/2+cableE.x);
			_this.buildLine(-width/2,	-150,		-depth/2, 			-width/2,	-150, -depth/2+cableE.x);
			var cableEXText = new THREE.TextGeometry( cableE.x+"", _this.fontProps);
			cableEXText.computeBoundingBox();
			cableEXText.rotateY((-90 * Math.PI) / 180);
			cableEXText.translate(-width/2, -140, -depth/2+cableE.x/2-(cableEXText.boundingBox.max.z - cableEXText.boundingBox.min.z)/2);
			var cext = new THREE.Mesh( cableEXText, redLineMaterial );
			groupSizes.add( cext );
			
			_this.buildLine(-width/2,	(dblWalls ? -40 : 0),	-depth/2, 			-width/2, (dblWalls ? -40 : 0),	-depth/2-200);
			_this.buildLine(-width/2,	cableE.y, 				-depth/2+cableE.x,	-width/2, cableE.y,				-depth/2-200);
			_this.buildLine(-width/2,	(dblWalls ? -40 : 0),	-depth/2-150,		-width/2, cableE.y,				-depth/2-150);
			var cableEYText = new THREE.TextGeometry( cableE.y+"", _this.fontProps);
			cableEYText.computeBoundingBox();
			cableEYText.rotateY((-90 * Math.PI) / 180);
			cableEYText.rotateX((90 * Math.PI) / 180);
			cableEYText.translate(-width/2, cableE.y/2+(dblWalls ? -40 : 0)+(cableEYText.boundingBox.max.y - cableEYText.boundingBox.min.y)/2+10, -depth/2-140);
			var ceyt = new THREE.Mesh( cableEYText, redLineMaterial );
			groupSizes.add( ceyt );
			
			_this.buildLine(-width/2,	cableE.y-21,	-depth/2+cableE.x-21, -width/2,	cableE.y+111, -depth/2+cableE.x+111);
			var cableEDText = new THREE.TextGeometry( 60+"", _this.fontProps);
			cableEDText.computeBoundingBox();
			cableEDText.rotateZ((45 * Math.PI) / 180);
			cableEDText.rotateY((-90 * Math.PI) / 180);
			cableEDText.translate(-width/2, cableE.y+40, -depth/2+cableE.x+30);
			var cedt = new THREE.Mesh( cableEDText, redLineMaterial );
			groupSizes.add( cedt );
		}
		
		if (config.ventE){
			var ventE = config.ventE;
			
			_this.buildLine(-width/2,	0, 			-depth/2, 			-width/2, 	-400, -depth/2);
			_this.buildLine(-width/2, 	ventE.y,	-depth/2+ventE.x,	-width/2,	-400, -depth/2+ventE.x);
			_this.buildLine(-width/2,	-350,		-depth/2,			-width/2,	-350, -depth/2+ventE.x);
			var ventEXText = new THREE.TextGeometry( ventE.x+"", _this.fontProps);
			ventEXText.computeBoundingBox();
			ventEXText.rotateY((-90 * Math.PI) / 180);
			ventEXText.translate(-width/2, -340, -depth/2+ventE.x/2-(ventEXText.boundingBox.max.z - ventEXText.boundingBox.min.z)/2);
			var vext = new THREE.Mesh( ventEXText, redLineMaterial );
			groupSizes.add( vext );
			
			_this.buildLine(-width/2,	(dblWalls ? -40 : 0),	-depth/2, 			-width/2, (dblWalls ? -40 : 0),	-depth/2-400);
			_this.buildLine(-width/2,	ventE.y, 				-depth/2+ventE.x,	-width/2, ventE.y, 				-depth/2-400);
			_this.buildLine(-width/2,	(dblWalls ? -40 : 0),	-depth/2-350,		-width/2, ventE.y, 				-depth/2-350);
			var ventEYText = new THREE.TextGeometry( ventE.y+"", _this.fontProps);
			ventEYText.computeBoundingBox();
			ventEYText.rotateY((-90 * Math.PI) / 180);
			ventEYText.rotateX((90 * Math.PI) / 180);
			ventEYText.translate(-width/2, ventE.y/2+(dblWalls ? -40 : 0)+(ventEYText.boundingBox.max.y - ventEYText.boundingBox.min.y)/2+10, -depth/2-340);
			var veyt = new THREE.Mesh( ventEYText, redLineMaterial );
			groupSizes.add( veyt );
			
			_this.buildLine(-width/2,	ventE.y-35,	-depth/2+ventE.x-35, -width/2,	ventE.y+125, -depth/2+ventE.x+125);
			var ventEDText = new THREE.TextGeometry( 100+"", _this.fontProps);
			ventEDText.computeBoundingBox();
			ventEDText.rotateZ((45 * Math.PI) / 180);
			ventEDText.rotateY((-90 * Math.PI) / 180);
			ventEDText.translate(-width/2, ventE.y+40, -depth/2+ventE.x+30);
			var vedt = new THREE.Mesh( ventEDText, redLineMaterial );
			groupSizes.add( vedt );
		}
		
		if (config.windowW){
			var windowW = config.windowW;
			
			_this.buildLine(width/2,	windowW.y-(dblWalls ? 40 : 0),	depth/2-windowW.x-windowW.w,	width/2,	windowW.y-(dblWalls ? 40 : 0)+100, 	depth/2-windowW.x-windowW.w);
			_this.buildLine(width/2, 	windowW.y-(dblWalls ? 40 : 0),	depth/2-windowW.x, 				width/2,	windowW.y-(dblWalls ? 40 : 0), 		depth/2-windowW.x-windowW.w);
			var windowWWText = new THREE.TextGeometry( windowW.w+"", _this.fontProps);
			windowWWText.computeBoundingBox();
			windowWWText.rotateY((90 * Math.PI) / 180);
			windowWWText.translate(width/2, windowW.y-(dblWalls ? 40 : 0)+10, depth/2-windowW.x-windowW.w/2+(windowWWText.boundingBox.max.z - windowWWText.boundingBox.min.z)/2);
			var wwwt = new THREE.Mesh( windowWWText, redLineMaterial );
			groupSizes.add( wwwt );
			
			_this.buildLine(width/2, -(dblWalls ? 40 : 0),	depth/2-windowW.x-windowW.w/2+50,	width/2, -(dblWalls ? 40 : 0), 				depth/2-windowW.x-windowW.w/2-50);
			_this.buildLine(width/2, -(dblWalls ? 40 : 0),	depth/2-windowW.x-windowW.w/2,		width/2, windowW.y-(dblWalls ? 40 : 0), 	depth/2-windowW.x-windowW.w/2);
			var windowWYText = new THREE.TextGeometry( windowW.y+"", _this.fontProps);
			windowWYText.computeBoundingBox();
			windowWYText.rotateY((90 * Math.PI) / 180);
			windowWYText.rotateX((-90 * Math.PI) / 180);
			windowWYText.translate(width/2, windowW.y/2+(windowWYText.boundingBox.max.z - windowWYText.boundingBox.min.z)-(dblWalls ? 40 : 0), depth/2-windowW.x-windowW.w/2-10);
			var wwyt = new THREE.Mesh( windowWYText, redLineMaterial );
			groupSizes.add( wwyt );
			
			_this.buildLine(width/2, windowW.y+windowW.h-(dblWalls ? 40 : 0),	depth/2-windowW.x, width/2, windowW.y+windowW.h-(dblWalls ? 40 : 0), 	depth/2-windowW.x-100);
			_this.buildLine(width/2, windowW.y+windowW.h-(dblWalls ? 40 : 0),	depth/2-windowW.x, width/2, windowW.y-(dblWalls ? 40 : 0), 				depth/2-windowW.x);
			var windowWHText = new THREE.TextGeometry( windowW.h+"", _this.fontProps);
			windowWHText.computeBoundingBox();
			windowWHText.rotateY((90 * Math.PI) / 180);
			windowWHText.rotateX((-90 * Math.PI) / 180);
			windowWHText.translate(width/2, windowW.y + windowW.h/2+(windowWHText.boundingBox.max.z - windowWHText.boundingBox.min.z)-(dblWalls ? 40 : 0), depth/2-windowW.x-10);
			var wwht = new THREE.Mesh( windowWHText, redLineMaterial );
			groupSizes.add( wwht );
		}
		
		if (config.cableW){
			var cableW = config.cableW;
			
			_this.buildLine(width/2, 	0, 			depth/2,		 	width/2, 	-200, depth/2);
			_this.buildLine(width/2,	cableW.y,	depth/2-cableW.x,	width/2,	-200, depth/2-cableW.x);
			_this.buildLine(width/2,	-150,		depth/2, 			width/2,	-150, depth/2-cableW.x);
			var cableWXText = new THREE.TextGeometry( cableW.x+"", _this.fontProps);
			cableWXText.computeBoundingBox();
			cableWXText.rotateY((90 * Math.PI) / 180);
			cableWXText.translate(width/2, -140, depth/2-cableW.x/2+(cableWXText.boundingBox.max.z - cableWXText.boundingBox.min.z)/2);
			var cwxt = new THREE.Mesh( cableWXText, redLineMaterial );
			groupSizes.add( cwxt );
			
			_this.buildLine(width/2,			(dblWalls ? -40 : 0),	depth/2, 			width/2, (dblWalls ? -40 : 0),	depth/2+200);
			_this.buildLine(width/2,			cableW.y, 				depth/2-cableW.x,	width/2, cableW.y,				depth/2+200);
			_this.buildLine(width/2,			(dblWalls ? -40 : 0),	depth/2+150,		width/2, cableW.y,				depth/2+150);
			var cableWYText = new THREE.TextGeometry( cableW.y+"", _this.fontProps);
			cableWYText.computeBoundingBox();
			cableWYText.rotateZ((-90 * Math.PI) / 180);
			cableWYText.rotateY((90 * Math.PI) / 180);
			cableWYText.translate(width/2, cableW.y/2+(dblWalls ? -40 : 0)+(cableWYText.boundingBox.max.y - cableWYText.boundingBox.min.y)/2+10, depth/2+140);
			var cwyt = new THREE.Mesh( cableWYText, redLineMaterial );
			groupSizes.add( cwyt );
			
			_this.buildLine(width/2,	cableW.y-21,	depth/2-cableW.x+21, width/2,	cableW.y+111, depth/2-cableW.x-111);
			var cableWDText = new THREE.TextGeometry( 60+"", _this.fontProps);
			cableWDText.computeBoundingBox();
			cableWDText.rotateZ((45 * Math.PI) / 180);
			cableWDText.rotateY((90 * Math.PI) / 180);
			cableWDText.translate(width/2, cableW.y+40, depth/2-cableW.x-30);
			var cwdt = new THREE.Mesh( cableWDText, redLineMaterial );
			groupSizes.add( cwdt );
		}
		
		if (config.ventW){
			var ventW = config.ventW;
			
			_this.buildLine(width/2,	0, 			depth/2, 			width/2, 	-400, depth/2);
			_this.buildLine(width/2, 	ventW.y,	depth/2-ventW.x,	width/2,	-400, depth/2-ventW.x);
			_this.buildLine(width/2,	-350,		depth/2,			width/2,	-350, depth/2-ventW.x);
			var ventWXText = new THREE.TextGeometry( ventW.x+"", _this.fontProps);
			ventWXText.computeBoundingBox();
			ventWXText.rotateY((90 * Math.PI) / 180);
			ventWXText.translate(width/2, -340, depth/2-ventW.x/2+(ventWXText.boundingBox.max.z - ventWXText.boundingBox.min.z)/2);
			var vwxt = new THREE.Mesh( ventWXText, redLineMaterial );
			groupSizes.add( vwxt );
			
			_this.buildLine(width/2,	(dblWalls ? -40 : 0),	depth/2, 			width/2, (dblWalls ? -40 : 0),	depth/2+400);
			_this.buildLine(width/2,	ventW.y, 				depth/2-ventW.x,	width/2, ventW.y, 				depth/2+400);
			_this.buildLine(width/2,	(dblWalls ? -40 : 0),	depth/2+350,		width/2, ventW.y, 				depth/2+350);
			var ventWYText = new THREE.TextGeometry( ventW.y+"", _this.fontProps);
			ventWYText.computeBoundingBox();
			ventWYText.rotateZ((-90 * Math.PI) / 180);
			ventWYText.rotateY((90 * Math.PI) / 180);
			ventWYText.translate(width/2, ventW.y/2+(dblWalls ? -40 : 0)+(ventWYText.boundingBox.max.y - ventWYText.boundingBox.min.y)/2+10, depth/2+340);
			var vwyt = new THREE.Mesh( ventWYText, redLineMaterial );
			groupSizes.add( vwyt );
			
			_this.buildLine(width/2,	ventW.y-35,	depth/2-ventW.x+35, width/2,	ventW.y+125, depth/2-ventW.x-125);
			var ventWDText = new THREE.TextGeometry( 100+"", _this.fontProps);
			ventWDText.computeBoundingBox();
			ventWDText.rotateZ((45 * Math.PI) / 180);
			ventWDText.rotateY((90 * Math.PI) / 180);
			ventWDText.translate(width/2, ventW.y+40, depth/2-ventW.x-30);
			var vwdt = new THREE.Mesh( ventWDText, redLineMaterial );
			groupSizes.add( vwdt );
		}
		
		_this.scene.add(groupSizes);
		_this.renderer.render( _this.scene, _this.camera );
	},
	
	buildLine: function(x1, y1, z1, x2, y2, z2, group){
		var points = [
			new THREE.Vector3( x1, y1, z1 ),
			new THREE.Vector3( x2, y2, z2 )
		]
		var lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
		var line = new THREE.Line( lineGeometry, redLineMaterial2 );
		
		if (group) group.add(line);
		else groupSizes.add(line);
	},
	
    show: function(config){
		var _this = this;
		
/*BUILD CABIN*/

		var dblWalls = (config.walls == 2 ? true : false);
		var thickness = config.sizes[3];
		var thickness2 = 18;
		var thickness5 = 50;

		var width = config.sizes[0]-(dblWalls ? 196 : 0);
		var height = config.sizes[1]-(dblWalls ? 176 : 0);
		var depth = config.sizes[2]-(dblWalls ? 196 : 0);
		var doorX = config.door.x;
		var doorY = config.door.y;
		var doorW = config.door.w+(dblWalls ? 60 : 0);
		var doorH = config.door.h+(dblWalls ? 60 : 0);
		var oDoorW = config.door.w;
		var oDoorH = config.door.h;
		var oWidth = config.sizes[0];
		var oHeight = config.sizes[1];
		var oDepth = config.sizes[2];
		
		_this.scene.remove(groupLines);
		_this.scene.remove(groupFill);
		
		_this.scene.remove(doorGroup);
		_this.scene.remove(doorGroupOuter);
		
		_this.scene.remove(groupLinesOuter);
		_this.scene.remove(groupFillOuter);
		
		groupLines = new THREE.Group();
		groupFill = new THREE.Group();
		doorGroup = new THREE.Group();
		doorGroupOuter = new THREE.Group();
		
		groupLinesOuter = new THREE.Group();
		groupFillOuter = new THREE.Group();
		
		const ventCurve = new THREE.CatmullRomCurve3( [
			new THREE.Vector3( 0, 0, 0 ),
			new THREE.Vector3( 0, 0, 100 ),
			new THREE.Vector3( 50, 0, 150 ),
			new THREE.Vector3( 250, 0, 150 ),
		] );
		
		floor2 = new THREE.BoxBufferGeometry( width, thickness2, depth );
		floor2.translate(0, thickness2/2, 0);
		floor2Edges = new THREE.EdgesGeometry(floor2);
		floor2Lines = new THREE.LineSegments(floor2Edges, blackLineMaterial2);
		floor2Fill = new THREE.Mesh(floor2, floorMaterial);
		groupLines.add(floor2Lines);
		groupFill.add(floor2Fill);
		 
		floor22 = new THREE.BoxBufferGeometry( width-thickness2*2, thickness2, depth-thickness2*2 );
		floor22.translate(0, thickness2*3/2, 0);
		floor22Edges = new THREE.EdgesGeometry(floor22);
		floor22Lines = new THREE.LineSegments(floor22Edges, blackLineMaterial);
		floor22Fill = new THREE.Mesh(floor22, floorMaterial);
		groupLines.add(floor22Lines);
		groupFill.add(floor22Fill);
		
		roof2 = new THREE.BoxBufferGeometry( width, thickness2, depth );
		roof2.translate(0, height-thickness2/2, 0);
		roof2Edges = new THREE.EdgesGeometry(roof2);
		roof2Lines = new THREE.LineSegments(roof2Edges, blackLineMaterial2);
		groupLines.add(roof2Lines);
		
		roof5 = new THREE.BoxBufferGeometry( width-thickness2*2-thickness5*2-100, thickness5, depth-thickness2*2-thickness5*2-100 );
		roof5.translate(0, height-thickness5/2-thickness2, 0);
		roof5Edges = new THREE.EdgesGeometry(roof5);
		roof5Lines = new THREE.LineSegments(roof5Edges, blackLineMaterial);
		roof5Fill = new THREE.Mesh(roof5, fillMaterial5);
		groupLines.add(roof5Lines);
		groupFill.add(roof5Fill);
		
		north2 = new THREE.BoxBufferGeometry( width, height-thickness2*2, thickness2 );
		north2.translate(0, height/2, (depth-thickness2)/2);
		north2Edges = new THREE.EdgesGeometry(north2);
		north2Lines = new THREE.LineSegments(north2Edges, blackLineMaterial2);
		groupLines.add(north2Lines);

		north5 = new THREE.BoxBufferGeometry( width-thickness5-200, height-thickness2*3-150, thickness5 );
		north5.translate(0, (height+thickness2)/2, depth/2-thickness5);
		north5Edges = new THREE.EdgesGeometry(north5);
		north5Lines = new THREE.LineSegments(north5Edges, blackLineMaterial);
		north5 = new ThreeBSP( north5 );
		if (config.windowN){
			var windowN = config.windowN;
			var windowNGeometry = new THREE.BoxBufferGeometry( windowN.w, windowN.h, thickness+10 );
			windowNGeometry.translate(windowN.w/2 - width/2 + windowN.x - (dblWalls ? 90 : 0), windowN.h/2 + windowN.y - (dblWalls ? thickness2*2 : 0), (depth-thickness-10)/2);
			var winN = new ThreeBSP(windowNGeometry);
			north5 = north5.subtract(winN);
			northW5Edges = new THREE.EdgesGeometry(windowNGeometry);
			northW5Lines = new THREE.LineSegments(northW5Edges, (windowN.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(northW5Lines);
		}
		/* КАБЕЛЬ */
		if (config.cableN){
			var cable = config.cableN;
			var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
			cableGeometry.rotateX((90 * Math.PI) / 180);
			cableGeometry.translate(-(dblWalls ? oWidth : width)/2+cable.x, cable.y, (depth - thickness - 5)/2);
			var cableHole = new ThreeBSP(cableGeometry);
			north5 = north5.subtract(cableHole)
			cableEdges = new THREE.EdgesGeometry(cableGeometry);
			cableLines = new THREE.LineSegments(cableEdges, (config.cableN.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(cableLines);
		}
		if (config.ventN){
			var ventN = config.ventN;
			var ventNGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
			ventNGeometry.rotateX((90 * Math.PI) / 180);
			ventNGeometry.translate(-(dblWalls ? oWidth : width)/2+ventN.x, ventN.y, (depth - thickness - 5)/2);
			var ventNHole = new ThreeBSP(ventNGeometry);
			north5 = north5.subtract(ventNHole)
			ventNEdges = new THREE.EdgesGeometry(ventNGeometry);
			ventNLines = new THREE.LineSegments(ventNEdges, (ventN.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(ventNLines);
			
			var tubeN = new THREE.TubeGeometry( ventCurve, 50, 50, 20, false );
			if (ventN.x < width/2) tubeN.rotateZ((180 * Math.PI) / 180);
			tubeN.translate(-(dblWalls ? oWidth : width)/2+ventN.x, ventN.y, (dblWalls ? oDepth : depth)/2);
			
			tubeNEdges = new THREE.EdgesGeometry(tubeN);
			tubeNLines = new THREE.LineSegments(tubeNEdges, (ventN.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add( tubeNLines );
		}
		north5Fill = north5.toMesh(fillMaterial5);
		groupLines.add(north5Lines);
		groupFill.add(north5Fill);
		
		south2 = new THREE.BoxBufferGeometry( width, height-thickness2*2, thickness2 );
		south2.translate(0, height/2, -(depth-thickness2)/2);
		south2Edges = new THREE.EdgesGeometry(south2);
		south2Lines = new THREE.LineSegments(south2Edges, blackLineMaterial2);
		groupLines.add(south2Lines);
		
		south5 = new THREE.BoxBufferGeometry( width-thickness5-200, height-thickness2*3-150, thickness5 );
		south5.translate(0, (height+thickness2)/2, -depth/2+thickness5);
		south5Edges = new THREE.EdgesGeometry(south5);
		south5Lines = new THREE.LineSegments(south5Edges, blackLineMaterial);
		if (config.door){
			var doorWay = config.door;
			var doorWayGeometry = new THREE.BoxBufferGeometry( doorW, doorH, thickness+10 );
//>>			doorWayGeometry.translate(-(doorW/2 - width/2 + doorWay.x - (dblWalls ? 40 : 0)), doorH/2 + doorWay.y - (dblWalls ? thickness2*2+50 : 0), -(depth-thickness-10)/2);
			doorWayGeometry.translate(-(doorW/2 - width/2 + doorWay.x - (dblWalls ? 125 : 0)), doorH/2 + doorWay.y - (dblWalls ? thickness2*2+25 : 0), -(depth-thickness-10)/2);
			var doorS = new ThreeBSP(doorWayGeometry);
			south5 = new ThreeBSP( south5 );
			south5 = south5.subtract(doorS);
			if (config.windowS){
				var windowS = config.windowS;
				var windowSGeometry = new THREE.BoxBufferGeometry( windowS.w, windowS.h, thickness+10 );
				windowSGeometry.translate(-(windowS.w/2 - width/2 + windowS.x - (dblWalls ? 90 : 0)), windowS.h/2 + windowS.y - (dblWalls ? thickness2*2 : 0), -(depth-thickness-10)/2);
				var winS = new ThreeBSP(windowSGeometry);
				south5 = south5.subtract(winS);
				southW5Edges = new THREE.EdgesGeometry(windowSGeometry);
				southW5Lines = new THREE.LineSegments(southW5Edges, (windowS.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(southW5Lines);
			}
			if (config.cableS){
				var cable = config.cableS;
				var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
				cableGeometry.rotateX((90 * Math.PI) / 180);
				cableGeometry.translate((dblWalls ? oWidth : width)/2-cable.x, cable.y, -(depth - thickness - 5)/2);
				var cableHole = new ThreeBSP(cableGeometry);
				south5 = south5.subtract(cableHole)
				cableEdges = new THREE.EdgesGeometry(cableGeometry);
				cableLines = new THREE.LineSegments(cableEdges, (config.cableS.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(cableLines);
			}
			if (config.ventS){
				var vent = config.ventS;
				var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
				ventGeometry.rotateX((90 * Math.PI) / 180);
				ventGeometry.translate((dblWalls ? oWidth : width)/2-vent.x, vent.y, -(depth - thickness - 5)/2);
				var ventHole = new ThreeBSP(ventGeometry);
				south5 = south5.subtract(ventHole)
				ventEdges = new THREE.EdgesGeometry(ventGeometry);
				ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(ventLines);
				
				//var tubeS = new THREE.TubeGeometry( ventCurve, 50, 50, 20, false );
				var tubeS = new THREE.CylinderGeometry( 50, 50, 500, 32 );
				tubeS.rotateX((90 * Math.PI) / 180);
				tubeS.translate((dblWalls ? oWidth : width)/2-vent.x, vent.y, -(dblWalls ? oDepth : depth)/2 - 250);
				tubeSEdges = new THREE.EdgesGeometry(tubeS);
				tubeSLines = new THREE.LineSegments(tubeSEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add( tubeSLines );
			}
			south5Fill = south5.toMesh(fillMaterial5);
			southD5Edges = new THREE.EdgesGeometry(doorWayGeometry);
			southD5Lines = new THREE.LineSegments(southD5Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(southD5Lines);
			
			var door2 = new THREE.BoxBufferGeometry( doorW, doorH, thickness2 );
			var door5 = new THREE.BoxBufferGeometry( doorW-100, doorH-100, thickness5 );
			if (dblWalls) {
				door2.translate(-doorW/2 + width/2 - doorWay.x + 120, doorH/2 + doorWay.y - thickness2*2-20, -(depth-thickness2)/2);
				door5.translate(-doorW/2 + width/2 - doorWay.x + 120, doorH/2 + doorWay.y - thickness2*2-20, -(depth-thickness5)/2+thickness2);
				var point = new THREE.Vector3((doorWay.origin == "r" ? -doorW + width/2 - doorWay.x + 40 : width/2 - doorWay.x + 40), 0, -depth/2+thickness2);
			} else {
				door2.translate(-doorW/2 + width/2 - doorWay.x, doorH/2 + doorWay.y, -(depth-thickness2)/2);
				door5.translate(-doorW/2 + width/2 - doorWay.x, doorH/2 + doorWay.y, -(depth-thickness5)/2+thickness2);
				var point = new THREE.Vector3((doorWay.origin == "r" ? -doorW + width/2 - doorWay.x : width/2 - doorWay.x), 0, -depth/2);
			}
			
			
			door5BSP = new ThreeBSP( door5 );
			if (config.windowD){
				var windowD = config.windowD;
				var windowDGeometry = new THREE.BoxBufferGeometry( windowD.w, windowD.h, thickness+10 );
				windowDGeometry.translate(width/2 - doorWay.x - windowD.w/2 - windowD.x + (dblWalls ? 70 : 0), windowD.h/2 + doorWay.y + windowD.y - (dblWalls ? 30 : 0), -(depth-thickness-10)/2);
				var winDS = new ThreeBSP(windowDGeometry);
				door5BSP = door5BSP.subtract(winDS);
				southW5Edges = new THREE.EdgesGeometry(windowDGeometry);
				southW5Lines = new THREE.LineSegments(southW5Edges, (windowD.visible ? blackLineMaterial2 : redLineMaterial));

				doorGroup.add(southW5Lines);
				
				if (!dblWalls){
					_this.buildLine(width/2-doorX-windowD.x,	doorY+windowD.y,	-depth/2, width/2-doorX-windowD.x-windowD.w, doorY+windowD.y, 	-depth/2, doorGroup);
					_this.buildLine(width/2-doorX-windowD.x-windowD.w,	 	doorY+windowD.y,	-depth/2, width/2-doorX-windowD.x-windowD.w, doorY+windowD.y+100, 	-depth/2, doorGroup);
					var windowDWText = new THREE.TextGeometry( windowD.w+"", _this.fontProps);
					windowDWText.computeBoundingBox();
					windowDWText.rotateY((-180 * Math.PI) / 180);
					windowDWText.translate(width/2-doorX-windowD.x-windowD.w/2+(windowDWText.boundingBox.max.x - windowDWText.boundingBox.min.x)/2, doorY+windowD.y+10, -depth/2);
					var wnwt = new THREE.Mesh( windowDWText, redLineMaterial );
					doorGroup.add( wnwt );
					
					_this.buildLine(width/2-windowD.x-windowD.w/2-doorX-50,		doorY,	-depth/2, width/2-windowD.x-windowD.w/2-doorX+50,	doorY, 	-depth/2, doorGroup);
					_this.buildLine(width/2-windowD.x-windowD.w/2-doorX,	 	doorY,	-depth/2, width/2-windowD.x-windowD.w/2-doorX,		doorY+windowD.y, 		-depth/2, doorGroup);
					var windowDYText = new THREE.TextGeometry( windowD.y+"", _this.fontProps);
					windowDYText.computeBoundingBox();
					windowDYText.rotateY((180 * Math.PI) / 180);
					windowDYText.rotateZ((90 * Math.PI) / 180);
					windowDYText.translate(width/2-windowD.x-windowD.w/2-doorX-10, doorY+windowD.y/2+(windowDYText.boundingBox.max.y - windowDYText.boundingBox.min.y)/2, -depth/2);
					var wsyt = new THREE.Mesh( windowDYText, redLineMaterial );
					doorGroup.add( wsyt );
					
					_this.buildLine(width/2-doorX-windowD.x, doorY+windowD.y+windowD.h,	-depth/2, width/2-doorX-windowD.x-100, doorY+windowD.y+windowD.h, 	-depth/2, doorGroup);
					_this.buildLine(width/2-doorX-windowD.x, doorY+windowD.y,	-depth/2, width/2-doorX-windowD.x, doorY+windowD.y+windowD.h, 	-depth/2, doorGroup);
					var windowDHText = new THREE.TextGeometry( windowD.h+"", _this.fontProps);
					windowDHText.computeBoundingBox();
					windowDHText.rotateZ((-90 * Math.PI) / 180);
					windowDHText.rotateY((180 * Math.PI) / 180);
					windowDHText.translate(width/2-doorX-windowD.x-10, doorY+windowD.y+windowD.h/2+(windowDHText.boundingBox.max.y - windowDHText.boundingBox.min.y)/2, -depth/2);
					var wsht = new THREE.Mesh( windowDHText, redLineMaterial );
					doorGroup.add( wsht );
				}
			}
			if (config.ventD){
				var vent = config.ventD;
				var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
				ventGeometry.rotateX((90 * Math.PI) / 180);
				ventGeometry.translate((dblWalls ? oWidth : width)/2 - doorWay.x - vent.x, doorWay.y + vent.y - (dblWalls ? 40 : 0), -(depth-thickness5)/2+thickness2);
				var ventHole = new ThreeBSP(ventGeometry);
				door5BSP = door5BSP.subtract(ventHole)
				ventEdges = new THREE.EdgesGeometry(ventGeometry);
				ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
				doorGroup.add(ventLines);
				
				if (!dblWalls){
					var cutter1 = new THREE.BoxBufferGeometry( 256, 256, 256 );
					cutter1.rotateY((45 * Math.PI) / 180);
					if (!dblWalls) cutter1.translate(width/2 - doorWay.x - vent.x + 120, doorWay.y + vent.y, -(depth-thickness5)/2+thickness2 - 260);
					
					var ventDGeometry1 = new THREE.CylinderGeometry( 50, 50, 230, 32 );
					ventDGeometry1.rotateX((90 * Math.PI) / 180);
					if (!dblWalls) ventDGeometry1.translate(width/2 - doorWay.x - vent.x, doorWay.y + vent.y, -(depth-thickness5)/2+thickness2 - 140);
					else ventDGeometry1.translate(width/2 - doorWay.x - vent.x, doorWay.y + vent.y, -(depth-thickness5)/2+thickness2 - 140);
					ventDEdges1 = new THREE.EdgesGeometry(ventDGeometry1);
					ventDLines1 = new THREE.LineSegments(ventDEdges1, (vent.visible ? blackLineMaterial2 : redLineMaterial));
					ventDLines1 = ventDGeometry1.toMesh((vent.visible ? blackLineMaterial2 : redLineMaterial));
					
					doorGroup.add(ventDLines1);
					
					var cutter2 = new THREE.BoxBufferGeometry( 256, 256, 256 );
					cutter2.rotateY((45 * Math.PI) / 180);
					if (!dblWalls) cutter2.translate(width/2 - doorWay.x - vent.x - 90, doorWay.y + vent.y, -(depth-thickness5)/2+thickness2 - 100);
					cutter2 = new ThreeBSP( cutter2 );
					
					var ventDGeometry2 = new THREE.CylinderGeometry( 50, 50, 280, 32 );
					ventDGeometry2.rotateZ((90 * Math.PI) / 180);
					if (!dblWalls) ventDGeometry2.translate(width/2 - doorWay.x - vent.x + 90, doorWay.y + vent.y, -(depth-thickness5)/2+thickness2 - 200);

					ventDGeometry2 = new ThreeBSP( ventDGeometry2 );			
					ventDGeometry2 = ventDGeometry2.subtract(cutter2);
					ventDLines2 = ventDGeometry2.toMesh((vent.visible ? blackLineMaterial2 : redLineMaterial));
					
					doorGroup.add(ventDLines2);
				}
			}
			door5Fill = door5BSP.toMesh(fillMaterial5);
			
			door2Edges = new THREE.EdgesGeometry(door2);
			door2Lines = new THREE.LineSegments(door2Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
			door5Edges = new THREE.EdgesGeometry(door5);
			door5Lines = new THREE.LineSegments(door5Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
			
			_this.buildLine(width/2-doorX+(dblWalls ? 115 : 0),		doorY+doorH-(dblWalls ? 60 : 0),	-depth/2-5,	width/2-doorX-100+(dblWalls ? 115 : 0),	doorY+doorH-(dblWalls ? 60 : 0),	-depth/2-5, doorGroup);
			_this.buildLine(width/2-doorX+(dblWalls ? 115 : 0),		doorY-(dblWalls ? 60 : 0),			-depth/2-5, 	width/2-doorX+(dblWalls ? 115 : 0),	doorY+doorH-(dblWalls ? 60 : 0),	-depth/2-5, doorGroup);
			var doorHeightText = new THREE.TextGeometry( doorH+"", _this.fontProps);
			doorHeightText.computeBoundingBox();
			doorHeightText.rotateZ((-90 * Math.PI) / 180);
			doorHeightText.rotateY((-180 * Math.PI) / 180);
			doorHeightText.translate(width/2-doorX+(dblWalls ? 115 : 0)-10, (doorHeightText.boundingBox.max.y - doorHeightText.boundingBox.min.y)/2+(doorH-(dblWalls ? 100 : 0))/2+doorY, -depth/2-5);
			var dht = new THREE.Mesh( doorHeightText, redLineMaterial );
			doorGroup.add( dht );
			
			_this.buildLine(width/2-doorX-doorW+(dblWalls ? 120 : 0), 	doorY-(dblWalls ? 60 : 0),	-depth/2-5, width/2-doorX-doorW+(dblWalls ? 120 : 0),	doorY-(dblWalls ? 60 : 0)+100,	-depth/2-5, doorGroup);
			_this.buildLine(width/2-doorX+(dblWalls ? 115 : 0),			doorY-(dblWalls ? 60 : 0),	-depth/2-5, width/2-doorX-doorW+(dblWalls ? 120 : 0),	doorY-(dblWalls ? 60 : 0),	-depth/2-5, doorGroup);
			var doorWidthText = new THREE.TextGeometry( doorW+"", _this.fontProps);
			doorWidthText.computeBoundingBox();
			doorWidthText.rotateY((180 * Math.PI) / 180);
			doorWidthText.translate(width/2-doorX-doorW/2+(dblWalls ? 120 : 0)+(doorWidthText.boundingBox.max.x - doorWidthText.boundingBox.min.x)/2, doorY-(dblWalls ? 60 : 0)+10, -depth/2-5);
			var dwt = new THREE.Mesh( doorWidthText, redLineMaterial );
			doorGroup.add( dwt );

			doorGroup.position.sub(point); // remove the offset
			if (dblWalls){
				doorGroup.position.applyAxisAngle(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? (dblWalls ? -5 : 5) : (dblWalls ? 5 : -5)) * Math.PI) / 180); // rotate the POSITION
				doorGroup.position.add(point); // re-add the offset
				doorGroup.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? (dblWalls ? -5 : 5) : (dblWalls ? 5 : -5)) * Math.PI) / 180);
			} else {
				doorGroup.position.applyAxisAngle(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? (dblWalls ? -100 : 100) : (dblWalls ? 100 : -100)) * Math.PI) / 180); // rotate the POSITION
				doorGroup.position.add(point); // re-add the offset
				doorGroup.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? (dblWalls ? -100 : 100) : (dblWalls ? 100 : -100)) * Math.PI) / 180);
			}
			doorGroup.add(door5Fill);
			doorGroup.add(door2Lines);
			doorGroup.add(door5Lines);
		} else {
			south5Fill = new THREE.Mesh(south5, fillMaterial5);
		}
		
		groupLines.add(south5Lines);
		groupFill.add(south5Fill);
		
		east2 = new THREE.BoxBufferGeometry( thickness2, height-thickness2*2, depth-thickness2*2 );
		east2.translate(-(width-thickness2)/2, (height)/2, 0);
		east2Edges = new THREE.EdgesGeometry(east2);
		east2Lines = new THREE.LineSegments(east2Edges, blackLineMaterial2);
		groupLines.add(east2Lines);
		
		east5 = new THREE.BoxBufferGeometry( thickness5, height-thickness2*3-150, depth-thickness5*3-100 );
		east5.translate(-width/2+thickness5, (height+thickness2)/2, 0);
		east5Edges = new THREE.EdgesGeometry(east5);
		east5Lines = new THREE.LineSegments(east5Edges, blackLineMaterial);
		east5 = new ThreeBSP( east5 );
		if (config.windowE){
			var windowE = config.windowE;
			var windowEGeometry = new THREE.BoxBufferGeometry( thickness+10, windowE.h, windowE.w );
			windowEGeometry.translate(-(width-thickness-10)/2, windowE.h/2 + windowE.y - (dblWalls ? thickness2*2 : 0), windowE.w/2 - depth/2 + windowE.x - (dblWalls ? 90 : 0));
			var winE = new ThreeBSP(windowEGeometry);
			east5 = east5.subtract(winE);
			east5Fill = east5.toMesh(fillMaterial5);
			eastW5Edges = new THREE.EdgesGeometry(windowEGeometry);
			eastW5Lines = new THREE.LineSegments(eastW5Edges, (windowE.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(eastW5Lines);
		}
		if (config.cableE){
			var cable = config.cableE;
			var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
			cableGeometry.rotateX((90 * Math.PI) / 180);
			cableGeometry.rotateY((90 * Math.PI) / 180);
			cableGeometry.translate(-(width - thickness - 5)/2, cable.y, -(dblWalls ? oDepth : depth)/2+cable.x);
			var cableHole = new ThreeBSP(cableGeometry);
			east5 = east5.subtract(cableHole)
			cableEdges = new THREE.EdgesGeometry(cableGeometry);
			cableLines = new THREE.LineSegments(cableEdges, (cable.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(cableLines);
		}
		if (config.ventE){
			var vent = config.ventE;
			var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
			ventGeometry.rotateX((90 * Math.PI) / 180);
			ventGeometry.rotateY((90 * Math.PI) / 180);
			ventGeometry.translate(-(width - thickness - 5)/2, vent.y, -(dblWalls ? oDepth : depth)/2+vent.x);
			var ventHole = new ThreeBSP(ventGeometry);
			east5 = east5.subtract(ventHole)
			ventEdges = new THREE.EdgesGeometry(ventGeometry);
			ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(ventLines);
			
			var tubeE = new THREE.TubeGeometry( ventCurve, 50, 50, 20, false );
			tubeE.rotateY((-90 * Math.PI) / 180);
			if (vent.x >= depth/2) tubeE.rotateX((180 * Math.PI) / 180);
			tubeE.translate(-(dblWalls ? oWidth : width)/2, vent.y, -(dblWalls ? oDepth : depth)/2+vent.x);
			tubeEEdges = new THREE.EdgesGeometry(tubeE);
			tubeELines = new THREE.LineSegments(tubeEEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add( tubeELines );
		}
		east5Fill = east5.toMesh(fillMaterial5);
		groupLines.add(east5Lines);
		groupFill.add(east5Fill);
		
		west2 = new THREE.BoxBufferGeometry( thickness2, height-thickness2*2, depth-thickness2*2 );
		west2.translate((width-thickness2)/2, height/2, 0);
		west2Edges = new THREE.EdgesGeometry(west2);
		west2Lines = new THREE.LineSegments(west2Edges, blackLineMaterial2);
		groupLines.add(west2Lines);
		
		west5 = new THREE.BoxBufferGeometry( thickness5, height-thickness2*3-150, depth-thickness5*3-100 );
		west5.translate(width/2-thickness5, (height+thickness2)/2, 0);
		west5Edges = new THREE.EdgesGeometry(west5);
		west5Lines = new THREE.LineSegments(west5Edges, blackLineMaterial);
		west5 = new ThreeBSP( west5 );
		if (config.windowW){
			var windowW = config.windowW;
			var windowWGeometry = new THREE.BoxBufferGeometry( thickness+10, windowW.h, windowW.w );
			windowWGeometry.translate((width-thickness-10)/2, windowW.h/2 + windowW.y - (dblWalls ? thickness2*2 : 0), -(windowW.w/2 - depth/2 + windowW.x - (dblWalls ? 90 : 0)));
			var winW = new ThreeBSP(windowWGeometry);
			west5 = west5.subtract(winW);
			west5Fill = west5.toMesh(fillMaterial5);
			westW5Edges = new THREE.EdgesGeometry(windowWGeometry);
			westW5Lines = new THREE.LineSegments(westW5Edges, (windowW.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(westW5Lines);
		}
		if (config.cableW){
			var cable = config.cableW;
			var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
			cableGeometry.rotateX((90 * Math.PI) / 180);
			cableGeometry.rotateY((90 * Math.PI) / 180);
			cableGeometry.translate((width - thickness - 5)/2, cable.y, (dblWalls ? oDepth : depth)/2-cable.x);
			var cableHole = new ThreeBSP(cableGeometry);
			west5 = west5.subtract(cableHole)
			cableEdges = new THREE.EdgesGeometry(cableGeometry);
			cableLines = new THREE.LineSegments(cableEdges, (cable.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(cableLines);
		}
		if (config.ventW){
			var vent = config.ventW;
			var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
			ventGeometry.rotateX((90 * Math.PI) / 180);
			ventGeometry.rotateY((90 * Math.PI) / 180);
			ventGeometry.translate((width - thickness - 5)/2, vent.y, (dblWalls ? oDepth : depth)/2-vent.x);
			var ventHole = new ThreeBSP(ventGeometry);
			west5 = west5.subtract(ventHole)
			ventEdges = new THREE.EdgesGeometry(ventGeometry);
			ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add(ventLines);
			
			var tubeW = new THREE.TubeGeometry( ventCurve, 50, 50, 20, false );
			tubeW.rotateY((90 * Math.PI) / 180);
			if (vent.x >= depth/2) tubeW.rotateX((180 * Math.PI) / 180);
			tubeW.translate((dblWalls ? oWidth : width)/2, vent.y, +(dblWalls ? oDepth : depth)/2-vent.x);
			tubeWEdges = new THREE.EdgesGeometry(tubeW);
			tubeWLines = new THREE.LineSegments(tubeWEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
			groupLines.add( tubeWLines );
		}
		west5Fill = west5.toMesh(fillMaterial5);
		groupLines.add(west5Lines);
		groupFill.add(west5Fill);		
		
		_this.scene.add(groupLines);
		_this.scene.add(groupFill);
		_this.scene.add(doorGroup);
		_this.scene.add(doorGroupOuter);
		
		if (config.walls == 2){
			floor2 = new THREE.BoxBufferGeometry( oWidth, thickness2, oDepth );
			floor2.translate(0, -thickness2*3/2, 0);
			floor2Edges = new THREE.EdgesGeometry(floor2);
			floor2Lines = new THREE.LineSegments(floor2Edges, blackLineMaterial2);
			floor2Fill = new THREE.Mesh(floor2, floorMaterial);
			groupLinesOuter.add(floor2Lines);
			groupFillOuter.add(floor2Fill);
			
			floor22 = new THREE.BoxBufferGeometry( oWidth-thickness2*2, thickness2, oDepth-thickness2*2 );
			floor22.translate(0, -thickness2/2, 0);
			floor22Edges = new THREE.EdgesGeometry(floor22);
			floor22Lines = new THREE.LineSegments(floor22Edges, blackLineMaterial);
			floor22Fill = new THREE.Mesh(floor22, floorMaterial);
			groupLinesOuter.add(floor22Lines);
			groupFillOuter.add(floor22Fill);
			
			roof2 = new THREE.BoxBufferGeometry( oWidth, thickness2, oDepth );
			roof2.translate(0, oHeight-thickness2*3+thickness2/2, 0);
			roof2Edges = new THREE.EdgesGeometry(roof2);
			roof2Lines = new THREE.LineSegments(roof2Edges, blackLineMaterial2);
			roof2Fill = new THREE.Mesh(roof2, fillMaterial2);
			groupLinesOuter.add(roof2Lines);
			groupFillOuter.add(roof2Fill);
			
			roof5 = new THREE.BoxBufferGeometry( oWidth-thickness2*2-thickness5*2-200, thickness5, oDepth-thickness2*2-thickness5*2-100 );
			roof5.translate(0, oHeight-thickness5/2-thickness2*3, 0);
			roof5Edges = new THREE.EdgesGeometry(roof5);
			roof5Lines = new THREE.LineSegments(roof5Edges, blackLineMaterial);
			roof5Fill = new THREE.Mesh(roof5, fillMaterial5);
			groupLinesOuter.add(roof5Lines);
			groupFillOuter.add(roof5Fill);
			
			north2 = new THREE.BoxBufferGeometry( oWidth, oHeight-thickness2*2, thickness2 );
			north2.translate(0, oHeight/2-thickness2*2, (oDepth-thickness2)/2);
			north2Edges = new THREE.EdgesGeometry(north2);
			north2Lines = new THREE.LineSegments(north2Edges, blackLineMaterial2);
			north2Fill = new THREE.Mesh(north2, fillMaterial2);
			groupLinesOuter.add(north2Lines);
			groupFillOuter.add(north2Fill);
			
			north5 = new THREE.BoxBufferGeometry( oWidth-thickness5-200, oHeight-thickness2*3-150, thickness5 );
			north5.translate(0, (oHeight-thickness2*3)/2, oDepth/2-thickness5);
			north5Edges = new THREE.EdgesGeometry(north5);
			north5Lines = new THREE.LineSegments(north5Edges, blackLineMaterial);
			north5 = new ThreeBSP( north5 );
			if (config.windowN){
				var windowN = config.windowN;
				var windowNGeometry = new THREE.BoxBufferGeometry( windowN.w, windowN.h, thickness+10 );
				windowNGeometry.translate(windowN.w/2 - oWidth/2 + windowN.x, windowN.h/2 + windowN.y - thickness2*2, (oDepth-thickness-10)/2);
				var winN = new ThreeBSP(windowNGeometry);
				north5 = north5.subtract(winN);
				northW5Edges = new THREE.EdgesGeometry(windowNGeometry);
				northW5Lines = new THREE.LineSegments(northW5Edges, blackLineMaterial2);
				groupLinesOuter.add(northW5Lines);
			}
			if (config.cableN){
				var cableN = config.cableN;
				var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
				cableGeometry.rotateX((90 * Math.PI) / 180);
				cableGeometry.translate(-oWidth/2+cableN.x, cableN.y, (oDepth - thickness - 5)/2);
				var cableHole = new ThreeBSP(cableGeometry);
				north5 = north5.subtract(cableHole)
				cableEdges = new THREE.EdgesGeometry(cableGeometry);
				cableLines = new THREE.LineSegments(cableEdges, (cableN.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(cableLines);
			}
			if (config.ventN){
				var ventN = config.ventN;
				var ventNGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
				ventNGeometry.rotateX((90 * Math.PI) / 180);
				ventNGeometry.translate(-oWidth/2+ventN.x, ventN.y, (oDepth - thickness - 5)/2);
				var ventNHole = new ThreeBSP(ventNGeometry);
				north5 = north5.subtract(ventNHole)
				ventNEdges = new THREE.EdgesGeometry(ventNGeometry);
				ventNLines = new THREE.LineSegments(ventNEdges, (ventN.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(ventNLines);
			}
			north5Fill = north5.toMesh(fillMaterial5);
			groupLinesOuter.add(north5Lines);
			groupFillOuter.add(north5Fill);
			
			south2 = new THREE.BoxBufferGeometry( oWidth, oHeight-thickness2*2, thickness2 );
			south2.translate(0, oHeight/2-thickness2*2, -(oDepth-thickness2)/2);
			south2Edges = new THREE.EdgesGeometry(south2);
			south2Lines = new THREE.LineSegments(south2Edges, blackLineMaterial2);
			south2Fill = new THREE.Mesh(south2, fillMaterial2);
			groupLinesOuter.add(south2Lines);
			groupFillOuter.add(south2Fill);
			
			south5 = new THREE.BoxBufferGeometry( oWidth-thickness5-200, oHeight-thickness2*3-150, thickness5 );
			south5.translate(0, (oHeight-thickness2*3)/2, -oDepth/2+thickness5);
			south5Edges = new THREE.EdgesGeometry(south5);
			south5Lines = new THREE.LineSegments(south5Edges, blackLineMaterial);
			
			south5 = new ThreeBSP( south5 );
			if (config.door){
				var doorWay = config.door;
				var doorWayGeometry = new THREE.BoxBufferGeometry( oDoorW, oDoorH, thickness+20 );
				doorWayGeometry.translate(-(oDoorW/2 - oWidth/2 + doorWay.x), oDoorH/2 + doorWay.y - thickness2*2, -(oDepth-thickness-10)/2);
				var doorS = new ThreeBSP(doorWayGeometry);
				south5 = south5.subtract(doorS);
				if (config.cableS){
					var cable = config.cableS;
					var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
					cableGeometry.rotateX((90 * Math.PI) / 180);
					cableGeometry.translate(oWidth/2-cable.x, cable.y, -(oDepth - thickness - 5)/2);
					var cableHole = new ThreeBSP(cableGeometry);
					south5 = south5.subtract(cableHole)
					cableEdges = new THREE.EdgesGeometry(cableGeometry);
					cableLines = new THREE.LineSegments(cableEdges, (config.cableS.visible ? blackLineMaterial2 : redLineMaterial));
					groupLines.add(cableLines);
				}
				if (config.windowS){
					var windowS = config.windowS;
					var windowSGeometry = new THREE.BoxBufferGeometry( windowS.w, windowS.h, thickness+10 );
					windowSGeometry.translate(-(windowS.w/2 - oWidth/2 + windowS.x), windowS.h/2 + windowS.y - thickness2*2, -(oDepth-thickness-10)/2);
					var winS = new ThreeBSP(windowSGeometry);
					south5 = south5.subtract(winS);
					southW5Edges = new THREE.EdgesGeometry(windowSGeometry);
					southW5Lines = new THREE.LineSegments(southW5Edges, (windowS.visible ? blackLineMaterial2 : redLineMaterial));
					groupLinesOuter.add(southW5Lines);
				}
				if (config.ventS){
					var vent = config.ventS;
					var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
					ventGeometry.rotateX((90 * Math.PI) / 180);
					ventGeometry.translate(oWidth/2-vent.x, vent.y, -(oDepth - thickness - 5)/2);
					var ventHole = new ThreeBSP(ventGeometry);
					south5 = south5.subtract(ventHole)
					ventEdges = new THREE.EdgesGeometry(ventGeometry);
					ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
					groupLines.add(ventLines);
				}
				south5Fill = south5.toMesh(fillMaterial5);
				southD5Edges = new THREE.EdgesGeometry(doorWayGeometry);
				southD5Lines = new THREE.LineSegments(southD5Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(southD5Lines);
				
				var door = new THREE.BoxBufferGeometry( oDoorW, oDoorH, thickness );
				var door2 = new THREE.BoxBufferGeometry( oDoorW, oDoorH, thickness2 );
				var door5 = new THREE.BoxBufferGeometry( oDoorW-100, oDoorH-100, thickness5 );
				door.translate(-oDoorW/2 + oWidth/2 - doorWay.x, oDoorH/2 + doorWay.y - thickness2*2, -(oDepth-thickness2)/2);
				door2.translate(-oDoorW/2 + oWidth/2 - doorWay.x, oDoorH/2 + doorWay.y - thickness2*2, -(oDepth-thickness2)/2);
				door5.translate(-oDoorW/2 + oWidth/2 - doorWay.x, oDoorH/2 + doorWay.y - thickness2*2, -(oDepth-thickness5)/2+thickness2);
				var point = new THREE.Vector3((doorWay.origin == "r" ? -oDoorW + oWidth/2 - doorWay.x : oWidth/2 - doorWay.x), 0, -oDepth/2+thickness2);
				doorEdges = new THREE.EdgesGeometry(door);
				doorLines = new THREE.LineSegments(doorEdges, blackLineMaterial2);
				
				outerDoor5BSP = new ThreeBSP( door5 );
				if (config.windowD){
					var windowD = config.windowD;
					var windowDGeometry = new THREE.BoxBufferGeometry( windowD.w, windowD.h, thickness+10 );
					windowDGeometry.translate(width/2 - doorWay.x - windowD.w/2 - windowD.x + 100, windowD.h/2 + doorWay.y + windowD.y - 40, -(oDepth-thickness+10)/2);
					var winDS = new ThreeBSP(windowDGeometry);
					outerDoor5BSP = outerDoor5BSP.subtract(winDS);
					southW5Edges = new THREE.EdgesGeometry(windowDGeometry);
					southW5Lines = new THREE.LineSegments(southW5Edges, (windowD.visible ? blackLineMaterial2 : redLineMaterial));
					doorGroupOuter.add(southW5Lines);
										
					_this.buildLine(width/2-doorX+100-windowD.x-windowD.w,	windowD.y+doorY-40,	-depth/2-100, width/2-doorX+100-windowD.x-windowD.w, 	windowD.y+doorY+40, 	-depth/2-100, doorGroupOuter);
					_this.buildLine(width/2-doorX+100-windowD.x,				windowD.y+doorY-40,	-depth/2-100, width/2-doorX+100-windowD.x-windowD.w, 	windowD.y+doorY-40, 	-depth/2-100, doorGroupOuter);
					var windowDWText = new THREE.TextGeometry( windowD.w+"", _this.fontProps);
					windowDWText.computeBoundingBox();
					windowDWText.rotateY((180 * Math.PI) / 180);
					windowDWText.translate(width/2-doorX+100-windowD.x-windowD.w/2+(windowDWText.boundingBox.max.x - windowDWText.boundingBox.min.x)/2, windowD.y+doorY-30, -depth/2-100);
					var wswt = new THREE.Mesh( windowDWText, redLineMaterial );
					doorGroupOuter.add( wswt );
					
					_this.buildLine(width/2-doorX+100-windowD.x-windowD.w/2,	doorY-40,	-depth/2-100, width/2-doorX-windowD.x-windowD.w/2, 		doorY-40, 			-depth/2-100, doorGroupOuter);
					_this.buildLine(width/2-doorX+50-windowD.x-windowD.w/2,		doorY-40,	-depth/2-100, width/2-doorX+50-windowD.x-windowD.w/2, 	doorY-40+windowD.y, -depth/2-100, doorGroupOuter);
					var windowDYText = new THREE.TextGeometry( windowD.y+"", _this.fontProps);
					windowDYText.computeBoundingBox();
					windowDYText.rotateZ((-90 * Math.PI) / 180);
					windowDYText.rotateY((180 * Math.PI) / 180);
					windowDYText.translate(width/2-doorX+10-windowD.x-windowD.w/2+10, doorY-25+windowD.y/2+(windowDYText.boundingBox.max.y - windowDYText.boundingBox.min.y)/2, -depth/2-100);
					var wdyt = new THREE.Mesh( windowDYText, redLineMaterial );
					doorGroupOuter.add( wdyt );
					
					_this.buildLine(width/2-doorX+100-windowD.x,	windowD.y+doorY-50,				-depth/2-100, width/2-doorX+100-windowD.x, 		windowD.y+windowD.h+doorY-50, 	-depth/2-100, doorGroupOuter);
					_this.buildLine(width/2-doorX+100-windowD.x,	windowD.y+windowD.h+doorY-50,	-depth/2-100, width/2-doorX+100-windowD.x-100, 	windowD.y+windowD.h+doorY-50, 	-depth/2-100, doorGroupOuter);
					var windowDHText = new THREE.TextGeometry( windowD.h+"", _this.fontProps);
					windowDHText.computeBoundingBox();
					windowDHText.rotateZ((-90 * Math.PI) / 180);
					windowDHText.rotateY((180 * Math.PI) / 180);
					windowDHText.translate(width/2-doorX+100-windowD.x-10, windowD.y+windowD.h/2+doorY-50+(windowDHText.boundingBox.max.y - windowDHText.boundingBox.min.y)/2, -depth/2-100);
					var wdht = new THREE.Mesh( windowDHText, redLineMaterial );
					doorGroupOuter.add( wdht );
				}
				if (config.ventD){
					var vent = config.ventD;
					var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
					ventGeometry.rotateX((90 * Math.PI) / 180);
					ventGeometry.translate(oWidth/2 - doorWay.x - vent.x, doorWay.y + vent.y - 40, -(oDepth-thickness5)/2+thickness2);
					var ventHole = new ThreeBSP(ventGeometry);
					outerDoor5BSP = outerDoor5BSP.subtract(ventHole)
					ventEdges = new THREE.EdgesGeometry(ventGeometry);
					ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
					doorGroupOuter.add(ventLines);
					
					if (dblWalls){
						var cutter1 = new THREE.BoxBufferGeometry( 256, 256, 256 );
						cutter1.rotateY((45 * Math.PI) / 180);
						cutter1.translate(oWidth/2 - doorWay.x - vent.x + 100, doorWay.y + vent.y, -(oDepth-thickness5)/2+thickness2 - 300);
						cutter1 = new ThreeBSP( cutter1 );
						
						var ventDGeometry1 = new THREE.CylinderGeometry( 50, 50, 230, 32 );
						ventDGeometry1.rotateX((90 * Math.PI) / 180);
						ventDGeometry1.translate(oWidth/2 - doorWay.x - vent.x, doorWay.y + vent.y - 40, -(oDepth-thickness5)/2+thickness2 - 160);
						ventDGeometry1 = new ThreeBSP( ventDGeometry1 );			
						ventDGeometry1 = ventDGeometry1.subtract(cutter1);
						ventDLines1 = ventDGeometry1.toMesh((vent.visible ? blackLineMaterial2 : redLineMaterial));
						
						doorGroupOuter.add(ventDLines1);
						
						var cutter2 = new THREE.BoxBufferGeometry( 256, 256, 256 );
						cutter2.rotateY((45 * Math.PI) / 180);
						cutter2.translate(oWidth/2 - doorWay.x - vent.x - 120, doorWay.y + vent.y - 40, -(oDepth-thickness5)/2+thickness2 - 160);
						cutter2 = new ThreeBSP( cutter2 );
						
						var ventDGeometry2 = new THREE.CylinderGeometry( 50, 50, 280, 32 );
						ventDGeometry2.rotateZ((90 * Math.PI) / 180);
						ventDGeometry2.translate(oWidth/2 - doorWay.x - vent.x + 90, doorWay.y + vent.y - 40, -(oDepth-thickness5)/2+thickness2 - 220);
						ventDGeometry2 = new ThreeBSP( ventDGeometry2 );			
						ventDGeometry2 = ventDGeometry2.subtract(cutter2);
						ventDLines2 = ventDGeometry2.toMesh((vent.visible ? blackLineMaterial2 : redLineMaterial));
						
						doorGroupOuter.add(ventDLines2);
					}
				}
				outerDoor5Fill = outerDoor5BSP.toMesh(fillMaterial5);
				
				door2Edges = new THREE.EdgesGeometry(door2);
				door2Lines = new THREE.LineSegments(door2Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
				door5Edges = new THREE.EdgesGeometry(door5);
				door5Lines = new THREE.LineSegments(door5Edges, (doorWay.visible ? blackLineMaterial2 : redLineMaterial));
				
				_this.buildLine(width/2-doorX+90,		doorY+doorH-100,	-depth/2-105,	width/2-doorX+10,	doorY+doorH-100,	-depth/2-105, doorGroupOuter);
				_this.buildLine(width/2-doorX+90,		doorY-40,			-depth/2-105, 	width/2-doorX+90,	doorY+doorH-100,	-depth/2-105, doorGroupOuter);
				var doorHeightText = new THREE.TextGeometry( (dblWalls ? oDoorH : doorH)+"", _this.fontProps);
				doorHeightText.computeBoundingBox();
				doorHeightText.rotateZ((-90 * Math.PI) / 180);
				doorHeightText.rotateY((-180 * Math.PI) / 180);
				doorHeightText.translate(width/2-doorX+90-10, (doorHeightText.boundingBox.max.y - doorHeightText.boundingBox.min.y)/2+(doorH-100)/2+doorY, -depth/2-90);
				var dht = new THREE.Mesh( doorHeightText, redLineMaterial );
				doorGroupOuter.add( dht );
				
				_this.buildLine(width/2-doorX-doorW+120, 	doorY-40,	-depth/2-105, width/2-doorX-doorW+120,	doorY+60,	-depth/2-105, doorGroupOuter);
				_this.buildLine(width/2-doorX+90,			doorY-40,	-depth/2-105, width/2-doorX-doorW+120,	doorY-40,	-depth/2-105, doorGroupOuter);
				var doorWidthText = new THREE.TextGeometry( (dblWalls ? oDoorW : doorW)+"", _this.fontProps);
				doorWidthText.computeBoundingBox();
				doorWidthText.rotateY((180 * Math.PI) / 180);
				doorWidthText.translate(width/2-doorX-doorW/2+110+(doorWidthText.boundingBox.max.x - doorWidthText.boundingBox.min.x)/2, doorY-30, -depth/2-90);
				var dwt = new THREE.Mesh( doorWidthText, redLineMaterial );
				doorGroupOuter.add( dwt );
				
				doorGroupOuter.position.sub(point); // remove the offset
				doorGroupOuter.position.applyAxisAngle(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? 100 : -100) * Math.PI) / 180); // rotate the POSITION
				doorGroupOuter.position.add(point); // re-add the offset
				doorGroupOuter.rotateOnAxis(new THREE.Vector3( 0, 1, 0 ), ((doorWay.origin == "r" ? 100 : -100) * Math.PI) / 180);
				doorGroupOuter.add(outerDoor5Fill);
				doorGroupOuter.add(door2Lines);
				doorGroupOuter.add(door5Lines);
				
				groupLines.add(doorLines);
			} else {
				south5Fill = new THREE.Mesh(south5, fillMaterial5);
			}
			groupLinesOuter.add(south5Lines);
			groupFillOuter.add(south5Fill);
			
			east2 = new THREE.BoxBufferGeometry( thickness2, oHeight-thickness2*2, oDepth-thickness2*2 );
			east2.translate(-(oWidth-thickness2)/2, oHeight/2-thickness2*2, 0);
			east2Edges = new THREE.EdgesGeometry(east2);
			east2Lines = new THREE.LineSegments(east2Edges, blackLineMaterial2);
			east2Fill = new THREE.Mesh(east2, fillMaterial2);
			groupLinesOuter.add(east2Lines);
			groupFillOuter.add(east2Fill);
			
			east5 = new THREE.BoxBufferGeometry( thickness5, oHeight-thickness2*3-150, oDepth-thickness5*3-100 );
			east5.translate(-oWidth/2+thickness5, (oHeight-thickness2*3)/2, 0);
			east5Edges = new THREE.EdgesGeometry(east5);
			east5Lines = new THREE.LineSegments(east5Edges, blackLineMaterial);
			east5 = new ThreeBSP( east5 );
			if (config.windowE){
				var windowE = config.windowE;
				var windowEGeometry = new THREE.BoxBufferGeometry( thickness+10, windowE.h, windowE.w );
				windowEGeometry.translate(-(oWidth-thickness-10)/2, windowE.h/2 + windowE.y - thickness2*2, windowE.w/2 - oDepth/2 + windowE.x);
				var winE = new ThreeBSP(windowEGeometry);
				east5 = east5.subtract(winE);
				eastW5Edges = new THREE.EdgesGeometry(windowEGeometry);
				eastW5Lines = new THREE.LineSegments(eastW5Edges, blackLineMaterial2);
				groupLines.add(eastW5Lines);
			}
			if (config.cableE){
				var cable = config.cableE;
				var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
				cableGeometry.rotateX((90 * Math.PI) / 180);
				cableGeometry.rotateY((90 * Math.PI) / 180);
				cableGeometry.translate(-(oWidth - thickness - 5)/2, cable.y, -oDepth/2+cable.x);
				var cableHole = new ThreeBSP(cableGeometry);
				east5 = east5.subtract(cableHole)
				cableEdges = new THREE.EdgesGeometry(cableGeometry);
				cableLines = new THREE.LineSegments(cableEdges, (cable.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(cableLines);
			}
			if (config.ventE){
				var vent = config.ventE;
				var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
				ventGeometry.rotateX((90 * Math.PI) / 180);
				ventGeometry.rotateY((90 * Math.PI) / 180);
				ventGeometry.translate(-(oWidth - thickness - 5)/2, vent.y, -oDepth/2+vent.x);
				var ventHole = new ThreeBSP(ventGeometry);
				east5 = east5.subtract(ventHole)
				ventEdges = new THREE.EdgesGeometry(ventGeometry);
				ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(ventLines);
			}
			east5Fill = east5.toMesh(fillMaterial5);
			groupLinesOuter.add(east5Lines);
			groupFillOuter.add(east5Fill);
			
			west2 = new THREE.BoxBufferGeometry( thickness2, oHeight-thickness2*2, oDepth-thickness2*2 );
			west2.translate((oWidth-thickness2)/2, oHeight/2-thickness2*2, 0);
			west2Edges = new THREE.EdgesGeometry(west2);
			west2Lines = new THREE.LineSegments(west2Edges, blackLineMaterial2);
			west2Fill = new THREE.Mesh(west2, fillMaterial2);
			groupLinesOuter.add(west2Lines);
			groupFillOuter.add(west2Fill);
			
			west5 = new THREE.BoxBufferGeometry( thickness5, oHeight-thickness2*3-150, oDepth-thickness5*3-100 );
			west5.translate(oWidth/2-thickness5, (oHeight-thickness2*3)/2, 0);
			west5Edges = new THREE.EdgesGeometry(west5);
			west5Lines = new THREE.LineSegments(west5Edges, blackLineMaterial);
			west5 = new ThreeBSP( west5 );
			if (config.windowW){
				var windowW = config.windowW;
				var windowWGeometry = new THREE.BoxBufferGeometry( thickness+10, windowW.h, windowW.w );
				windowWGeometry.translate((oWidth-thickness-10)/2, windowW.h/2 + windowW.y - thickness2*2, -(windowW.w/2 - oDepth/2 + windowW.x));
				var winW = new ThreeBSP(windowWGeometry);
				west5 = west5.subtract(winW);
				westW5Edges = new THREE.EdgesGeometry(windowWGeometry);
				westW5Lines = new THREE.LineSegments(westW5Edges, (windowW.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(westW5Lines);
			}
			if (config.cableW){
				var cable = config.cableW;
				var cableGeometry = new THREE.CylinderGeometry( 30, 30, thickness+10, 32 );
				cableGeometry.rotateX((90 * Math.PI) / 180);
				cableGeometry.rotateY((90 * Math.PI) / 180);
				cableGeometry.translate((oWidth - thickness - 5)/2, cable.y, oDepth/2-cable.x);
				var cableHole = new ThreeBSP(cableGeometry);
				west5 = west5.subtract(cableHole)
				cableEdges = new THREE.EdgesGeometry(cableGeometry);
				cableLines = new THREE.LineSegments(cableEdges, (cable.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(cableLines);
			}
			if (config.ventW){
				var vent = config.ventW;
				var ventGeometry = new THREE.CylinderGeometry( 50, 50, thickness+10, 32 );
				ventGeometry.rotateX((90 * Math.PI) / 180);
				ventGeometry.rotateY((90 * Math.PI) / 180);
				ventGeometry.translate((oWidth - thickness - 5)/2, vent.y, oDepth/2-vent.x);
				var ventHole = new ThreeBSP(ventGeometry);
				west5 = west5.subtract(ventHole)
				ventEdges = new THREE.EdgesGeometry(ventGeometry);
				ventLines = new THREE.LineSegments(ventEdges, (vent.visible ? blackLineMaterial2 : redLineMaterial));
				groupLines.add(ventLines);
			}
			
			west5Fill = west5.toMesh(fillMaterial5);
			groupLinesOuter.add(west5Lines);
			groupFillOuter.add(west5Fill);
			
			_this.scene.add(groupLinesOuter);
			_this.scene.add(groupFillOuter);
		}
		_this.renderer.render( _this.scene, _this.camera );
    },

    triangulateFace: function ( vertNumbers )
    {
        var triangulated = [];
        var last = null;

        while ( vertNumbers.length >= 3 ) {
            last = vertNumbers.pop();

            triangulated.push( vertNumbers[0] );
            triangulated.push( vertNumbers[1] );
            triangulated.push( last );

            vertNumbers.shift();
            vertNumbers.unshift( last );
        }

        return triangulated;
    },

    assignUVs: function( geometry )
    {
        geometry.faceVertexUvs[0] = [];

        var i = 0;
        geometry.faces.forEach(function(face)
        {
            if ( i & 1 ) {
                geometry.faceVertexUvs[0].push([
                    new THREE.Vector2(0,0),
                    new THREE.Vector2(1,0),
                    new THREE.Vector2(0,1),
                ]);
            } else {
                geometry.faceVertexUvs[0].push([
                    new THREE.Vector2(1,0),
                    new THREE.Vector2(1,1),
                    new THREE.Vector2(0,1),
                ]);
            }

            i++;
        });

        geometry.uvsNeedUpdate = true;
    }
}