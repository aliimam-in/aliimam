import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract106: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract106(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M19.4015 19.8617H12.4743L9.89 17.2776H18.3294L23 12.6074V16.2617L19.4015 19.8617ZM18.1012 16.7235H14.4465L20.4157 10.7548V4.15054L23 6.73467V11.8251L18.1012 16.7235ZM16.263 22.9982H11.1722L6.2752 18.0998V14.4454L12.2425 20.4141H18.8491L16.2648 22.9982H16.263ZM6.73701 22.9982L3.1385 19.3982V12.4715L5.72284 9.88741V18.3297L10.3935 23H6.73882L6.73701 22.9982ZM17.279 13.1108V4.67026L12.6083 0H16.263L19.8633 3.59822V10.5267L17.279 13.1108ZM10.7557 2.58413H4.15268L6.73701 0H11.826L16.7266 4.89843V8.55279L10.7557 2.58413ZM4.67063 5.72238L0 10.3926V6.73828L3.60032 3.13826H10.5275L13.1118 5.72238H4.67063ZM2.58614 12.2416V18.8458L0.00181003 16.2617V11.1713L4.90244 6.27289H8.55709L2.58795 12.2416H2.58614Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract106.displayName = "Abstract106";

Abstract106.metadata = {
  name: "Abstract106",
  category: "shapes/abstract",
  tags: ["abstract", "106", "icon"],
  description: "Abstract106 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract106;
