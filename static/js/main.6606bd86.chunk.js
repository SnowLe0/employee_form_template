(this.webpackJsonpemployee_form=this.webpackJsonpemployee_form||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),l=a.n(r),i=a(72),c=a(147),o=a(12),s=a(146),j=a(65),b=a.n(j),m=a(138),d=a(6);var u=a(107),h=a(112),O=a(109),v=a(152),x=a(108);var f=a(15),p=a(148),g=a(71);var y=a(52),C=a(144);var N={Input:function(e){var t=e.name,a=e.label,n=e.value,r=e.error,l=void 0===r?null:r,i=e.onChange;return Object(d.jsx)(m.a,Object(o.a)({fullWidth:!0,variant:"outlined",label:a,name:t,value:n,onChange:i},l&&{error:!0,helperText:l}))},Select:function(e){var t=e.name,a=e.label,n=e.value,r=e.error,l=void 0===r?null:r,i=e.onChange,c=e.options;return Object(d.jsxs)(u.a,Object(o.a)(Object(o.a)({fullWidth:!0,variant:"outlined"},l&&{error:!0}),{},{children:[Object(d.jsx)(h.a,{children:a}),Object(d.jsx)(O.a,{fullWidth:!0,label:a,name:t,value:n,onChange:i,children:c.map((function(e){return Object(d.jsx)(v.a,{value:e.id,children:e.title},e.id)}))}),l&&Object(d.jsx)(x.a,{children:l})]}))},DatePicker:function(e){var t=e.name,a=e.label,n=e.value,r=e.error,l=void 0===r?null:r,i=e.onChange;return Object(d.jsx)(f.a,{utils:g.a,children:Object(d.jsx)(p.a,Object(o.a)({disableToolbar:!0,variant:"inline",inputVariant:"outlined",fullWidth:!0,label:a,format:"MM/dd/yyyy",name:t,value:n,onChange:function(e){return i(function(e,t){return{target:{name:e,value:t}}}(t,e))}},l&&{error:!0,helperText:l}))})},Button:function(e){var t=e.text,a=e.size,n=e.color,r=e.variant,l=e.onClick,i=Object(y.a)(e,["text","size","color","variant","onClick"]);return Object(d.jsx)(C.a,Object(o.a)(Object(o.a)({variant:r||"contained",size:a||"large",color:n||"primary",onClick:l},i),{},{children:t}))}};function I(e){e.children;var t=Object(y.a)(e,["children"]);return Object(d.jsx)("form",Object(o.a)(Object(o.a)({autoComplete:"off"},t),{},{children:e.children}))}var D=a(40),k=a(58);var S=[{id:"male",title:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"},{id:"female",title:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"},{id:"other",title:"\u0414\u0440\u0443\u0433\u043e\u0439"}],B={lastName:"",firstName:"",middleName:"",gender:"male",birthDay:new Date,mobile:"+7()",email:"",address:"",employer:""};function E(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=Object(o.a)({},r);if("lastName"in e&&(t.lastName=e.lastName?"":"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c"),"firstName"in e&&(t.firstName=e.firstName?"":"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c"),"birthDay"in e&&(t.birthDay=e.birthDay?"":"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c"),"email"in e&&(t.email=/$^|.+@.+\..{2,}/.test(e.email)?"":"\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"),"mobile"in e&&(t.mobile=/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(e.mobile)?"":"\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),"departmentId"in e&&(t.departmentId=0!==e.departmentId.length?"":"\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c"),l(Object(o.a)({},t)),e===a)return Object.values(t).every((function(e){return""===e}))},t=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,r=Object(n.useState)(e),l=Object(k.a)(r,2),i=l[0],c=l[1],s=Object(n.useState)({}),j=Object(k.a)(s,2),b=j[0],m=j[1],d=function(e){var n=e.target,r=n.name,l=n.value;c(Object(o.a)(Object(o.a)({},i),{},Object(D.a)({},r,l))),t&&a(Object(D.a)({},r,l))};return{values:i,setValues:c,errors:b,setErrors:m,handleInputChange:d}}(B,!0,e),a=t.values,r=t.errors,l=t.setErrors,i=t.handleInputChange;return Object(d.jsx)(I,{onSubmit:function(t){t.preventDefault(),e()&&alert("\u0424\u043e\u0440\u043c\u0430 \u0432\u0430\u043b\u0438\u0434\u043d\u0430, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0440\u043e\u0441")},children:Object(d.jsxs)(s.a,{container:!0,spacing:2,children:[Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(N.Input,{name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:a.lastName,onChange:i,error:r.lastName})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(N.Input,{name:"firstName",label:"\u0418\u043c\u044f",value:a.firstName,onChange:i,error:r.firstName})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(N.Input,{name:"middleName",label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:a.middleName,onChange:i,error:r.middleName})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(N.Select,{name:"gender",label:"\u041f\u043e\u043b",value:a.gender,onChange:i,options:S,error:r.gender})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(N.DatePicker,{name:"birthDay",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:a.birthDay,onChange:i,error:r.birthDay})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(b.a,{mask:"+7(999)999-99-99",value:a.mobile,onChange:i,children:Object(d.jsx)(N.Input,{label:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",name:"mobile",error:r.mobile})})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(N.Input,{label:"Email",name:"email",value:a.email,onChange:i,error:r.email})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(N.Input,{label:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",name:"address",value:a.address,onChange:i})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(N.Input,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044f",name:"employer",value:a.employer,onChange:i})}),Object(d.jsx)(s.a,{container:!0,item:!0,justify:"flex-end",xs:12,children:Object(d.jsx)(N.Button,{type:"submit",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})}var T=a(145);function W(e){var t=e.title;return Object(d.jsx)(T.a,{variant:"h4",component:"div",children:t})}function w(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0435"}),Object(d.jsx)(E,{})]})}function z(){var e=Object(i.a)({palette:{primary:{main:"#24b26c",light:"#3c44b126",contrastText:"#fff"}},overrides:{MuiInputBase:{root:{background:"#ededed"}}}});return Object(d.jsx)(c.a,{theme:e,children:Object(d.jsx)(w,{})})}a(103);l.a.render(Object(d.jsx)(z,{}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.6606bd86.chunk.js.map