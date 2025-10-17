import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star10: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star10(
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
          d="M10.9711 0.955535C10.973 0.948848 10.9739 0.945504 10.9744 0.943956C11.2687 -0.0880894 12.7313 -0.0880894 13.0256 0.943956C13.0261 0.945504 13.027 0.948848 13.0289 0.955535C13.0339 0.973157 13.0363 0.981968 13.0387 0.99024C14.4062 5.81932 18.1805 9.5936 23.0096 10.9611C23.0178 10.9635 23.0267 10.966 23.0443 10.9709C23.051 10.9728 23.0543 10.9738 23.0559 10.9742C24.0879 11.2685 24.0879 12.7311 23.0559 13.0254C23.0543 13.0259 23.051 13.0268 23.0443 13.0287C23.0267 13.0337 23.0178 13.0362 23.0096 13.0385C18.1805 14.406 14.4062 18.1803 13.0387 23.0094C13.0363 23.0177 13.0339 23.0265 13.0289 23.0441C13.027 23.0508 13.0261 23.0541 13.0256 23.0557C12.7313 24.0877 11.2687 24.0877 10.9744 23.0557C10.9739 23.0541 10.973 23.0508 10.9711 23.0441C10.9661 23.0265 10.9637 23.0177 10.9613 23.0094C9.59378 18.1803 5.8195 14.406 0.990423 13.0385C0.982151 13.0362 0.97334 13.0337 0.955718 13.0287C0.949031 13.0268 0.945687 13.0259 0.944139 13.0254C-0.0879063 12.7311 -0.0879063 11.2685 0.944139 10.9742C0.945687 10.9738 0.949031 10.9728 0.955718 10.9709C0.97334 10.966 0.982151 10.9635 0.990423 10.9611C5.8195 9.5936 9.59378 5.81932 10.9613 0.99024C10.9637 0.981968 10.9661 0.973157 10.9711 0.955535Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Star10.displayName = "Star10";

Star10.metadata = {
  name: "Star10",
  category: "shapes/star",
  tags: ["star", "10", "icon"],
  description: "Star10 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star10;
