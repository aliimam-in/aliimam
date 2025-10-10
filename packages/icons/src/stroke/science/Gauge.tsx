import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GaugeProps extends IconProps {
  type?: "stroke";
}

export const Gauge: IconComponent<GaugeProps> = React.forwardRef<
  SVGSVGElement,
  GaugeProps
>(function Gauge(
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
          d="M12 14 16 10M3.34 19C2.462 17.48 2 15.755 2 14 2 12.245 2.462 10.52 3.34 9 4.217 7.479 5.48 6.217 7 5.339 8.52 4.462 10.245 4 12 4 13.755 4 15.48 4.462 17 5.339 18.52 6.217 19.783 7.479 20.66 9 21.538 10.52 22 12.245 22 14 22 15.755 21.538 17.48 20.66 19"
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
          d="M12 14 16 10M3.34 19C2.462 17.48 2 15.755 2 14 2 12.245 2.462 10.52 3.34 9 4.217 7.48 5.48 6.217 7 5.339 8.52 4.462 10.245 4 12 4 13.755 4 15.48 4.462 17 5.339 18.52 6.217 19.783 7.48 20.66 9 21.538 10.52 22 12.245 22 14 22 15.755 21.538 17.48 20.66 19"
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
          d="M12 14 16 10M3.34 19C2.462 17.48 2 15.755 2 14 2 12.245 2.462 10.52 3.34 9 4.217 7.48 5.48 6.217 7 5.339 8.52 4.462 10.245 4 12 4 13.755 4 15.48 4.462 17 5.339 18.52 6.217 19.783 7.48 20.66 9 21.538 10.52 22 12.245 22 14 22 15.755 21.538 17.48 20.66 19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gauge doesn't support ${type}`);
  return null;
});

Gauge.displayName = "Gauge";

Gauge.metadata = {
  name: "Gauge",
  category: "stroke/science",
  tags: ["gauge", "icon"],
  description: "Gauge icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gauge;
