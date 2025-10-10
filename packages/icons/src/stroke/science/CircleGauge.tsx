import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleGaugeProps extends IconProps {
  type?: "stroke";
}

export const CircleGauge: IconComponent<CircleGaugeProps> = React.forwardRef<
  SVGSVGElement,
  CircleGaugeProps
>(function CircleGauge(
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
          d="M15.6001 2.69996C13.4612 1.86904 11.1017 1.79892 8.91737 2.50138C6.733 3.20383 4.85664 4.63611 3.60306 6.55796C2.34949 8.4798 1.79496 10.7743 2.03251 13.0565C2.27005 15.3387 3.28522 17.4698 4.90771 19.0923C6.5302 20.7148 8.6613 21.73 10.9435 21.9675C13.2257 22.2051 15.5202 21.6505 17.4421 20.397C19.3639 19.1434 20.7962 17.267 21.4986 15.0826C22.2011 12.8983 22.131 10.5388 21.3001 8.39996"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM13.4 10.6 19 5"
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
          d="M15.5998 2.69999C13.461 1.86907 11.1015 1.79896 8.91713 2.50141C6.73275 3.20386 4.85639 4.63615 3.60282 6.55799C2.34925 8.47983 1.79472 10.7743 2.03226 13.0565C2.26981 15.3387 3.28498 17.4699 4.90746 19.0923C6.52995 20.7148 8.66105 21.73 10.9433 21.9675C13.2255 22.2051 15.52 21.6506 17.4418 20.397C19.3637 19.1434 20.7959 17.267 21.4984 15.0827C22.2008 12.8983 22.1307 10.5388 21.2998 8.39999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM13.4 10.6 19 5"
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
          d="M15.5998 2.69996C13.461 1.86904 11.1015 1.79892 8.91713 2.50138C6.73275 3.20383 4.85639 4.63611 3.60282 6.55796C2.34925 8.4798 1.79472 10.7743 2.03226 13.0565C2.26981 15.3387 3.28498 17.4698 4.90746 19.0923C6.52995 20.7148 8.66105 21.73 10.9433 21.9675C13.2255 22.2051 15.52 21.6505 17.4418 20.397C19.3637 19.1434 20.7959 17.267 21.4984 15.0826C22.2008 12.8983 22.1307 10.5388 21.2998 8.39996"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM13.4 10.6 19 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CircleGauge doesn't support ${type}`);
  return null;
});

CircleGauge.displayName = "CircleGauge";

CircleGauge.metadata = {
  name: "CircleGauge",
  category: "stroke/science",
  tags: ["circle", "gauge", "icon"],
  description: "CircleGauge icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleGauge;
