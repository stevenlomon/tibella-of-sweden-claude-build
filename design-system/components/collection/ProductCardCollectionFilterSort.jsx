// figma node: 358:586 Product Card/Collection/Filter & Sort/Shared Menu Content
export function ProductCardCollectionFilterSort(_p = {}) {
  const props = { ..._p, title: _p.title ?? "", price: _p.price ?? "", category: _p.category ?? "" };
  return (
    <div className={props.className} style={{
      width: 342,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 52,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(24,21,21)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sort By"}</span>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 1.5,
              backgroundColor: "rgb(24,21,21)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 12px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1.500px rgb(106,52,70)",
              }} />
              <div style={{
                position: "absolute",
                left: 6,
                top: 6,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "rgb(106,52,70)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>{props.text2 ?? "Featured"}</span>
          </div>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>{props.text3 ?? "Newest"}</span>
          </div>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>{props.text4 ?? "Price: Low to High"}</span>
          </div>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Price: High to Low</span>
          </div>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Name: A–Z</span>
          </div>
          <div style={{
            position: "relative",
            height: 34,
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Name: Z–A</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgb(201,195,188)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 52,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(24,21,21)",
            flexShrink: 0,
          }}>Price</span>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 1.5,
              backgroundColor: "rgb(24,21,21)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 58,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 8,
            top: 27,
            width: 326,
            height: 2,
            backgroundColor: "rgb(201,195,188)",
          }} />
          <div style={{
            position: "absolute",
            left: 8,
            top: 27,
            width: 326,
            height: 2,
            backgroundColor: "rgb(24,21,21)",
          }} />
          <div style={{
            position: "absolute",
            left: 0,
            top: 19,
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px rgb(24,21,21)",
          }} />
          <div style={{
            position: "absolute",
            left: 324,
            top: 19,
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px rgb(24,21,21)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgb(201,195,188)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 52,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(24,21,21)",
            flexShrink: 0,
          }}>Color</span>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 14,
              height: 1.5,
              backgroundColor: "rgb(24,21,21)",
              flexShrink: 0,
            }} />
          </div>
        </div>
        <div style={{
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
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 58,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 34,
              height: 34,
              borderRadius: 1,
              backgroundColor: "rgb(24,21,21)",
              boxShadow: "0 0 0 3px rgb(106,52,70)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Black</span>
          </div>
          <div style={{
            position: "relative",
            width: 58,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 34,
              height: 34,
              borderRadius: 1,
              backgroundColor: "rgb(91,58,41)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Brown</span>
          </div>
          <div style={{
            position: "relative",
            width: 58,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 34,
              height: 34,
              borderRadius: 1,
              backgroundColor: "rgb(233,220,184)",
              boxShadow: "inset 0 0 0 1px rgb(201,195,188)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Cream</span>
          </div>
          <div style={{
            position: "relative",
            width: 58,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 34,
              height: 34,
              borderRadius: 1,
              backgroundColor: "rgb(106,52,70)",
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(24,21,21)",
              flexShrink: 0,
            }}>Burgundy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCardCollectionFilterSort;
