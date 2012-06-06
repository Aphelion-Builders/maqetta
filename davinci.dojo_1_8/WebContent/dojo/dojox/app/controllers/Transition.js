//>>built
define("dojox/app/controllers/Transition",["dojo/_base/lang","dojo/_base/declare","dojo/on","dojo/Deferred","dojo/when","dojox/css3/transit","../Controller"],function(_1,_2,on,_3,_4,_5,_6){return _2("dojox.app.controllers.Transition",_6,{proceeding:false,waitingQueue:[],constructor:function(_7,_8){this.events={"transition":this.transition,"startTransition":this.onStartTransition};this.inherited(arguments);},transition:function(_9){this.proceedTransition(_9);},onStartTransition:function(_a){if(_a.preventDefault){_a.preventDefault();}_a.cancelBubble=true;if(_a.stopPropagation){_a.stopPropagation();}var _b=_a.detail.target;var _c=/#(.+)/;if(!_b&&_c.test(_a.detail.href)){_b=_a.detail.href.match(_c)[1];}this.transition({"viewId":_b,opts:_1.mixin({reverse:false},_a.detail)});},proceedTransition:function(_d){if(this.proceeding){this.app.log("in app/controllers/Transition proceedTransition push event",_d);this.waitingQueue.push(_d);return;}this.proceeding=true;this.app.log("in app/controllers/Transition proceedTransition calling trigger load",_d);this.app.trigger("load",{"viewId":_d.viewId,"callback":_1.hitch(this,function(){var _e=this._doTransition(_d.viewId,_d.opts,this.app);_4(_e,_1.hitch(this,function(){this.proceeding=false;var _f=this.waitingQueue.shift();if(_f){this.proceedTransition(_f);}}));})});},_getDefaultTransition:function(_10){var _11=_10;var _12=_11.defaultTransition;while(!_12&&_11.parent){_11=_11.parent;_12=_11.defaultTransition;}return _12;},_doTransition:function(_13,_14,_15){this.app.log("in app/controllers/Transition._doTransition transitionTo=[",_13,"], parent.name=[",_15.name,"], opts=",_14);if(!_15){throw Error("view parent not found in transition.");}var _16,_17,_18,_19,_1a=_15.selectedChild;if(_13){_16=_13.split(",");}else{_16=_15.defaultView.split(",");}_17=_16.shift();_18=_16.join(",");_19=_15.children[_15.id+"_"+_17];if(!_19){throw Error("child view must be loaded before transition.");}if(!_18&&_19.defaultView){_18=_19.defaultView;}if(!_1a){this.app.log("> in Transition._doTransition calling next.beforeActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"],  !current path,");_19.beforeActivate();this.app.log("> in Transition._doTransition calling next.afterActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"],  !current path");_19.afterActivate();this.app.log("  > in Transition._doTransition calling app.triggger select view next name=[",_19.name,"], parent.name=[",_19.parent.name,"], !current path");this.app.trigger("select",{"parent":_15,"view":_19});return;}if(_19!==_1a){var _1b=_1a.selectedChild;while(_1b){this.app.log("< in Transition._doTransition calling subChild.beforeDeactivate subChild name=[",_1b.name,"], parent.name=[",_1b.parent.name,"], next!==current path");_1b.beforeDeactivate();_1b=_1b.selectedChild;}this.app.log("< in Transition._doTransition calling current.beforeDeactivate current name=[",_1a.name,"], parent.name=[",_1a.parent.name,"], next!==current path");_1a.beforeDeactivate();this.app.log("> in Transition._doTransition calling next.beforeActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next!==current path");_19.beforeActivate();this.app.log("> in Transition._doTransition calling app.triggger select view next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next!==current path");this.app.trigger("select",{"parent":_15,"view":_19});var _1c=_5(_1a.domNode,_19.domNode,_1.mixin({},_14,{transition:this._getDefaultTransition(_15)||"none"}));_1c.then(_1.hitch(this,function(){var _1d=_1a.selectedChild;while(_1d){this.app.log("  < in Transition._doTransition calling subChild.afterDeactivate subChild name=[",_1d.name,"], parent.name=[",_1d.parent.name,"], next!==current path");_1d.afterDeactivate();_1d=_1d.selectedChild;}this.app.log("  < in Transition._doTransition calling current.afterDeactivate current name=[",_1a.name,"], parent.name=[",_1a.parent.name,"], next!==current path");_1a.afterDeactivate();this.app.log("  > in Transition._doTransition calling next.afterActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next!==current path");_19.afterActivate();if(_18){this._doTransition(_18,_14,_19);}}));return _1c;}else{this.app.log("< in Transition._doTransition calling next.beforeDeactivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next==current path");_19.beforeDeactivate();this.app.log("  < in Transition._doTransition calling next.afterDeactivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next==current path");_19.afterDeactivate();this.app.log("> in Transition._doTransition calling next.beforeActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next==current path");_19.beforeActivate();this.app.log("  > in Transition._doTransition calling next.afterActivate next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next==current path");_19.afterActivate();this.app.log("> in Transition._doTransition calling app.triggger select view next name=[",_19.name,"], parent.name=[",_19.parent.name,"], next==current path");this.app.trigger("select",{"parent":_15,"view":_19});}if(_18){return this._doTransition(_18,_14,_19);}}});});