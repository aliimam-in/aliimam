import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SendToBackProps extends IconProps {
  type?: "stroke";
}

export const SendToBack: IconComponent<SendToBackProps> = React.forwardRef<
  SVGSVGElement,
  SendToBackProps
>(function SendToBack(
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
          d="M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM8 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H8C9.105 10 10 9.105 10 8V4C10 2.895 9.105 2 8 2ZM7 14V15C7 15.53 7.211 16.039 7.586 16.414 7.961 16.789 8.47 17 9 17H10M14 7H15C15.53 7 16.039 7.211 16.414 7.586 16.789 7.961 17 8.47 17 9V10"
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
          d="M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM8 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H8C9.105 10 10 9.105 10 8V4C10 2.895 9.105 2 8 2ZM7 14V15C7 15.53 7.211 16.039 7.586 16.414 7.961 16.789 8.47 17 9 17H10M14 7H15C15.53 7 16.039 7.211 16.414 7.586 16.789 7.961 17 8.47 17 9V10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SendToBack doesn't support ${type}`);
  return null;
});

SendToBack.displayName = "SendToBack";

SendToBack.metadata = {
  name: "SendToBack",
  category: "stroke/layout",
  tags: ["send", "to", "back", "icon"],
  description: "SendToBack icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SendToBack;
