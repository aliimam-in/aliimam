import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SvgProps extends IconProps {
  type?: "icon";
}

export const Svg: IconComponent<SvgProps> = React.forwardRef<
  SVGSVGElement,
  SvgProps
>(function Svg(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
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
        <g clipPath="url(#undefined-clip0_2066_1159)">
          <path
            d="M5.26808 10.7319C5.01727 10.4811 4.69773 10.3103 4.34985 10.2411C4.00197 10.1719 3.64138 10.2074 3.31369 10.3432C2.98599 10.4789 2.7059 10.7088 2.50884 11.0037C2.31178 11.2986 2.2066 11.6453 2.2066 12C2.2066 12.3547 2.31178 12.7015 2.50884 12.9964C2.7059 13.2913 2.98599 13.5211 3.31369 13.6569C3.64138 13.7926 4.00197 13.8281 4.34985 13.7589C4.69773 13.6897 5.01727 13.5189 5.26808 13.2681H18.732C18.9828 13.5189 19.3023 13.6897 19.6502 13.7589C19.9981 13.8281 20.3587 13.7926 20.6864 13.6569C21.0141 13.5211 21.2942 13.2913 21.4912 12.9964C21.6883 12.7015 21.7935 12.3547 21.7935 12C21.7935 11.6453 21.6883 11.2986 21.4912 11.0037C21.2942 10.7088 21.0141 10.4789 20.6864 10.3432C20.3587 10.2074 19.9981 10.1719 19.6502 10.2411C19.3023 10.3103 18.9828 10.4811 18.732 10.7319H5.26808Z"
            fill="#ffb13b"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1159">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  if (type === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
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
        <g clipPath="url(#undefined-clip0_2062_3158)">
          <path
            d="M5.26808 10.7319C5.01727 10.4811 4.69773 10.3103 4.34985 10.2411C4.00197 10.1719 3.64138 10.2074 3.31369 10.3432C2.98599 10.4789 2.7059 10.7088 2.50884 11.0037C2.31178 11.2986 2.2066 11.6453 2.2066 12C2.2066 12.3547 2.31178 12.7015 2.50884 12.9964C2.7059 13.2913 2.98599 13.5211 3.31369 13.6569C3.64138 13.7926 4.00197 13.8281 4.34985 13.7589C4.69773 13.6897 5.01727 13.5189 5.26808 13.2681H18.732C18.9828 13.5189 19.3023 13.6897 19.6502 13.7589C19.9981 13.8281 20.3587 13.7926 20.6864 13.6569C21.0141 13.5211 21.2942 13.2913 21.4912 12.9964C21.6883 12.7015 21.7935 12.3547 21.7935 12C21.7935 11.6453 21.6883 11.2986 21.4912 11.0037C21.2942 10.7088 21.0141 10.4789 20.6864 10.3432C20.3587 10.2074 19.9981 10.1719 19.6502 10.2411C19.3023 10.3103 18.9828 10.4811 18.732 10.7319H5.26808Z"
            fill="#ffb13b"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_3158">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`Svg doesn't support ${type}`);
  return null;
});

Svg.displayName = "Svg";

Svg.metadata = {
  name: "Svg",
  category: "icon/language",
  tags: ["svg", "icon"],
  description: "Svg icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Svg;
