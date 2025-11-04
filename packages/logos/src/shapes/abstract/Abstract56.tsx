import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract56: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract56(
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
        d="M11.5132 12.0019H11.5094L8.71636 13.9642C8.71636 13.9642 6.66825 12.059 0.281968 12.0019H0C0.0476304 12.0019 0.0933537 12.0019 0.140984 12.0019C0.0933537 12.0019 0.0495356 12.0019 0 12.0019H0.281968C6.66825 11.9467 8.71636 10.0396 8.71636 10.0396L11.5094 12.0019H11.5132H11.5113L11.5132 12.0038V12.0019ZM24 12.0019H23.718C17.3317 12.0571 15.2836 13.9642 15.2836 13.9642L12.4906 12.0019H12.4868H12.4887L12.4868 12H12.4906L15.2836 10.0377C15.2836 10.0377 17.3317 11.9429 23.718 12H24V12.0019ZM12.0067 23.7183C11.9514 17.331 10.0443 15.2831 10.0443 15.2831L12.0067 12.491L13.9691 15.2831C13.9691 15.2831 12.0619 17.331 12.0067 23.7183ZM12.0067 11.509L10.0443 8.71689C10.0443 8.71689 11.9514 6.66899 12.0067 0.28168C12.0619 6.66899 13.9691 8.71689 13.9691 8.71689L12.0067 11.509Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract56.displayName = "Abstract56";

Abstract56.metadata = {
  name: "Abstract56",
  category: "shapes/abstract",
  tags: ["abstract", "56", "icon"],
  description: "Abstract56 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract56;
