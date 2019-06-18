const isIE11ByUserAgent = navigator.userAgent.indexOf('Windows') > -1 && navigator.userAgent.indexOf('rv:11') > -1
const isIE11ByProperties = !!window.MSInputMethodContext && !!document.documentMode
const isIE11 = isIE11ByUserAgent || isIE11ByProperties
const isIEEdge = /Edge/i.test(navigator.userAgent)

if (window.track && window.track.app_forceFetchPolyfill && (isIE11 || isIEEdge)) {
  window.fetch = undefined
}
