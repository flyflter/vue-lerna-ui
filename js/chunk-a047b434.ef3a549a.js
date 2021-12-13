(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a047b434"],{"2bdc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h-table",{attrs:{data:e.data,stripe:!0,border:!0,caption:e.caption,shadow:!0,"head-style":"default"}},[a("h-table-column",{attrs:{prop:"para",label:"参数12",width:80}}),a("h-table-column",{attrs:{prop:"native",label:"是否是原生属性",width:120}}),a("h-table-column",{attrs:{prop:"desc",label:"描述",width:450}}),a("h-table-column",{attrs:{prop:"type",label:"类型",width:100}}),a("h-table-column",{attrs:{prop:"option",label:"可选值",width:300}}),a("h-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1)},l=[],o={name:"propsTable",props:{data:Array,caption:String}},s=o,i=a("2877"),p=Object(i["a"])(s,n,l,!1,null,null,null);t["a"]=p.exports},"4c74":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("代码高亮")]),a("form",{attrs:{action:""}},[a("label",{attrs:{for:""}},[e._v("主题: ")]),a("h-select",{attrs:{options:[{label:"light",value:"light"},{label:"dark",value:"dark"}],radius:"small"},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}}),a("label",{attrs:{for:""}},[e._v("语言: ")]),a("h-select",{attrs:{options:[{label:"javascript",value:"javascript"},{label:"css",value:"css"},{label:"html",value:"html"}]},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},[a("option",{attrs:{disabled:"",value:""}},[e._v("请选择")]),a("option",[e._v("javascript")]),a("option",[e._v("css")]),a("option",[e._v("html")])])],1),"javascript"===e.language?a("h-code",{attrs:{line:!!e.line,lang:e.language,theme:e.theme,shadow:!!e.shadow}},[e._v("\n /**\n  * @desc: 这是一个JavaScript语言的高亮代码块插件，以下是栅格系统设计的部分源代码\n  * @date: 2017/9/27 15:10\n  * @author: zhuxiankang\n  * @params: \n  */\ncomputed: {\n  rowClass () {\n    let list = []\n    let normals = ['span', 'offset', 'pull', 'push']     // 非响应式参数\n    let responses = ['xs', 'sm', 'md', 'lg']             // 响应式参数\n    for (let prop of normals) {\n      if (this[prop]) {\n        list.push(\n          prop === 'span' ? `h-col-xs-${this[prop]}` : `h-col-xs-${prop}-${this[prop]}`\n        )\n      }\n    }\n\n    for (let prop of responses) {\n      if (typeof this[prop] === 'number') {\n        list.push(\n          `h-col-${prop}-${this[prop]}`\n        )\n      } else if (typeof this[prop] === 'object') {\n        let obj = this[prop]\n        for (let key of Object.keys(obj)) {\n          list.push(\n            key === 'span' ? `h-col-${prop}-${obj[key]}` : `h-col-${prop}-${key}-${obj[key]}`\n          )\n        }\n      }\n    }\n    return list\n  }\n}\n      ")]):e._e(),"css"===e.language?a("h-code",{attrs:{line:!!e.line,lang:e.language,theme:e.theme,shadow:!!e.shadow}},[e._v("\n\n/* 响应式图片 */\n.h-img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n/* 相册图片 */\n.h-img-photo {\n  height: calc('100%');\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: inline-block !important;\n  max-width: 100%;\n  height: auto;\n  background-image: url(\"/skins/cy/images/icons.png\");\n}\n\n.ziyi2 {}\n\n@media screen,print{}\n      ")]):e._e(),"html"===e.language?a("h-code",{attrs:{line:!!e.line,lang:e.language,theme:e.theme,shadow:!!e.shadow}},[e._v("\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>vue-UI</title>\n  </head>\n  <body>\n    <div id='app' disabled title=attr_data_no_string></div>\n    \x3c!-- built files will be auto injected --\x3e\n  </body>\n</html>\n      ")]):e._e(),a("h3",[e._v("参数示例")]),a("props-table",{attrs:{data:e.props,caption:"代码属性"}})],1)},l=[],o=a("2bdc"),s={name:"code",components:{propsTable:o["a"]},data:function(){return{theme:"light",language:"html",line:!0,shadow:!0,props:[{para:"theme",native:"false",desc:"主题",type:"String",option:"light、dark",default:"light"},{para:"language",native:"false",desc:"语言类型",type:"String",option:"html、css、javascript",default:"javascript"},{para:"line",native:"false",desc:"是否显示行数",type:"Boolean",option:"true、false",default:"true"},{para:"shadow",native:"false",desc:"阴影",type:"Boolean",option:"false、true",default:"false"}]}}},i=s,p=a("2877"),r=Object(p["a"])(i,n,l,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-a047b434.ef3a549a.js.map