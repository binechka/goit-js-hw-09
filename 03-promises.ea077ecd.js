!function(){var e=document.querySelector('[type="submit"]'),n=document.querySelector('[name="amount"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="delay"]');function c(e,n){var o=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){o?t({position:e,delay:n}):c({position:e,delay:n})}),n)}))}e.addEventListener("click",(function(e){e.preventDefault();for(var a=0;a<n.value;a++)c(a+1,Number(t.value)+Number(o.value)*a).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.ea077ecd.js.map
