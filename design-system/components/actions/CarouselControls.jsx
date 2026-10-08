// figma node: 430:2735 Carousel Controls (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function CarouselControls(_p = {}) {
  const props = { ..._p, size: _p.size ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(247,242,233)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        backgroundColor: "rgb(106,52,70)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={15.273} height={30.545} viewBox="0 0 15.273 30.545" fill="none" style={{
          position: "absolute",
          left: 19.09,
          top: 12.727,
          width: 15.273,
          height: 30.545,
        }}>
          <path d={"M 16.398 1.125 L 17.523 0 L 15.273 -2.25 L 14.148 -1.125 L 15.273 0 L 16.398 1.125 Z M 0 15.273 L -1.125 14.148 L -2.25 15.273 L -1.125 16.398 L 0 15.273 Z M 14.148 31.67 L 15.273 32.795 L 17.523 30.545 L 16.398 29.421 L 15.273 30.545 L 14.148 31.67 Z M 15.273 0 L 14.148 -1.125 L -1.125 14.148 L 0 15.273 L 1.125 16.398 L 16.398 1.125 L 15.273 0 Z M 0 15.273 L -1.125 16.398 L 14.148 31.67 L 15.273 30.545 L 16.398 29.421 L 1.125 14.148 L 0 15.273 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 56,
        overflow: "hidden",
        backgroundColor: "rgb(106,52,70)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={15.273} height={30.545} viewBox="0 0 15.273 30.545" fill="none" style={{
          position: "absolute",
          left: 21.637,
          top: 12.727,
          width: 15.273,
          height: 30.545,
        }}>
          <path d={"M 1.125 -1.125 L 0 -2.25 L -2.25 0 L -1.125 1.125 L 0 0 L 1.125 -1.125 Z M 15.273 15.273 L 16.398 16.398 L 17.523 15.273 L 16.398 14.148 L 15.273 15.273 Z M -1.125 29.421 L -2.25 30.545 L 0 32.795 L 1.125 31.67 L 0 30.545 L -1.125 29.421 Z M 0 0 L -1.125 1.125 L 14.148 16.398 L 15.273 15.273 L 16.398 14.148 L 1.125 -1.125 L 0 0 Z M 15.273 15.273 L 14.148 14.148 L -1.125 29.421 L 0 30.545 L 1.125 31.67 L 16.398 16.398 L 15.273 15.273 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
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
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        backgroundColor: "rgb(106,52,70)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={12} height={24} viewBox="0 0 12 24" fill="none" style={{
          position: "absolute",
          left: 14.999,
          top: 10,
          width: 12,
          height: 24,
        }}>
          <path d={"M 12.804 0.804 L 13.607 0 L 12 -1.607 L 11.196 -0.804 L 12 0 L 12.804 0.804 Z M 0 12 L -0.804 11.196 L -1.607 12 L -0.804 12.804 L 0 12 Z M 11.196 24.804 L 12 25.607 L 13.607 24 L 12.804 23.196 L 12 24 L 11.196 24.804 Z M 12 0 L 11.196 -0.804 L -0.804 11.196 L 0 12 L 0.804 12.804 L 12.804 0.804 L 12 0 Z M 0 12 L -0.804 12.804 L 11.196 24.804 L 12 24 L 12.804 23.196 L 0.804 11.196 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        backgroundColor: "rgb(106,52,70)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={12} height={24} viewBox="0 0 12 24" fill="none" style={{
          position: "absolute",
          left: 17.001,
          top: 10,
          width: 12,
          height: 24,
        }}>
          <path d={"M 0.804 -0.804 L 0 -1.607 L -1.607 0 L -0.804 0.804 L 0 0 L 0.804 -0.804 Z M 12 12 L 12.804 12.804 L 13.607 12 L 12.804 11.196 L 12 12 Z M -0.804 23.196 L -1.607 24 L 0 25.607 L 0.804 24.804 L 0 24 L -0.804 23.196 Z M 0 0 L -0.804 0.804 L 11.196 12.804 L 12 12 L 12.804 11.196 L 0.804 -0.804 L 0 0 Z M 12 12 L 11.196 11.196 L -0.804 23.196 L 0 24 L 0.804 24.804 L 12.804 12.804 L 12 12 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=Desktop
    "size=desktop": __body0,
    // figma: Size=Mobile
    "size=mobile": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CarouselControls;
