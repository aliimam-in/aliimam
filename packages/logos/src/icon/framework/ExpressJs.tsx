import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ExpressJs: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ExpressJs(
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
        d="M24 18.5962C23.127 18.8182 22.587 18.606 22.1025 17.8785L18.657 13.1115L18.159 12.4515L14.1353 17.8942C13.6755 18.549 13.1933 18.834 12.3353 18.6022L17.4877 11.6857L12.6908 5.43823C13.5157 5.27773 14.0857 5.35948 14.592 6.09823L18.1658 10.9245L21.7658 6.12448C22.227 5.46973 22.7227 5.22073 23.5507 5.46223L21.6908 7.92823L19.1707 11.2095C18.8708 11.5845 18.912 11.841 19.188 12.2032L24 18.5962ZM0.006 11.5702L0.4275 9.49723C1.575 5.39473 6.2775 3.68998 9.5205 6.22498C11.4158 7.71598 11.8868 9.82498 11.793 12.1875H1.11C0.9495 16.44 4.01025 19.0065 7.9125 17.697C9.28125 17.2372 10.0875 16.1655 10.491 14.8245C10.6958 14.1525 11.0347 14.0475 11.6663 14.2395C11.3438 15.9165 10.6163 17.3175 9.07875 18.1942C6.7815 19.5067 3.5025 19.0822 1.7775 17.2582C0.75 16.2 0.3255 14.859 0.135 13.425C0.105 13.188 0.045 12.9622 0 12.735C0.004 12.347 0.006 11.959 0.006 11.571V11.5702ZM1.1295 11.2852H10.7835C10.7205 8.21023 8.80575 6.02623 6.189 6.00748C3.3165 5.98498 1.254 8.11723 1.1295 11.2852Z"
        fill="currentColor"
      />
    </svg>
  );
});

ExpressJs.displayName = "ExpressJs";

ExpressJs.metadata = {
  name: "ExpressJs",
  category: "icon/framework",
  tags: ["express", "js", "icon"],
  description: "ExpressJs icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ExpressJs;
