import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Solidity: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Solidity(
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
        opacity=".45"
        d="M14.285 4.67651L11.872 8.96517H7.04939L9.46073 4.67651H14.285Z"
        fill="currentColor"
      />
      <path
        opacity=".6"
        d="M11.872 8.96517H16.6964L14.285 4.67651H9.46072L11.872 8.96517Z"
        fill="currentColor"
      />
      <path
        opacity=".8"
        d="M9.46073 13.2522L11.872 8.96517L9.46073 4.67651L7.04939 8.96517L9.46073 13.2522Z"
        fill="currentColor"
      />
      <path
        opacity=".45"
        d="M9.48408 19.685L11.8971 15.3964H16.7214L14.3084 19.685H9.48408Z"
        fill="currentColor"
      />
      <path
        opacity=".6"
        d="M11.8971 15.3965H7.07275L9.48406 19.6852H14.3084L11.8971 15.3965Z"
        fill="currentColor"
      />
      <path
        opacity=".8"
        d="M14.3084 11.1094L11.8971 15.3964L14.3084 19.685L16.7214 15.3964L14.3084 11.1094Z"
        fill="currentColor"
      />
    </svg>
  );
});

Solidity.displayName = "Solidity";

Solidity.metadata = {
  name: "Solidity",
  category: "icon/language",
  tags: ["solidity", "icon"],
  description: "Solidity icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Solidity;
