(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),s=a.n(l),o=(a(30),a(21)),c=a(16),i=a(17),m=a(23),u=a(18),d=a(22),h=a(3),E=(a(31),a(43)),v=a(44),g=a(45),f=a(46),b=a(47),p=a(49),w=a(48),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).arrange=a.arrange.bind(Object(h.a)(Object(h.a)(a))),a.removeElement=a.removeElement.bind(Object(h.a)(Object(h.a)(a))),a.state={show:0,hasData:0,done:0},a.state={visible:!0},a.onDismiss=a.onDismiss.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"arrange",value:function(e){var t=this,a=Object(o.a)(e),n=[],r=[];if(console.log("Sorting"),a.length>0){n=(n=a).sort(),this.setState({words:n},function(){});for(var l=Math.ceil(n.length/4),s=4*l-n.length,c=4-s;c;)c-=1,r.push(n.splice(0,l));for(;s;)s-=1,r.push(n.splice(0,l-1));for(var i=[],m=0;m<l;m++)i.push({c1:r[0][m],c2:r[1][m],c3:r[2][m],c4:r[3][m]});this.setState({result:i,show:1},function(){console.log("JSON Ready"),console.log(t.state.result)})}else this.setState({show:0,done:1,hasData:0,txt:"",visible:!0})}},{key:"removeElement",value:function(e){var t=this;console.log("Remove Element ".concat(e));var a=this.state.master;a=a.filter(function(t){return t!==e}),console.log(a),this.setState({master:a,data:a},function(){console.log("master is now ".concat(t.state.master)),t.arrange(t.state.master)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Sort and Arrange words in an N X 4 matrix - Ramkumar Paranjothy"),r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{onSubmit:function(t){t.preventDefault(),e.arrange(e.state.data)}},r.a.createElement(v.a,null,r.a.createElement(g.a,{className:"info"},r.a.createElement("b",null,"Instructions:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Enter your words below to be sorted and arranged in a nX4 matrix"),r.a.createElement("li",null,' Click "Arrange" / Enter to arrange '),r.a.createElement("li",null,"Click a word to remove it"),r.a.createElement("li",null,'Click "Reset" to start over'))),r.a.createElement(f.a,{type:"text",name:"elements",value:this.state.txt,onChange:function(t){var a=t.target.value;a&&e.setState({data:a.split(" "),master:a.split(" "),hasData:1,done:0,txt:a})}}),this.state.hasData?r.a.createElement("div",null,r.a.createElement(b.a,{style:{marginTop:"10px"},sz:"md",onClick:function(t){return e.arrange(e.state.data)}},"Arrange"),r.a.createElement(b.a,{style:{marginTop:"10px",marginLeft:"10px"},sz:"md",onClick:function(t){return e.setState({hasData:0,txt:"",show:0})}},"Reset")):null)),this.state.done?r.a.createElement(p.a,{color:"danger",isOpen:this.state.visible,toggle:this.onDismiss},"All elements removed !!"," "):null,r.a.createElement(w.a,{bordered:!0,style:{width:"70%"},className:"container"},r.a.createElement("tbody",null,this.state.show?this.state.result.map(function(t,a){return r.a.createElement("tr",null,r.a.createElement("td",{className:"td"},t.c1?r.a.createElement(b.a,{onClick:function(a){return e.removeElement(t.c1)}},t.c1):null),r.a.createElement("td",{className:"td"},t.c2?r.a.createElement(b.a,{onClick:function(a){return e.removeElement(t.c2)}},t.c2):null),r.a.createElement("td",{className:"td"},t.c3?r.a.createElement(b.a,{onClick:function(a){return e.removeElement(t.c3)}},t.c3):null),r.a.createElement("td",{className:"td"},t.c4?r.a.createElement(b.a,{onClick:function(a){return e.removeElement(t.c4)}},t.c4):null))}):null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.df26ccef.chunk.js.map