!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):(e||self).useElementSize=n(e.react)}(this,function(e){return function(n){if("undefined"==typeof window)return[0,0];var t=e.useState([0,0]),i=t[0],o=t[1],u=new ResizeObserver(function(e){window.requestAnimationFrame(function(){var n,t;null!=e&&null!==(n=e[0])&&void 0!==n&&null!==(t=n.contentBoxSize)&&void 0!==t&&t[0]?o([e[0].contentBoxSize[0].inlineSize,e[0].contentBoxSize[0].blockSize]):o(null!=e&&e.contentBoxSize?[e[0].contentBoxSize.inlineSize,e[0].contentBoxSize[0].blockSize]:[e[0].contentRect.width,e[0].contentRect.height])})});return e.useLayoutEffect(function(){var e,t,i,l;if(null!=n&&n.current)return o([(null==n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect().width)*((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)||0,(null==n||null===(i=n.current)||void 0===i?void 0:i.getBoundingClientRect().height)*((null===(l=window.visualViewport)||void 0===l?void 0:l.scale)||1)||0]),u.observe(null==n?void 0:n.current),function(){null!=n&&n.current&&u.unobserve(null==n?void 0:n.current)}},[null==n?void 0:n.current]),i}});
//# sourceMappingURL=index.umd.js.map
