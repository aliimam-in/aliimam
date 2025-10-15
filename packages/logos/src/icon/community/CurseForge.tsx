import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CurseForge: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CurseForge(
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
        d="M18.1312 9.25969C18.1312 9.25969 22.8806 8.49591 23.6307 6.26794H16.3551V4.5H0.369202L2.33849 6.83081V9.21891C2.33849 9.21891 7.30742 8.95538 9.22954 10.4421C11.8605 12.9294 6.27034 16.2918 6.27034 16.2918L5.31182 19.5273C6.8108 18.0714 9.66763 16.1881 14.9056 16.2788C12.9123 16.9214 10.9081 17.9251 9.34769 19.5273H19.9363L18.9392 16.2918C18.9392 16.2918 11.2648 11.676 18.1312 9.26006V9.25969Z"
        fill="#130700"
      />
    </svg>
  );
});

CurseForge.displayName = "CurseForge";

CurseForge.metadata = {
  name: "CurseForge",
  category: "icon/community",
  tags: ["curse", "forge", "icon"],
  description: "CurseForge icon from icon/community category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CurseForge;
