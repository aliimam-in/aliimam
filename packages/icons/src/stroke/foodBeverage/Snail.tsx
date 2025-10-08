import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SnailProps extends IconProps {
  type?: "stroke";
}

export const Snail: IconComponent<SnailProps> = React.forwardRef<
  SVGSVGElement,
  SnailProps
>(function Snail(
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
          d="M2 13C2 13.7879 2.15519 14.5681 2.45672 15.2961C2.75825 16.0241 3.20021 16.6855 3.75736 17.2426C4.31451 17.7998 4.97595 18.2417 5.7039 18.5433C6.43185 18.8448 7.21207 19 8 19C8.78793 19 9.56815 18.8448 10.2961 18.5433C11.0241 18.2417 11.6855 17.7998 12.2426 17.2426C12.7998 16.6855 13.2417 16.0241 13.5433 15.2961C13.8448 14.5681 14 13.7879 14 13C14 11.9391 13.5786 10.9217 12.8284 10.1716C12.0783 9.42143 11.0609 9 10 9C8.93913 9 7.92172 9.42143 7.17157 10.1716C6.42143 10.9217 6 11.9391 6 13C6 13.5304 6.21071 14.0391 6.58579 14.4142C6.96086 14.7893 7.46957 15 8 15C8.53043 15 9.03914 14.7893 9.41421 14.4142C9.78929 14.0391 10 13.5304 10 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21C14.4183 21 18 17.4183 18 13C18 8.58172 14.4183 5 10 5C5.58172 5 2 8.58172 2 13C2 17.4183 5.58172 21 10 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21H14C18.4 21 22 17.4 22 13V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5 19.47 5 18.961 5.211 18.586 5.586 18.211 5.961 18 6.47 18 7V13M18 3 19.1 5.2M22 3 20.9 5.2"
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
          d="M2 13C2 13.7879 2.15519 14.5681 2.45672 15.2961C2.75825 16.0241 3.20021 16.6855 3.75736 17.2426C4.31451 17.7998 4.97595 18.2417 5.7039 18.5433C6.43185 18.8448 7.21207 19 8 19C8.78793 19 9.56815 18.8448 10.2961 18.5433C11.0241 18.2417 11.6855 17.7998 12.2426 17.2426C12.7998 16.6855 13.2417 16.0241 13.5433 15.2961C13.8448 14.5681 14 13.7879 14 13C14 11.9391 13.5786 10.9217 12.8284 10.1716C12.0783 9.42143 11.0609 9 10 9C8.93913 9 7.92172 9.42143 7.17157 10.1716C6.42143 10.9217 6 11.9391 6 13C6 13.5304 6.21071 14.0391 6.58579 14.4142C6.96086 14.7893 7.46957 15 8 15C8.53043 15 9.03914 14.7893 9.41421 14.4142C9.78929 14.0391 10 13.5304 10 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21C14.4183 21 18 17.4183 18 13C18 8.58172 14.4183 5 10 5C5.58172 5 2 8.58172 2 13C2 17.4183 5.58172 21 10 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21H14C18.4 21 22 17.4 22 13V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5 19.47 5 18.961 5.211 18.586 5.586 18.211 5.961 18 6.47 18 7V13M18 3 19.1 5.2M22 3 20.9 5.2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Snail doesn't support ${type}`);
  return null;
});

Snail.displayName = "Snail";

Snail.metadata = {
  name: "Snail",
  category: "stroke/foodBeverage",
  tags: ["snail", "icon"],
  description: "Snail icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Snail;
