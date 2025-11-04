import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract122: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract122(
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
      viewBox="0 0 24 19"
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
        d="M24 1.45201L21.0209 0L13.0852 6.28568L16.0713 8.62844L20.32 5.26421V13.7462L2.93911 0.0889008L0 1.52523V17.548L2.97911 19L10.8609 12.7561L7.87479 10.4134L3.67998 13.7358V5.32524L21.0522 18.9878L24 17.548V1.45201Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract122.displayName = "Abstract122";

Abstract122.metadata = {
  name: "Abstract122",
  category: "shapes/abstract",
  tags: ["abstract", "122", "icon"],
  description: "Abstract122 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract122;
