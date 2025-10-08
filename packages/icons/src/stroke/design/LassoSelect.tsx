import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LassoSelectProps extends IconProps {
  type?: "stroke";
}

export const LassoSelect: IconComponent<LassoSelectProps> = React.forwardRef<
  SVGSVGElement,
  LassoSelectProps
>(function LassoSelect(
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
          d="M7 22C6.379 21.534 5.875 20.93 5.528 20.236 5.181 19.542 5 18.776 5 18M7 16.93C7.96 17.36 8.96 17.67 9.99 17.84M3.34 14C2.481 12.842 2.011 11.442 2 10 2 5.58 6.48 2 12 2 17.52 2 22 5.58 22 10 21.985 10.679 21.874 11.352 21.67 12M5 18C5.53 18 6.039 17.789 6.414 17.414 6.789 17.039 7 16.53 7 16 7 15.47 6.789 14.961 6.414 14.586 6.039 14.211 5.53 14 5 14 4.47 14 3.961 14.211 3.586 14.586 3.211 14.961 3 15.47 3 16 3 16.53 3.211 17.039 3.586 17.414 3.961 17.789 4.47 18 5 18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.33 22H14.24C14.1721 21.9775 14.1127 21.9348 14.0698 21.8776C14.0269 21.8204 14.0025 21.7514 14 21.68V11.68C14 11.5915 14.0344 11.5065 14.096 11.443C14.1576 11.3795 14.2416 11.3426 14.33 11.34C14.41 11.34 14.48 11.37 14.54 11.42L21.88 17.42C21.9346 17.4626 21.9744 17.5214 21.9938 17.5879C22.0131 17.6545 22.011 17.7254 21.9878 17.7907C21.9645 17.856 21.9213 17.9123 21.8643 17.9516C21.8073 17.991 21.7393 18.0114 21.67 18.01H17.18L14.61 21.86C14.5774 21.9034 14.5351 21.9387 14.4865 21.963C14.4379 21.9873 14.3843 22 14.33 22Z"
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
          d="M7 22C6.379 21.534 5.875 20.93 5.528 20.236 5.181 19.542 5 18.776 5 18M7 16.93C7.96 17.36 8.96 17.67 9.99 17.84M3.34 14C2.481 12.842 2.011 11.442 2 10 2 5.58 6.48 2 12 2 17.52 2 22 5.58 22 10 21.985 10.679 21.874 11.352 21.67 12M5 18C5.53 18 6.039 17.789 6.414 17.414 6.789 17.039 7 16.53 7 16 7 15.47 6.789 14.961 6.414 14.586 6.039 14.211 5.53 14 5 14 4.47 14 3.961 14.211 3.586 14.586 3.211 14.961 3 15.47 3 16 3 16.53 3.211 17.039 3.586 17.414 3.961 17.789 4.47 18 5 18Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.33 22H14.24C14.1721 21.9775 14.1127 21.9348 14.0698 21.8776C14.0269 21.8204 14.0025 21.7514 14 21.68V11.68C14 11.5915 14.0344 11.5065 14.096 11.443C14.1576 11.3795 14.2416 11.3426 14.33 11.34C14.41 11.34 14.48 11.37 14.54 11.42L21.88 17.42C21.9346 17.4626 21.9744 17.5214 21.9938 17.5879C22.0131 17.6545 22.011 17.7254 21.9878 17.7907C21.9645 17.856 21.9213 17.9123 21.8643 17.9516C21.8073 17.991 21.7393 18.0114 21.67 18.01H17.18L14.61 21.86C14.5774 21.9034 14.5351 21.9387 14.4865 21.963C14.4379 21.9873 14.3843 22 14.33 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`LassoSelect doesn't support ${type}`);
  return null;
});

LassoSelect.displayName = "LassoSelect";

LassoSelect.metadata = {
  name: "LassoSelect",
  category: "stroke/design",
  tags: ["lasso", "select", "icon"],
  description: "LassoSelect icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LassoSelect;
