(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.headline = function() {
		this.initialize(img.headline);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,943,371);
	
	
	(lib.pen = function() {
		this.initialize(img.pen);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,271,231);
	
	
	(lib.you = function() {
		this.initialize(img.you);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,318,223);// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.pen();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,271,231), null);
	
	
	(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AriNLIKH+9IM+FuIxPd4g");
		this.shape.setTransform(88.425,107.25);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(14.5,-6.7,147.9,227.89999999999998), null);
	
	
	(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_2
		this.instance = new lib.you();
		this.instance.setTransform(265,282);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(265,282,318,223), null);
	
	
	(lib.Symbol1copy2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AqZNaIMs/tIIHEsIzhf6g");
		this.shape.setTransform(95.725,117.15);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(29.1,0,133.3,234.3), null);
	
	
	(lib.Symbol1copy = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AonI0QJcsvHzspIAADSIxPd3g");
		this.shape.setTransform(107.15,115.075);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(52,9,110.4,212.2), null);
	
	
	(lib.Symbol1copy3 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.isSingleFrame = false;
		// timeline functions:
		this.frame_0 = function() {
			if(this.isSingleFrame) {
				return;
			}
			if(this.totalFrames == 1) {
				this.isSingleFrame = true;
			}
			
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(81.2,110.6,1,1,0,0,0,81.2,110.6);
		this.instance.filters = [new cjs.BlurFilter(10, 10, 2)];
		this.instance.cache(13,-9,152,232);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(3.5,-17.7,174,253), null);
	
	
	(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.isSingleFrame = false;
		// timeline functions:
		this.frame_0 = function() {
			if(this.isSingleFrame) {
				return;
			}
			if(this.totalFrames == 1) {
				this.isSingleFrame = true;
			}
			
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	
		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.setTransform(81.2,110.6,1,1,0,0,0,81.2,110.6);
		this.instance.filters = [new cjs.BlurFilter(10, 10, 2)];
		this.instance.cache(13,-9,152,232);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(3.5,-17.7,174,253), null);
	
	
	(lib.pen_rotate = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol5();
		this.instance.setTransform(0,231,1,1,0,0,0,0,231);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.202,x:0.05,y:231.05},29,cjs.Ease.sineInOut).to({rotation:0,x:0,y:231},30,cjs.Ease.sineInOut).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-20.9,-23.5,292,254.6);
	
	
	(lib.pen_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Symbol5();
		this.instance.setTransform(0,231,1,1,0,0,0,0,231);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.202,x:0.05,y:231.05},29,cjs.Ease.sineInOut).to({rotation:0,x:0,y:231},30,cjs.Ease.sineInOut).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-20.9,-23.5,292,254.6);
	
	
	(lib.mask = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_79 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));
	
		// Layer_16
		this.instance = new lib.Symbol1();
		this.instance.setTransform(274.7,382.3,1.1675,1.1296,-123.6677,0,0,81,110.6);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({regX:88.4,regY:107.2,x:274.85,y:377.2},0).wait(1).to({rotation:-123.6676,x:282.8},0).wait(1).to({x:290.55},0).wait(1).to({rotation:-123.6675,x:298.15},0).wait(1).to({x:305.5},0).wait(1).to({x:312.7},0).wait(1).to({rotation:-123.6674,x:319.7},0).wait(1).to({x:326.5},0).wait(1).to({rotation:-123.6673,x:333.1},0).wait(1).to({x:339.5},0).wait(1).to({x:345.75},0).wait(1).to({rotation:-123.6672,x:351.75},0).wait(1).to({x:357.6},0).wait(1).to({rotation:-123.6671,x:363.2},0).wait(1).to({x:368.65},0).wait(1).to({scaleX:1.1674,x:373.9},0).wait(1).to({rotation:-123.667,x:378.95},0).wait(1).to({x:383.8},0).wait(1).to({x:388.5},0).wait(1).to({x:392.95},0).wait(1).to({rotation:-123.6669,x:397.25},0).wait(1).to({x:401.3},0).wait(1).to({regX:80.9,regY:110.6,x:413.2,y:382.4},0).wait(1).to({regX:88.4,regY:107.2,rotation:-123.667,x:413.4,y:377.15},0).wait(1).to({scaleX:1.1675,rotation:-123.6671,x:421.05},0).wait(1).to({rotation:-123.6672,x:428.1},0).wait(1).to({rotation:-123.6673,x:434.5},0).wait(1).to({rotation:-123.6674,x:440.3},0).wait(1).to({rotation:-123.6675,x:445.5},0).wait(1).to({x:450.1},0).wait(1).to({rotation:-123.6676,x:454.05},0).wait(1).to({x:457.4},0).wait(1).to({rotation:-123.6677,x:460.15},0).wait(1).to({x:462.3},0).wait(1).to({x:463.8},0).wait(1).to({x:464.75},0).wait(1).to({regX:81,regY:110.6,x:473.1,y:382.3},0).wait(6));
	
		// Layer_15
		this.instance_1 = new lib.Symbol1copy2();
		this.instance_1.setTransform(273,503.15,1.1675,1.1297,-172.5916,0,0,81,110.5);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({rotation:-168.8865,x:332.2,y:463.15},5).wait(40));
	
		// Layer_14
		this.instance_2 = new lib.Symbol1();
		this.instance_2.setTransform(211.4,607.15,1.1675,1.1297,-172.5916,0,0,81,110.5);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({x:273,y:503.15},3).wait(46));
	
		// Layer_13
		this.instance_3 = new lib.Symbol1copy();
		this.instance_3.setTransform(487.4,194.35,1.1676,1.1297,175.4726,0,0,81,110.5);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({x:371.4,y:414.35},8).wait(49));
	
		// Layer_12
		this.instance_4 = new lib.Symbol1copy3();
		this.instance_4.setTransform(167.15,454.95,1,1,-153.2985,0,0,81.1,110.6);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:311.95,y:338.9},8).wait(57));
	
		// Layer_11
		this.instance_5 = new lib.Symbol1();
		this.instance_5.setTransform(378.45,177.4,1,1,0,0,0,81.2,110.6);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:281.65,y:314.2},19).wait(60));
	
		// Layer_4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(0,153,102,0)").s().p("EhOrA3GMAAAhuLMCdXAAAMAAABuLg");
		this.shape.setTransform(478.625,341.6);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-25,-11,1007.3,774.9);
	
	
	(lib.holder = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.isSingleFrame = false;
		// timeline functions:
		this.frame_0 = function() {
			if(this.isSingleFrame) {
				return;
			}
			if(this.totalFrames == 1) {
				this.isSingleFrame = true;
			}
			this.stop();
			
			var _this = this;
			
			var msk = _this.msk; 
			var bg = _this.bg;
			
			msk.visible=false;
			msk.cache(0,0,943,656);
			bg.cache(0,0,943,656);
			
			var maskFilter = new createjs.AlphaMaskFilter(msk.cacheCanvas)
			
			_this.setMask=function(){
			 msk.updateCache();
			 bg.filters=[maskFilter];
			 bg.updateCache();
			 
			 //console.log("!!");
			}
			
			this.addEventListener('tick',_this.setMask);
			
			function handleComplete() {
							
			}
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	
		// Layer_3
		this.msk = new lib.mask();
		this.msk.name = "msk";
		this.msk.setTransform(471.5,328,1,1,0,0,0,471.5,328);
	
		this.timeline.addTween(cjs.Tween.get(this.msk).wait(1));
	
		// Layer_1
		this.bg = new lib.Symbol2();
		this.bg.name = "bg";
		this.bg.setTransform(471.5,328,1,1,0,0,0,471.5,328);
	
		this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.holder, new cjs.Rectangle(-25,-11,1007.3,705.2), null);
	
	
	// stage content:
	(lib.canvas = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {startDraw:1};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.actionFrames = [0,138];
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
			var _this=this;
			
			window.startPen=function(){
					_this.gotoAndPlay("startDraw");
				
			}
		}
		this.frame_138 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(138).call(this.frame_138).wait(1));
	
		// Layer_1
		this.instance = new lib.pen_rotate();
		this.instance.setTransform(578,371.5,1,1,0,0,0,0,231);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).wait(9));
	
		// Layer_8
		this.instance_1 = new lib.pen_1();
		this.instance_1.setTransform(351.35,405.8,1,1,0,0,0,0,231);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).wait(1).to({regX:125,regY:103.7,rotation:-2.3291,x:493.3,y:257.3},0).wait(1).to({rotation:-4.596,x:507.55,y:239.35},0).wait(1).to({rotation:-6.8009,x:515.9,y:227.35},0).wait(1).to({rotation:-8.9436,x:513.55,y:232.35},0).wait(1).to({rotation:-11.0242,x:510.6,y:242.15},0).wait(1).to({rotation:-13.0428,x:513.35,y:216},0).wait(1).to({regX:0,regY:231,rotation:-14.9992,x:431.1,y:367.8},0).wait(1).to({regX:125,regY:103.7,rotation:-12.5955,x:546.05,y:218},0).wait(1).to({rotation:-10.2707,x:566.5,y:208.85},0).wait(1).to({rotation:-8.0246,x:568.35,y:228.6},0).wait(1).to({rotation:-5.8574,x:569.3,y:247.3},0).wait(1).to({rotation:-3.769,x:585.1,y:251.1},0).wait(1).to({regX:0.1,regY:231.1,rotation:-1.7594,x:479.65,y:370.35},0).wait(1).to({regX:125,regY:103.7,rotation:-3.3264,x:602.6,y:233.5},0).wait(1).to({rotation:-4.8296,x:600,y:247.1},0).wait(1).to({rotation:-6.2687,x:608.35,y:244.05},0).wait(1).to({rotation:-7.6439,x:617.3,y:234.8},0).wait(1).to({rotation:-8.9551,x:622.2,y:225.35},0).wait(1).to({rotation:-10.2024,x:623.5,y:213.55},0).wait(1).to({regX:0.1,regY:231.2,rotation:-11.3857,x:522.75,y:370.9},0).wait(1).to({regX:125,regY:103.7,rotation:-8.6998,x:621.9,y:237.05},0).wait(1).to({rotation:-6.1673,x:625.9,y:249.05},0).wait(1).to({rotation:-3.7883,x:637.4,y:251.75},0).wait(1).to({rotation:-1.5628,x:648.45,y:243.65},0).wait(1).to({rotation:0.5093,x:656.2,y:242.15},0).wait(1).to({regX:0.2,regY:231.2,rotation:2.4278,x:533.9,y:363.9},0).to({regX:0,regY:231,rotation:0,guide:{path:[533.9,364,536.6,362.2,538.5,362,539.6,362,540.1,362.1,540.5,363,540.9,364,542.4,366.3,545.7,368,555.6,373.1,578,371.4]}},10,cjs.Ease.sineInOut).to({_off:true},18).wait(9));
	
		// pen
		this.instance_2 = new lib.pen_1();
		this.instance_2.setTransform(306.7,-67.2,1,1,0,0,0,0,231);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,rotation:-29.9992,x:306.8,y:-67.25},1,cjs.Ease.get(-1)).to({regX:0,rotation:0,x:306.7,y:288},37,cjs.Ease.quadOut).wait(2).to({regX:125,regY:103.7,rotation:-0.1479,x:431.2,y:160.55},0).wait(1).to({rotation:-0.5917,x:429.8,y:160.15},0).wait(1).to({rotation:-1.3314,x:427.5,y:159.5},0).wait(1).to({rotation:-2.3669,x:424.3,y:158.65},0).wait(1).to({rotation:-3.6983,x:420.05,y:157.65},0).wait(1).to({rotation:-5.3255,x:414.75,y:156.45},0).wait(1).to({rotation:-7.2486,x:408.45,y:155.25},0).wait(1).to({rotation:-9.4676,x:401.05,y:154.1},0).wait(1).to({regX:0.1,regY:231,rotation:-11.9824,x:296.75,y:303.5},0).wait(1).to({regX:125,regY:103.7,rotation:-11.8244,x:388.45,y:160.75},0).wait(1).to({rotation:-11.6394,x:384.05,y:169.65},0).wait(1).to({rotation:-11.4272,x:379.3,y:180.25},0).wait(1).to({rotation:-11.188,x:374.9,y:191.3},0).wait(1).to({rotation:-10.9217,x:371.75,y:201.35},0).wait(1).to({rotation:-10.6283,x:368.75,y:213.7},0).wait(1).to({rotation:-10.3078,x:367.5,y:227.75},0).wait(1).to({regX:0.1,regY:231,rotation:-9.9602,x:271.75,y:391.15},0).wait(1).to({regX:125,regY:103.7,rotation:-7.4761,x:393.6,y:247},0).wait(1).to({rotation:-4.8316,x:420.55,y:237.05},0).wait(1).to({rotation:-2.0269,x:450.3,y:223.7},0).wait(1).to({rotation:0.938,x:468.5,y:220.6},0).wait(1).to({rotation:4.0632,x:484.9,y:219.6},0).wait(1).to({regX:0.1,regY:231.1,scaleX:0.9999,scaleY:0.9999,rotation:7.3487,x:361.95,y:328.85},0).wait(1).to({regX:125,regY:103.7,scaleX:1,scaleY:1,rotation:6.126,x:514.35,y:203.85},0).wait(1).to({rotation:4.8463,x:527.6,y:199.1},0).wait(1).to({rotation:3.5098,x:516.9,y:223.15},0).wait(1).to({rotation:2.1164,x:499.1,y:251.45},0).wait(1).to({rotation:0.6661,x:484.6,y:271.55},0).wait(1).to({rotation:-0.841,x:470,y:289.95},0).wait(1).to({regX:0.2,regY:231.2,rotation:-2.4051,x:333.6,y:441.95},0).wait(1).to({regX:125,regY:103.7,rotation:-2.0365,x:437.95,y:335.4},0).wait(1).to({rotation:-1.6551,x:425.75,y:354.2},0).wait(1).to({rotation:-1.2607,x:406.3,y:369.7},0).wait(1).to({rotation:-0.8534,x:428.4,y:332.15},0).wait(1).to({rotation:-0.4332,x:450.1,y:305.2},0).wait(1).to({regX:0,regY:231,rotation:0,x:345.45,y:412},0).to({_off:true},1).wait(63));
	
		// Layer_6
		this.instance_3 = new lib.holder();
		this.instance_3.setTransform(471.5,328,1,1,0,0,0,471.5,328);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(100));
	
		// Txt
		this.instance_4 = new lib.headline();
		this.instance_4.setTransform(0,146);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(139));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(446.5,-74.7,535.8,768.9000000000001);
	// library properties:
	lib.properties = {
		id: 'BAE80E4F4E704DB5912FC3BCD8E525BD',
		width: 943,
		height: 656,
		fps: 50,
		color: "#000000",
		opacity: 1.00,
		manifest: [
			{src:"img/herobanner_kv/headline.png", id:"headline"},
			{src:"img/herobanner_kv/pen.png", id:"pen"},
			{src:"img/herobanner_kv/you.png", id:"you"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['BAE80E4F4E704DB5912FC3BCD8E525BD'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused){
				stageChild.syncStreamSounds();
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;