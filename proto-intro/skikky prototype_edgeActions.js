
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_but_letsgo}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",80250,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'next'
(function(symbolName){})("next");
//Edge symbol end:'next'
})(jQuery,AdobeEdge,"EDGE-319214727");