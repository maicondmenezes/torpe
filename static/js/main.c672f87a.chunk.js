(this.webpackJsonptorpe=this.webpackJsonptorpe||[]).push([[0],{109:function(e,a,t){e.exports=t(160)},110:function(e,a,t){},111:function(e,a,t){},138:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);t(110),t(111);var r=t(0),n=t.n(r),l=t(100),i=t(29),o=t(87),s=t(22),c="CHANGE_LOADING",d={registroDoUsuario:{data:{picture:"",name:"",email:"",login:"",password:""},error:{},success:!1},loading:{open:!1,msg:"putting grannies to work out"},notify:{open:!1,vertical:"top",horizontal:"center",time:3e3,msg:"",severity:"info"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.loading,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case c:return Object(s.a)({},e,{},r);default:return e}},u="CHANGE_NOTIFY",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.notify,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case u:return Object(s.a)({},e,{},r);default:return e}},f=t(88),v=(t.n(f).a.create({baseUrl:"http://localhost/"}),"CHANGE"),E="SUCCESS",x="ERROR",g=Object(i.c)({loadingReducer:m,notifyReducer:p,registroDoUsuarioReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.registroDoUsuario,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case v:return Object(s.a)({},e,{data:Object(s.a)({},e.data,{},r)});case E:return Object(s.a)({},e,{success:r});case x:return Object(s.a)({},e,{error:r});default:return e}}}),h=[o.a],b=Object(i.d)(g,i.a.apply(void 0,h)),y=t(35),D=t(36),w=t(38),O=t(39),N=(t(138),t(99)),S=t.n(N),j=t(187),A=t(188),T=t(97),I=t.n(T),C=t(96),U=t.n(C),k=t(95),P=t.n(k),q=t(98),M=t.n(q),R=t(94),z=t.n(R),G=t(5),W=t(161),H=t(189),J=t(93),L=t.n(J),V=t(92),_=t.n(V),B=t(58),F=t(59),Y=t(60),K=function(e){Object(O.a)(t,e);var a=Object(w.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.sensorDeSentimento},n.a.createElement("div",{className:e.tituloDoSensor},n.a.createElement(W.a,{component:"h2",variant:"h6"},this.props.titulo)),n.a.createElement("div",{className:e.regua},n.a.createElement("div",{className:e.iconeEsquerda},n.a.createElement(_.a,{style:{color:B.a[900]}})),n.a.createElement("div",{className:e.sensor},n.a.createElement(H.a,{id:this.props.idDoSensor,defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,style:{color:F.a[900]},marks:!0,min:-4,max:4})),n.a.createElement("div",{className:e.iconeDireita},n.a.createElement(L.a,{style:{color:Y.a[900]}}))))}}]),t}(n.a.Component),Q=Object(G.a)({sensorDeSentimento:{display:"flex",flex:"1",flexDirection:"column",alignItems:"center",width:"100%"},tituloDoSensor:{textAlign:"center",width:"100%"},regua:{display:"flex",flex:"1",flexDirection:"row",alignItems:"center",width:"100%"},iconeEsquerda:{flex:"1",width:"10%"},sensor:{width:"80%"},iconeDireita:{flex:"1",width:"10%"}})(K),X=function(e){Object(O.a)(t,e);var a=Object(w.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.areaDeAnotacoes},n.a.createElement("div",{className:e.dadosParaAnalise},n.a.createElement("div",{className:e.termoAtual},n.a.createElement(j.a,{id:"termo",name:"termo",type:"text",label:"Termo",margin:"normal",value:"palavra",variant:"filled",InputProps:{readOnly:!0},fullWidth:!0}),n.a.createElement(A.a,{variant:"contained","aria-label":"Pesquisar",size:"large",color:"primary",style:{margin:"5px",flex:"1"},fullWidth:!0},n.a.createElement(z.a,{style:{color:F.a[900]}}))),n.a.createElement("div",{className:e.termoTraduzido},n.a.createElement(j.a,{id:"traducaoSugerida",name:"traducaoSugerida",type:"text",label:"Tradu\xe7\xe3o Sugerida",margin:"normal",value:"Tradu\xe7\xe3o do Google Translate",variant:"filled",InputProps:{readOnly:!0},fullWidth:!0}))),n.a.createElement("div",{className:e.dadosDaTraducao},n.a.createElement("div",{className:e.dadosAnotados},n.a.createElement("div",{className:e.traducaoAnotada},n.a.createElement(j.a,{id:"traducaoAnotada",name:"traducaoAnotada",type:"text",label:"Tradu\xe7\xe3o",margin:"normal",value:"Digite aqui a tradu\xe7\xe3o que melhor expressar o significado do termo acima",variant:"filled",fullWidth:!0})),n.a.createElement(Q,{titulo:"Satisfa\xe7\xe3o",idDoSensor:"sensorDeSatisfacao"}),n.a.createElement(Q,{titulo:"Excita\xe7\xe3o",idDoSensor:"sensorDeExcitacao"}),n.a.createElement(Q,{titulo:"Controle",idDoSensor:"sensorDeControle"})),n.a.createElement("div",{className:e.casoDeUso},n.a.createElement(j.a,{id:"casoDeUso",name:"casoDeUso",type:"text",label:"Caso de Uso",margin:"normal",value:"Nesta tela vai o caso de uso para analise; que ser\xe1 um texto longo com algumas linhas",variant:"filled",rows:"11",rowsMax:"11",InputProps:{readOnly:!0},fullWidth:!0,multiline:!0}))),n.a.createElement("div",{className:e.menuDeAcoes},n.a.createElement(A.a,{"aria-label":"Termo Anterior"},n.a.createElement(P.a,null)),n.a.createElement(A.a,{"aria-label":"Pr\xf3ximo Termo"},n.a.createElement(U.a,null)),n.a.createElement(A.a,{"aria-label":"Salvar"},n.a.createElement(I.a,null)),n.a.createElement(A.a,{"aria-label":"Enviar"},n.a.createElement(M.a,null))))}}]),t}(r.Component),Z=S()({areaDeAnotacoes:{display:"flex",alignItems:"center",flexDirection:"column",flex:"1",width:"100%"},dadosParaAnalise:{flex:"1",display:"flex",alignItems:"center",flexDirection:"row",width:"100%"},termoAtual:{flex:"1",margin:"5px",display:"flex",alignItems:"center",flexDirection:"row",width:"100%"},termoTraduzido:{flex:"1",margin:"5px"},dadosDaTraducao:{flex:"1",display:"flex",alignItems:"center",flexDirection:"row",width:"100%"},dadosAnotados:{flex:"1",display:"flex",alignItems:"center",flexDirection:"column",width:"100%",margin:"5px"},traducaoAnotada:{flex:"1",width:"100%"},sentimentos:{display:"flex",flex:"1",margin:"10px",flexDirection:"column"},casoDeUso:{flex:"1",margin:"5px",width:"50%",alignSelf:"start"},menuDeAcoes:{display:"flex",margin:"10px",flexDirection:"row"}})(X),$=t(186),ee=function(e){Object(O.a)(t,e);var a=Object(w.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"MainScreen"},n.a.createElement("div",{className:"Title"},"Torpe"),n.a.createElement("div",{className:"SubTitle"},"Sistema Manual de Tradu\xe7\xe3o e Classifica\xe7\xe3o de Termos para Analise de Sentimentos"),n.a.createElement("div",{className:"MainView"},n.a.createElement(Z,null)),n.a.createElement("div",{className:"Status"},n.a.createElement("i",null,"desenvolvido por: Maicon de Menezes | ver: ",n.a.createElement("b",null,"0.1b")," |",n.a.createElement($.a,{href:"mailto: mdmoliveira@inf.ufpel.edu.br"},"mdmoliveira@inf.ufpel.edu.br"),"|",n.a.createElement("b",null,"maio de 2020"))))}}]),t}(n.a.Component);var ae=function(){return n.a.createElement(l.a,{store:b},n.a.createElement(ee,null))},te=t(9);t.n(te).a.render(n.a.createElement(ae,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.c672f87a.chunk.js.map