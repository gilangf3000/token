function _0x8e49(_0x1eafbb,_0x4753e9){const _0x7bbad6=_0x7bba();return _0x8e49=function(_0x8e49d3,_0x844089){_0x8e49d3=_0x8e49d3-0xae;let _0x2710a2=_0x7bbad6[_0x8e49d3];return _0x2710a2;},_0x8e49(_0x1eafbb,_0x4753e9);}const _0x2d2f07=_0x8e49,_0x120b13=_0x8e49,_0x1211a1=_0x8e49,_0x56a41f=_0x8e49;(function(_0x14dfff,_0x461689){const _0x5a33ba=_0x8e49,_0x3c4495=_0x8e49,_0x225143=_0x8e49,_0x3c83f3=_0x8e49,_0x4227f3=_0x14dfff();while(!![]){try{const _0x4c201a=parseInt(_0x5a33ba(0xb2))/0x1*(-parseInt(_0x5a33ba(0xc1))/0x2)+parseInt(_0x225143(0xb6))/0x3*(parseInt(_0x3c83f3('0xc2'))/0x4)+-parseInt(_0x3c4495(0xc7))/0x5+parseInt(_0x3c4495('0xbe'))/0x6*(-parseInt(_0x5a33ba('0xbc'))/0x7)+parseInt(_0x225143(0xae))/0x8+-parseInt(_0x5a33ba('0xc0'))/0x9*(parseInt(_0x3c83f3('0xbf'))/0xa)+-parseInt(_0x5a33ba('0xba'))/0xb*(-parseInt(_0x225143('0xc5'))/0xc);if(_0x4c201a===_0x461689)break;else _0x4227f3['push'](_0x4227f3['shift']());}catch(_0x101612){_0x4227f3['push'](_0x4227f3['shift']());}}}(_0x7bba,0x38849));const express=require(_0x2d2f07(0xb4)),http=require(_0x2d2f07('0xb5')),socketIo=require('socket.io'),{Oyo,Aladin,IndoMaret,ICQ,klikwa}=require(_0x1211a1(0xb8)),app=express(),server=http['createServer'](app),io=socketIo(server);app['use'](express['static'](_0x2d2f07('0xb0'))),io['on'](_0x56a41f('0xc3'),_0x234a44=>{const _0x9897e2=_0x2d2f07,_0x584202=_0x2d2f07,_0x53f46e=_0x2d2f07,_0x1e3ebb=_0x120b13;console[_0x9897e2(0xc4)](_0x584202(0xbb)),_0x234a44['on'](_0x53f46e('0xaf'),({nomor:_0x5e6f02,jumlahLayanan:_0x127cef})=>{runServices(_0x234a44,_0x5e6f02,_0x127cef);}),_0x234a44['on'](_0x53f46e('0xb7'),()=>{const _0x532bc0=_0x1e3ebb;console['log'](_0x532bc0('0xc6'));});});function _0x7bba(){const _0x312f79=['User\x20connected','1582273AXotOd','serviceResult','6gznFUx','110nGZsBM','371529CgELbr','775562DLHBPu','948uFyYaW','connection','log','36TwGEjd','User\x20disconnected','38670YcvGsS','2511792ycWZxh','startServices','public','listen','1FRUken','length','express','http','159mbKKnk','disconnect','./lib/sms','emit','3595559yCfrWW'];_0x7bba=function(){return _0x312f79;};return _0x7bba();}function sleep(_0x170905){return new Promise(_0x3f7721=>setTimeout(_0x3f7721,_0x170905));}async function runServices(_0x257b2e,_0x328165,_0x51a4bc){const _0x25255f=_0x2d2f07,_0xca6e33=_0x2d2f07,_0x942354=_0x1211a1,_0x58e814=_0x2d2f07,_0x3fdffd=[klikwa,ICQ,Aladin,Oyo,IndoMaret];for(let _0x3d54f4=0x0;_0x3d54f4<_0x51a4bc;_0x3d54f4++){const _0x4114b7=_0x3d54f4%_0x3fdffd[_0x25255f(0xb3)],_0x36e046=_0x3fdffd[_0x4114b7];try{const _0x29c3a5=await _0x36e046(_0x328165);_0x257b2e['emit'](_0xca6e33(0xbd),{'index':_0x4114b7,'result':_0x29c3a5,'success':!![]});}catch(_0x5ab765){_0x257b2e['emit'](_0x25255f('0xbd'),{'index':_0x4114b7,'error':_0x5ab765,'success':![]});}_0x3d54f4<_0x51a4bc-0x1&&await sleep(0x3e8);}_0x257b2e[_0x58e814(0xb9)]('servicesCompleted',_0x51a4bc);}server[_0x1211a1('0xb1')](0xbb8,()=>{const _0xd8bcd8=_0x2d2f07;console[_0xd8bcd8('0xc4')]('Server\x20is\x20running\x20on\x20port\x203000');});
