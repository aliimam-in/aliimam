import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface OmegaProps extends IconProps {
  type?: "stroke";
}

export const Omega: IconComponent<OmegaProps> = React.forwardRef<
  SVGSVGElement,
  OmegaProps
>(function Omega(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
        <path
          d="M3 20H7.5C7.63261 20 7.75979 19.9473 7.85355 19.8536C7.94732 19.7598 8 19.6326 8 19.5V19.218C7.99906 19.1303 7.97591 19.0442 7.93272 18.9677C7.88953 18.8913 7.82771 18.8271 7.753 18.781C6.28137 17.8594 5.14957 16.4839 4.52847 14.8624C3.90738 13.2409 3.83073 11.4613 4.31009 9.79239C4.78945 8.12346 5.7988 6.65581 7.18573 5.61104C8.57266 4.56627 10.2619 4.00112 11.9983 4.00092C13.7347 4.00071 15.424 4.56547 16.8112 5.60991C18.1983 6.65435 19.208 8.12176 19.6878 9.79058C20.1675 11.4594 20.0913 13.239 19.4706 14.8607C18.8499 16.4823 17.7184 17.858 16.247 18.78C16.1722 18.8262 16.1102 18.8906 16.067 18.9672C16.0238 19.0438 16.0008 19.1301 16 19.218V19.5C16 19.6326 16.0527 19.7598 16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
        <path
          d="M3 20H7.5C7.63261 20 7.75979 19.9473 7.85355 19.8536C7.94732 19.7598 8 19.6326 8 19.5V19.218C7.99906 19.1303 7.97591 19.0442 7.93272 18.9677C7.88953 18.8913 7.82771 18.8271 7.753 18.781C6.28137 17.8594 5.14957 16.4839 4.52847 14.8624C3.90738 13.2409 3.83073 11.4613 4.31009 9.79239C4.78945 8.12346 5.7988 6.65581 7.18573 5.61104C8.57266 4.56627 10.2619 4.00112 11.9983 4.00092C13.7347 4.00071 15.424 4.56547 16.8112 5.60991C18.1983 6.65435 19.208 8.12176 19.6878 9.79058C20.1675 11.4594 20.0913 13.239 19.4706 14.8607C18.8499 16.4823 17.7184 17.858 16.247 18.78C16.1722 18.8262 16.1102 18.8906 16.067 18.9672C16.0238 19.0438 16.0008 19.1301 16 19.218V19.5C16 19.6326 16.0527 19.7598 16.1464 19.8536C16.2402 19.9473 16.3674 20 16.5 20H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
        <path
          d="M3 20H7.5C7.63261 20 7.75979 19.9473 7.85355 19.8535C7.94732 19.7597 8 19.6326 8 19.5V19.218C7.99906 19.1302 7.97591 19.0441 7.93272 18.9677C7.88953 18.8913 7.82771 18.827 7.753 18.781C6.28137 17.8593 5.14957 16.4839 4.52847 14.8624C3.90738 13.2408 3.83073 11.4613 4.31009 9.79233C4.78945 8.1234 5.7988 6.65575 7.18573 5.61098C8.57266 4.56621 10.2619 4.00106 11.9983 4.00085C13.7347 4.00065 15.424 4.56541 16.8112 5.60985C18.1983 6.65429 19.208 8.1217 19.6878 9.79052C20.1675 11.4593 20.0913 13.2389 19.4706 14.8606C18.8499 16.4823 17.7184 17.858 16.247 18.78C16.1722 18.8261 16.1102 18.8905 16.067 18.9671C16.0238 19.0437 16.0008 19.13 16 19.218V19.5C16 19.6326 16.0527 19.7597 16.1464 19.8535C16.2402 19.9473 16.3674 20 16.5 20H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Omega doesn't support ${type}`);
  return null;
});

Omega.displayName = "Omega";

Omega.metadata = {
  name: "Omega",
  category: "stroke/textFormatting",
  tags: ["omega", "icon"],
  description: "Omega icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Omega;
