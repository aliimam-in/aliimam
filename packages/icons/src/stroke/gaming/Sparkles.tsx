import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sparkles: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Sparkles(
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
        d="M11.017 2.814C11.06 2.585 11.182 2.377 11.361 2.228 11.541 2.079 11.767 1.998 12 1.998 12.233 1.998 12.459 2.079 12.639 2.228 12.818 2.377 12.94 2.585 12.983 2.814L14.034 8.372C14.109 8.767 14.301 9.131 14.585 9.415 14.869 9.699 15.233 9.891 15.628 9.966L21.186 11.017C21.415 11.06 21.623 11.182 21.772 11.361 21.921 11.541 22.002 11.767 22.002 12 22.002 12.233 21.921 12.459 21.772 12.639 21.623 12.818 21.415 12.94 21.186 12.983L15.628 14.034C15.233 14.109 14.869 14.301 14.585 14.585 14.301 14.869 14.109 15.233 14.034 15.628L12.983 21.186C12.94 21.415 12.818 21.623 12.639 21.772 12.459 21.921 12.233 22.002 12 22.002 11.767 22.002 11.541 21.921 11.361 21.772 11.182 21.623 11.06 21.415 11.017 21.186L9.966 15.628C9.891 15.233 9.699 14.869 9.415 14.585 9.131 14.301 8.767 14.109 8.372 14.034L2.814 12.983C2.585 12.94 2.377 12.818 2.228 12.639 2.079 12.459 1.998 12.233 1.998 12 1.998 11.767 2.079 11.541 2.228 11.361 2.377 11.182 2.585 11.06 2.814 11.017L8.372 9.966C8.767 9.891 9.131 9.699 9.415 9.415 9.699 9.131 9.891 8.767 9.966 8.372L11.017 2.814ZM20 2V6M22 4H18M4 22C5.105 22 6 21.105 6 20 6 18.895 5.105 18 4 18 2.895 18 2 18.895 2 20 2 21.105 2.895 22 4 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Sparkles.displayName = "Sparkles";

Sparkles.metadata = {
  name: "Sparkles",
  category: "stroke/gaming",
  tags: ["sparkles", "icon"],
  description: "Sparkles icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sparkles;
