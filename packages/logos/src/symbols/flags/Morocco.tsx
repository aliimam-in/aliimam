import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Morocco: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Morocco(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#b33431"
      />
      <path
        d="M20.224 21.8679L16 18.7989L11.776 21.8679L13.389 16.9029L9.16498 13.8339H14.386L15.999 8.86792L17.612 13.8339H22.833L18.609 16.9029L20.222 21.8679H20.224ZM16.768 18.2419L18.508 19.5059L17.843 17.4609L16.768 18.2419ZM14.157 17.4609L13.492 19.5059L15.232 18.2419L14.157 17.4609ZM14.45 16.5589L16 17.6849L17.55 16.5589L16.958 14.7369H15.042L14.45 16.5589ZM17.906 14.7369L18.317 16.0009L20.057 14.7369H17.906ZM11.942 14.7369L13.682 16.0009L14.093 14.7369H11.942ZM15.335 13.8349H16.664L15.999 11.7889L15.334 13.8349H15.335Z"
        fill="#286038"
      />
    </svg>
  );
});

Morocco.displayName = "Morocco";

Morocco.metadata = {
  name: "Morocco",
  category: "symbols/flags",
  tags: ["morocco", "icon"],
  description: "Morocco icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Morocco;
