import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WebhookProps extends IconProps {
  type?: "stroke";
}

export const Webhook: IconComponent<WebhookProps> = React.forwardRef<
  SVGSVGElement,
  WebhookProps
>(function Webhook(
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
          d="M18 16.98H12.01C10.91 16.98 10.06 17.92 9.53 18.88C9.11045 19.6672 8.43979 20.2917 7.62462 20.654C6.80945 21.0163 5.89656 21.0957 5.03107 20.8796C4.16558 20.6635 3.39715 20.1643 2.84795 19.4614C2.29874 18.7584 2.00028 17.8921 2 17C2.01 16.3 2.2 15.6 2.57 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17L9.13 11.22C9.66 10.25 9.23 9.04 8.63 8.12C8.34681 7.6671 8.15721 7.16207 8.07236 6.63471C7.98751 6.10734 8.00915 5.56833 8.13599 5.04946C8.26283 4.5306 8.49231 4.04239 8.81088 3.61365C9.12946 3.1849 9.53068 2.82431 9.99087 2.55314C10.4511 2.28196 10.9609 2.10571 11.4903 2.03476C12.0197 1.96382 12.558 1.99963 13.0733 2.14008C13.5887 2.28053 14.0707 2.52277 14.4909 2.85252C14.9111 3.18226 15.261 3.59283 15.52 4.06"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L15.13 11.73C15.66 12.7 16.9 13 18 13C19.0609 13 20.0783 13.4214 20.8284 14.1716C21.5786 14.9217 22 15.9391 22 17C22 18.0609 21.5786 19.0783 20.8284 19.8284C20.0783 20.5786 19.0609 21 18 21"
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
          d="M18 16.98H12.01C10.91 16.98 10.06 17.92 9.53 18.88C9.11045 19.6672 8.43979 20.2917 7.62462 20.654C6.80945 21.0163 5.89656 21.0957 5.03107 20.8796C4.16558 20.6635 3.39715 20.1643 2.84795 19.4614C2.29874 18.7584 2.00028 17.8921 2 17C2.01 16.3 2.2 15.6 2.57 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17.0001L9.13 11.2201C9.66 10.2501 9.23 9.04006 8.63 8.12006C8.34681 7.66716 8.15721 7.16213 8.07236 6.63477C7.98751 6.1074 8.00915 5.56839 8.13599 5.04952C8.26283 4.53066 8.49231 4.04245 8.81088 3.61371C9.12946 3.18496 9.53068 2.82437 9.99087 2.5532C10.4511 2.28202 10.9609 2.10577 11.4903 2.03483C12.0197 1.96388 12.558 1.99969 13.0733 2.14014C13.5887 2.28059 14.0707 2.52283 14.4909 2.85258C14.9111 3.18232 15.261 3.59289 15.52 4.06006"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L15.13 11.73C15.66 12.7 16.9 13 18 13C19.0609 13 20.0783 13.4214 20.8284 14.1716C21.5786 14.9217 22 15.9391 22 17C22 18.0609 21.5786 19.0783 20.8284 19.8284C20.0783 20.5786 19.0609 21 18 21"
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
          d="M18 16.98H12.01C10.91 16.98 10.06 17.92 9.53 18.88C9.11045 19.6672 8.43979 20.2917 7.62462 20.654C6.80945 21.0163 5.89656 21.0957 5.03107 20.8796C4.16558 20.6635 3.39715 20.1643 2.84795 19.4614C2.29874 18.7584 2.00028 17.8921 2 17C2.01 16.3 2.2 15.6 2.57 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 17.0001L9.13 11.2201C9.66 10.2501 9.23 9.04006 8.63 8.12006C8.34681 7.66716 8.15721 7.16213 8.07236 6.63477C7.98751 6.1074 8.00915 5.56839 8.13599 5.04952C8.26283 4.53066 8.49231 4.04245 8.81088 3.61371C9.12946 3.18496 9.53068 2.82437 9.99087 2.5532C10.4511 2.28202 10.9609 2.10577 11.4903 2.03483C12.0197 1.96388 12.558 1.99969 13.0733 2.14014C13.5887 2.28059 14.0707 2.52283 14.4909 2.85258C14.9111 3.18232 15.261 3.59289 15.52 4.06006"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L15.13 11.73C15.66 12.7 16.9 13 18 13C19.0609 13 20.0783 13.4214 20.8284 14.1716C21.5786 14.9217 22 15.9391 22 17C22 18.0609 21.5786 19.0783 20.8284 19.8284C20.0783 20.5786 19.0609 21 18 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Webhook doesn't support ${type}`);
  return null;
});

Webhook.displayName = "Webhook";

Webhook.metadata = {
  name: "Webhook",
  category: "stroke/social",
  tags: ["webhook", "icon"],
  description: "Webhook icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Webhook;
