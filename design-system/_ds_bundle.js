/* @ds-bundle: {"format":4,"namespace":"DoveThistleDesignSystem_e5a4b5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"CarouselControls","sourcePath":"components/actions/CarouselControls.jsx"},{"name":"CartQuantitySelector","sourcePath":"components/actions/CartQuantitySelector.jsx"},{"name":"CartDrawer","sourcePath":"components/cart/CartDrawer.jsx"},{"name":"CollectionFilterSortDrawer","sourcePath":"components/collection/CollectionFilterSortDrawer.jsx"},{"name":"CollectionToolbar","sourcePath":"components/collection/CollectionToolbar.jsx"},{"name":"ProductCardCollectionFilterSort","sourcePath":"components/collection/ProductCardCollectionFilterSort.jsx"},{"name":"AccordionFAQ","sourcePath":"components/faq/AccordionFAQ.jsx"},{"name":"FAQSection","sourcePath":"components/faq/FAQSection.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"NavigationMenu","sourcePath":"components/navigation/NavigationMenu.jsx"},{"name":"NavigationSharedCategoryClothing","sourcePath":"components/navigation/NavigationSharedCategoryClothing.jsx"},{"name":"NavigationSharedCategoryGifts","sourcePath":"components/navigation/NavigationSharedCategoryGifts.jsx"},{"name":"NavigationSharedCategoryHomeLiving","sourcePath":"components/navigation/NavigationSharedCategoryHomeLiving.jsx"},{"name":"NavigationSharedCategorySeasonal","sourcePath":"components/navigation/NavigationSharedCategorySeasonal.jsx"},{"name":"NavigationSharedCategoryShoes","sourcePath":"components/navigation/NavigationSharedCategoryShoes.jsx"},{"name":"AccordionProductDetails","sourcePath":"components/product/AccordionProductDetails.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"ProductCardGridMobile","sourcePath":"components/product/ProductCardGridMobile.jsx"},{"name":"ProductCardSliderMobile","sourcePath":"components/product/ProductCardSliderMobile.jsx"},{"name":"ProductSwatches","sourcePath":"components/product/ProductSwatches.jsx"},{"name":"IconTrust30DayReturns","sourcePath":"components/trust/IconTrust30DayReturns.jsx"},{"name":"IconTrustFreeShipping","sourcePath":"components/trust/IconTrustFreeShipping.jsx"},{"name":"IconTrustHelpfulSupport","sourcePath":"components/trust/IconTrustHelpfulSupport.jsx"},{"name":"IconTrustSecureCheckout","sourcePath":"components/trust/IconTrustSecureCheckout.jsx"},{"name":"TrustItemPurchase","sourcePath":"components/trust/TrustItemPurchase.jsx"},{"name":"TrustStrip","sourcePath":"components/trust/TrustStrip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"69578994cece","components/actions/CarouselControls.jsx":"87a061c9af0d","components/actions/CartQuantitySelector.jsx":"e15050eb019a","components/cart/CartDrawer.jsx":"4e87cb66b9b1","components/collection/CollectionFilterSortDrawer.jsx":"2d0f22db05e2","components/collection/CollectionToolbar.jsx":"67f2e655e0d4","components/collection/ProductCardCollectionFilterSort.jsx":"faccdfedd098","components/faq/AccordionFAQ.jsx":"084429b167e4","components/faq/FAQSection.jsx":"129cee5188da","components/navigation/AnnouncementBar.jsx":"43143d0ddad4","components/navigation/Footer.jsx":"14db8116d4c5","components/navigation/Header.jsx":"b46f9e4bc8c7","components/navigation/NavigationMenu.jsx":"78392ad3d3df","components/navigation/NavigationSharedCategoryClothing.jsx":"66c019333559","components/navigation/NavigationSharedCategoryGifts.jsx":"0b314e2630e4","components/navigation/NavigationSharedCategoryHomeLiving.jsx":"363a2ea47dba","components/navigation/NavigationSharedCategorySeasonal.jsx":"f095afc5cb92","components/navigation/NavigationSharedCategoryShoes.jsx":"bcf2ce2a41b9","components/product/AccordionProductDetails.jsx":"30dc9758bae1","components/product/ProductCard.jsx":"6584aab1ef78","components/product/ProductCardGridMobile.jsx":"ffac9f418c46","components/product/ProductCardSliderMobile.jsx":"0da2ad9c08fe","components/product/ProductSwatches.jsx":"17c5f3faaad9","components/trust/IconTrust30DayReturns.jsx":"a19fda20728f","components/trust/IconTrustFreeShipping.jsx":"ce7716abe66d","components/trust/IconTrustHelpfulSupport.jsx":"88700da94d68","components/trust/IconTrustSecureCheckout.jsx":"aee3fd915fd9","components/trust/TrustItemPurchase.jsx":"04f5bf244d3b","components/trust/TrustStrip.jsx":"173b3d4891a0","ui_kits/storefront/CollectionScreen.jsx":"883b2584b399","ui_kits/storefront/HomeScreen.jsx":"34d9d5f1a6fb","ui_kits/storefront/ProductScreen.jsx":"574d6759a31d","ui_kits/storefront/Shell.jsx":"2268ea047a23"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoveThistleDesignSystem_e5a4b5 = window.DoveThistleDesignSystem_e5a4b5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
// figma node: 427:2208 Button (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "style2=" + __venc(p.style2) + '|' + "size=" + __venc(p.size);
function Button(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "ADD TO CART",
    style2: _p.style2 ?? "primary",
    size: _p.size ?? "lg"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    "data-dt-btn": "primary",
    role: "button",
    tabIndex: 0,
    onClick: props.onClick,
    style: {
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 320,
      height: 52,
      backgroundColor: "var(--color-action-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-24) * 1px)",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingRight: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "var(--color-bg-surface)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    "data-dt-btn": "primary",
    role: "button",
    tabIndex: 0,
    onClick: props.onClick,
    style: {
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 240,
      height: 48,
      backgroundColor: "rgb(106,52,70)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, _p.label ?? props.text1 ?? "SHOP NOW"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    "data-dt-btn": "secondary",
    role: "button",
    tabIndex: 0,
    onClick: props.onClick,
    style: {
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.45 : 1,
      width: 190,
      height: 48,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, _p.label ?? props.text1 ?? "Clear All"));
  const __impls = {
    // figma: Style=Primary, Size=Large
    "style2=primary|size=lg": __body0,
    // figma: Style=Primary, Size=Standard
    "style2=primary|size=standard": __body1,
    // figma: Style=Secondary, Size=Standard
    "style2=secondary|size=standard": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Button, __ds_default_components_actions_Button_8qpwqe: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/CarouselControls.jsx
try { (() => {
// figma node: 430:2735 Carousel Controls (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size);
function CarouselControls(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(247,242,233)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      overflow: "hidden",
      backgroundColor: "rgb(106,52,70)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.273,
    height: 30.545,
    viewBox: "0 0 15.273 30.545",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.09,
      top: 12.727,
      width: 15.273,
      height: 30.545
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.398 1.125 L 17.523 0 L 15.273 -2.25 L 14.148 -1.125 L 15.273 0 L 16.398 1.125 Z M 0 15.273 L -1.125 14.148 L -2.25 15.273 L -1.125 16.398 L 0 15.273 Z M 14.148 31.67 L 15.273 32.795 L 17.523 30.545 L 16.398 29.421 L 15.273 30.545 L 14.148 31.67 Z M 15.273 0 L 14.148 -1.125 L -1.125 14.148 L 0 15.273 L 1.125 16.398 L 16.398 1.125 L 15.273 0 Z M 0 15.273 L -1.125 16.398 L 14.148 31.67 L 15.273 30.545 L 16.398 29.421 L 1.125 14.148 L 0 15.273 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      overflow: "hidden",
      backgroundColor: "rgb(106,52,70)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.273,
    height: 30.545,
    viewBox: "0 0 15.273 30.545",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.637,
      top: 12.727,
      width: 15.273,
      height: 30.545
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.125 -1.125 L 0 -2.25 L -2.25 0 L -1.125 1.125 L 0 0 L 1.125 -1.125 Z M 15.273 15.273 L 16.398 16.398 L 17.523 15.273 L 16.398 14.148 L 15.273 15.273 Z M -1.125 29.421 L -2.25 30.545 L 0 32.795 L 1.125 31.67 L 0 30.545 L -1.125 29.421 Z M 0 0 L -1.125 1.125 L 14.148 16.398 L 15.273 15.273 L 16.398 14.148 L 1.125 -1.125 L 0 0 Z M 15.273 15.273 L 14.148 14.148 L -1.125 29.421 L 0 30.545 L 1.125 31.67 L 16.398 16.398 L 15.273 15.273 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 44,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(247,242,233)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      overflow: "hidden",
      backgroundColor: "rgb(106,52,70)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.999,
      top: 10,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.804 0.804 L 13.607 0 L 12 -1.607 L 11.196 -0.804 L 12 0 L 12.804 0.804 Z M 0 12 L -0.804 11.196 L -1.607 12 L -0.804 12.804 L 0 12 Z M 11.196 24.804 L 12 25.607 L 13.607 24 L 12.804 23.196 L 12 24 L 11.196 24.804 Z M 12 0 L 11.196 -0.804 L -0.804 11.196 L 0 12 L 0.804 12.804 L 12.804 0.804 L 12 0 Z M 0 12 L -0.804 12.804 L 11.196 24.804 L 12 24 L 12.804 23.196 L 0.804 11.196 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      overflow: "hidden",
      backgroundColor: "rgb(106,52,70)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.001,
      top: 10,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.804 -0.804 L 0 -1.607 L -1.607 0 L -0.804 0.804 L 0 0 L 0.804 -0.804 Z M 12 12 L 12.804 12.804 L 13.607 12 L 12.804 11.196 L 12 12 Z M -0.804 23.196 L -1.607 24 L 0 25.607 L 0.804 24.804 L 0 24 L -0.804 23.196 Z M 0 0 L -0.804 0.804 L 11.196 12.804 L 12 12 L 12.804 11.196 L 0.804 -0.804 L 0 0 Z M 12 12 L 11.196 11.196 L -0.804 23.196 L 0 24 L 0.804 24.804 L 12.804 12.804 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Size=Desktop
    "size=desktop": __body0,
    // figma: Size=Mobile
    "size=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CarouselControls, __ds_default_components_actions_CarouselControls_xp52ek: CarouselControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CarouselControls.jsx", error: String((e && e.message) || e) }); }

// components/actions/CartQuantitySelector.jsx
try { (() => {
// figma node: 276:1063 Cart / Quantity Selector
function CartQuantitySelector(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 108,
      height: 36,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 35,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "−")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 35,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "+")));
}
Object.assign(__ds_scope, { CartQuantitySelector, __ds_default_components_actions_CartQuantitySelector_177ffr8: CartQuantitySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CartQuantitySelector.jsx", error: String((e && e.message) || e) }); }

// components/collection/CollectionToolbar.jsx
try { (() => {
// figma node: 430:2778 Collection Toolbar (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function CollectionToolbar(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1024,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.667,
    height: 13.333,
    viewBox: "0 0 18.667 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.667,
      top: 5.333,
      width: 18.667,
      height: 13.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 L -0.625 -0.625 L -0.625 0.625 L 0 0.625 L 0 0 L 0 -0.625 Z M 18.667 0.625 L 19.292 0.625 L 19.292 -0.625 L 18.667 -0.625 L 18.667 0 L 18.667 0.625 Z M 2.667 6.042 L 2.042 6.042 L 2.042 7.292 L 2.667 7.292 L 2.667 6.667 L 2.667 6.042 Z M 16 7.292 L 16.625 7.292 L 16.625 6.042 L 16 6.042 L 16 6.667 L 16 7.292 Z M 6.667 12.708 L 6.042 12.708 L 6.042 13.958 L 6.667 13.958 L 6.667 13.333 L 6.667 12.708 Z M 12 13.958 L 12.625 13.958 L 12.625 12.708 L 12 12.708 L 12 13.333 L 12 13.958 Z M 0 0 L 0 0.625 L 18.667 0.625 L 18.667 0 L 18.667 -0.625 L 0 -0.625 L 0 0 Z M 2.667 6.667 L 2.667 7.292 L 16 7.292 L 16 6.667 L 16 6.042 L 2.667 6.042 L 2.667 6.667 Z M 6.667 13.333 L 6.667 13.958 L 12 13.958 L 12 13.333 L 12 12.708 L 6.667 12.708 L 6.667 13.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Filter & Sort")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "var(--color-text-muted)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "69 products"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 10,
    viewBox: "0 0 14 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 14,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 L -0.625 -0.625 L -0.625 0.625 L 0 0.625 L 0 0 L 0 -0.625 Z M 14 0.625 L 14.625 0.625 L 14.625 -0.625 L 14 -0.625 L 14 0 L 14 0.625 Z M 2 4.375 L 1.375 4.375 L 1.375 5.625 L 2 5.625 L 2 5 L 2 4.375 Z M 12 5.625 L 12.625 5.625 L 12.625 4.375 L 12 4.375 L 12 5 L 12 5.625 Z M 5 9.375 L 4.375 9.375 L 4.375 10.625 L 5 10.625 L 5 10 L 5 9.375 Z M 9 10.625 L 9.625 10.625 L 9.625 9.375 L 9 9.375 L 9 10 L 9 10.625 Z M 0 0 L 0 0.625 L 14 0.625 L 14 0 L 14 -0.625 L 0 -0.625 L 0 0 Z M 2 5 L 2 5.625 L 12 5.625 L 12 5 L 12 4.375 L 2 4.375 L 2 5 Z M 5 10 L 5 10.625 L 9 10.625 L 9 10 L 9 9.375 L 5 9.375 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Filter & Sort")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 9,
      textAlign: "right",
      lineHeight: "12px",
      letterSpacing: "0.800px",
      color: "var(--color-text-muted)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "69 products"));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CollectionToolbar, __ds_default_components_collection_CollectionToolbar_1rtn65w: CollectionToolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collection/CollectionToolbar.jsx", error: String((e && e.message) || e) }); }

// components/collection/ProductCardCollectionFilterSort.jsx
try { (() => {
// figma node: 358:586 Product Card/Collection/Filter & Sort/Shared Menu Content
function ProductCardCollectionFilterSort(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? "",
    price: _p.price ?? "",
    category: _p.category ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, props.text1 ?? "Sort By"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 1.5,
      backgroundColor: "rgb(24,21,21)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 12px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(106,52,70)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(106,52,70)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, props.text2 ?? "Featured")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, props.text3 ?? "Newest")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, props.text4 ?? "Price: Low to High")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Price: High to Low")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Name: A\u2013Z")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Name: Z\u2013A")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Price"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 1.5,
      backgroundColor: "rgb(24,21,21)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 58,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 27,
      width: 326,
      height: 2,
      backgroundColor: "rgb(201,195,188)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 27,
      width: 326,
      height: 2,
      backgroundColor: "rgb(24,21,21)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 19,
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(24,21,21)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 324,
      top: 19,
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(24,21,21)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Color"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 1.5,
      backgroundColor: "rgb(24,21,21)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 82,
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      borderRadius: 1,
      backgroundColor: "rgb(24,21,21)",
      boxShadow: "0 0 0 3px rgb(106,52,70)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Black")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      borderRadius: 1,
      backgroundColor: "rgb(91,58,41)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Brown")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      borderRadius: 1,
      backgroundColor: "rgb(233,220,184)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Cream")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 34,
      height: 34,
      borderRadius: 1,
      backgroundColor: "rgb(106,52,70)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(24,21,21)",
      flexShrink: 0
    }
  }, "Burgundy")))));
}
Object.assign(__ds_scope, { ProductCardCollectionFilterSort, __ds_default_components_collection_ProductCardCollectionFilterSort_19i0e6i: ProductCardCollectionFilterSort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collection/ProductCardCollectionFilterSort.jsx", error: String((e && e.message) || e) }); }

// components/collection/CollectionFilterSortDrawer.jsx
try { (() => {
// figma node: 429:2325 Collection / Filter & Sort Drawer (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function CollectionFilterSortDrawer(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 968,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 96,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 24px 16px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0
    }
  }, props.text1 ?? "Filter & Sort"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(117,112,108)",
      flexShrink: 0
    }
  }, props.text2 ?? "Shoes · 69 Products")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 -0.636 L 0 -1.273 L -1.273 0 L -0.636 0.636 L 0 0 L 0.636 -0.636 Z M 13.364 14.636 L 14 15.273 L 15.273 14 L 14.636 13.364 L 14 14 L 13.364 14.636 Z M 14.636 0.636 L 15.273 0 L 14 -1.273 L 13.364 -0.636 L 14 0 L 14.636 0.636 Z M -0.636 13.364 L -1.273 14 L 0 15.273 L 0.636 14.636 L 0 14 L -0.636 13.364 Z M 0 0 L -0.636 0.636 L 13.364 14.636 L 14 14 L 14.636 13.364 L 0.636 -0.636 L 0 0 Z M 14 0 L 13.364 -0.636 L -0.636 13.364 L 0 14 L 0.636 14.636 L 14.636 0.636 L 14 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 768,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(201,195,188)",
      borderRight: "1px solid rgb(201,195,188)",
      borderBottom: "1px solid rgb(201,195,188)",
      borderLeft: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProductCardCollectionFilterSort, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 104,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "20px 24px 20px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      width: 190,
      height: 48,
      flexShrink: 0
    },
    style2: "secondary",
    size: "standard"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      width: 188,
      height: 48,
      flexShrink: 0
    },
    text1: "Show Products",
    style2: "primary",
    size: "standard"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 844,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 96,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 24px 16px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0
    }
  }, props.text1 ?? "Filter & Sort"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(117,112,108)",
      flexShrink: 0
    }
  }, props.text2 ?? "Shoes · 69 Products")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 -0.636 L 0 -1.273 L -1.273 0 L -0.636 0.636 L 0 0 L 0.636 -0.636 Z M 13.364 14.636 L 14 15.273 L 15.273 14 L 14.636 13.364 L 14 14 L 13.364 14.636 Z M 14.636 0.636 L 15.273 0 L 14 -1.273 L 13.364 -0.636 L 14 0 L 14.636 0.636 Z M -0.636 13.364 L -1.273 14 L 0 15.273 L 0.636 14.636 L 0 14 L -0.636 13.364 Z M 0 0 L -0.636 0.636 L 13.364 14.636 L 14 14 L 14.636 13.364 L 0.636 -0.636 L 0 0 Z M 14 0 L 13.364 -0.636 L -0.636 13.364 L 0 14 L 0.636 14.636 L 14.636 0.636 L 14 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 644,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(201,195,188)",
      borderRight: "1px solid rgb(201,195,188)",
      borderBottom: "1px solid rgb(201,195,188)",
      borderLeft: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 24px 0px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProductCardCollectionFilterSort, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 104,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "20px 24px 20px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      width: 165,
      height: 48,
      flexShrink: 0
    },
    style2: "secondary",
    size: "standard"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      width: 163,
      height: 48,
      flexShrink: 0
    },
    text1: "Show Products",
    style2: "primary",
    size: "standard"
  })));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CollectionFilterSortDrawer, __ds_default_components_collection_CollectionFilterSortDrawer_nj3cvo: CollectionFilterSortDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collection/CollectionFilterSortDrawer.jsx", error: String((e && e.message) || e) }); }

// components/faq/AccordionFAQ.jsx
try { (() => {
// figma node: 239:17 Accordion / FAQ (4 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);
function AccordionFAQ(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop",
    state: _p.state ?? "closed"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 880,
      borderBottom: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-16) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-24) * 1px)",
      position: "relative",
      color: "rgb(106,52,70)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "26px",
      color: "rgb(35,66,56)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "When will my order arrive?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.75 0 L 7.75 -0.75 L 6.25 -0.75 L 6.25 0 L 7 0 L 7.75 0 Z M 6.25 14 L 6.25 14.75 L 7.75 14.75 L 7.75 14 L 7 14 L 6.25 14 Z M 0 6.25 L -0.75 6.25 L -0.75 7.75 L 0 7.75 L 0 7 L 0 6.25 Z M 14 7.75 L 14.75 7.75 L 14.75 6.25 L 14 6.25 L 14 7 L 14 7.75 Z M 7 0 L 6.25 0 L 6.25 14 L 7 14 L 7.75 14 L 7.75 0 L 7 0 Z M 0 7 L 0 7.75 L 14 7.75 L 14 7 L 14 6.25 L 0 6.25 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 880,
      borderBottom: "1px solid rgb(201,195,188)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-16) * 1px)",
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-24) * 1px)",
      position: "relative",
      color: "rgb(106,52,70)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "26px",
      color: "rgb(35,66,56)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "When will my order arrive?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 1.500,
    viewBox: "0 -0.750 14 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 10,
      width: 14,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 L -0.75 -0.75 L -0.75 0.75 L 0 0.75 L 0 0 L 0 -0.75 Z M 14 0.75 L 14.75 0.75 L 14.75 -0.75 L 14 -0.75 L 14 0 L 14 0.75 Z M 0 0 L 0 0.75 L 14 0.75 L 14 0 L 14 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 820,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: "26px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text2 ?? "Orders are processed within 1–2 business days. Delivery estimates are shown at checkout and included in your confirmation email. Once your order ships, we’ll send a tracking link so you can follow it every step of the way."));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 54,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "Do you offer free shipping?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "var(--color-action-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "+"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "When will my order arrive?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text2 ?? "−")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "19px",
      color: "var(--color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Delivery estimates are shown at checkout and included in your confirmation email."));
  const __impls = {
    // figma: Breakpoint=Desktop, State=Closed
    "breakpoint=desktop|state=closed": __body0,
    // figma: Breakpoint=Desktop, State=Open
    "breakpoint=desktop|state=open": __body1,
    // figma: Breakpoint=Mobile, State=Closed
    "breakpoint=mobile|state=closed": __body2,
    // figma: Breakpoint=Mobile, State=Open
    "breakpoint=mobile|state=open": __body3
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { AccordionFAQ, __ds_default_components_faq_AccordionFAQ_1gt0hmz: AccordionFAQ });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/faq/AccordionFAQ.jsx", error: String((e && e.message) || e) }); }

// components/faq/FAQSection.jsx
try { (() => {
// figma node: 428:2248 FAQ Section (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function FAQSection(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 880,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "rgb(106,52,70)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "CUSTOMER CARE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 720,
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 40,
      textAlign: "center",
      lineHeight: "44px",
      color: "rgb(35,66,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "A few things you may be wondering"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 620,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "24px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text3 ?? "Everything you need to shop with confidence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    breakpoint: "desktop",
    state: "open"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Do you offer free shipping?",
    breakpoint: "desktop",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "What is your return policy?",
    breakpoint: "desktop",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "How can I track my order?",
    breakpoint: "desktop",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "How do I choose the right size?",
    breakpoint: "desktop",
    state: "closed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text4 ?? "Still have a question?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "rgb(106,52,70)",
      flexShrink: 0
    }
  }, "Contact us")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 571,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "40px 24px 48px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "var(--color-action-primary)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "CUSTOMER CARE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "33px",
      color: "var(--color-text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "A few things you may be wondering"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Everything you need to shop with confidence."), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text3: "Orders are processed within 1–2 business days. Delivery estimates are shown at checkout and included in your confirmation email. Once your order ships, we’ll send a tracking link so you can follow it every step of the way.",
    breakpoint: "mobile",
    state: "open"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    breakpoint: "mobile",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "What is your return policy?",
    breakpoint: "mobile",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "How can I track my order?",
    breakpoint: "mobile",
    state: "closed"
  }), /*#__PURE__*/React.createElement(__ds_scope.AccordionFAQ, {
    style: {
      position: "relative",
      height: 54,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "How do I choose the right size?",
    breakpoint: "mobile",
    state: "closed"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "Still have a question?  Contact us"));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { FAQSection, __ds_default_components_faq_FAQSection_106nl0u: FAQSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/faq/FAQSection.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
// figma node: 426:2129 Announcement Bar (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function AnnouncementBar(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 40,
      backgroundColor: "var(--color-footer-background)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.050em",
      color: "var(--color-footer-text)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "FREE SHIPPING ON ALL US ORDERS"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 32,
      overflow: "hidden",
      backgroundColor: "var(--color-text-brand)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "var(--color-bg-surface)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "FREE SHIPPING ON ALL US ORDERS"));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { AnnouncementBar, __ds_default_components_navigation_AnnouncementBar_v1f6qh: AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
// figma node: 426:2254 Footer (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function Footer(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      backgroundColor: "var(--color-footer-background)",
      display: "flex",
      flexDirection: "column",
      padding: "80px 208px 40px 208px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(173,137,84)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 300,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 220,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-logo-footer",
    role: "img",
    "aria-label": props.text1 ?? "Dove & Thistle",
    style: {
      position: "relative",
      width: 140,
      height: 23,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Thoughtful style, useful comforts and meaningful gifts, chosen to make the everyday feel a little more considered."), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 5.829 0 5.556 0.01 4.703 0.048 C 3.85 0.088 3.269 0.222 2.76 0.42 C 2.226 0.62 1.742 0.935 1.343 1.343 C 0.935 1.742 0.62 2.226 0.42 2.76 C 0.222 3.268 0.087 3.85 0.048 4.7 C 0.01 5.555 0 5.827 0 8.001 C 0 10.173 0.01 10.445 0.048 11.298 C 0.088 12.15 0.222 12.731 0.42 13.24 C 0.625 13.766 0.898 14.212 1.343 14.657 C 1.787 15.102 2.233 15.376 2.759 15.58 C 3.269 15.778 3.849 15.913 4.701 15.952 C 5.555 15.99 5.827 16 8 16 C 10.173 16 10.444 15.99 11.298 15.952 C 12.149 15.912 12.732 15.778 13.241 15.58 C 13.775 15.38 14.258 15.064 14.657 14.657 C 15.102 14.212 15.375 13.766 15.58 13.24 C 15.777 12.731 15.912 12.15 15.952 11.298 C 15.99 10.445 16 10.173 16 8 C 16 5.827 15.99 5.555 15.952 4.701 C 15.912 3.85 15.777 3.268 15.58 2.76 C 15.38 2.226 15.065 1.742 14.657 1.343 C 14.258 0.935 13.774 0.62 13.24 0.42 C 12.73 0.222 12.148 0.087 11.297 0.048 C 10.443 0.01 10.172 0 7.998 0 L 8 0 Z M 7.283 1.442 L 8.001 1.442 C 10.137 1.442 10.39 1.449 11.233 1.488 C 12.013 1.523 12.437 1.654 12.719 1.763 C 13.092 1.908 13.359 2.082 13.639 2.362 C 13.919 2.642 14.092 2.908 14.237 3.282 C 14.347 3.563 14.477 3.987 14.512 4.767 C 14.551 5.61 14.559 5.863 14.559 7.998 C 14.559 10.133 14.551 10.387 14.512 11.23 C 14.477 12.01 14.346 12.433 14.237 12.715 C 14.108 13.062 13.903 13.376 13.638 13.634 C 13.358 13.914 13.092 14.087 12.718 14.232 C 12.438 14.342 12.014 14.472 11.233 14.508 C 10.39 14.546 10.137 14.555 8.001 14.555 C 5.865 14.555 5.611 14.546 4.768 14.508 C 3.988 14.472 3.565 14.342 3.283 14.232 C 2.936 14.103 2.622 13.899 2.363 13.634 C 2.097 13.376 1.892 13.061 1.763 12.714 C 1.654 12.433 1.523 12.009 1.488 11.229 C 1.45 10.386 1.442 10.133 1.442 7.996 C 1.442 5.859 1.45 5.608 1.488 4.765 C 1.524 3.985 1.654 3.561 1.764 3.279 C 1.909 2.906 2.083 2.639 2.363 2.359 C 2.643 2.079 2.909 1.906 3.283 1.761 C 3.565 1.651 3.988 1.521 4.768 1.485 C 5.506 1.451 5.792 1.441 7.283 1.44 L 7.283 1.442 Z M 12.271 2.77 C 12.145 2.77 12.02 2.795 11.904 2.843 C 11.787 2.891 11.681 2.962 11.592 3.051 C 11.503 3.14 11.432 3.246 11.384 3.363 C 11.336 3.479 11.311 3.604 11.311 3.73 C 11.311 3.856 11.336 3.981 11.384 4.097 C 11.432 4.214 11.503 4.32 11.592 4.409 C 11.681 4.498 11.787 4.569 11.904 4.617 C 12.02 4.665 12.145 4.69 12.271 4.69 C 12.526 4.69 12.77 4.589 12.95 4.409 C 13.13 4.229 13.231 3.985 13.231 3.73 C 13.231 3.475 13.13 3.231 12.95 3.051 C 12.77 2.871 12.526 2.77 12.271 2.77 Z M 8.001 3.892 C 7.456 3.883 6.915 3.983 6.409 4.186 C 5.903 4.389 5.443 4.69 5.054 5.072 C 4.666 5.455 4.357 5.911 4.147 6.413 C 3.936 6.916 3.828 7.456 3.828 8 C 3.828 8.545 3.936 9.085 4.147 9.588 C 4.357 10.09 4.666 10.546 5.054 10.929 C 5.443 11.311 5.903 11.612 6.409 11.815 C 6.915 12.018 7.456 12.118 8.001 12.109 C 9.08 12.092 10.108 11.652 10.865 10.883 C 11.622 10.115 12.046 9.079 12.046 8 C 12.046 6.922 11.622 5.886 10.865 5.118 C 10.108 4.349 9.08 3.909 8.001 3.892 Z M 8.001 5.333 C 8.351 5.333 8.698 5.402 9.022 5.536 C 9.345 5.67 9.639 5.866 9.887 6.114 C 10.135 6.362 10.331 6.656 10.465 6.979 C 10.599 7.303 10.668 7.65 10.668 8 C 10.668 8.35 10.599 8.697 10.465 9.021 C 10.331 9.344 10.135 9.638 9.887 9.886 C 9.639 10.134 9.345 10.33 9.022 10.464 C 8.698 10.598 8.351 10.667 8.001 10.667 C 7.294 10.667 6.615 10.386 6.115 9.886 C 5.615 9.386 5.334 8.707 5.334 8 C 5.334 7.293 5.615 6.614 6.115 6.114 C 6.615 5.614 7.294 5.333 8.001 5.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text3 ?? "INSTAGRAM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 112,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "SHOP"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Clothing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shoes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Home & Living"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gifts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Seasonal")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 164,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "CUSTOMER CARE"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Dove & Thistle"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Track Your Order"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shipping & Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Returns & Refunds")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 220,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "POLICIES"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms of Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Billing Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Payment Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "IP & DMCA Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "28px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Do Not Sell or Share My Personal Information")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 244,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "BUSINESS INFORMATION"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Dove & Thistle is operated by [LEGAL ENTITY NAME]."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Registration no. [COMPANY NUMBER]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "support@doveandthistle.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "[BUSINESS PHONE]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "[PHYSICAL BUSINESS ADDRESS]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Customer care: [HOURS + TIME ZONE]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
      color: "var(--color-footer-text)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Response time: [EXPECTED RESPONSE TIME]"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 48,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--color-footer-divider)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 24,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 650,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "ACCEPTED PAYMENT METHODS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "var(--color-footer-text-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Visa \xB7 Mastercard \xB7 American Express \xB7 PayPal \xB7 Shop Pay \xB7 Apple Pay \xB7 Google Pay")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 350,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-footer-accent)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "SECURE CHECKOUT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "var(--color-footer-text-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Payments are encrypted and processed by trusted providers."))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 1,
      height: 24,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 500,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "var(--color-footer-text-muted)",
      flexShrink: 0
    }
  }, "\xA9 2026 Dove & Thistle. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 220,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "var(--color-footer-text-muted)",
      flexShrink: 0
    }
  }, "United States \xB7 USD")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      backgroundColor: "var(--color-text-brand)",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      padding: "44px 24px 36px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 144,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-logo-footer",
    role: "img",
    "aria-label": props.text1 ?? "Dove & Thistle",
    style: {
      position: "relative",
      width: 140,
      height: 23,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.9,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Thoughtful style, useful comforts and meaningful gifts, chosen to make the everyday feel a little more considered."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "INSTAGRAM")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "SHOP"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Clothing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shoes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Home & Living"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gifts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Seasonal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "CUSTOMER CARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "About Dove & Thistle"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FAQs"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Track Your Order"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Shipping & Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Returns & Refunds"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "POLICIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Terms of Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Billing Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Payment Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "IP & DMCA Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Do Not Sell or Share My Personal Information"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "BUSINESS INFORMATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Dove & Thistle is operated by [LEGAL ENTITY NAME]."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Registration no. [COMPANY NUMBER]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "support@doveandthistle.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "[BUSINESS PHONE]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "[PHYSICAL BUSINESS ADDRESS]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Customer care: [HOURS + TIME ZONE]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Response time: [EXPECTED RESPONSE TIME]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 157,
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "ACCEPTED PAYMENT METHODS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Visa  \xB7  Mastercard  \xB7  American Express"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "PayPal  \xB7  Shop Pay  \xB7  Apple Pay  \xB7  Google Pay"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "16px",
      letterSpacing: "0.900px",
      color: "rgb(173,137,84)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "SECURE CHECKOUT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Payments are encrypted and processed by trusted providers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 65,
      overflow: "hidden",
      borderTop: "1px solid rgba(173,137,84,0.55)",
      borderRight: "1px solid rgba(173,137,84,0.55)",
      borderBottom: "1px solid rgba(173,137,84,0.55)",
      borderLeft: "1px solid rgba(173,137,84,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.85,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\xA9 2026 Dove & Thistle. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.85,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "United States  \xB7  USD")));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Footer, __ds_default_components_navigation_Footer_1v7o0mg: Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
// figma node: 424:1510 Header (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "mode=" + __venc(p.mode);
function Header(_p = {}) {
  const props = {
    ..._p,
    mode: _p.mode ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      display: "flex",
      flexDirection: "row",
      padding: "24px 208px 24px 208px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dt-logo-wordmark",
    role: "img",
    "aria-label": "Dove & Thistle",
    style: {
      position: "relative",
      width: 140,
      height: 23,
      flexShrink: 0,
      alignSelf: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text1 ?? "Clothing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text2 ?? "Shoes"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text3 ?? "Home & Living"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gifts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "Seasonal"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "About "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "Track Your Order")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 16.667,
    viewBox: "0 0 16.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 16.667,
      height: 16.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.667 8.333 L 16.1 8.333 C 16.1 12.623 12.623 16.1 8.333 16.1 L 8.333 16.667 L 8.333 17.233 C 13.249 17.233 17.233 13.249 17.233 8.333 L 16.667 8.333 Z M 8.333 16.667 L 8.333 16.1 C 4.044 16.1 0.567 12.623 0.567 8.333 L 0 8.333 L -0.567 8.333 C -0.567 13.249 3.418 17.233 8.333 17.233 L 8.333 16.667 Z M 0 8.333 L 0.567 8.333 C 0.567 4.044 4.044 0.567 8.333 0.567 L 8.333 0 L 8.333 -0.567 C 3.418 -0.567 -0.567 3.418 -0.567 8.333 L 0 8.333 Z M 8.333 0 L 8.333 0.567 C 12.623 0.567 16.1 4.044 16.1 8.333 L 16.667 8.333 L 17.233 8.333 C 17.233 3.418 13.249 -0.567 8.333 -0.567 L 8.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.667,
      top: 20.667,
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.401 -0.401 C 0.179 -0.622 -0.179 -0.622 -0.401 -0.401 C -0.622 -0.179 -0.622 0.179 -0.401 0.401 L 0 0 L 0.401 -0.401 Z M 5.599 6.401 C 5.821 6.622 6.179 6.622 6.401 6.401 C 6.622 6.179 6.622 5.821 6.401 5.599 L 6 6 L 5.599 6.401 Z M 0 0 L -0.401 0.401 L 5.599 6.401 L 6 6 L 6.401 5.599 L 0.401 -0.401 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.333,
    height: 14.667,
    viewBox: "0 0 17.333 14.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.333,
      top: 11.333,
      width: 17.333,
      height: 14.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.567 C -0.161 -0.567 -0.315 -0.498 -0.423 -0.377 C -0.53 -0.257 -0.581 -0.096 -0.563 0.064 L 0 0 Z M 17.333 0 L 17.899 0.039 C 17.909 -0.118 17.855 -0.272 17.747 -0.387 C 17.64 -0.502 17.49 -0.567 17.333 -0.567 L 17.333 0 Z M 16.333 14.667 L 16.333 15.233 C 16.631 15.233 16.878 15.003 16.899 14.705 L 16.333 14.667 Z M 1.667 14.667 L 1.104 14.731 C 1.136 15.017 1.378 15.233 1.667 15.233 L 1.667 14.667 Z M 0 0 L 0 0.567 L 17.333 0.567 L 17.333 0 L 17.333 -0.567 L 0 -0.567 L 0 0 Z M 17.333 0 L 16.768 -0.039 L 15.768 14.628 L 16.333 14.667 L 16.899 14.705 L 17.899 0.039 L 17.333 0 Z M 16.333 14.667 L 16.333 14.1 L 1.667 14.1 L 1.667 14.667 L 1.667 15.233 L 16.333 15.233 L 16.333 14.667 Z M 1.667 14.667 L 2.23 14.603 L 0.563 -0.064 L 0 0 L -0.563 0.064 L 1.104 14.731 L 1.667 14.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7,
    viewBox: "0 0 8 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 5,
      width: 8,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.567 7 C -0.567 7.313 -0.313 7.567 0 7.567 C 0.313 7.567 0.567 7.313 0.567 7 L 0 7 L -0.567 7 Z M 4 0 L 4 -0.567 L 4 0 Z M 8 4 L 8.567 4 L 8 4 Z M 7.433 7 C 7.433 7.313 7.687 7.567 8 7.567 C 8.313 7.567 8.567 7.313 8.567 7 L 8 7 L 7.433 7 Z M 0 7 L 0.567 7 L 0.567 4 L 0 4 L -0.567 4 L -0.567 7 L 0 7 Z M 0 4 L 0.567 4 C 0.567 3.089 0.928 2.216 1.572 1.572 L 1.172 1.172 L 0.771 0.771 C -0.086 1.627 -0.567 2.789 -0.567 4 L 0 4 Z M 1.172 1.172 L 1.572 1.572 C 2.216 0.928 3.089 0.567 4 0.567 L 4 0 L 4 -0.567 C 2.789 -0.567 1.627 -0.086 0.771 0.771 L 1.172 1.172 Z M 4 0 L 4 0.567 C 4.911 0.567 5.784 0.928 6.428 1.572 L 6.828 1.172 L 7.229 0.771 C 6.373 -0.086 5.211 -0.567 4 -0.567 L 4 0 Z M 6.828 1.172 L 6.428 1.572 C 7.072 2.216 7.433 3.089 7.433 4 L 8 4 L 8.567 4 C 8.567 2.789 8.086 1.627 7.229 0.771 L 6.828 1.172 Z M 8 4 L 7.433 4 L 7.433 7 L 8 7 L 8.567 7 L 8.567 4 L 8 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 10,
    viewBox: "0 0 14 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5,
      width: 14,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 L -0.75 -0.75 L -0.75 0.75 L 0 0.75 L 0 0 L 0 -0.75 Z M 14 0.75 L 14.75 0.75 L 14.75 -0.75 L 14 -0.75 L 14 0 L 14 0.75 Z M 0 4.25 L -0.75 4.25 L -0.75 5.75 L 0 5.75 L 0 5 L 0 4.25 Z M 14 5.75 L 14.75 5.75 L 14.75 4.25 L 14 4.25 L 14 5 L 14 5.75 Z M 0 9.25 L -0.75 9.25 L -0.75 10.75 L 0 10.75 L 0 10 L 0 9.25 Z M 14 10.75 L 14.75 10.75 L 14.75 9.25 L 14 9.25 L 14 10 L 14 10.75 Z M 0 0 L 0 0.75 L 14 0.75 L 14 0 L 14 -0.75 L 0 -0.75 L 0 0 Z M 0 5 L 0 5.75 L 14 5.75 L 14 5 L 14 4.25 L 0 4.25 L 0 5 Z M 0 10 L 0 10.75 L 14 10.75 L 14 10 L 14 9.25 L 0 9.25 L 0 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 25,
      whiteSpace: "nowrap",
      lineHeight: "30px",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "Dove & Thistle"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 11,
    viewBox: "0 0 11 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 3.5,
      width: 11,
      height: 11
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 5.5 L 10.3 5.5 C 10.3 8.151 8.151 10.3 5.5 10.3 L 5.5 11 L 5.5 11.7 C 8.924 11.7 11.7 8.924 11.7 5.5 L 11 5.5 Z M 5.5 11 L 5.5 10.3 C 2.849 10.3 0.7 8.151 0.7 5.5 L 0 5.5 L -0.7 5.5 C -0.7 8.924 2.076 11.7 5.5 11.7 L 5.5 11 Z M 0 5.5 L 0.7 5.5 C 0.7 2.849 2.849 0.7 5.5 0.7 L 5.5 0 L 5.5 -0.7 C 2.076 -0.7 -0.7 2.076 -0.7 5.5 L 0 5.5 Z M 5.5 0 L 5.5 0.7 C 8.151 0.7 10.3 2.849 10.3 5.5 L 11 5.5 L 11.7 5.5 C 11.7 2.076 8.924 -0.7 5.5 -0.7 L 5.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.495 0.495 L 3.505 4.495 L 4 4 L 4.495 3.505 L 0.495 -0.495 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 10,
    viewBox: "0 0 12 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7,
      width: 12,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.7 L -0.773 -0.7 L -0.697 0.07 L 0 0 Z M 12 0 L 12.697 0.07 L 12.773 -0.7 L 12 -0.7 L 12 0 Z M 11 10 L 11 10.7 L 11.633 10.7 L 11.697 10.07 L 11 10 Z M 1 10 L 0.303 10.07 L 0.367 10.7 L 1 10.7 L 1 10 Z M 0 0 L 0 0.7 L 12 0.7 L 12 0 L 12 -0.7 L 0 -0.7 L 0 0 Z M 12 0 L 11.303 -0.07 L 10.303 9.93 L 11 10 L 11.697 10.07 L 12.697 0.07 L 12 0 Z M 11 10 L 11 9.3 L 1 9.3 L 1 10 L 1 10.7 L 11 10.7 L 11 10 Z M 1 10 L 1.697 9.93 L 0.697 -0.07 L 0 0 L -0.697 0.07 L 0.303 10.07 L 1 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 5,
    viewBox: "0 0 6 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 2,
      width: 6,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 -0.7 L 3 0 Z M 6 3 L 6.7 3 L 6 3 Z M 0 5 L 0.7 5 L 0.7 3 L 0 3 L -0.7 3 L -0.7 5 L 0 5 Z M 0 3 L 0.7 3 C 0.7 2.39 0.942 1.805 1.374 1.374 L 0.879 0.879 L 0.384 0.384 C -0.31 1.078 -0.7 2.019 -0.7 3 L 0 3 Z M 0.879 0.879 L 1.374 1.374 C 1.805 0.942 2.39 0.7 3 0.7 L 3 0 L 3 -0.7 C 2.019 -0.7 1.078 -0.31 0.384 0.384 L 0.879 0.879 Z M 3 0 L 3 0.7 C 3.61 0.7 4.195 0.942 4.626 1.374 L 5.121 0.879 L 5.616 0.384 C 4.922 -0.31 3.981 -0.7 3 -0.7 L 3 0 Z M 5.121 0.879 L 4.626 1.374 C 5.058 1.805 5.3 2.39 5.3 3 L 6 3 L 6.7 3 C 6.7 2.019 6.31 1.078 5.616 0.384 L 5.121 0.879 Z M 6 3 L 5.3 3 L 5.3 5 L 6 5 L 6.7 5 L 6.7 3 L 6 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 64,
      backgroundColor: "var(--color-bg-surface)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 14,
      height: 14,
      color: "var(--color-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 13.47 14.53 C 13.763 14.823 14.237 14.823 14.53 14.53 C 14.823 14.237 14.823 13.763 14.53 13.47 L 14 14 L 13.47 14.53 Z M 14.53 0.53 C 14.823 0.237 14.823 -0.237 14.53 -0.53 C 14.237 -0.823 13.763 -0.823 13.47 -0.53 L 14 0 L 14.53 0.53 Z M -0.53 13.47 C -0.823 13.763 -0.823 14.237 -0.53 14.53 C -0.237 14.823 0.237 14.823 0.53 14.53 L 0 14 L -0.53 13.47 Z M 0 0 L -0.53 0.53 L 13.47 14.53 L 14 14 L 14.53 13.47 L 0.53 -0.53 L 0 0 Z M 14 0 L 13.47 -0.53 L -0.53 13.47 L 0 14 L 0.53 14.53 L 14.53 0.53 L 14 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 25,
      whiteSpace: "nowrap",
      lineHeight: "30px",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "Dove & Thistle"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.500,
    height: 11.500,
    viewBox: "0 0 11.500 11.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.75,
      top: 2.75,
      width: 11.5,
      height: 11.5,
      color: "var(--color-text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 5.75 L 10.75 5.75 C 10.75 8.511 8.511 10.75 5.75 10.75 L 5.75 11.5 L 5.75 12.25 C 9.34 12.25 12.25 9.34 12.25 5.75 L 11.5 5.75 Z M 5.75 11.5 L 5.75 10.75 C 2.989 10.75 0.75 8.511 0.75 5.75 L 0 5.75 L -0.75 5.75 C -0.75 9.34 2.16 12.25 5.75 12.25 L 5.75 11.5 Z M 0 5.75 L 0.75 5.75 C 0.75 2.989 2.989 0.75 5.75 0.75 L 5.75 0 L 5.75 -0.75 C 2.16 -0.75 -0.75 2.16 -0.75 5.75 L 0 5.75 Z M 5.75 0 L 5.75 0.75 C 8.511 0.75 10.75 2.989 10.75 5.75 L 11.5 5.75 L 12.25 5.75 C 12.25 2.16 9.34 -0.75 5.75 -0.75 L 5.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.250,
    height: 4.250,
    viewBox: "0 0 4.250 4.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.75,
      top: 12.75,
      width: 4.25,
      height: 4.25,
      color: "var(--color-text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.72 4.78 C 4.013 5.073 4.487 5.073 4.78 4.78 C 5.073 4.487 5.073 4.013 4.78 3.72 L 4.25 4.25 L 3.72 4.78 Z M 0 0 L -0.53 0.53 L 3.72 4.78 L 4.25 4.25 L 4.78 3.72 L 0.53 -0.53 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 10.500,
    viewBox: "0 0 12 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.5,
      width: 12,
      height: 10.5,
      color: "var(--color-text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.75 C -0.208 -0.75 -0.407 -0.663 -0.549 -0.511 C -0.691 -0.359 -0.763 -0.154 -0.748 0.053 L 0 0 Z M 12 0 L 12.748 0.053 C 12.763 -0.154 12.691 -0.359 12.549 -0.511 C 12.407 -0.663 12.208 -0.75 12 -0.75 L 12 0 Z M 11.25 10.5 L 11.25 11.25 C 11.643 11.25 11.97 10.946 11.998 10.553 L 11.25 10.5 Z M 0.75 10.5 L 0.002 10.553 C 0.03 10.946 0.357 11.25 0.75 11.25 L 0.75 10.5 Z M 0 0 L 0 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 0 -0.75 L 0 0 Z M 12 0 L 11.252 -0.053 L 10.502 10.447 L 11.25 10.5 L 11.998 10.553 L 12.748 0.053 L 12 0 Z M 11.25 10.5 L 11.25 9.75 L 0.75 9.75 L 0.75 10.5 L 0.75 11.25 L 11.25 11.25 L 11.25 10.5 Z M 0.75 10.5 L 1.498 10.447 L 0.748 -0.053 L 0 0 L -0.748 0.053 L 0.002 10.553 L 0.75 10.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 4.500,
    viewBox: "0 0 6 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 2.5,
      width: 6,
      height: 4.5,
      color: "var(--color-text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.75 4.5 C -0.75 4.914 -0.414 5.25 0 5.25 C 0.414 5.25 0.75 4.914 0.75 4.5 L 0 4.5 L -0.75 4.5 Z M 5.25 4.5 C 5.25 4.914 5.586 5.25 6 5.25 C 6.414 5.25 6.75 4.914 6.75 4.5 L 6 4.5 L 5.25 4.5 Z M 0 4.5 L 0.75 4.5 L 0.75 3 L 0 3 L -0.75 3 L -0.75 4.5 L 0 4.5 Z M 0 3 L 0.75 3 C 0.75 1.764 1.764 0.75 3 0.75 L 3 0 L 3 -0.75 C 0.936 -0.75 -0.75 0.936 -0.75 3 L 0 3 Z M 3 0 L 3 0.75 C 4.236 0.75 5.25 1.764 5.25 3 L 6 3 L 6.75 3 C 6.75 0.936 5.064 -0.75 3 -0.75 L 3 0 Z M 6 3 L 5.25 3 L 5.25 4.5 L 6 4.5 L 6.75 4.5 L 6.75 3 L 6 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Mode=Desktop
    "mode=desktop": __body0,
    // figma: Mode=Mobile
    "mode=mobile": __body1,
    // figma: Mode=Mobile Drawer
    "mode=mobile drawer": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Header, __ds_default_components_navigation_Header_1wawagy: Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationSharedCategoryClothing.jsx
try { (() => {
// figma node: 371:622 Navigation / Shared Category / Clothing
function NavigationSharedCategoryClothing(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Knitwear")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Dresses")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Outerwear")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text4 ?? "Bottoms")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "Everyday Sets")));
}
Object.assign(__ds_scope, { NavigationSharedCategoryClothing, __ds_default_components_navigation_NavigationSharedCategoryClothing_1wj6cc6: NavigationSharedCategoryClothing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationSharedCategoryClothing.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationMenu.jsx
try { (() => {
// figma node: 429:2326 Navigation Menu (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint) + '|' + "state=" + __venc(p.state);
function NavigationMenu(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop",
    state: _p.state ?? "clothing open"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AnnouncementBar, {
    style: {
      position: "relative",
      height: 40,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(__ds_scope.Header, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    mode: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-surface)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1024,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-16) * 1px)",
      padding: "32px 0px 32px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-32) * 1px)",
      paddingBottom: "calc(var(--spacing-32) * 1px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "Clothing"), /*#__PURE__*/React.createElement(__ds_scope.NavigationSharedCategoryClothing, {
    style: {
      position: "relative",
      width: 342,
      flexShrink: 0
    }
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Header, {
    style: {
      position: "relative",
      height: 64,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    mode: "mobile drawer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--color-bg-surface)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-24) * 1px)",
      paddingRight: "calc(var(--spacing-24) * 1px)",
      paddingBottom: "calc(var(--spacing-24) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "Clothing"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 7,
      width: 10,
      height: 5,
      color: "var(--color-text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.53 4.47 C -0.823 4.763 -0.823 5.237 -0.53 5.53 C -0.237 5.823 0.237 5.823 0.53 5.53 L 0 5 L -0.53 4.47 Z M 5 0 L 5.53 -0.53 C 5.237 -0.823 4.763 -0.823 4.47 -0.53 L 5 0 Z M 9.47 5.53 C 9.763 5.823 10.237 5.823 10.53 5.53 C 10.823 5.237 10.823 4.763 10.53 4.47 L 10 5 L 9.47 5.53 Z M 0 5 L 0.53 5.53 L 5.53 0.53 L 5 0 L 4.47 -0.53 L -0.53 4.47 L 0 5 Z M 5 0 L 4.47 0.53 L 9.47 5.53 L 10 5 L 10.53 4.47 L 5.53 -0.53 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-16) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavigationSharedCategoryClothing, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Shoes"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 10,
      height: 5,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Home & Living"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 10,
      height: 5,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text4 ?? "Gifts"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 10,
      height: 5,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "Seasonal"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 8,
      width: 10,
      height: 5,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 5 5 L 4.47 5.53 C 4.763 5.823 5.237 5.823 5.53 5.53 L 5 5 Z M 10.53 0.53 C 10.823 0.237 10.823 -0.237 10.53 -0.53 C 10.237 -0.823 9.763 -0.823 9.47 -0.53 L 10 0 L 10.53 0.53 Z M 0 0 L -0.53 0.53 L 4.47 5.53 L 5 5 L 5.53 4.47 L 0.53 -0.53 L 0 0 Z M 5 5 L 5.53 5.53 L 10.53 0.53 L 10 0 L 9.47 -0.53 L 4.47 4.47 L 5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "About")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, "Track Your Order"))));
  const __impls = {
    // figma: Breakpoint=Desktop, State=Clothing Open
    "breakpoint=desktop|state=clothing open": __body0,
    // figma: Breakpoint=Mobile, State=Clothing Open
    "breakpoint=mobile|state=clothing open": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { NavigationMenu, __ds_default_components_navigation_NavigationMenu_1am1b7i: NavigationMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationSharedCategoryGifts.jsx
try { (() => {
// figma node: 371:651 Navigation / Shared Category / Gifts
function NavigationSharedCategoryGifts(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Thoughtful Finds")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Host Gifts")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Gifts Under $50")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text4 ?? "Craft Items")));
}
Object.assign(__ds_scope, { NavigationSharedCategoryGifts, __ds_default_components_navigation_NavigationSharedCategoryGifts_1qlokm3: NavigationSharedCategoryGifts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationSharedCategoryGifts.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationSharedCategoryHomeLiving.jsx
try { (() => {
// figma node: 371:642 Navigation / Shared Category / Home & Living
function NavigationSharedCategoryHomeLiving(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Home Accents")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Textiles")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Organization")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text4 ?? "Laundry Bags")));
}
Object.assign(__ds_scope, { NavigationSharedCategoryHomeLiving, __ds_default_components_navigation_NavigationSharedCategoryHomeLiving_11qzus0: NavigationSharedCategoryHomeLiving });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationSharedCategoryHomeLiving.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationSharedCategorySeasonal.jsx
try { (() => {
// figma node: 371:660 Navigation / Shared Category / Seasonal
function NavigationSharedCategorySeasonal(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Christmas Décor")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Seasonal Gifts")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Craft Kits")));
}
Object.assign(__ds_scope, { NavigationSharedCategorySeasonal, __ds_default_components_navigation_NavigationSharedCategorySeasonal_ze49tg: NavigationSharedCategorySeasonal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationSharedCategorySeasonal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationSharedCategoryShoes.jsx
try { (() => {
// figma node: 371:633 Navigation / Shared Category / Shoes
function NavigationSharedCategoryShoes(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "All Shoes")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Boots")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Comfort & Orthopedic")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.text4 ?? "Wide-Fit Shoes")));
}
Object.assign(__ds_scope, { NavigationSharedCategoryShoes, __ds_default_components_navigation_NavigationSharedCategoryShoes_1qu50tc: NavigationSharedCategoryShoes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationSharedCategoryShoes.jsx", error: String((e && e.message) || e) }); }

// components/product/AccordionProductDetails.jsx
try { (() => {
// figma node: 247:108 Accordion / Product Details
function AccordionProductDetails(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "FIT & SIZING"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 534,
      height: 54,
      backgroundColor: "var(--color-bg-surface)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-text-brand)",
      flexShrink: 0
    }
  }, props.label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "var(--color-action-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "+"));
}
Object.assign(__ds_scope, { AccordionProductDetails, __ds_default_components_product_AccordionProductDetails_v12gf7: AccordionProductDetails });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AccordionProductDetails.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductSwatches.jsx
try { (() => {
// figma node: 430:2342 Product Swatches (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "size=" + __venc(p.size);
function ProductSwatches(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      backgroundColor: "rgb(227,214,191)",
      boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      backgroundColor: "rgb(94,43,56)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      backgroundColor: "rgb(36,66,54)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      backgroundColor: "rgb(41,38,36)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      backgroundColor: "rgb(227,214,191)",
      boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      backgroundColor: "rgb(94,43,56)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      backgroundColor: "rgb(36,66,54)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      backgroundColor: "rgb(41,38,36)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-8) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      backgroundColor: "rgb(227,214,191)",
      boxShadow: "inset 0 0 0 2px var(--color-footer-background)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      backgroundColor: "rgb(94,43,56)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      backgroundColor: "rgb(36,66,54)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      backgroundColor: "rgb(41,38,36)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Size=Desktop
    "size=desktop": __body0,
    // figma: Size=Mobile
    "size=mobile": __body1,
    // figma: Size=PDP
    "size=pdp": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { ProductSwatches, __ds_default_components_product_ProductSwatches_1gdr425: ProductSwatches });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductSwatches.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
// figma node: 382:802 Product Card (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "usage=" + __venc(p.usage) + '|' + "breakpoint=" + __venc(p.breakpoint);
function ProductCard(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? "Alder ribbed knit coat",
    usage: _p.usage ?? "editorial",
    price: _p.price ?? "$68.00",
    breakpoint: _p.breakpoint ?? "desktop",
    category: _p.category ?? "OUTERWEAR"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 291,
      height: 504,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      height: 380,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 124,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-accent-gold)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.category), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "var(--color-text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.price), /*#__PURE__*/React.createElement(__ds_scope.ProductSwatches, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "desktop"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 241,
      height: 439,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      height: 315,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 124,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "16px",
      letterSpacing: "0.100em",
      color: "var(--color-accent-gold)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.category ?? props.text1 ?? "OUTERWEAR"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.title ?? props.text2 ?? "Alder ribbed knit coat"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "var(--color-text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.price ?? props.text3 ?? "$68.00"), /*#__PURE__*/React.createElement(__ds_scope.ProductSwatches, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "desktop"
  })));
  const __impls = {
    // figma: Usage=Editorial, Breakpoint=Desktop
    "usage=editorial|breakpoint=desktop": __body0,
    // figma: Usage=Grid, Breakpoint=Desktop
    "usage=grid|breakpoint=desktop": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { ProductCard, __ds_default_components_product_ProductCard_8on59h: ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCardGridMobile.jsx
try { (() => {
// figma node: 382:796 Product Card/Grid/Mobile
function ProductCardGridMobile(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? "",
    price: _p.price ?? "",
    category: _p.category ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 161,
      height: 310,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      height: 200,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 110,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "var(--color-accent-gold)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.category), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--color-text-primary)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "var(--color-text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.price), /*#__PURE__*/React.createElement(__ds_scope.ProductSwatches, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "mobile"
  })));
}
Object.assign(__ds_scope, { ProductCardGridMobile, __ds_default_components_product_ProductCardGridMobile_wdfhwj: ProductCardGridMobile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCardGridMobile.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCardSliderMobile.jsx
try { (() => {
// figma node: 403:1463 Product Card/Slider/Mobile
function ProductCardSliderMobile(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? "",
    price: _p.price ?? "",
    category: _p.category ?? ""
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      height: 188,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 112,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "var(--color-accent-gold)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.category ?? props.text1 ?? "OUTERWEAR"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "var(--color-text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.title ?? props.text2 ?? "Alder ribbed knit coat"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "var(--color-text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, _p.price ?? props.text3 ?? "$68.00"), /*#__PURE__*/React.createElement(__ds_scope.ProductSwatches, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "mobile"
  })));
}
Object.assign(__ds_scope, { ProductCardSliderMobile, __ds_default_components_product_ProductCardSliderMobile_p3ektc: ProductCardSliderMobile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCardSliderMobile.jsx", error: String((e && e.message) || e) }); }

// components/trust/IconTrust30DayReturns.jsx
try { (() => {
// figma node: 234:19 Icon/Trust/30-Day Returns — paths from the supplied Trust Strip SVG (uploads), 1.6px stroke, currentColor
function IconTrust30DayReturns(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("svg", {
    className: props.className,
    width: 32,
    height: 32,
    viewBox: "367.875 43 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      color: "var(--color-icon-trust)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M394.875 50H373.875M379.875 55L373.875 50L379.875 45",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M376.875 58L383.875 54L390.875 58V67L383.875 71L376.875 67V58Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M376.875 58L383.875 62M383.875 62L390.875 58M383.875 62V71",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }));
}
Object.assign(__ds_scope, { IconTrust30DayReturns, __ds_default_components_trust_IconTrust30DayReturns_14pp2ei: IconTrust30DayReturns });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/IconTrust30DayReturns.jsx", error: String((e && e.message) || e) }); }

// components/trust/IconTrustFreeShipping.jsx
try { (() => {
// figma node: 234:13 Icon/Trust/Free Shipping — paths from the supplied Trust Strip SVG (uploads), 1.6px stroke, currentColor
function IconTrustFreeShipping(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("svg", {
    className: props.className,
    width: 32,
    height: 32,
    viewBox: "111.625 43 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      color: "var(--color-icon-trust)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M114.625 51H130.625V66H114.625V51Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130.625 56H136.625L140.625 61V66H130.625V56Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M133.625 56V61H140.625",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120.625 69.5C122.006 69.5 123.125 68.3807 123.125 67C123.125 65.6193 122.006 64.5 120.625 64.5C119.244 64.5 118.125 65.6193 118.125 67C118.125 68.3807 119.244 69.5 120.625 69.5Z",
    stroke: "currentColor",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("path", {
    d: "M135.625 69.5C137.006 69.5 138.125 68.3807 138.125 67C138.125 65.6193 137.006 64.5 135.625 64.5C134.244 64.5 133.125 65.6193 133.125 67C133.125 68.3807 134.244 69.5 135.625 69.5Z",
    stroke: "currentColor",
    strokeWidth: 1.6
  }));
}
Object.assign(__ds_scope, { IconTrustFreeShipping, __ds_default_components_trust_IconTrustFreeShipping_10a9rtm: IconTrustFreeShipping });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/IconTrustFreeShipping.jsx", error: String((e && e.message) || e) }); }

// components/trust/IconTrustHelpfulSupport.jsx
try { (() => {
// figma node: 234:30 Icon/Trust/Helpful Support — paths from the supplied Trust Strip SVG (uploads), 1.6px stroke, currentColor
function IconTrustHelpfulSupport(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("svg", {
    className: props.className,
    width: 32,
    height: 32,
    viewBox: "880.375 43 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      color: "var(--color-icon-trust)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M884.375 49H908.375V67H893.375L887.375 72V67H884.375V49Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M885.375 51L896.375 60L907.375 51",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M884.375 66L892.375 58M908.375 66L900.375 58",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }));
}
Object.assign(__ds_scope, { IconTrustHelpfulSupport, __ds_default_components_trust_IconTrustHelpfulSupport_87l9yb: IconTrustHelpfulSupport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/IconTrustHelpfulSupport.jsx", error: String((e && e.message) || e) }); }

// components/trust/IconTrustSecureCheckout.jsx
try { (() => {
// figma node: 234:25 Icon/Trust/Secure Checkout — paths from the supplied Trust Strip SVG (uploads), 1.6px stroke, currentColor
function IconTrustSecureCheckout(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("svg", {
    className: props.className,
    width: 32,
    height: 32,
    viewBox: "624.125 43 32 32",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      color: "var(--color-icon-trust)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M640.125 46L651.125 50V59L647.125 67L640.125 72L633.125 67L629.125 59V50L640.125 46Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M635.125 58H645.125V66H635.125V58Z",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M637.125 58V55C637.125 53.343 638.468 52 640.125 52C641.782 52 643.125 53.343 643.125 55V58",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M640.125 61V63",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square"
  }));
}
Object.assign(__ds_scope, { IconTrustSecureCheckout, __ds_default_components_trust_IconTrustSecureCheckout_1jib6hf: IconTrustSecureCheckout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/IconTrustSecureCheckout.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustItemPurchase.jsx
try { (() => {
// figma node: 438:2753 Trust Item / Purchase (4 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "type=" + __venc(p.type);
function TrustItemPurchase(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "free shipping"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 174.5,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustFreeShipping, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "var(--color-action-primary)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "FREE SHIPPING")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--color-text-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "On every US order"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 156.5,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrust30DayReturns, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "var(--color-action-primary)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "30-DAY RETURNS")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--color-text-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "Shop with confidence"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 167,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustSecureCheckout, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "var(--color-action-primary)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "SECURE CHECKOUT")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--color-text-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "Your payment is protected"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 44,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 167,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustHelpfulSupport, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "var(--color-action-primary)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "HELPFUL SUPPORT")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "var(--color-text-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "Here when you need us"));
  const __impls = {
    // figma: Type=Free Shipping
    "type=free shipping": __body0,
    // figma: Type=30-Day Returns
    "type=30-day returns": __body1,
    // figma: Type=Secure Checkout
    "type=secure checkout": __body2,
    // figma: Type=Helpful Support
    "type=helpful support": __body3
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { TrustItemPurchase, __ds_default_components_trust_TrustItemPurchase_1nha3xz: TrustItemPurchase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustItemPurchase.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustStrip.jsx
try { (() => {
// figma node: 426:1731 Trust Strip (6 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "context=" + __venc(p.context) + '|' + "breakpoint=" + __venc(p.breakpoint);
function TrustStrip(_p = {}) {
  const props = {
    ..._p,
    context: _p.context ?? "page",
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1024,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-8) * 1px)",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustFreeShipping, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "FREE SHIPPING"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, props.text2 ?? "On every US order")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 120,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-8) * 1px)",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrust30DayReturns, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text3 ?? "30-DAY RETURNS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, props.text4 ?? "Shop with confidence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 120,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-8) * 1px)",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustSecureCheckout, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SECURE CHECKOUT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, "Your payment is protected")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 120,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-8) * 1px)",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-16) * 1px)",
      paddingBottom: "calc(var(--spacing-16) * 1px)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustHelpfulSupport, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "HELPFUL SUPPORT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, "Here when you need us")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 384,
      height: 176,
      overflow: "hidden",
      backgroundColor: "var(--color-bg-parchment)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "free shipping"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "30-day returns"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "secure checkout"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "helpful support"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 392,
      height: 52,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(217,211,203,0.8)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 3.033,
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 7 0 L 7.55 0 L 7.55 -0.55 L 7 -0.55 L 7 0 Z M 7 7 L 7 7.55 L 7.55 7.55 L 7.55 7 L 7 7 Z M 0 7 L -0.55 7 L -0.55 7.55 L 0 7.55 L 0 7 Z M 0 0 L 0 0.55 L 7 0.55 L 7 0 L 7 -0.55 L 0 -0.55 L 0 0 Z M 7 0 L 6.45 0 L 6.45 7 L 7 7 L 7.55 7 L 7.55 0 L 7 0 Z M 7 7 L 7 6.45 L 0 6.45 L 0 7 L 0 7.55 L 7 7.55 L 7 7 Z M 0 7 L 0.55 7 L 0.55 0 L 0 0 L -0.55 0 L -0.55 7 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.667,
    height: 5.133,
    viewBox: "0 0 4.667 5.133",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.167,
      top: 4.9,
      width: 4.667,
      height: 5.133
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 2.1 0 L 2.489 -0.389 L 2.328 -0.55 L 2.1 -0.55 L 2.1 0 Z M 4.667 2.567 L 5.217 2.567 L 5.217 2.339 L 5.056 2.178 L 4.667 2.567 Z M 4.667 5.133 L 4.667 5.683 L 5.217 5.683 L 5.217 5.133 L 4.667 5.133 Z M 0 5.133 L -0.55 5.133 L -0.55 5.683 L 0 5.683 L 0 5.133 Z M 0 0 L 0 0.55 L 2.1 0.55 L 2.1 0 L 2.1 -0.55 L 0 -0.55 L 0 0 Z M 2.1 0 L 1.711 0.389 L 4.278 2.956 L 4.667 2.567 L 5.056 2.178 L 2.489 -0.389 L 2.1 0 Z M 4.667 2.567 L 4.117 2.567 L 4.117 5.133 L 4.667 5.133 L 5.217 5.133 L 5.217 2.567 L 4.667 2.567 Z M 4.667 5.133 L 4.667 4.583 L 0 4.583 L 0 5.133 L 0 5.683 L 4.667 5.683 L 4.667 5.133 Z M 0 5.133 L 0.55 5.133 L 0.55 0 L 0 0 L -0.55 0 L -0.55 5.133 L 0 5.133 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.867,
    height: 1.867,
    viewBox: "0 0 1.867 1.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 10.033,
      width: 1.867,
      height: 1.867
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.867,
    height: 1.867,
    viewBox: "0 0 1.867 1.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.8,
      top: 10.033,
      width: 1.867,
      height: 1.867
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "FREE SHIPPING")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 24,
      backgroundColor: "rgba(217,211,203,0.9)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.867,
    height: 6.533,
    viewBox: "0 0 8.867 6.533",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.967,
      top: 3.967,
      width: 8.867,
      height: 6.533
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.55 L 5.6 0.55 L 5.6 0 L 5.6 -0.55 L 0 -0.55 L 0 0 Z M 5.6 0 L 5.6 0.55 C 7.1 0.55 8.317 1.766 8.317 3.267 L 8.867 3.267 L 9.417 3.267 C 9.417 1.159 7.708 -0.55 5.6 -0.55 L 5.6 0 Z M 8.867 3.267 L 8.317 3.267 C 8.317 4.767 7.1 5.983 5.6 5.983 L 5.6 6.533 L 5.6 7.083 C 7.708 7.083 9.417 5.375 9.417 3.267 L 8.867 3.267 Z M 5.6 6.533 L 5.6 5.983 L 0.933 5.983 L 0.933 6.533 L 0.933 7.083 L 5.6 7.083 L 5.6 6.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 4.667,
    viewBox: "0 0 2.333 4.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 1.633,
      width: 2.333,
      height: 4.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.333 L -0.389 1.944 L -0.778 2.333 L -0.389 2.722 L 0 2.333 Z M 2.333 0 L 1.944 -0.389 L -0.389 1.944 L 0 2.333 L 0.389 2.722 L 2.722 0.389 L 2.333 0 Z M 0 2.333 L -0.389 2.722 L 1.944 5.056 L 2.333 4.667 L 2.722 4.278 L 0.389 1.944 L 0 2.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.800,
    height: 1.100,
    viewBox: "0 -0.550 2.800 1.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 3.967,
      width: 2.8,
      height: 1.100000023841858
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.55 L 2.8 0.55 L 2.8 0 L 2.8 -0.55 L 0 -0.55 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "30-DAY RETURNS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 24,
      backgroundColor: "rgba(217,211,203,0.9)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.333,
    height: 6.533,
    viewBox: "0 0 9.333 6.533",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.333,
      top: 5.833,
      width: 9.333,
      height: 6.533
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 9.333 0 L 9.883 0 L 9.883 -0.55 L 9.333 -0.55 L 9.333 0 Z M 9.333 6.533 L 9.333 7.083 L 9.883 7.083 L 9.883 6.533 L 9.333 6.533 Z M 0 6.533 L -0.55 6.533 L -0.55 7.083 L 0 7.083 L 0 6.533 Z M 0 0 L 0 0.55 L 9.333 0.55 L 9.333 0 L 9.333 -0.55 L 0 -0.55 L 0 0 Z M 9.333 0 L 8.783 0 L 8.783 6.533 L 9.333 6.533 L 9.883 6.533 L 9.883 0 L 9.333 0 Z M 9.333 6.533 L 9.333 5.983 L 0 5.983 L 0 6.533 L 0 7.083 L 9.333 7.083 L 9.333 6.533 Z M 0 6.533 L 0.55 6.533 L 0.55 0 L 0 0 L -0.55 0 L -0.55 6.533 L 0 6.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.133,
    height: 4.433,
    viewBox: "0 0 5.133 4.433",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.433,
      top: 1.4,
      width: 5.133,
      height: 4.433
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.433 L 0.55 4.433 L 0.55 2.567 L 0 2.567 L -0.55 2.567 L -0.55 4.433 L 0 4.433 Z M 0 2.567 L 0.55 2.567 C 0.55 1.453 1.453 0.55 2.567 0.55 L 2.567 0 L 2.567 -0.55 C 0.845 -0.55 -0.55 0.845 -0.55 2.567 L 0 2.567 Z M 2.567 0 L 2.567 0.55 C 3.68 0.55 4.583 1.453 4.583 2.567 L 5.133 2.567 L 5.683 2.567 C 5.683 0.845 4.288 -0.55 2.567 -0.55 L 2.567 0 Z M 5.133 2.567 L 4.583 2.567 L 4.583 4.433 L 5.133 4.433 L 5.683 4.433 L 5.683 2.567 L 5.133 2.567 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.100,
    height: 2.333,
    viewBox: "-0.550 0 1.100 2.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7.933,
      width: 1.100000023841858,
      height: 2.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.55 0 L -0.55 2.333 L 0 2.333 L 0.55 2.333 L 0.55 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "SECURE CHECKOUT")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 350,
      height: 52,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(217,211,203,0.8)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(35,66,56)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 3.033,
      width: 7,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 7 0 L 7.55 0 L 7.55 -0.55 L 7 -0.55 L 7 0 Z M 7 7 L 7 7.55 L 7.55 7.55 L 7.55 7 L 7 7 Z M 0 7 L -0.55 7 L -0.55 7.55 L 0 7.55 L 0 7 Z M 0 0 L 0 0.55 L 7 0.55 L 7 0 L 7 -0.55 L 0 -0.55 L 0 0 Z M 7 0 L 6.45 0 L 6.45 7 L 7 7 L 7.55 7 L 7.55 0 L 7 0 Z M 7 7 L 7 6.45 L 0 6.45 L 0 7 L 0 7.55 L 7 7.55 L 7 7 Z M 0 7 L 0.55 7 L 0.55 0 L 0 0 L -0.55 0 L -0.55 7 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.667,
    height: 5.133,
    viewBox: "0 0 4.667 5.133",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.167,
      top: 4.9,
      width: 4.667,
      height: 5.133
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 2.1 0 L 2.489 -0.389 L 2.328 -0.55 L 2.1 -0.55 L 2.1 0 Z M 4.667 2.567 L 5.217 2.567 L 5.217 2.339 L 5.056 2.178 L 4.667 2.567 Z M 4.667 5.133 L 4.667 5.683 L 5.217 5.683 L 5.217 5.133 L 4.667 5.133 Z M 0 5.133 L -0.55 5.133 L -0.55 5.683 L 0 5.683 L 0 5.133 Z M 0 0 L 0 0.55 L 2.1 0.55 L 2.1 0 L 2.1 -0.55 L 0 -0.55 L 0 0 Z M 2.1 0 L 1.711 0.389 L 4.278 2.956 L 4.667 2.567 L 5.056 2.178 L 2.489 -0.389 L 2.1 0 Z M 4.667 2.567 L 4.117 2.567 L 4.117 5.133 L 4.667 5.133 L 5.217 5.133 L 5.217 2.567 L 4.667 2.567 Z M 4.667 5.133 L 4.667 4.583 L 0 4.583 L 0 5.133 L 0 5.683 L 4.667 5.683 L 4.667 5.133 Z M 0 5.133 L 0.55 5.133 L 0.55 0 L 0 0 L -0.55 0 L -0.55 5.133 L 0 5.133 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.867,
    height: 1.867,
    viewBox: "0 0 1.867 1.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 10.033,
      width: 1.867,
      height: 1.867
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.867,
    height: 1.867,
    viewBox: "0 0 1.867 1.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.8,
      top: 10.033,
      width: 1.867,
      height: 1.867
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.867 0.933 L 1.317 0.933 C 1.317 1.145 1.145 1.317 0.933 1.317 L 0.933 1.867 L 0.933 2.417 C 1.753 2.417 2.417 1.753 2.417 0.933 L 1.867 0.933 Z M 0.933 1.867 L 0.933 1.317 C 0.722 1.317 0.55 1.145 0.55 0.933 L 0 0.933 L -0.55 0.933 C -0.55 1.753 0.114 2.417 0.933 2.417 L 0.933 1.867 Z M 0 0.933 L 0.55 0.933 C 0.55 0.722 0.722 0.55 0.933 0.55 L 0.933 0 L 0.933 -0.55 C 0.114 -0.55 -0.55 0.114 -0.55 0.933 L 0 0.933 Z M 0.933 0 L 0.933 0.55 C 1.145 0.55 1.317 0.722 1.317 0.933 L 1.867 0.933 L 2.417 0.933 C 2.417 0.114 1.753 -0.55 0.933 -0.55 L 0.933 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "FREE SHIPPING")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 24,
      backgroundColor: "rgba(217,211,203,0.9)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.867,
    height: 6.533,
    viewBox: "0 0 8.867 6.533",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.967,
      top: 3.967,
      width: 8.867,
      height: 6.533
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.55 L 5.6 0.55 L 5.6 0 L 5.6 -0.55 L 0 -0.55 L 0 0 Z M 5.6 0 L 5.6 0.55 C 7.1 0.55 8.317 1.766 8.317 3.267 L 8.867 3.267 L 9.417 3.267 C 9.417 1.159 7.708 -0.55 5.6 -0.55 L 5.6 0 Z M 8.867 3.267 L 8.317 3.267 C 8.317 4.767 7.1 5.983 5.6 5.983 L 5.6 6.533 L 5.6 7.083 C 7.708 7.083 9.417 5.375 9.417 3.267 L 8.867 3.267 Z M 5.6 6.533 L 5.6 5.983 L 0.933 5.983 L 0.933 6.533 L 0.933 7.083 L 5.6 7.083 L 5.6 6.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 4.667,
    viewBox: "0 0 2.333 4.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 1.633,
      width: 2.333,
      height: 4.667
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.333 L -0.389 1.944 L -0.778 2.333 L -0.389 2.722 L 0 2.333 Z M 2.333 0 L 1.944 -0.389 L -0.389 1.944 L 0 2.333 L 0.389 2.722 L 2.722 0.389 L 2.333 0 Z M 0 2.333 L -0.389 2.722 L 1.944 5.056 L 2.333 4.667 L 2.722 4.278 L 0.389 1.944 L 0 2.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.800,
    height: 1.100,
    viewBox: "0 -0.550 2.800 1.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.567,
      top: 3.967,
      width: 2.8,
      height: 1.100000023841858
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.55 L 2.8 0.55 L 2.8 0 L 2.8 -0.55 L 0 -0.55 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "30-DAY RETURNS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 24,
      backgroundColor: "rgba(217,211,203,0.9)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.333,
    height: 6.533,
    viewBox: "0 0 9.333 6.533",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.333,
      top: 5.833,
      width: 9.333,
      height: 6.533
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 -0.55 L -0.55 -0.55 L -0.55 0 L 0 0 Z M 9.333 0 L 9.883 0 L 9.883 -0.55 L 9.333 -0.55 L 9.333 0 Z M 9.333 6.533 L 9.333 7.083 L 9.883 7.083 L 9.883 6.533 L 9.333 6.533 Z M 0 6.533 L -0.55 6.533 L -0.55 7.083 L 0 7.083 L 0 6.533 Z M 0 0 L 0 0.55 L 9.333 0.55 L 9.333 0 L 9.333 -0.55 L 0 -0.55 L 0 0 Z M 9.333 0 L 8.783 0 L 8.783 6.533 L 9.333 6.533 L 9.883 6.533 L 9.883 0 L 9.333 0 Z M 9.333 6.533 L 9.333 5.983 L 0 5.983 L 0 6.533 L 0 7.083 L 9.333 7.083 L 9.333 6.533 Z M 0 6.533 L 0.55 6.533 L 0.55 0 L 0 0 L -0.55 0 L -0.55 6.533 L 0 6.533 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.133,
    height: 4.433,
    viewBox: "0 0 5.133 4.433",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.433,
      top: 1.4,
      width: 5.133,
      height: 4.433
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.433 L 0.55 4.433 L 0.55 2.567 L 0 2.567 L -0.55 2.567 L -0.55 4.433 L 0 4.433 Z M 0 2.567 L 0.55 2.567 C 0.55 1.453 1.453 0.55 2.567 0.55 L 2.567 0 L 2.567 -0.55 C 0.845 -0.55 -0.55 0.845 -0.55 2.567 L 0 2.567 Z M 2.567 0 L 2.567 0.55 C 3.68 0.55 4.583 1.453 4.583 2.567 L 5.133 2.567 L 5.683 2.567 C 5.683 0.845 4.288 -0.55 2.567 -0.55 L 2.567 0 Z M 5.133 2.567 L 4.583 2.567 L 4.583 4.433 L 5.133 4.433 L 5.683 4.433 L 5.683 2.567 L 5.133 2.567 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.100,
    height: 2.333,
    viewBox: "-0.550 0 1.100 2.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7.933,
      width: 1.100000023841858,
      height: 2.333
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.55 0 L -0.55 2.333 L 0 2.333 L 0.55 2.333 L 0.55 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "14px",
      letterSpacing: "0.400px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "SECURE CHECKOUT")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 241,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustFreeShipping, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text1 ?? "FREE SHIPPING"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, props.text2 ?? "On every US order")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrust30DayReturns, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text3 ?? "30-DAY RETURNS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, props.text4 ?? "Shop with confidence"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustSecureCheckout, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SECURE CHECKOUT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, "Your payment is protected")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1,
      height: 120,
      backgroundColor: "rgb(201,195,188)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 170,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.IconTrustHelpfulSupport, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.800px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "HELPFUL SUPPORT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgba(41,38,36,0.72)",
      flexShrink: 0
    }
  }, "Here when you need us"))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 342,
      height: 176,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "free shipping"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "30-day returns"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "secure checkout"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustItemPurchase, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    type: "helpful support"
  }));
  const __impls = {
    // figma: Context=Page, Breakpoint=Desktop
    "context=page|breakpoint=desktop": __body0,
    // figma: Context=Purchase, Breakpoint=Desktop
    "context=purchase|breakpoint=desktop": __body1,
    // figma: Context=Checkout, Breakpoint=Desktop
    "context=checkout|breakpoint=desktop": __body2,
    // figma: Context=Checkout, Breakpoint=Mobile
    "context=checkout|breakpoint=mobile": __body3,
    // figma: Context=Page, Breakpoint=Mobile
    "context=page|breakpoint=mobile": __body4,
    // figma: Context=Purchase, Breakpoint=Mobile
    "context=purchase|breakpoint=mobile": __body5
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { TrustStrip, __ds_default_components_trust_TrustStrip_u73z6n: TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// components/cart/CartDrawer.jsx
try { (() => {
// figma node: 429:2324 Cart Drawer (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "breakpoint=" + __venc(p.breakpoint);
function CartDrawer(_p = {}) {
  const props = {
    ..._p,
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 900,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(201,195,188,0.75)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 29,
      lineHeight: "32px",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Your cart  ·  1 item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.495 -0.495 L 0 -0.99 L -0.99 0 L -0.495 0.495 L 0 0 L 0.495 -0.495 Z M 11.505 12.495 L 12 12.99 L 12.99 12 L 12.495 11.505 L 12 12 L 11.505 12.495 Z M 12.495 0.495 L 12.99 0 L 12 -0.99 L 11.505 -0.495 L 12 0 L 12.495 0.495 Z M -0.495 11.505 L -0.99 12 L 0 12.99 L 0.495 12.495 L 0 12 L -0.495 11.505 Z M 0 0 L -0.495 0.495 L 11.505 12.495 L 12 12 L 12.495 11.505 L 0.495 -0.495 L 0 0 Z M 12 0 L 11.505 -0.495 L -0.495 11.505 L 0 12 L 0.495 12.495 L 12.495 0.495 L 12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      backgroundColor: "rgb(247,242,233)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "FREE SHIPPING ON ALL US ORDERS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 578,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 154,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      width: 104,
      height: 140,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 272,
      height: 140,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "20px",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Alder ribbed knit coat with denim panels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "16px",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Cream  /  M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "$68.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CartQuantitySelector, {
    style: {
      position: "relative",
      width: 108,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 152,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 9,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(106,52,70)",
      flexShrink: 0
    }
  }, "REMOVE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgba(201,195,188,0.72)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 212,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgba(201,195,188,0.7)",
      borderRight: "1px solid rgba(201,195,188,0.7)",
      borderBottom: "1px solid rgba(201,195,188,0.7)",
      borderLeft: "1px solid rgba(201,195,188,0.7)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 24px 20px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 292,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 92,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0
    }
  }, "$68.00")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "CHECKOUT",
    style2: "primary",
    size: "standard"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustStrip, {
    style: {
      position: "relative",
      height: 52,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    context: "checkout",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "16px",
      letterSpacing: "0.600px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "PAYMENTS ARE ENCRYPTED AND PROCESSED SECURELY")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 844,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(201,195,188,0.75)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(41,38,36)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 29,
      lineHeight: "32px",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Your cart  ·  1 item"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.495 -0.495 L 0 -0.99 L -0.99 0 L -0.495 0.495 L 0 0 L 0.495 -0.495 Z M 11.505 12.495 L 12 12.99 L 12.99 12 L 12.495 11.505 L 12 12 L 11.505 12.495 Z M 12.495 0.495 L 12.99 0 L 12 -0.99 L 11.505 -0.495 L 12 0 L 12.495 0.495 Z M -0.495 11.505 L -0.99 12 L 0 12.99 L 0.495 12.495 L 0 12 L -0.495 11.505 Z M 0 0 L -0.495 0.495 L 11.505 12.495 L 12 12 L 12.495 11.505 L 0.495 -0.495 L 0 0 Z M 12 0 L 11.505 -0.495 L -0.495 11.505 L 0 12 L 0.495 12.495 L 12.495 0.495 L 12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      backgroundColor: "rgb(247,242,233)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "FREE SHIPPING ON ALL US ORDERS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 530,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 154,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-b74394ca95812264",
    style: {
      ...(props.image ? {
        background: `url(${props.image}) center / cover no-repeat`
      } : {}),
      position: "relative",
      width: 92,
      height: 140,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 242,
      height: 140,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Cormorant Garamond\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 600,
      fontSize: 17,
      lineHeight: "20px",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text3 ?? "Alder ribbed knit coat with denim panels"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "16px",
      color: "rgb(41,38,36)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Cream  /  M"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "$68.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CartQuantitySelector, {
    style: {
      position: "relative",
      width: 108,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 122,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 9,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(106,52,70)",
      flexShrink: 0
    }
  }, "REMOVE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgba(201,195,188,0.72)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 210,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgba(201,195,188,0.7)",
      borderRight: "1px solid rgba(201,195,188,0.7)",
      borderBottom: "1px solid rgba(201,195,188,0.7)",
      borderLeft: "1px solid rgba(201,195,188,0.7)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 250,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "100%",
      color: "rgb(41,38,36)",
      flexShrink: 0
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 92,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "100%",
      color: "rgb(35,66,56)",
      flexShrink: 0
    }
  }, "$68.00")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      position: "relative",
      height: 48,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "CHECKOUT",
    style2: "primary",
    size: "standard"
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustStrip, {
    style: {
      position: "relative",
      height: 52,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    context: "checkout",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      textAlign: "center",
      lineHeight: "14px",
      letterSpacing: "0.600px",
      color: "rgb(35,66,56)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "PAYMENTS ARE ENCRYPTED AND PROCESSED SECURELY")));
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CartDrawer, __ds_default_components_cart_CartDrawer_14cr2ua: CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cart/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CollectionScreen.jsx
try { (() => {
// Collections Page — node 324:3976
// Source grid repeats the default card (Alder ribbed knit coat) — product data is placeholder.
const shoeProducts = [0, 1, 2, 3];
function CollectionScreen({
  go
}) {
  const [sub, setSub] = React.useState('All shoes');
  const [page, setPage] = React.useState('1');
  const [filterOpen, setFilterOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Collection"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: serif,
      fontWeight: 600,
      fontSize: 40,
      lineHeight: '44px',
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "Shoes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: sans,
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--color-text-muted)',
      margin: 0
    }
  }, "Considered footwear for everyday comfort and polished style.")), /*#__PURE__*/React.createElement("div", {
    onClick: () => setFilterOpen(true),
    style: {
      width: 1024,
      margin: '16px auto 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.CollectionToolbar, {
    style: {
      width: 1024
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      margin: '16px 0 40px'
    }
  }, ['All shoes', 'Boots', 'Comfort & orthopedic', 'Wide-fit shoes'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSub(s),
    style: {
      height: 36,
      padding: '8px 24px',
      border: 0,
      boxShadow: 'inset 0 0 0 1px rgb(216,216,215)',
      background: sub === s ? 'var(--color-action-primary)' : '#fff',
      color: sub === s ? 'var(--color-bg-parchment)' : 'var(--color-text-primary)',
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '18px',
      letterSpacing: '0.4px',
      cursor: 'pointer'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1024,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, [0, 1, 2].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 20
    }
  }, shoeProducts.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => go('product'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.ProductCard, {
    usage: "grid",
    image: IMG + 'product-coat.png'
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1024,
      margin: '40px auto 0',
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, ['1', '2', '3', '…', 'Next'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    onClick: () => p !== '…' && setPage(p === 'Next' ? String(Math.min(3, +page + 1)) : p),
    style: {
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '18px',
      letterSpacing: '0.4px',
      color: 'var(--color-text-brand)',
      cursor: 'pointer',
      textDecoration: page === p ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1024,
      margin: '64px auto 0'
    }
  }, /*#__PURE__*/React.createElement(DT.TrustStrip, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      margin: '32px auto 64px'
    }
  }, /*#__PURE__*/React.createElement(DT.FAQSection, null)), filterOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setFilterOpen(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(41,38,36,0.32)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100vh',
      overflowY: 'auto',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(DT.CollectionFilterSortDrawer, null))));
}
window.CollectionScreen = CollectionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CollectionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
// Homepage — node 201:89
const homeTiles = [[['collection-clothing.png', 'Clothing & Shoes', 'Knitwear, dresses, layers, boots and comfortable everyday styles.'], ['collection-bags-jewelry.png', 'Bags & Jewelry', 'Handbags, jewelry and finishing touches chosen for everyday elegance.'], ['collection-home-living.png', 'Home & Living', 'Warm accents, useful pieces and everyday comforts for every room.']], [['collection-gifts-hobbies.png', 'Gifts & Hobbies', 'Thoughtful gifts, craft kits and creative finds for time well spent.'], ['collection-christmas.png', 'Christmas Shop', 'Festive décor, meaningful gifts and craft kits for a warm Christmas.']]];
const favourites = [['OUTERWEAR', 'Ribbed Knit Coat With Denim Panels', '$59.99'], ['BOTTOMS', 'Tailored Utility Pants for Work and Weekend', '$64.99'], ['OUTERWEAR', 'V-Neck Single-Button A-Line Blazer', '$79.99']];
function CollectionTile({
  img,
  title,
  body,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go('collection'),
    style: {
      flex: 1,
      height: 387,
      cursor: 'pointer',
      background: `linear-gradient(180deg, rgba(0,0,0,0.05) 50.13%, rgb(22,2,9) 100%), url(${IMG + img}) center / cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 16,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: kitText.h3
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kitText.body,
      fontSize: 14,
      color: 'var(--color-bg-parchment)'
    }
  }, body));
}
function HomeScreen({
  go
}) {
  const [i, setI] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Homepage"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 500,
      background: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(102,102,102,0) 100%), linear-gradient(rgba(41,38,36,0.16),rgba(41,38,36,0.16)), url(${IMG}hero-lifestyle.png) center / cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 96,
      top: 122,
      width: 597,
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: kitText.h1
  }, "What you wear & how you live, weaved beautifully together"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kitText.body,
      width: 508,
      color: 'var(--color-bg-parchment)'
    }
  }, "A thoughtful edit of easy fashion, comfortable footwear, and beautiful things for home. Chosen for the woman you are now.")), /*#__PURE__*/React.createElement(DT.Button, {
    size: "standard",
    label: "Shop by collection",
    style: {
      width: 239
    },
    onClick: () => go('collection')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      width: 1024,
      margin: '64px auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: kitText.eyebrow
  }, "Shop by collection"), /*#__PURE__*/React.createElement("h2", {
    style: kitText.h2
  }, "What are you looking for today?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, homeTiles.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 20
    }
  }, row.map(([img, t, b]) => /*#__PURE__*/React.createElement(CollectionTile, {
    key: t,
    img: img,
    title: t,
    body: b,
    go: go
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      width: 1024,
      height: 417,
      margin: '32px auto 0',
      background: 'var(--color-bg-parchment)',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 416,
      padding: '0 48px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: kitText.h2
  }, "Can\u2019t decide?"), /*#__PURE__*/React.createElement("p", {
    style: kitText.body
  }, "Take a look through everything we\u2019ve gathered, from easy everyday style to thoughtful gifts and beautiful things for home.")), /*#__PURE__*/React.createElement(DT.Button, {
    size: "standard",
    label: "Shop All",
    style: {
      width: 142
    },
    onClick: () => go('collection')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      alignSelf: 'stretch',
      background: `url(${IMG}shop-all.png) center / cover no-repeat`
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      width: 1024,
      margin: '64px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 432,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...kitText.h2,
      whiteSpace: 'nowrap'
    }
  }, "Some of our fashion favourites"), /*#__PURE__*/React.createElement("p", {
    style: kitText.body
  }, "You do not have to sort through everything. Here are a few easy-to-love pieces to help you begin.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 867,
      height: 520
    }
  }, favourites.map(([c, t, p], k) => {
    const slot = (k - i + 1 + 3) % 3;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: () => go('product'),
      style: {
        position: 'absolute',
        left: slot * 291 - (slot === 2 ? 6 : 0),
        top: slot === 1 ? 16 : 0,
        opacity: slot === 1 ? 1 : 0.7,
        cursor: 'pointer',
        transition: 'left 320ms var(--ease-standard), top 320ms var(--ease-standard), opacity 320ms'
      }
    }, /*#__PURE__*/React.createElement(DT.ProductCard, {
      category: c,
      title: t,
      price: p,
      image: IMG + 'product-coat.png'
    }));
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setI(v => (v + (e.clientX - r.left < 64 ? 2 : 1)) % 3);
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.CarouselControls, {
    size: "desktop"
  }))), /*#__PURE__*/React.createElement(SplitFeature, {
    imageLeft: true,
    image: "editorial-gifting.png",
    title: "Gifting season is here",
    body: "For the woman who would rather enjoy December than rush through it. Start early with thoughtful gifts and festive finds for everyone you love.",
    cta: "Christmas shop",
    onCta: () => go('collection')
  }), /*#__PURE__*/React.createElement(SplitFeature, {
    mirror: true,
    image: "editorial-philosophy.png",
    title: "Chosen for the life you\u2019re living",
    body: "Dove & Thistle brings together easy clothing, comfortable footwear and thoughtful pieces for home and gifting. A considered collection for women who know what they like and believe the everyday can still feel a little special.",
    cta: "Our philosophy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1024,
      margin: '32px auto 0'
    }
  }, /*#__PURE__*/React.createElement(DT.TrustStrip, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      margin: '32px auto 64px'
    }
  }, /*#__PURE__*/React.createElement(DT.FAQSection, null)));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
// Product Display Page / Desktop / Premium — node 330:1337
const pdpLabel = {
  fontFamily: sans,
  fontWeight: 700,
  fontSize: 12,
  lineHeight: '100%',
  color: 'var(--color-text-primary)',
  margin: 0
};
function ProductScreen({
  go,
  addToCart
}) {
  const [size, setSize] = React.useState('M');
  const [qty, setQty] = React.useState(1);
  const [slide, setSlide] = React.useState(0);
  const [open, setOpen] = React.useState(-1);
  const coat = IMG + 'product-coat.png';
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Product"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      gap: 32,
      padding: '40px 208px 64px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 608,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      height: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 296,
      background: `url(${coat}) center / cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 296,
      background: `url(${coat}) center / cover`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 560,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      transform: `translateX(${-slide * 624}px)`,
      transition: 'transform 320ms var(--ease-standard)'
    }
  }, [0, 1, 2].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      width: 608,
      height: 560,
      flexShrink: 0,
      background: `url(${coat}) center / cover`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: sans,
      fontWeight: 500,
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: '0.4px'
    }
  }, slide + 3, " / 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 392,
      height: 2,
      background: 'rgb(219,214,204)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: 2,
      width: `${(slide + 3) / 5 * 100}%`,
      background: 'var(--color-action-primary-hover)',
      transition: 'width 320ms'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSlide(s => Math.max(0, s - 1)),
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--color-text-primary)'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSlide(s => Math.min(2, s + 1)),
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--color-text-primary)'
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 384,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 140,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: kitText.meta
  }, "OUTERWEAR"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: serif,
      fontWeight: 600,
      fontSize: 32,
      lineHeight: '38px',
      color: 'var(--color-text-brand)',
      margin: 0
    }
  }, "Alder ribbed knit coat with denim panels"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 17,
      lineHeight: '24px',
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "$68.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: pdpLabel
  }, "COLOR  \xB7  CREAM"), /*#__PURE__*/React.createElement(DT.ProductSwatches, {
    size: "pdp"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: pdpLabel
  }, "SIZE"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: sans,
      fontWeight: 700,
      fontSize: 11
    }
  }, "SIZE GUIDE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['S', 'M', 'L', 'XL', '2XL'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      width: 56,
      height: 44,
      border: 0,
      cursor: 'pointer',
      background: size === s ? 'var(--color-text-brand)' : '#fff',
      color: size === s ? '#fff' : 'var(--color-text-primary)',
      boxShadow: `inset 0 0 0 1px ${size === s ? 'var(--color-text-brand)' : 'var(--color-border-subtle)'}`,
      fontFamily: sans,
      fontWeight: 700,
      fontSize: 12
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      height: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      boxSizing: 'border-box',
      fontFamily: sans,
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => setQty(q => Math.max(1, q - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, qty), /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => setQty(q => q + 1)
  }, "+")), /*#__PURE__*/React.createElement(DT.Button, {
    label: "ADD TO CART",
    style: {
      width: 264,
      height: 52
    },
    onClick: addToCart
  })), /*#__PURE__*/React.createElement(DT.TrustStrip, {
    context: "purchase",
    style: {
      width: 384
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: kitText.meta
  }, "WHY YOU\u2019LL LOVE IT"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: sans,
      fontSize: 14,
      lineHeight: '22px',
      margin: 0
    }
  }, "A softly structured knit coat designed for easy layering, with contrasting denim panels that give an everyday silhouette a more considered finish."), /*#__PURE__*/React.createElement("p", {
    style: kitText.meta
  }, "KEY FEATURES"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: sans,
      fontSize: 14,
      lineHeight: '22px',
      margin: 0,
      whiteSpace: 'pre-line'
    }
  }, '• Ribbed knit with comfortable movement\n• Contrasting denim front and collar panels\n• Full-length sleeves and practical patch pockets\n• Easy shape for workdays, weekends and travel')), /*#__PURE__*/React.createElement("div", null, ['FIT & SIZING', 'FABRIC & CARE', 'SHIPPING & RETURNS', 'REVIEWS'].map((l, k) => /*#__PURE__*/React.createElement("div", {
    key: l,
    onClick: () => setOpen(open === k ? -1 : k),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.AccordionProductDetails, {
    label: l,
    text1: open === k ? '−' : '+',
    style: {
      width: 384
    }
  }), open === k && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: sans,
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--color-text-muted)',
      margin: '0 0 16px'
    }
  }, "Content for this panel is not designed in the source file.")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      height: 480,
      background: 'var(--color-bg-parchment)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 720,
      padding: '0 80px 0 120px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: kitText.meta
  }, "WHY YOU\u2019LL LOVE IT"), /*#__PURE__*/React.createElement("h2", {
    style: kitText.h2
  }, "The layer that does not feel like an afterthought."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kitText.body,
      lineHeight: '26px'
    }
  }, "Warm enough to earn its place by the door, distinctive enough to finish the whole outfit. The relaxed shape works over knits without losing its line.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 720,
      background: `url(${coat}) center / cover`
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 208px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...kitText.meta,
      fontSize: 12,
      lineHeight: '16px'
    }
  }, "OUTERWEAR"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...kitText.h2,
      fontSize: 32,
      lineHeight: '100%'
    }
  }, "You may also like")), /*#__PURE__*/React.createElement(DT.CarouselControls, {
    size: "desktop"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, [0, 1, 2, 3].map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.ProductCard, {
    usage: "grid",
    image: coat
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      margin: '0 auto 64px'
    }
  }, /*#__PURE__*/React.createElement(DT.FAQSection, null)));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Shell.jsx
try { (() => {
// Shared storefront chrome + tiny primitives used across kit screens.
const DT = window.DoveThistleDesignSystem_e5a4b5;
const IMG = '../../assets/images/';
const serif = '"Cormorant Garamond", ui-serif, Georgia, serif';
const sans = 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif';
const kitText = {
  eyebrow: {
    fontFamily: sans,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '12px',
    letterSpacing: '0.05em',
    color: 'var(--color-accent-gold)',
    textTransform: 'uppercase',
    margin: 0
  },
  h1: {
    fontFamily: serif,
    fontWeight: 600,
    fontSize: 48,
    lineHeight: '48px',
    color: 'var(--color-bg-parchment)',
    margin: 0
  },
  h2: {
    fontFamily: serif,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: '44px',
    color: 'var(--color-text-brand)',
    margin: 0
  },
  h3: {
    fontFamily: serif,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '36px',
    color: 'var(--color-accent-gold)',
    margin: 0
  },
  body: {
    fontFamily: sans,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '32px',
    color: 'var(--color-text-primary)',
    margin: 0
  },
  meta: {
    fontFamily: sans,
    fontWeight: 700,
    fontSize: 11,
    lineHeight: '100%',
    color: 'var(--color-accent-gold)',
    margin: 0
  }
};
function SiteHeader({
  go,
  openCart
}) {
  const onClick = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const t = (e.target.textContent || '').trim();
    if (x < 420 && !t) return go('home');
    if (x > 1180) return openCart();
    if (['Clothing', 'Shoes', 'Home & Living', 'Gifts', 'Seasonal'].includes(t)) go('collection');
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--color-border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(DT.AnnouncementBar, null), /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DT.Header, {
    style: {
      height: 80
    }
  })));
}
function SplitFeature({
  image,
  title,
  body,
  cta,
  imageLeft,
  mirror,
  onCta
}) {
  const img = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 720,
      height: 600,
      flexShrink: 0,
      background: `url(${IMG + image}) center / cover no-repeat`,
      transform: mirror ? 'scaleX(-1)' : undefined
    }
  });
  const copy = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 720,
      height: 600,
      flexShrink: 0,
      background: 'var(--color-bg-parchment)',
      padding: 120,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: kitText.h2
  }, title), /*#__PURE__*/React.createElement("p", {
    style: kitText.body
  }, body)), /*#__PURE__*/React.createElement(DT.Button, {
    size: "standard",
    label: cta,
    style: {
      width: 'auto',
      padding: '0 40px',
      alignSelf: 'flex-start'
    },
    onClick: onCta
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 1440
    }
  }, imageLeft ? /*#__PURE__*/React.createElement(React.Fragment, null, img, copy) : /*#__PURE__*/React.createElement(React.Fragment, null, copy, img));
}
function CartOverlay({
  open,
  onClose
}) {
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(41,38,36,0.32)',
      opacity: open ? 1 : 0,
      transition: 'opacity 240ms var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target.closest('svg') && e.clientY < 80) onClose();
    },
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100vh',
      overflowY: 'auto',
      background: '#fff',
      boxShadow: 'var(--shadow-drawer)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform 240ms var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(DT.CartDrawer, {
    image: IMG + 'product-coat.png'
  })));
}
Object.assign(window, {
  DT,
  IMG,
  serif,
  sans,
  kitText,
  SiteHeader,
  SplitFeature,
  CartOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CarouselControls = __ds_scope.CarouselControls;

__ds_ns.CartQuantitySelector = __ds_scope.CartQuantitySelector;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.CollectionFilterSortDrawer = __ds_scope.CollectionFilterSortDrawer;

__ds_ns.CollectionToolbar = __ds_scope.CollectionToolbar;

__ds_ns.ProductCardCollectionFilterSort = __ds_scope.ProductCardCollectionFilterSort;

__ds_ns.AccordionFAQ = __ds_scope.AccordionFAQ;

__ds_ns.FAQSection = __ds_scope.FAQSection;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.NavigationMenu = __ds_scope.NavigationMenu;

__ds_ns.NavigationSharedCategoryClothing = __ds_scope.NavigationSharedCategoryClothing;

__ds_ns.NavigationSharedCategoryGifts = __ds_scope.NavigationSharedCategoryGifts;

__ds_ns.NavigationSharedCategoryHomeLiving = __ds_scope.NavigationSharedCategoryHomeLiving;

__ds_ns.NavigationSharedCategorySeasonal = __ds_scope.NavigationSharedCategorySeasonal;

__ds_ns.NavigationSharedCategoryShoes = __ds_scope.NavigationSharedCategoryShoes;

__ds_ns.AccordionProductDetails = __ds_scope.AccordionProductDetails;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductCardGridMobile = __ds_scope.ProductCardGridMobile;

__ds_ns.ProductCardSliderMobile = __ds_scope.ProductCardSliderMobile;

__ds_ns.ProductSwatches = __ds_scope.ProductSwatches;

__ds_ns.IconTrust30DayReturns = __ds_scope.IconTrust30DayReturns;

__ds_ns.IconTrustFreeShipping = __ds_scope.IconTrustFreeShipping;

__ds_ns.IconTrustHelpfulSupport = __ds_scope.IconTrustHelpfulSupport;

__ds_ns.IconTrustSecureCheckout = __ds_scope.IconTrustSecureCheckout;

__ds_ns.TrustItemPurchase = __ds_scope.TrustItemPurchase;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

})();
