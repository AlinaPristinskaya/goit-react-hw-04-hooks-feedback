(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(13),n(7)),o=n(2),d=n(8),j=n(4),b=n(3),u=n(0),l=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{type:"button",onClick:n,children:e},e)}))})};var h=function(e){var t=e.children;return Object(u.jsx)("div",{children:t})},O=function(e){var t=e.messadge;return Object(u.jsx)("p",{children:t})},v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).render=function(){var t=e.props,n=t.good,c=t.bad,r=t.neutral,a=t.total,s=t.positivePercentage;return 0===a?Object(u.jsx)(h,{children:Object(u.jsx)(O,{messadge:"No feedback given"})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{children:Object(u.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u0445\u043e\u0440\u043e\u0448\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432: ",n]})}),Object(u.jsx)(h,{children:Object(u.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432: ",r]})}),Object(u.jsx)(h,{children:Object(u.jsxs)("p",{children:["\u041a\u043e\u043b-\u0432\u043e \u043f\u043b\u043e\u0445\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432: ",c]})}),Object(u.jsx)(h,{children:Object(u.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432:",a]})}),Object(u.jsx)(h,{children:Object(u.jsxs)("p",{children:["% \u0445\u043e\u0440\u043e\u0448\u0438\u0445 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043e\u0442 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u043b-\u0432\u0430:",s,"%"]})})]})},e}return n}(c.Component),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:7,bad:2},e.onLeaveFeedback=function(t){var n=t.target.innerText;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=100*this.state.good/this.countTotalFeedback();return Math.round(e)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(h,{children:[Object(u.jsx)("h1",{children:"Please leave feedback"}),Object(u.jsx)(l,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback}),Object(u.jsx)("h3",{children:"Statistics"})]}),Object(u.jsx)(v,{good:t,bad:c,neutral:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component);p.defaultProps={good:0,neutral:0,bad:0};var x=p;s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33a1fb46.chunk.js.map