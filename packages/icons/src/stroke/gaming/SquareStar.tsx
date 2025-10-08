import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareStar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareStar(
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
        d="M11.035 7.68999C11.1011 7.48733 11.2302 7.31108 11.4035 7.18696C11.5768 7.06284 11.7852 6.99734 11.9983 7.00002C12.2115 7.0027 12.4182 7.07342 12.5883 7.20185C12.7584 7.33029 12.883 7.50973 12.944 7.71399L13.681 9.16599C13.7527 9.30715 13.8569 9.42925 13.9851 9.52226C14.1132 9.61527 14.2616 9.67653 14.418 9.70099L16.052 9.95699C16.2624 9.95781 16.4672 10.025 16.6372 10.1489C16.8072 10.2729 16.9338 10.4473 16.999 10.6474C17.0641 10.8475 17.0645 11.063 17 11.2633C16.9356 11.4636 16.8096 11.6385 16.64 11.763L15.468 12.931C15.3558 13.0427 15.2717 13.1795 15.2227 13.33C15.1737 13.4806 15.1611 13.6406 15.186 13.797L15.445 15.41C15.5162 15.6122 15.5206 15.8319 15.4576 16.0367C15.3945 16.2416 15.2672 16.4208 15.0946 16.5478C14.9219 16.6749 14.713 16.7431 14.4986 16.7424C14.2843 16.7417 14.0758 16.6722 13.904 16.544L12.439 15.794C12.2979 15.7217 12.1416 15.684 11.983 15.684C11.8244 15.684 11.6681 15.7217 11.527 15.794L10.062 16.544C9.89017 16.6711 9.68216 16.7398 9.46844 16.74C9.25473 16.7403 9.04655 16.672 8.87445 16.5453C8.70234 16.4186 8.57535 16.2401 8.51211 16.036C8.44886 15.8318 8.45267 15.6128 8.52299 15.411L8.78099 13.798C8.8059 13.6416 8.79333 13.4816 8.7443 13.331C8.69528 13.1805 8.6112 13.0437 8.49899 12.932L7.34299 11.779C7.16765 11.6575 7.03575 11.4832 6.96655 11.2814C6.89736 11.0796 6.89449 10.861 6.95839 10.6575C7.02228 10.4539 7.14958 10.2762 7.32168 10.1502C7.49379 10.0241 7.70168 9.95646 7.91499 9.95699L9.54799 9.70099C9.70442 9.67653 9.8528 9.61527 9.98093 9.52226C10.1091 9.42925 10.2133 9.30715 10.285 9.16599L11.035 7.68999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareStar.displayName = "SquareStar";

SquareStar.metadata = {
  name: "SquareStar",
  category: "stroke/gaming",
  tags: ["square", "star", "icon"],
  description: "SquareStar icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareStar;
