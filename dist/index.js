var n=require("react");module.exports=function(e){if("undefined"==typeof window)return 0;var i=n.useState([0,0]),t=i[0],u=i[1];n.useEffect(function(){var n,i,t,o;null!=e&&e.current&&u([(null==e||null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect().width)*((null===(i=window.visualViewport)||void 0===i?void 0:i.scale)||1)||0,(null==e||null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect().height)*((null===(o=window.visualViewport)||void 0===o?void 0:o.scale)||1)||0])},[null==e?void 0:e.current]);var o=new ResizeObserver(function(n){window.requestAnimationFrame(function(){var i,t;null!=e&&e.current&&(null!=n&&null!==(i=n[0])&&void 0!==i&&null!==(t=i.contentBoxSize)&&void 0!==t&&t[0]?u([n[0].contentBoxSize[0].inlineSize,n[0].contentBoxSize[1].inlineSize]):u(null!=n&&n.contentBoxSize?n[0].contentBoxSize.inlineSize:[n[0].contentRect.width,n[0].contentRect.height]))})});return n.useEffect(function(){if(null!=e&&e.current)return o.observe(null==e?void 0:e.current),function(){null!=e&&e.current&&o.unobserve(null==e?void 0:e.current)}}),t};
//# sourceMappingURL=index.js.map
