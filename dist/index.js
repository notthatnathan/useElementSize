var e,n=require("react"),t=[0,0],i={};module.exports=function(r){var u=n.useState(t),o=u[0],c=u[1],l=n.useRef("resize-"+(Object.keys(i).length+1));return e=e||new ResizeObserver(function(e){window.requestAnimationFrame(function(){null==e||e.forEach(function(e){i[(e.target.current||e.target).getAttribute("resize-id")](e)})})}),n.useLayoutEffect(function(){var n,t;if(null!=r&&r.current)return r.current.setAttribute("resize-id",l.current),c([null==r||null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect().width,null==r||null===(t=r.current)||void 0===t?void 0:t.getBoundingClientRect().height]),i[l.current]=function(e){var n;e&&(null!==(n=e.contentBoxSize)&&void 0!==n&&n[0]?c([e.contentBoxSize[0].inlineSize,e.contentBoxSize[0].blockSize]):c(null!=e&&e.contentBoxSize?[e.contentBoxSize.inlineSize,e.contentBoxSize[0].blockSize]:[e.contentRect.width,e.contentRect.height]))},e.observe(null==r?void 0:r.current),function(){null!=r&&r.current&&e.unobserve(null==r?void 0:r.current)}},[null==r?void 0:r.current]),o};
//# sourceMappingURL=index.js.map
