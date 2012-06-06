//>>built
define("dojox/dgauges/RectangularSegmentedRangeIndicator",["dojo/_base/declare","dojo/on","dojox/gfx","./IndicatorBase"],function(_1,on,_2,_3){return _1("dojox.dgauges.RectangularRangeIndicator",_3,{start:0,startThickness:10,endThickness:10,fill:null,stroke:null,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,segments:10,segmentSpacing:2,rounded:true,ranges:null,constructor:function(){this.fill=[255,120,0];this.stroke={color:"black",width:0.2};this.addInvalidatingProperties(["start","startThickness","endThickness","fill","stroke","segments","segmentSpacing","ranges"]);},_defaultHorizontalShapeFunc:function(_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){var _e=_6._contentBox.w;if(this.ranges){_c={type:"linear",colors:[]};_c.x1=_7;_c.y1=_8;_c.x2=_7+_e;_c.y2=_8;var _f=0;for(var i=0;i<this.ranges.length;i++){var _10={color:this.ranges[i].color,offset:_6.scaler.positionForValue(_f)};var _11={color:this.ranges[i].color,offset:_6.scaler.positionForValue(_f+this.ranges[i].size)};_c.colors.push(_10);_c.colors.push(_11);_f+=this.ranges[i].size;}}else{if(_c&&_c.colors){_c.x1=_7;_c.y1=_8;_c.x2=_7+_e;_c.y2=_8;}}var _12,i,gp,_13;var x=_7;var y=_8;var _14=(_e/this.segments)-this.segmentSpacing;var _15=Math.abs((_9-_7)/(_14+this.segmentSpacing));var sw=this.startThickness;var inc=(this.endThickness-this.startThickness)/this.segments;var ew=sw+inc;var _16=_15-Math.floor(_15);for(i=0;i<Math.floor(_15);i++){var _17=_5.createPath();if(i==0&&this.rounded&&(sw/2)<_14){_13=sw/2;_17.moveTo(x+_13,y);_17.lineTo(x+_14,y);_17.lineTo(x+_14,y+ew);_17.lineTo(x+_13,y+sw);_17.arcTo(_13,_13,0,0,1,x+_13,y);}else{if(i==Math.floor(_15)-1&&(_16==0)&&this.rounded&&(ew/2)<_14){_13=ew/2;_17.moveTo(x,y);_17.lineTo(x+_14-_13,y);_17.arcTo(_13,_13,0,0,1,x+_14-_13,y+ew);_17.lineTo(x,y+sw);_17.lineTo(x,y);}else{_17.moveTo(x,y);_17.lineTo(x+_14,y);_17.lineTo(x+_14,y+ew);_17.lineTo(x,y+sw);_17.lineTo(x,y);}}_17.setFill(_c).setStroke(_d);sw=ew;ew+=inc;x+=_14+this.segmentSpacing;}if(_16>0){ew=sw+((ew-sw)*_16);var gp=[x,y,x+(_14*_16),y,x+(_14*_16),y+ew,x,y+sw,x,y];_12=_5.createPolyline(gp).setFill(_c).setStroke(_d);}return _12;},_defaultVerticalShapeFunc:function(_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21){var _22=_1a._contentBox.h;if(this.ranges){_20={type:"linear",colors:[]};_20.x1=_1b;_20.y1=_1c;_20.x2=_1b;_20.y2=_1c+_22;var _23=0;for(var i=0;i<this.ranges.length;i++){var _24={color:this.ranges[i].color,offset:_1a.scaler.positionForValue(_23)};var _25={color:this.ranges[i].color,offset:_1a.scaler.positionForValue(_23+this.ranges[i].size)};_20.colors.push(_24);_20.colors.push(_25);_23+=this.ranges[i].size;}}else{if(_20&&_20.colors){_20.x1=_1b;_20.y1=_1c;_20.x2=_1b;_20.y2=_1c+_22;}}var _26,i,gp,_27;var x=_1b;var y=_1c;var _28=(_22/this.segments)-this.segmentSpacing;var _29=Math.abs((_1d-_1c)/(_28+this.segmentSpacing));var sw=this.startThickness;var inc=(this.endThickness-this.startThickness)/this.segments;var ew=sw+inc;var _2a=_29-Math.floor(_29);for(i=0;i<Math.floor(_29);i++){var _2b=_19.createPath();if(i==0&&this.rounded&&(sw/2)<_28){_27=sw/2;_2b.moveTo(x,y+_27);_2b.lineTo(x,y+_28);_2b.lineTo(x+ew,y+_28);_2b.lineTo(x+sw,y+_27);_2b.arcTo(_27,_27,0,0,0,x,y+_27);}else{if(i==Math.floor(_29)-1&&(_2a==0)&&this.rounded&&(ew/2)<_28){_27=ew/2;_2b.moveTo(x,y);_2b.lineTo(x,y+_28-_27);_2b.arcTo(_27,_27,0,0,0,x+ew,y+_28-_27);_2b.lineTo(x+sw,y);_2b.lineTo(x,y);}else{_2b.moveTo(x,y);_2b.lineTo(x,y+_28);_2b.lineTo(x+ew,y+_28);_2b.lineTo(x+sw,y);_2b.lineTo(x,y);}}_2b.setFill(_20).setStroke(_21);sw=ew;ew+=inc;y+=_28+this.segmentSpacing;}if(_2a>0){ew=sw+((ew-sw)*_2a);var gp=[x,y,x,y+(_28*_2a),x+ew,y+(_28*_2a),x+sw,y,x,y];_26=_19.createPolyline(gp).setFill(_20).setStroke(_21);}return _26;},indicatorShapeFunc:function(_2c,_2d,_2e,_2f,_30,_31,_32,_33,_34){if(_2d.scale._gauge.orientation=="horizontal"){this._defaultHorizontalShapeFunc(_2d,_2c,_2d.scale,_2e,_2f,_30,_31,_32,_33,_34);}else{this._defaultVerticalShapeFunc(_2d,_2c,_2d.scale,_2e,_2f,_30,_31,_32,_33,_34);}},refreshRendering:function(){if(this._gfxGroup==null||this.scale==null){return;}var _35=this.scale.positionForValue(this.start);var pos=this.scale.positionForValue(this.value);this._gfxGroup.clear();var _36;var _37;var _38;if(this.scale._gauge.orientation=="horizontal"){_36=_35;_37=this.paddingTop;_38=pos;}else{_36=this.paddingLeft;_37=_35;_38=pos;}this.indicatorShapeFunc(this._gfxGroup,this,_36,_37,_38,this.startThickness,this.endThickness,this.fill,this.stroke);}});});