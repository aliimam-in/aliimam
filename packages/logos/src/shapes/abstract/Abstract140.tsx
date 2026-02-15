import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract140: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract140(
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
        d="M23.758 8.84904C22.7542 12.5982 18.9007 14.8233 15.1501 13.8193C13.9138 13.4878 12.8433 12.8458 11.9995 12C14.3424 11.3713 16.2968 9.54248 16.9692 7.02971C17.6416 4.51694 16.8644 1.95655 15.1501 0.24009C16.3025 -0.0704339 17.5521 -0.0894845 18.7883 0.24009C22.537 1.24405 24.7619 5.09798 23.758 8.84713V8.84904ZM23.758 18.7877C22.7523 22.5369 18.8988 24.762 15.1501 23.7561C11.4014 22.7521 9.1765 18.8982 10.1803 15.1491C10.5118 13.9127 11.1537 12.842 11.9995 11.9981C12.6281 14.3413 14.4567 16.294 16.9692 16.9684C19.4836 17.6409 22.0418 16.8636 23.7599 15.1491C24.0704 16.3016 24.0895 17.5513 23.7599 18.7858L23.758 18.7877ZM7.02976 16.9703C6.35735 19.4831 7.13451 22.0435 8.84887 23.7599C7.69454 24.0704 6.44687 24.0895 5.21063 23.7599C1.46191 22.7559 -0.76293 18.902 0.240919 15.1529C1.24667 11.4037 5.10015 9.17861 8.84887 10.1826C10.0851 10.5141 11.1556 11.1561 11.9995 12.0019C9.65652 12.6306 7.70217 14.4594 7.02976 16.9722V16.9703ZM13.8186 8.84904C13.4872 10.0854 12.8452 11.1561 11.9995 12C11.369 9.65678 9.54224 7.7041 7.02976 7.03161C4.51728 6.35722 1.95718 7.13639 0.240919 8.85094C-0.0695695 7.69838 -0.0886179 6.44867 0.240919 5.21419C1.24477 1.46504 5.09824 -0.760064 8.84887 0.245805C12.5976 1.24977 14.8225 5.1037 13.8186 8.85285V8.84904Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract140.displayName = "Abstract140";

Abstract140.metadata = {
  name: "Abstract140",
  category: "shapes/abstract",
  tags: ["abstract", "140", "icon"],
  description: "Abstract140 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract140;
