import{i as Y}from"./chunk-2CDOIP2X.js";import{$ as W,A as f,Aa as P,Ba as D,C as S,Ca as E,E as w,Fa as B,I as h,Ia as R,J as d,Ja as $,K as T,Ka as q,N as j,Na as _,O as M,P as A,Ra as z,X as g,Xa as H,Ya as K,Z as F,_ as V,_a as U,aa as L,j as b,k,m as p,n as y,o as x,q as C,r as v,ya as N,z as I}from"./chunk-3R4EIFWT.js";var J=(()=>{let e=class e extends R{constructor(s,o,m,c){super({name:"form"},s,o,m,c),this.customforms=[],this.get().subscribe(t=>this.customforms.push(...t)),c.on("customform_create").subscribe(t=>{this.customforms.push(t)}),c.on("customform_delete").subscribe(t=>{this.customforms.splice(this.customforms.findIndex(r=>r._id===t._id),1)})}};e.\u0275fac=function(o){return new(o||e)(p(q),p($),p(_),p(B))},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Z(i,e){if(i&1&&g(0),i&2){let l=e.$implicit;F(" ",l.components==null?null:l.components.length," ")}}function ee(i,e){if(i&1){let l=j();h(0,"label",3)(1,"input",4),M("ngModelChange",function(){let o=C(l).$implicit,m=A();return v(m.changeStatus(o))}),L("ngModelChange",function(o){let m=C(l).$implicit;return W(m.active,o)||(m.active=o),v(o)}),d(),T(2,"span",5),h(3,"span",6),g(4,"Active"),d()()}if(i&2){let l=e.$implicit;I(),V("ngModel",l.active)}}var O=(()=>{let e=class e{get rows(){return this._form.customForms}constructor(s,o,m,c){this._translate=s,this._fs=o,this._alert=m,this._form=c,this.columns=["title","components","formId","active"],this.form=this._form.getForm("form",{formId:"form",title:"Custom form",components:[{name:"Text",key:"title",focused:!0,fields:[{name:"Placeholder",value:"fill title"},{name:"Label",value:"Title"}]},{name:"Select",key:"formId",fields:[{name:"Placeholder",value:"Select form id"},{name:"Label",value:"Form ID"},{name:"Items",value:this._form.formIds}]}]}),this.components=[],this.formComponents=this._form.getForm("formComponents",{formId:"formComponents",title:"Custom components",components:[{components:this.components},{name:"Select",key:"addComponent",fields:[{name:"Placeholder",value:"Select form componnet"},{name:"Label",value:"Form Component"},{name:"Value",value:"name",skipTranslation:!0},{name:"Items",value:this._form.components}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(t,r)=>{this._fs.create(t,{callback:r.bind(this)})}}).then(this._fs.create.bind(this))},update:t=>{this._form.modal(this.form,{label:"Update",click:(r,u)=>{this._fs.update(r,{callback:u.bind(this)})}},t).then(this._fs.update.bind(this))},delete:t=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this user?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._fs.delete(t)}}]})},buttons:[{icon:"text_fields",click:t=>{this.components.splice(0,this.components.length);let r={addComponent:"Text"};t.components=t.components||[];for(let n=0;n<t.components.length;n++){r["key"+n]=t.components[n].key;for(let a of t.components[n].fields)r[a.name+n]=a.value}let u=n=>{this.components.splice(n,1),t.components.splice(n,1),this._fs.updateAfterWhile(t)};(t.components||[]).forEach(n=>{this.components.push(this._addCustomComponent(n.name,n.fields?.map(a=>a.name),this.components.length,u))}),this._form.modal(this.formComponents,{label:"Add component",click:()=>{let n=this._form.components.find(a=>a.name===r.addComponent)?.fields;this.components.push(this._addCustomComponent(r.addComponent,n,this.components.length,u)),t.components.push({name:r.addComponent,fields:n.map(a=>({value:"",name:a}))})}},r,()=>{},{size:"big"}).then(()=>{for(let n=0;n<t.components.length;n++){t.components[n].key=r["key"+n];for(let a of t.components[n].fields)a.value=r[a.name+n]}this._fs.updateAfterWhile(t)})}}]}}_addCustomComponent(s,o,m,c){return{class:"d-f mt10",components:[{name:"Text",key:"key"+m,root:!0,fields:[{name:"Placeholder",value:"fill key"},{name:"Label",value:"Key"}]},{name:"Button",fields:[{name:"Label",value:"Remove"},{name:"Click",value:()=>{c(m)}}]}]}}changeStatus(s){setTimeout(()=>{if(s.active)for(let o of this._fs.customforms)o._id===s._id||o.formId!==s.formId||o.active&&(o.active=!1,this._fs.updateAfterWhile(o));this._fs.updateAfterWhile(s)})}};e.\u0275fac=function(o){return new(o||e)(f(z),f(J),f(_),f(U))},e.\u0275cmp=y({type:e,selectors:[["ng-component"]],decls:3,vars:3,consts:[["title","Custom Forms",3,"columns","config","rows"],["cell","components"],["cell","active"],[1,"container-box"],["type","checkbox",1,"w-input__checkbox",3,"ngModelChange","ngModel"],[1,"checkmark"],[1,"checkmark-text"]],template:function(o,m){o&1&&(h(0,"wtable",0),S(1,Z,1,1,"ng-template",1)(2,ee,5,1,"ng-template",2),d()),o&2&&w("columns",m.columns)("config",m.config)("rows",m.rows)},dependencies:[P,D,E,K,H]});let i=e;return i})();var te=[{path:"",component:O}],fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=k({imports:[N.forChild(te),Y]});let i=e;return i})();export{fe as CustomformsModule};