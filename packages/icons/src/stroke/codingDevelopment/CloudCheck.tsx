import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudCheck(
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
        d="M17 15L11.5 20.5L9 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00003 17.743C4.08292 17.104 3.33217 16.2547 2.81058 15.2661C2.28899 14.2775 2.01172 13.1784 2.00198 12.0607C1.99223 10.9429 2.25029 9.83915 2.75456 8.8416C3.25884 7.84406 3.99467 6.98178 4.90049 6.32689C5.80632 5.67201 6.8558 5.24357 7.96114 5.07741C9.06648 4.91125 10.1955 5.01221 11.2539 5.37183C12.3122 5.73146 13.269 6.33929 14.0443 7.14449C14.8196 7.94969 15.3907 8.92884 15.71 10H17.5C18.5612 10.0005 19.5882 10.3759 20.3994 11.0601C21.2106 11.7442 21.7539 12.6931 21.9334 13.739C22.1129 14.7849 21.9169 15.8606 21.3802 16.7761C20.8434 17.6916 20.0004 18.3879 19 18.742"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudCheck.displayName = "CloudCheck";

CloudCheck.metadata = {
  name: "CloudCheck",
  category: "stroke/codingDevelopment",
  tags: ["cloud", "check", "icon"],
  description: "CloudCheck icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudCheck;
