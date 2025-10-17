import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mermaid: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mermaid(
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
        d="M19.9175 5.4345C16.4033 5.2841 13.1766 7.4463 11.9794 10.7536C10.7822 7.4463 7.55541 5.2841 4.04129 5.4345C3.92423 8.22305 5.25826 10.8823 7.56358 12.4556C8.7449 13.267 9.45083 14.6127 9.44692 16.0458V18.5319H14.5123V16.0458C14.5082 14.6128 15.214 13.267 16.3952 12.4556C18.7011 10.8828 20.0354 8.22324 19.9175 5.4345Z"
        fill="#121212"
      />
    </svg>
  );
});

Mermaid.displayName = "Mermaid";

Mermaid.metadata = {
  name: "Mermaid",
  category: "icon/library",
  tags: ["mermaid", "icon"],
  description: "Mermaid icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mermaid;
