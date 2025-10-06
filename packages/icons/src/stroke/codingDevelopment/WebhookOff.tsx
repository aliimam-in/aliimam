import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WebhookOffProps extends IconProps {
  type?: "stroke";
}

export const WebhookOff: IconComponent<WebhookOffProps> = React.forwardRef<
  SVGSVGElement,
  WebhookOffProps
>(function WebhookOff(
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
          d="M17 17H12C10.91 16.98 10.06 17.92 9.5 18.9 9.244 19.355 8.901 19.755 8.49 20.078 8.079 20.4 7.609 20.638 7.106 20.779 6.604 20.92 6.078 20.96 5.56 20.898 5.041 20.835 4.54 20.671 4.085 20.415 3.63 20.159 3.23 19.816 2.908 19.405 2.585 18.994 2.347 18.524 2.206 18.021 2.065 17.518 2.025 16.993 2.088 16.474 2.15 15.956 2.314 15.455 2.57 15M9 3.4C9.42 2.913 9.951 2.535 10.549 2.297 11.146 2.059 11.792 1.968 12.432 2.033 13.072 2.098 13.686 2.316 14.224 2.669 14.762 3.021 15.206 3.499 15.52 4.06"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17 9.1 11.2C9.254 10.882 9.339 10.535 9.348 10.181 9.358 9.828 9.293 9.476 9.157 9.15M20.3 20.3C19.623 20.764 18.82 21.008 18 21M18.6 13C19.453 13.131 20.241 13.534 20.846 14.149 21.451 14.765 21.841 15.559 21.957 16.414M12 6 12.6 7M2 2 22 22"
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
          d="M17 17H12C10.91 16.98 10.06 17.92 9.5 18.9 9.244 19.355 8.901 19.755 8.49 20.078 8.079 20.4 7.609 20.638 7.106 20.779 6.603 20.92 6.078 20.96 5.559 20.898 5.041 20.835 4.54 20.671 4.085 20.415 3.63 20.159 3.23 19.816 2.907 19.405 2.585 18.994 2.347 18.524 2.206 18.021 2.065 17.518 2.025 16.993 2.088 16.474 2.15 15.956 2.314 15.455 2.57 15M9 3.4C9.42 2.913 9.951 2.535 10.549 2.297 11.146 2.059 11.792 1.968 12.432 2.033 13.072 2.098 13.686 2.316 14.224 2.669 14.762 3.021 15.206 3.499 15.52 4.06"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17 9.1 11.2C9.254 10.882 9.339 10.535 9.348 10.181 9.358 9.828 9.293 9.476 9.157 9.15M20.3 20.3C19.623 20.764 18.82 21.008 18 21M18.6 13C19.453 13.131 20.241 13.534 20.846 14.149 21.451 14.765 21.841 15.559 21.957 16.414M12 6 12.6 7M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`WebhookOff doesn't support ${type}`);
  return null;
});

WebhookOff.displayName = "WebhookOff";

WebhookOff.metadata = {
  name: "WebhookOff",
  category: "stroke/codingDevelopment",
  tags: ["webhook", "off", "icon"],
  description: "WebhookOff icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WebhookOff;
