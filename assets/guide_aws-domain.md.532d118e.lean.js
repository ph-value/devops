import{_ as e,c as a,a as l,d as r,w as s,e as t,b as i,r as o,o as n}from"./app.7bd26314.js";const p='{"title":"도메인 연결하기","description":"","frontmatter":{"head":[["meta",{"property":"og:description","content":"도메인 연결하고 SSL 인증서 적용하기"}],["meta",{"property":"twitter:description","content":"도메인 연결하고 SSL 인증서 적용하기"}]]},"headers":[{"level":2,"title":"도메인 발급","slug":"도메인-발급"},{"level":2,"title":"DNS 등록","slug":"dns-등록"},{"level":2,"title":"HTTPS","slug":"https"},{"level":2,"title":"AWS Certificate Manager","slug":"aws-certificate-manager"},{"level":2,"title":"ALB 인증서 추가하기","slug":"alb-인증서-추가하기"},{"level":2,"title":"마무리","slug":"마무리"}],"relativePath":"guide/aws-domain.md"}',c={},d=t("",8),m={class:"image-550"},u=l("ol",{start:"2"},[l("li",null,[i("다행히 아직 선점당하지 않은 도메인이 있습니다. "),l("code",null,".ml"),i("이 뭔가 머신러닝 느낌도 나고 좋아 보입니다. "),l("code",null,"Get it now!"),i("를 누릅니다.")])],-1),g={class:"image-450"},f=l("blockquote",null,[l("p",null,[l("code",null,"Get it now!"),i("로 선택이 불가능하다면, "),l("code",null,"12purple.ml"),i("처럼 전체 도메인으로 다시 검색합니다.")])],-1),T=l("ol",{start:"3"},[l("li",null,[i("12개월 무료를 선택하고 "),l("code",null,"Continue"),i("를 누릅니다.")])],-1),_={class:"image-550"},S=l("ol",{start:"4"},[l("li",null,"이메일 인증 또는 구글, 페이스북으로 로그인하고 최종 정보를 입력하면 도메인이 발급됩니다.")],-1),A={class:"image-450"},h=t("",6),C={class:"image-400"},b=l("ol",{start:"2"},[l("li",null,"무료 플랜을 선택합니다.")],-1),v={class:"image-500"},w=l("ol",{start:"3"},[l("li",null,[l("code",null,"12purple.ml"),i("을 바라보는 경로를 추가합니다.")])],-1),P=t("",2),L={class:"image-450"},k=l("ol",{start:"5"},[l("li",null,"Management Tools > Nameservers 메뉴를 선택합니다.")],-1),D={class:"image-600"},N=l("ol",{start:"6"},[l("li",null,"Cloudflare에서 안내한 네임서버 주소를 입력합니다. 그리고 잠시 기다립니다.")],-1),M={class:"image-600"},B=l("blockquote",null,[l("p",null,"DNS는 전파되는 데 시간이 필요합니다. 빠르면 1~2분, 늦으면 하루가 걸리기도 합니다.")],-1),H=l("ol",{start:"7"},[l("li",null,"잠시 기다리고 새로고침하면 최종적으로 설정이 완료됩니다.")],-1),I={class:"image-600"},V={class:"image-600"},W=l("p",null,[i("🎉 짠! "),l("a",{href:"https://12purple.ml",target:"_blank",rel:"noopener noreferrer"},"https://12purple.ml"),i(" 접속에 성공했습니다! 도메인이 연결되었고.. 앗? "),l("code",null,"HTTPS(SSL)"),i("로 접속됩니다?")],-1),E=l("h2",{id:"https",tabindex:"-1"},[i("HTTPS "),l("a",{class:"header-anchor",href:"#https","aria-hidden":"true"},"#")],-1),y=t("",8),R={class:"image-550"},x=t("",4),z={class:"image-700"},q=t("",5),F={class:"image-600"},G=t("",3),O={class:"image-600"},j=l("ol",{start:"3"},[l("li",null,"도메인 인증 방식을 선택합니다.")],-1),K=l("p",null,[i("인증서는 도메인 소유자만 만들 수 있기 때문에, 소유자 인증을 해야 합니다. "),l("code",null,"DNS validation"),i("은 특정 값을 DNS에 지정하여 소유자임을 증명하는 방식입니다.")],-1),U={class:"image-600"},X=l("ol",{start:"4"},[l("li",null,"인증서를 만들고 상태를 확인합니다.")],-1),J=l("p",null,"인증서 등록 상태를 보면 인증대기 중(Pending validation)인 것을 알 수 있습니다. DNS에 CNAME을 등록하면 ACM이 자동으로 확인하고 인증서를 발급해 줍니다. Amazon Route53을 이용하면 CNAME 등록을 자동으로 할 수 있지만, Cloudflare는 수동으로 추가해야합니다.",-1),Q=l("ol",{start:"5"},[l("li",null,"한 땀 한 땀 추가하고 최초 설정한 프록시도 해제합니다.")],-1),Z=l("ol",{start:"6"},[l("li",null,[i("조금 시간이 지나고 "),l("s",null,"가끔 오래걸림"),i(" 새로고침을 하면 인증서가 발급(Issued)됩니다.")])],-1),Y=t("",4),$={class:"image-650"},ee=l("ol",{start:"2"},[l("li",null,"HTTPS 프로토콜과 443 포트를 설정하고 기존에 생성했던 Target group을 선택합니다.")],-1),ae={class:"image-650"},le=l("ol",{start:"3"},[l("li",null,"조금 전에 만들었던 인증서를 선택합니다.")],-1),re={class:"image-650"},se=l("ol",{start:"4"},[l("li",null,"기존 ALB의 방화벽(Security Group)은 80포트만 오픈했기 때문에 추가로 443포트를 오픈합니다. Security Groups에서 ALB에 설정한 항목을 선택하고 Inbound Rules를 수정합니다.")],-1),te={class:"image-650"},ie=l("p",null,"이제 다시 접속해봅니다.",-1),oe=l("p",null,"🎉 성공입니다! ALB 인증서로 HTTPS가 정상 동작하는 것을 확인하였습니다.",-1),ne=l("h2",{id:"마무리",tabindex:"-1"},[i("마무리 "),l("a",{class:"header-anchor",href:"#마무리","aria-hidden":"true"},"#")],-1),pe=l("p",null,"지금까지 AWS에 웹 서버를 배포하고 도메인을 연결하고 인증서를 적용해 보았습니다. 클라우드 환경이 등장하면서 많은 부분이 간소화되었지만, 여전히 불편한 부분이 있습니다.",-1),ce=l("p",null,"서버를 관리하는 엔지니어들은 더 더 더 자동화를 원하고 안정적인 서비스를 제공하기 위해 노력하였습니다. 다음 장부터 어떤 기술이 있는지 하나씩 알아보겠습니다.",-1);var de=e(c,[["render",function(e,t,i,p,c,de){const me=o("custom-image"),ue=o("Chat-KakaoMsg"),ge=o("Chat-KakaoRoom");return n(),a("div",null,[d,l("div",m,[r(me,{src:"/imgs/aws-domain/freenom-search.png",alt:"freenom"})]),u,l("div",g,[r(me,{src:"/imgs/aws-domain/freenom-result.png",alt:"freenom result"})]),f,T,l("div",_,[r(me,{src:"/imgs/aws-domain/freenom-cart.png",alt:"freenom cart"})]),S,l("div",A,[r(me,{src:"/imgs/aws-domain/freenom-verify.png",alt:"freenom verify"})]),h,l("div",C,[r(me,{src:"/imgs/aws-domain/cf-add-site.png",alt:"Cloudflare Websites"})]),b,l("div",v,[r(me,{src:"/imgs/aws-domain/cf-plan.png",alt:"Cloudflare Plan"})]),w,r(me,{src:"/imgs/aws-domain/cf-add-record.png",alt:"Cloudflare Add Record"}),P,l("div",L,[r(me,{src:"/imgs/aws-domain/cf-nameserver.png",alt:"Cloudflare Nameserver"})]),k,l("div",D,[r(me,{src:"/imgs/aws-domain/freenom-edit.png",alt:"Freenom Edit"})]),N,l("div",M,[r(me,{src:"/imgs/aws-domain/freenom-ns.png",alt:"Freenom Nameserver"})]),B,H,l("div",I,[r(me,{src:"/imgs/aws-domain/cf-success.png",alt:"Cloudflare Success"})]),l("div",V,[r(me,{src:"/imgs/aws-domain/12purple.png",alt:"12Purple"})]),W,E,r(ge,null,{default:s((()=>[r(ue,{msg:"Cloudflare에서 제공하는 프록시 기능을 사용했더니 자동으로 HTTPS 적용이 되네요!",isMe:"true"}),r(ue,{avatar:"senior",user:"촋 CTO",msg:"HTTPS가 뭔지 아시나요?",isMe:"false"}),r(ue,{msg:"아.. 그 HTTP 통신에 암호화 기능을 추가해서 데이터를 안전하게 주고받을 수 있게 해주는 거 아닌가요?",isMe:"true"}),r(ue,{avatar:"senior",user:"촋 CTO",msg:"네네 그러면 지금 Cloudflare가 HTTPS를 적용해주니까 안전한 걸까요??",isMe:"false"}),r(ue,{msg:"네네 그쵸 브라우저에서도 자물쇠 모양이 보이고 안전한 연결이라고 확인했습니다",isMe:"true"}),r(ue,{avatar:"senior",user:"촋 CTO",msg:"사실 방금 적용한 HTTPS 방식은 안전하지 않아요. Cloudflare에서도 개인정보가 포함되어 있을 땐 해당 방식을 사용하지 말라고 안내합니다",isMe:"false"}),r(ue,{msg:"오잉?? ",isMe:"true"}),r(ue,{avatar:"senior",user:"촋 CTO",msg:"HTTPS가 어떻게 동작하는지 정확히 이해하지 않으면, 오히려 보안에 더 위험할 수 있어요. 한번 자세히 알아볼게요!",isMe:"false"})])),_:1}),y,l("div",R,[r(me,{src:"/imgs/aws-domain/cf-flexible.png",alt:"Cloudflare flexible mode"})]),x,l("div",z,[r(me,{src:"/imgs/aws-domain/aws-certificate.png",alt:"Cloudflare flexible mode"})]),q,l("div",F,[r(me,{src:"/imgs/aws-domain/acm-public.png",alt:"ACM public certificate"})]),G,l("div",O,[r(me,{src:"/imgs/aws-domain/acm-domain.png",alt:"ACM Domain"})]),j,K,l("div",U,[r(me,{src:"/imgs/aws-domain/acm-validation.png",alt:"ACM Validation"})]),X,J,r(me,{src:"/imgs/aws-domain/acm-status.png",alt:"ACM Status"}),Q,r(me,{src:"/imgs/aws-domain/cf-validation.png",alt:"Cloudflare DNS"}),Z,r(me,{src:"/imgs/aws-domain/acm-success.png",alt:"ACM issued"}),Y,l("div",$,[r(me,{src:"/imgs/aws-domain/alb-listner.png",alt:"ALB Listner"})]),ee,l("div",ae,[r(me,{src:"/imgs/aws-domain/alb-443.png",alt:"ALB Protocol"})]),le,l("div",re,[r(me,{src:"/imgs/aws-domain/alb-ssl.png",alt:"ALB ssl"})]),se,l("div",te,[r(me,{src:"/imgs/aws-domain/sg-https.png",alt:"ALB SG"})]),ie,oe,ne,pe,ce])}]]);export{p as __pageData,de as default};
