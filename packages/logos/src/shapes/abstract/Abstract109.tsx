import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract109: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract109(
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
      viewBox="0 0 24 23"
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
        d="M18.4301 21.9814L12 12.0111L5.56993 21.9814L5.22807 21.7569L12 11.2554L18.7738 21.7569L18.4319 21.9814H18.4301ZM11.7963 11.8906V1.39643H12.2055V11.3759L22.638 9.01564L22.7271 9.41723L11.7963 11.8906ZM6.75375 14.6433L6.56281 14.2782L11.4126 11.7099L1.27292 9.4154L1.36202 9.01381L12.5855 11.5529L6.75193 14.6415L6.75375 14.6433ZM17.2463 14.6433L12.2037 11.9728V18.3708H11.7945V11.2901L17.4354 14.2782L17.2444 14.6433H17.2463ZM12 11.9326L8.55039 8.27817L8.8468 7.99524L12 11.3357L15.1532 7.99524L15.4496 8.27817L12 11.9326ZM14.895 8.69984L12 2.79103L9.10684 8.69984L2.63676 9.64722L7.31929 14.2454L6.21367 20.7383L12.0018 17.6735L17.79 20.7383L16.6843 14.2454L21.3669 9.64722L14.8968 8.69984H14.895ZM18.0009 14.678L19.4175 23L12 19.0717L4.58433 23L6.00091 14.678L0 8.78564L8.29217 7.57174L12 0L15.7078 7.57174L24 8.78564L17.9991 14.678H18.0009Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract109.displayName = "Abstract109";

Abstract109.metadata = {
  name: "Abstract109",
  category: "shapes/abstract",
  tags: ["abstract", "109", "icon"],
  description: "Abstract109 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract109;
