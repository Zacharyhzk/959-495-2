(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{112:function(e,t,n){e.exports=n(186)},186:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(27),r=n.n(l),u=n(87),o=n(88),c=n(42),d=n(110),h=n(108),s=(n(117),n(47)),p={inputValue:"",list:[]},g=n(107),m=n(90),v=n.n(m),f=Object(g.a)(),_=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())(Object(s.a)(f)),O=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if("change_input_value"===t.type){var n=JSON.parse(JSON.stringify(e));return n.inputValue=t.value,n}if("add_todo_item"===t.type){var a=JSON.parse(JSON.stringify(e));return a.list.push(a.inputValue),a.inputValue="",a}if("delete_todo_item"===t.type){var i=JSON.parse(JSON.stringify(e));return i.list.splice(t.index,1),i}return console.log(e,t),e}),_);f.run(v.a);var b=O,y=n(188),C=n(67),S=n(187),E=function(e){return i.a.createElement("div",{style:{marginTop:"10px",marginLeft:"10px"}},i.a.createElement("div",null,i.a.createElement(y.a,{value:e.inputValue,placeholder:"todoinfo",style:{width:"300px",marginRight:"10px"},onChange:e.handleInputChange}),i.a.createElement(C.a,{type:"primary",onClick:e.handleBtnClick},"\u63d0\u4ea4")),i.a.createElement(S.b,{style:{marginTop:"10px",width:"300px"},bordered:!0,dataSource:e.list,renderItem:function(t,n){return i.a.createElement(S.b.Item,{onClick:function(){e.handleItemDelete(n)}},t)}}))},I=n(105),k=n.n(I),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=b.getState(),a.handleInputChange=a.handleInputChange.bind(Object(c.a)(a)),a.handleStoreChange=a.handleStoreChange.bind(Object(c.a)(a)),a.handleBtnClick=a.handleBtnClick.bind(Object(c.a)(a)),a.handleItemDelete=a.handleItemDelete.bind(Object(c.a)(a)),b.subscribe(a.handleStoreChange),a}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement(E,{inputValue:this.state.inputValue,handleInputChange:this.handleInputChange,handleBtnClick:this.handleBtnClick,list:this.state.list,handleItemDelete:this.handleItemDelete})}},{key:"componentDidMount",value:function(){k.a.get("list.json").then((function(e){var t=function(e){return{type:"initListAction",data:e}}(e.data);b.dispatch(t)}))}},{key:"handleInputChange",value:function(e){var t={type:"change_input_value",value:e.target.value};b.dispatch(t),console.log(e.target.value)}},{key:"handleStoreChange",value:function(){this.setState(b.getState()),console.log("store changed")}},{key:"handleBtnClick",value:function(){var e={type:"add_todo_item"};b.dispatch(e)}},{key:"handleItemDelete",value:function(e){var t=function(e){return{type:"delete_todo_item",index:e}}(e);b.dispatch(t),alert(e)}}]),n}(a.Component);r.a.render(i.a.createElement(j,null),document.getElementById("root"))},90:function(e,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.8e1bf9d4.chunk.js.map