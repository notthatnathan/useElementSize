import{useState as e,useRef as t,useLayoutEffect as n}from"react";import{v4 as r}from"uuid";let i;const o={},u=(u,l=[0,0])=>{var c;if("undefined"==typeof window)return l;const[d,v]=e(l),z=null==u||null===(c=u.current)||void 0===c?void 0:c.getAttribute("resize-id"),s=t(z||`resize-${r()}`);return i=i||new ResizeObserver(e=>{null==e||e.forEach(e=>{o[(e.target.current||e.target).getAttribute("resize-id")].forEach(t=>t(e))})}),n(()=>{var e,t;if(null!=u&&u.current)return u.current.setAttribute("resize-id",s.current),v([null==u||null===(e=u.current)||void 0===e?void 0:e.getBoundingClientRect().width,null==u||null===(t=u.current)||void 0===t?void 0:t.getBoundingClientRect().height]),o[s.current]=[...o[s.current]||[],e=>{var t;e&&(null!==(t=e.contentBoxSize)&&void 0!==t&&t[0]?v([e.contentBoxSize[0].inlineSize,e.contentBoxSize[0].blockSize]):v(null!=e&&e.contentBoxSize?[e.contentBoxSize.inlineSize,e.contentBoxSize[0].blockSize]:[e.contentRect.width,e.contentRect.height]))}],z&&i.unobserve(null==u?void 0:u.current),i.observe(null==u?void 0:u.current),()=>{null!=u&&u.current&&i.unobserve(null==u?void 0:u.current)}},[null==u?void 0:u.current,z]),d};export{u as default};
//# sourceMappingURL=index.modern.mjs.map