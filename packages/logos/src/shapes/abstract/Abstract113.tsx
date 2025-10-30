import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract113: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract113(
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
      viewBox="0 0 23 23"
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
        d="M10.2157 14.2313L8.77129 12.787H0.914475V14.9194H8.08129V22.0874H10.2157V14.2313ZM7.16863 23V15.8338H0.0018418V11.8726H9.15032L11.1302 13.8523V23H7.16863ZM22.0874 12.7851H14.2324L12.7862 14.2294V22.0856H14.9206V14.9175H22.0874V12.7851ZM15.8332 15.8338V23H11.8717V13.8523L13.8515 11.8726H23V15.8338H15.8332ZM22.0874 8.08246H14.9206V0.914401H12.7862V8.77059L14.2324 10.2149H22.0874V8.08246ZM13.8515 11.1274L11.8717 9.14774V0H15.8332V7.16622H23V11.1274H13.8515ZM10.2157 0.91256H8.08129V8.08064H0.914475V10.213H8.77129L10.2157 8.76874V0.91256ZM9.14847 11.1274H0V7.16622H7.16679V0H11.1283V9.14774L9.14847 11.1274Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract113.displayName = "Abstract113";

Abstract113.metadata = {
  name: "Abstract113",
  category: "shapes/abstract",
  tags: ["abstract", "113", "icon"],
  description: "Abstract113 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract113;
