(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/project1.bf56edc6.png"},28:function(e,t,a){e.exports=a.p+"static/media/project2.f7e79c7d.png"},29:function(e,t,a){e.exports=a.p+"static/media/project3.7bded960.png"},30:function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},31:function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},32:function(e,t,a){e.exports=a.p+"static/media/linkedin_icon.56ab00e8.png"},33:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.512536cb.png"},34:function(e,t,a){e.exports=a.p+"static/media/profile.9e286e8b.png"},39:function(e,t,a){e.exports=a(53)},44:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),c=a(15),s=a(10),o=a(5),u=a(6),m=a(9),h=a(7),p=a(8),d=a(27),f=a.n(d),E=a(28),v=a.n(E),g=a(29),y=a.n(g),k=[{id:1,title:"Example react Application",description:"A react app that I built, involving JS and core web dev concepts!",link:"https://github.com/davidcastel/The-Path-Of-Hope",image:f.a},{id:2,title:"My API",description:"A REST API that I built from scratch with GET and POST requests!",link:"https://github.com/davidcastel/The-Path-Of-Hope",image:v.a},{id:3,title:"Operating Systems Final Project",description:"My unoque final project for my Unviersity Operating Systems course",link:"https://github.com/davidcastel/The-Path-Of-Hope",image:y.a}],j=function(e){var t=e.project,a=t.title,n=t.image,i=t.description,l=t.link;return r.a.createElement("div",{style:{display:"inline-block",width:300,margin:10}},r.a.createElement("h3",null,a),r.a.createElement("img",{src:n,alt:"profile",style:{width:200,height:120}}),r.a.createElement("p",null,i),r.a.createElement("a",{href:l},l))},b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Highlighted Projects "),r.a.createElement("div",null,k.map((function(e){return r.a.createElement(j,{key:e.id,project:e})}))))},O=a(30),w=a.n(O),A=a(31),S=a.n(A),C=a(32),I=a.n(C),P=a(33),M=a.n(P),D=[{id:1,link:"",image:w.a},{id:2,link:"",image:S.a},{id:3,link:"",image:I.a},{id:4,link:"",image:M.a}],x=function(e){var t=e.SocialProfile,a=t.link,n=t.image;return r.a.createElement("span",null,r.a.createElement("a",{href:a},r.a.createElement("img",{src:n,alt:"Social-profile",style:{width:35,height:35,margin:10}})))},N=function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Connect With Me "),r.a.createElement("div",null,D.map((function(e){return r.a.createElement(x,{key:e.id,SocialProfile:e})}))))},T=["a software engineer","a music lover","an ethusaiastic learner","an adveture seeker"],B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={titleIndex:0,fadeIn:!0},a.animateTitles=function(){a.titleInterval=setInterval((function(){var e=(a.state.titleIndex+1)%T.length;a.setState({titleIndex:e,fadeIn:!0}),a.timeout=setTimeout((function(){return a.setState({fadeIn:!1})}),2e3)}),4e3)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.setState({fadeIn:!1})}),2e3),this.animateTitles()}},{key:"componentWillUnmount",value:function(){clearInterval(this.titleInterval),clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.state.fadeIn,t=T[this.state.titleIndex];return r.a.createElement("p",{className:e?"title-fade-in":"title-fade-out"},"I am ",t)}}]),t}(n.Component),U=a(34),_=a.n(U),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={displayBio:!1},a.toggleDisplayBio=function(){a.setState({displayBio:!a.state.displayBio})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:_.a,alt:"Profile",className:"profile"}),r.a.createElement("h1",null," Hello! "),r.a.createElement("p",null,"My name is david. "),r.a.createElement(B,null),r.a.createElement("p",null," I 'm always looking foward to working on meaningful"),this.state.displayBio?r.a.createElement("div",null,r.a.createElement("p",null," I am into web dev and programming"),r.a.createElement("p",null," Besides coding, I like to run"),r.a.createElement("button",{onClick:this.toggleDisplayBio}," Show less")):r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleDisplayBio}," Read more ")),r.a.createElement("hr",null),r.a.createElement(b,null),r.a.createElement("hr",null),r.a.createElement(N,null))}}]),t}(n.Component),J=function(e){var t=e.joke,a=t.setup,n=t.punchline;return r.a.createElement("p",{style:{margin:20}},a," ",r.a.createElement("em",null," ",n," "))},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={joke:{},jokes:[]},a.fetchJokes=function(){fetch("https://official-joke-api.appspot.com/random_ten").then((function(e){return e.json()})).then((function(e){return a.setState({jokes:e})})).catch((function(e){return alert(e.message)}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://official-joke-api.appspot.com/random_joke").then((function(e){return e.json()})).then((function(t){return e.setState({joke:t})})).catch((function(e){return alert(e.message)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Highlighted Joke "),r.a.createElement(J,{joke:this.state.joke}),r.a.createElement("hr",null),r.a.createElement("h3",null," Want ten new jokes> "),r.a.createElement("button",{onClick:this.fetchJokes}," Click me! "),this.state.jokes.map((function(e){return r.a.createElement(J,{key:e.id,joke:e})})))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={artistQuery:""},a.updadateArtistQuery=function(e){a.setState({artistQuery:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.searchArtist()},a.searchArtist=function(){a.props.searchArtist(a.state.artistQuery)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{onChange:this.updadateArtistQuery,onKeyPress:this.handleKeyPress,placeholder:"Search for an Artist"}),r.a.createElement("button",{onClick:this.searchArtist}," Search "))}}]),t}(n.Component),K=function(e){var t=e.artist;if(!t)return null;var a=t.images,n=t.name,i=t.followers,l=t.genres;return r.a.createElement("div",null,r.a.createElement("h3",null," ",n," "),r.a.createElement("p",null," ",i.total," followers "),r.a.createElement("p",null," ",l.join(",")," "),r.a.createElement("img",{src:a[0]&&a[0].url,alt:"artist-profile",style:{width:200,height:200,borderRadius:100,objectFit:"cover"}}))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={playing:!1,audio:null,playingPreviewUrl:null},a.playAudio=function(e){return function(){var t=new Audio(e);a.state.playing?(a.state.audio.pause(),a.state.playingPreviewUrl===e?a.setState({playing:!1}):(t.play(),a.setState({audio:t,playingPreviewUrl:e}))):(t.play(),a.setState({playing:!0,audio:t,playingPreviewUrl:e}))}},a.trackIcon=function(e){return e.preview_url?a.state.playing&&a.state.playingPreviewUrl===e.preview_url?r.a.createElement("span",null," | | "):r.a.createElement("span",null,"\u25b6"):r.a.createElement("span",null," N/A ")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tracks;return r.a.createElement("div",null,t.map((function(t){var a=t.id,n=t.name,i=t.album,l=t.preview_url;return r.a.createElement("div",{key:a,onClick:e.playAudio(l),className:"track"},r.a.createElement("img",{src:i.images[0].url,alt:"",className:"track-image"}),r.a.createElement("p",{className:"track-text"}," ",n," "),r.a.createElement("p",{className:"track-icon"},e.trackIcon(t)))})))}}]),t}(n.Component),q="https://spotify-api-wrapper.appspot.com",F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={artist:null,tracks:[]},a.searchArtist=function(e){fetch("".concat(q,"/artist/").concat(e)).then((function(e){return e.json()})).then((function(e){if(e.artists.total>0){var t=e.artists.items[0];a.setState({artist:t}),fetch("".concat(q,"/artist/").concat(t.id,"/top-tracks")).then((function(e){return e.json()})).then((function(e){return a.setState({tracks:e.tracks})})).catch((function(e){return alert(e.message)}))}})).catch((function(e){return alert(e.message)}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchArtist("Bruno Mars")}},{key:"render",value:function(){return console.log("this.state",this.state),r.a.createElement("div",null,r.a.createElement("h2",null," Music Master "),r.a.createElement(W,{searchArtist:this.searchArtist}),r.a.createElement(K,{artist:this.state.artist}),r.a.createElement(R,{tracks:this.state.tracks}))}}]),t}(n.Component),G=(a(44),F),z=(a(22),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),i=Math.floor(t/864e5);console.log("seconds",a,"minutes",n,"hours",r,"days",i),this.setState({days:i,hours:r,minutes:n,seconds:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Clock-days"},this.leading0(this.state.days)," days"),r.a.createElement("div",{className:"Clock-hours"},this.leading0(this.state.hours)," hours"),r.a.createElement("div",{className:"Clock-minutes"},this.leading0(this.state.minutes)," minutes"),r.a.createElement("div",{className:"Clock-seconds"},this.leading0(this.state.seconds)," seconds"))}}]),t}(n.Component)),L=a(55),V=a(36),X=a(56),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={deadline:"December 25, 2020",newDeadline:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"changeDeadline",value:function(){this.setState({deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-title"}," Countdown to ",this.state.deadline," "),r.a.createElement(z,{deadline:this.state.deadline}),r.a.createElement("div",{className:"form-input"},r.a.createElement(L.a,{inline:!0,className:"justify-content-center"},r.a.createElement(V.a,{className:"Deadline-input",placeholder:"new date",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),r.a.createElement(X.a,{onClick:function(){return e.changeDeadline()}}," Submit "))))}}]),t}(n.Component),Z=a(16),$=function(e){var t=e.children,a={display:"inline-block",margin:10,marginBottom:30};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",{style:a},r.a.createElement(Z.a,{to:"/"}," Home ")),r.a.createElement("h3",{style:a},r.a.createElement(Z.a,{to:"/jokes"}," Jokes ")),r.a.createElement("h3",{style:a},r.a.createElement(Z.a,{to:"/music-master"}," Music Master ")),r.a.createElement("h3",{style:a},r.a.createElement(Z.a,{to:"/countdown-champ"}," Countdown Champ "))),t)};a(52);l.a.render(r.a.createElement(c.b,{history:Object(s.a)()},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement($,null,r.a.createElement(H,null))}}),r.a.createElement(c.a,{path:"/jokes",render:function(){return r.a.createElement($,null,r.a.createElement(Q,null))}}),r.a.createElement(c.a,{path:"/music-master",render:function(){return r.a.createElement($,null,r.a.createElement(G,null))}}),r.a.createElement(c.a,{path:"/countdown-champ",render:function(){return r.a.createElement($,null,r.a.createElement(Y,null))}}))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7c2d9697.chunk.js.map