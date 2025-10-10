import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandPlatterProps extends IconProps {
  type?: "stroke";
}

export const HandPlatter: IconComponent<HandPlatterProps> = React.forwardRef<
  SVGSVGElement,
  HandPlatterProps
>(function HandPlatter(
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
          d="M12 3V2M15.4 17.4 18.6 14.6C18.79 14.416 19.015 14.272 19.262 14.175 19.508 14.078 19.771 14.03 20.035 14.035 20.3 14.039 20.561 14.096 20.804 14.202 21.047 14.307 21.266 14.46 21.45 14.65 21.634 14.84 21.778 15.065 21.875 15.312 21.972 15.558 22.02 15.821 22.015 16.085 22.011 16.35 21.954 16.611 21.848 16.854 21.743 17.097 21.59 17.316 21.4 17.5L17.8 20.8C17.1 21.6 16.1 22 15 22H11C9.9 22 8.9 21.6 8.2 20.8L6.898 19.336C6.804 19.23 6.689 19.146 6.56 19.088 6.432 19.03 6.292 19 6.151 19H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 14H14C14.53 14 15.039 14.211 15.414 14.586 15.789 14.961 16 15.47 16 16 16 16.53 15.789 17.039 15.414 17.414 15.039 17.789 14.53 18 14 18H12M4 10H20M5 10C5 8.143 5.738 6.363 7.05 5.05 8.363 3.738 10.144 3 12 3 13.857 3 15.637 3.738 16.95 5.05 18.263 6.363 19 8.143 19 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 14V20C5 20.2652 4.89464 20.5196 4.70711 20.7071C4.51957 20.8946 4.26522 21 4 21H2"
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
          d="M12 3V2M15.4 17.4 18.6 14.6C18.79 14.416 19.015 14.272 19.262 14.175 19.508 14.078 19.771 14.03 20.035 14.035 20.3 14.039 20.561 14.096 20.804 14.202 21.047 14.307 21.266 14.46 21.45 14.65 21.634 14.84 21.778 15.065 21.875 15.311 21.972 15.558 22.02 15.821 22.015 16.085 22.011 16.35 21.954 16.611 21.848 16.854 21.743 17.097 21.59 17.316 21.4 17.5L17.8 20.8C17.1 21.6 16.1 22 15 22H11C9.9 22 8.9 21.6 8.2 20.8L6.898 19.336C6.804 19.23 6.689 19.146 6.56 19.088 6.432 19.03 6.292 19 6.151 19H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 14H14C14.53 14 15.039 14.211 15.414 14.586 15.789 14.961 16 15.47 16 16 16 16.53 15.789 17.039 15.414 17.414 15.039 17.789 14.53 18 14 18H12M4 10H20M5 10C5 8.143 5.738 6.363 7.05 5.05 8.363 3.738 10.144 3 12 3 13.857 3 15.637 3.738 16.95 5.05 18.263 6.363 19 8.143 19 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 14V20C5 20.2652 4.89464 20.5196 4.70711 20.7071C4.51957 20.8946 4.26522 21 4 21H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HandPlatter doesn't support ${type}`);
  return null;
});

HandPlatter.displayName = "HandPlatter";

HandPlatter.metadata = {
  name: "HandPlatter",
  category: "stroke/people",
  tags: ["hand", "platter", "icon"],
  description: "HandPlatter icon from stroke/people category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HandPlatter;
