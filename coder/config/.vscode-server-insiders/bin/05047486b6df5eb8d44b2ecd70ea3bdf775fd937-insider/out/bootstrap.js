"use strict";(function(u,i){typeof exports=="object"?module.exports=i():u.MonacoBootstrap=i()})(this,function(){const u=typeof require=="function"?require("module"):void 0,i=typeof require=="function"?require("path"):void 0,l=typeof require=="function"?require("fs"):void 0,a=typeof require=="function"?require("util"):void 0;if(Error.stackTraceLimit=100,typeof process<"u"&&!process.env.VSCODE_HANDLES_SIGPIPE){let e=!1;process.on("SIGPIPE",()=>{e||(e=!0,console.error(new Error("Unexpected SIGPIPE")))})}function h(){if(!i||!u||typeof process>"u"){console.warn("enableASARSupport() is only available in node.js environments");return}const e=i.join(__dirname,"../node_modules"),n=`${e}.asar`,r=u._resolveLookupPaths;u._resolveLookupPaths=function(o,S){const t=r(o,S);if(Array.isArray(t)){for(let s=0,c=t.length;s<c;s++)if(t[s]===e){t.splice(s,0,n);break}}return t}}function _(e,n){let r=e.replace(/\\/g,"/");r.length>0&&r.charAt(0)!=="/"&&(r=`/${r}`);let o;return n.isWindows&&r.startsWith("//")?o=encodeURI(`${n.scheme||"file"}:${r}`):o=encodeURI(`${n.scheme||"file"}://${n.fallbackAuthority||""}${r}`),o.replace(/#/g,"%23")}function y(){const e=b();let n={availableLanguages:{}};if(e&&e.env.VSCODE_NLS_CONFIG)try{n=JSON.parse(e.env.VSCODE_NLS_CONFIG)}catch{}if(n._resolvedLanguagePackCoreLocation){const r=Object.create(null);n.loadBundle=function(o,S,t){const s=r[o];if(s){t(void 0,s);return}L(n._resolvedLanguagePackCoreLocation,`${o.replace(/\//g,"!")}.nls.json`).then(function(c){const f=JSON.parse(c);r[o]=f,t(void 0,f)}).catch(c=>{try{n._corruptedFile&&g(n._corruptedFile,"corrupted").catch(function(f){console.error(f)})}finally{t(c,void 0)}})}}return n}function d(){return(typeof self=="object"?self:typeof global=="object"?global:{}).vscode}function b(){const e=d();if(e)return e.process;if(typeof process<"u")return process}function p(){const e=d();if(e)return e.ipcRenderer}async function L(...e){const n=p();if(n)return n.invoke("vscode:readNlsFile",...e);if(l&&i&&a)return(await a.promisify(l.readFile)(i.join(...e))).toString();throw new Error("Unsupported operation (read NLS files)")}function g(e,n){const r=p();if(r)return r.invoke("vscode:writeNlsFile",e,n);if(l&&a)return a.promisify(l.writeFile)(e,n);throw new Error("Unsupported operation (write NLS files)")}return{enableASARSupport:h,setupNLS:y,fileUriFromPath:_}});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/05047486b6df5eb8d44b2ecd70ea3bdf775fd937/core/bootstrap.js.map
