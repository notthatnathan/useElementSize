import{useState as e,useLayoutEffect as n}from"react";export default i=>{if("undefined"==typeof window)return[0,0];const[t,o]=e([0,0]),l=new ResizeObserver(e=>{var n,i;null!=e&&null!==(n=e[0])&&void 0!==n&&null!==(i=n.contentBoxSize)&&void 0!==i&&i[0]?o([e[0].contentBoxSize[0].inlineSize,e[0].contentBoxSize[0].blockSize]):o(null!=e&&e.contentBoxSize?[e[0].contentBoxSize.inlineSize,e[0].contentBoxSize[0].blockSize]:[e[0].contentRect.width,e[0].contentRect.height])});return n(()=>{var e,n,t,r;if(null!=i&&i.current)return o([(null==i||null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().width)*((null===(n=window.visualViewport)||void 0===n?void 0:n.scale)||1)||0,(null==i||null===(t=i.current)||void 0===t?void 0:t.getBoundingClientRect().height)*((null===(r=window.visualViewport)||void 0===r?void 0:r.scale)||1)||0]),l.observe(null==i?void 0:i.current),()=>{null!=i&&i.current&&l.unobserve(null==i?void 0:i.current)}},[null==i?void 0:i.current]),t};
//# sourceMappingURL=index.modern.js.map
