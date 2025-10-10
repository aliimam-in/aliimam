import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ShovelProps extends IconProps {
  type?: "stroke";
}

export const Shovel: IconComponent<ShovelProps> = React.forwardRef<
  SVGSVGElement,
  ShovelProps
>(function Shovel(
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
          d="M21.56 4.56C21.699 4.699 21.81 4.865 21.885 5.047 21.961 5.229 22 5.424 22 5.621 22 5.818 21.961 6.013 21.885 6.195 21.81 6.377 21.699 6.543 21.56 6.682L21.09 7.152C20.525 7.701 19.766 8.006 18.978 8.001 18.19 7.995 17.435 7.679 16.878 7.122 16.599 6.843 16.378 6.513 16.227 6.149 16.077 5.785 15.999 5.395 15.999 5.001 15.999 4.606 16.077 4.216 16.227 3.852 16.378 3.488 16.599 3.158 16.878 2.879L17.318 2.439C17.599 2.158 17.981 2 18.378 2 18.776 2 19.158 2.158 19.439 2.439L21.56 4.56ZM3 22C2.735 22 2.48 21.895 2.293 21.707 2.105 21.52 2 21.265 2 21V17.414C2 17.149 2.105 16.895 2.293 16.707L5.648 13.352C5.874 13.126 6.18 12.999 6.5 12.999 6.82 12.999 7.126 13.126 7.352 13.352L10.648 16.648C10.874 16.874 11.001 17.181 11.001 17.5 11.001 17.82 10.874 18.126 10.648 18.352L7.293 21.707C7.106 21.895 6.851 22 6.586 22H3ZM9 15 16.879 7.122"
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
          d="M21.56 4.56C21.699 4.699 21.81 4.865 21.885 5.047 21.961 5.229 22 5.424 22 5.621 22 5.818 21.961 6.013 21.885 6.195 21.81 6.377 21.699 6.543 21.56 6.682L21.09 7.152C20.525 7.701 19.766 8.006 18.978 8.001 18.19 7.995 17.435 7.679 16.878 7.122 16.599 6.843 16.378 6.513 16.228 6.149 16.077 5.785 15.999 5.395 15.999 5.001 15.999 4.606 16.077 4.216 16.228 3.852 16.378 3.488 16.599 3.158 16.878 2.879L17.318 2.439C17.599 2.158 17.981 2 18.379 2 18.776 2 19.158 2.158 19.439 2.439L21.56 4.56ZM3 22C2.735 22 2.48 21.895 2.293 21.707 2.105 21.52 2 21.265 2 21V17.414C2 17.149 2.105 16.895 2.293 16.707L5.648 13.352C5.874 13.126 6.18 12.999 6.5 12.999 6.82 12.999 7.126 13.126 7.352 13.352L10.648 16.648C10.874 16.874 11.001 17.181 11.001 17.5 11.001 17.82 10.874 18.126 10.648 18.352L7.293 21.707C7.106 21.895 6.851 22 6.586 22H3ZM9 15 16.879 7.122"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Shovel doesn't support ${type}`);
  return null;
});

Shovel.displayName = "Shovel";

Shovel.metadata = {
  name: "Shovel",
  category: "stroke/nature",
  tags: ["shovel", "icon"],
  description: "Shovel icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shovel;
