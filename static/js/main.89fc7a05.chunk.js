(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,a,t){},41:function(e,a,t){e.exports=t(72)},48:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(25),i=t.n(s),r=(t(46),t(47),t(48),t(14)),l=t(15),c=t(17),u=t(16),h=(t(22),t(11)),p=t(73),m=t(74),d=t(75),f=t(76),b=t(77),g=t(39),w=t.n(g).a.initializeApp({apiKey:"AIzaSyAl0qGxzd8yBF6OPO42u6y4pSgWp8GRcUU",authDomain:"ebooks-9d630.firebaseapp.com",databaseURL:"https://ebooks-9d630.firebaseio.com",projectId:"ebooks-9d630",storageBucket:"ebooks-9d630.appspot.com",messagingSenderId:"952274376619",appId:"1:952274376619:web:98e4db9847961077a1a4ee",measurementId:"G-7W4JLNMZ88"}),y=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",message:""},n.login=n.login.bind(Object(h.a)(n)),n.signup=n.signup.bind(Object(h.a)(n)),n}return Object(l.a)(t,[{key:"login",value:function(e){var a=this;e.preventDefault(),w.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e)})).catch((function(e){console.log(e),a.setState({message:"Check Email and Password"})}))}},{key:"signup",value:function(e){var a=this;e.preventDefault(),w.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e)})).catch((function(e){console.log(e),a.setState({message:"Check Email and Password"})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row row-content align-items-center justify-content-center"},o.a.createElement("div",{className:"col-lg-7 col-12"},o.a.createElement("h2",{className:"text-center"},"Welcome To E-Books")),o.a.createElement("div",{className:"col-lg-5 col-12 form-box"},o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{for:"email"},"Email"),o.a.createElement(f.a,{type:"email",name:"email",id:"email",onChange:function(a){e.setState({email:a.target.value})},placeholder:"Enter Email"})),o.a.createElement(m.a,null,o.a.createElement(d.a,{for:"password"},"Password"),o.a.createElement(f.a,{type:"password",name:"password",id:"password",onChange:function(a){e.setState({password:a.target.value})},placeholder:"Enter Password"})),o.a.createElement("br",null),o.a.createElement("p",{className:"text-center",style:{color:"white"}},this.state.message),o.a.createElement(b.a,{color:"success",size:"md",block:!0,onClick:this.login},"Login"),o.a.createElement(b.a,{color:"info",size:"md",block:!0,onClick:this.signup},"Sign Up")))),o.a.createElement("div",{className:"row row-content"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("small",null,"Note: If you are a new user fill the details and click on signup"))),o.a.createElement("div",{className:"row row-content"})))}}]),t}(n.Component),v=t(21),k=t(78),E=t(79),x=t(80),N=function(e){var a=e.book.map((function(e){return o.a.createElement("div",{className:"col-12 col-lg-4"},o.a.createElement(k.a,{key:e.id},o.a.createElement(E.a,null,o.a.createElement(x.a,{className:"text-center"},e.Title),o.a.createElement(v.b,{to:"/books/".concat(e.id),className:"bookslist"},o.a.createElement(b.a,{block:!0,className:"openbtn"},"Open")))),o.a.createElement("br",null),o.a.createElement("br",null))}));return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"row row-content bookbg"},o.a.createElement("div",{className:"col-lg-4 col-12"},o.a.createElement("br",null),o.a.createElement("h2",{className:"text-center heading"},"Welcome to E-Books"))),o.a.createElement("div",{className:"row row-content container"},a))},j=t(81),I=t(82),O=t(83),B=t(87),C=t(84),T=t(85),q=t(86),L=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(h.a)(n)),n}return Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"logout",value:function(){w.auth().signOut()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{expand:"md"},o.a.createElement("div",{className:"container"},o.a.createElement(I.a,{onClick:this.toggleNav},o.a.createElement("span",{className:"fa fa-bars fa-md"})),o.a.createElement(O.a,{className:"mr-auto",href:"/home"},o.a.createElement("span",{className:"fa fa-book fa-lg","aria-hidden":"true"})," E-Books"),o.a.createElement(B.a,{isOpen:this.state.isNavOpen,navbar:!0},o.a.createElement(C.a,{className:"ml-auto align-items-center",navbar:!0},o.a.createElement(T.a,null,o.a.createElement(q.a,{className:"userdetails",color:"light",pill:!0},o.a.createElement("span",{className:"fa fa-user"}," ",this.props.user))),o.a.createElement(T.a,null,o.a.createElement(b.a,{onClick:this.logout,className:"logoutbtn"},o.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Logout")))))))}}]),t}(n.Component),S=t(30),A=t.n(S),P=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"inbook"},o.a.createElement("br",null),o.a.createElement("div",{className:"container"},o.a.createElement("span",{className:"fa fa-line-chart fa-lg"}," ",o.a.createElement(A.a,{end:100})),o.a.createElement("span",{className:"fa fa-users fa-lg float-right"}," ",o.a.createElement(A.a,{end:1e3})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"text-center"},this.props.story.Title),o.a.createElement("br",null)),o.a.createElement("div",{className:"container content"},o.a.createElement("p",null,this.props.story.Content),o.a.createElement("p",null,this.props.story.Content),o.a.createElement("p",null,this.props.story.Content),o.a.createElement("p",null,this.props.story.Content),o.a.createElement("p",null,this.props.story.Content),o.a.createElement("p",null,this.props.story.Content)))}}]),t}(n.Component),W=t(8),U=[{id:0,Title:"Book1",Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",count:0},{id:1,Title:"Book2",Content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",count:0},{id:2,Title:"Book3",Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",count:0},{id:3,Title:"Book4",Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",count:0},{id:4,Title:"Book5",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:5,Title:"Book6",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:6,Title:"Book7",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:7,Title:"Book8",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:8,Title:"Book9",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:9,Title:"Book10",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:10,Title:"Book11",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0},{id:11,Title:"Book12",Content:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",count:0}],z=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={books:U},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(L,{user:this.props.user}),o.a.createElement(W.d,null,o.a.createElement(W.b,{path:"/home",component:function(){return o.a.createElement(N,{book:e.state.books})}}),o.a.createElement(W.b,{path:"/books/:bookId",component:function(a){var t=a.match;return o.a.createElement(P,{story:e.state.books.filter((function(e){return e.id===parseInt(t.params.bookId,10)}))[0],username:e.props.user})}}),o.a.createElement(W.a,{to:"/home"})))}}]),t}(n.Component),D=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(z,{user:this.props.user})))}}]),t}(n.Component),M=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={user:{}},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;w.auth().onAuthStateChanged((function(a){a?e.setState({user:a}):e.setState({user:null})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.user?o.a.createElement(D,{user:this.state.user.email}):o.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.89fc7a05.chunk.js.map