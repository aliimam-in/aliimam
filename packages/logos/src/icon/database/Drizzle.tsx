import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Drizzle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Drizzle(
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
        d="M7.424 11.427C7.622 11.081 7.501 10.642 7.153 10.448 6.804 10.253 6.361 10.376 6.163 10.722L3.834 14.786C3.636 15.132 3.758 15.57 4.106 15.765 4.454 15.959 4.897 15.836 5.096 15.49L7.424 11.427ZM12.443 8.311C12.641 7.965 12.52 7.527 12.172 7.332 11.823 7.138 11.38 7.261 11.182 7.607L8.853 11.67C8.655 12.016 8.777 12.455 9.125 12.649 9.473 12.844 9.916 12.721 10.115 12.375L12.443 8.311ZM20.166 8.312C20.364 7.965 20.243 7.527 19.894 7.332 19.546 7.138 19.103 7.261 18.905 7.607L16.576 11.67C16.378 12.016 16.499 12.455 16.848 12.649 17.196 12.844 17.639 12.721 17.837 12.375L20.166 8.312ZM15.146 11.427C15.344 11.081 15.223 10.642 14.874 10.448 14.526 10.253 14.083 10.376 13.885 10.722L11.556 14.786C11.358 15.132 11.479 15.57 11.828 15.765 12.176 15.959 12.619 15.836 12.817 15.49L15.146 11.427Z"
        fill="#121212"
      />
    </svg>
  );
});

Drizzle.displayName = "Drizzle";

Drizzle.metadata = {
  name: "Drizzle",
  category: "icon/database",
  tags: ["drizzle", "icon"],
  description: "Drizzle icon from icon/database category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drizzle;
