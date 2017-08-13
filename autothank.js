function findReactComponent(dom) {
    for (var key in dom)
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            return comp;
        }
    return null;
};
var inputComponent = findReactComponent(document.getElementsByClassName('block-compose')[0]); 
var chat = inputComponent.props.chat;

var t = findReactComponent(document.getElementsByClassName('message-list')[0]);
var oldm = t.props.msgs["length"];
var newm = oldm;

function reply(msg,name){
   var str=msg;
   var reply; 
   if(str.includes('HBD')||str.includes('birth')||str.includes('Hbd')||str.includes('Birth')||str.includes('Birthday')||str.includes('birthday')||str.includes('bhanu')||str.includes('Bhanu')){
	reply="thanks " + name;
        chat.sendMessage(reply);
        oldm++;
   	}
 		
};
function thank() {
   newm = t.props.msgs["length"];
   if (newm>oldm){
       reply(t.props.msgs[newm-1].body,t.props.msgs[newm-1].__x_senderObj.__x_pushname);
       oldm+=1; 
       newm=oldm;	
       }
};  		

setInterval(thank,500);

