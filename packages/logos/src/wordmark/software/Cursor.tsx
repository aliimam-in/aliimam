import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CursorProps extends IconProps {
  type?: "wordmark" | "icon";
}

export const Cursor: IconComponent<CursorProps> = React.forwardRef<
  SVGSVGElement,
  CursorProps
>(function Cursor(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "wordmark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 142 24"
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
          d="M11.927.397H19.702V4.694H12.19C8.138 4.694 4.975 7.042 4.975 12 4.975 16.959 8.138 19.306 12.19 19.306H19.702V23.604H11.597C4.81 23.604 0 19.603 0 12 0 4.396 5.139.397 11.927.397ZM23.655.397H28.465V14.578C28.465 18.115 30.08 19.769 33.869 19.769 37.658 19.769 39.273 18.116 39.273 14.578V.397H44.083V15.57C44.083 20.727 40.821 24 33.869 24 26.917 24 23.655 20.694 23.655 15.537V.397ZM69.22 6.975C69.22 9.554 67.738 11.537 65.761 12.397V12.463C67.837 12.761 68.891 14.249 68.924 16.265L69.022 23.604H64.212L64.114 17.059C64.081 15.604 63.224 14.712 61.511 14.712H53.505V23.604H48.695V.397H61.972C66.322.397 69.22 2.611 69.22 6.975ZM64.378 7.636C64.378 5.653 63.324 4.562 61.347 4.562H53.505V10.71H61.412C63.224 10.71 64.378 9.62 64.378 7.636V7.636ZM87.407 16.827C87.407 15.174 86.353 14.479 84.772 14.348L79.434 13.852C74.821 13.422 72.416 11.604 72.416 7.207 72.416 2.81 75.381.397 79.631.397H91.426V4.562H79.961C78.314 4.562 77.259 5.422 77.259 7.074 77.259 8.727 78.346 9.521 79.994 9.653L85.43 10.116C89.549 10.479 92.25 12.365 92.25 16.794 92.25 21.223 89.384 23.604 85.332 23.604H73.009V19.439H84.87C86.419 19.439 87.407 18.381 87.407 16.827V16.827ZM106.318 0C113.566 0 118.146 4.661 118.146 11.967 118.146 19.273 113.369 24 106.121 24 98.873 24 94.293 19.273 94.293 11.967 94.293 4.661 99.07 0 106.318 0ZM113.172 12C113.172 7.107 110.338 4.231 106.22 4.231 102.101 4.231 99.268 7.107 99.268 12 99.268 16.892 102.101 19.768 106.22 19.768 110.338 19.768 113.172 16.892 113.172 12ZM142 6.975C142 9.554 140.518 11.537 138.54 12.397V12.463C140.616 12.761 141.671 14.249 141.703 16.265L141.802 23.604H136.992L136.893 17.059C136.861 15.604 136.004 14.712 134.29 14.712H126.284V23.604H121.474V.397H134.752C139.101.397 142 2.611 142 6.975ZM137.157 7.636C137.157 5.653 136.102 4.562 134.126 4.562H126.284V10.71H134.191C136.003 10.71 137.157 9.62 137.157 7.636V7.636Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "icon") {
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
          d="M21.5811 5.6806L11.9972 0.133623C11.6894 -0.0445409 11.3097 -0.0445409 11.0019 0.133623L1.41843 5.6806C1.15972 5.83035 1 6.10729 1 6.40724V17.5928C1 17.8927 1.15972 18.1696 1.41843 18.3194L11.0024 23.8664C11.3101 24.0445 11.6899 24.0445 11.9976 23.8664L21.5816 18.3194C21.8403 18.1696 22 17.8927 22 17.5928V6.40724C22 6.10729 21.8403 5.83035 21.5816 5.6806H21.5811ZM20.9791 6.85558L11.7272 22.9201C11.6647 23.0283 11.4996 22.9841 11.4996 22.8587V12.3399C11.4996 12.1297 11.3875 11.9353 11.2057 11.8297L2.11897 6.57052C2.01099 6.50782 2.05508 6.34229 2.18016 6.34229H20.684C20.9467 6.34229 21.1109 6.6278 20.9796 6.85603H20.9791V6.85558Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  console.error(`Cursor doesn't support ${type}`);
  return null;
});

Cursor.displayName = "Cursor";

Cursor.metadata = {
  name: "Cursor",
  category: "wordmark/software",
  tags: ["cursor", "icon"],
  description: "Cursor icon from wordmark/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cursor;
