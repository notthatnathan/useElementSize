var n=require("react");module.exports=function(e){if("undefined"==typeof window)return 0;var t=n.useCallback(function(){var n,t;return(null==e||null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect().width)*((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)||0},[null==e?void 0:e.current]),u=n.useState(0),i=u[0],r=u[1],o=new ResizeObserver(function(n){window.requestAnimationFrame(function(){var t,u;null!=e&&e.current&&(null!=n&&null!==(t=n[0])&&void 0!==t&&null!==(u=t.contentBoxSize)&&void 0!==u&&u[0]?r(n[0].contentBoxSize[0].inlineSize):r(null!=n&&n.contentBoxSize?n[0].contentBoxSize.inlineSize:n[0].contentRect.width))})});return n.useEffect(function(){r(t())},[null==e?void 0:e.current]),n.useEffect(function(){if(null!=e&&e.current)return o.observe(null==e?void 0:e.current),function(){null!=e&&e.current&&o.unobserve(null==e?void 0:e.current)}}),i};
//# sourceMappingURL=index.js.map
