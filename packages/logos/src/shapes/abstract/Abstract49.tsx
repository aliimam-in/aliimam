import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract49: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract49(
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
        d="M13.8841 1.92378C12.8428 0.882518 11.1572 0.882518 10.1159 1.92378L1.92377 10.1159C0.882507 11.1572 0.882507 12.8428 1.92377 13.8841L10.1159 22.0762C11.1572 23.1175 12.8428 23.1175 13.8841 22.0762L22.0762 13.8841C23.1175 12.8428 23.1175 11.1572 22.0762 10.1159L13.8841 1.92378ZM12 24L0 12L12 0L24 12L12 24ZM20.4567 6.20787C20.4567 4.73574 19.2642 3.54331 17.7921 3.54331H6.20789C4.73577 3.54331 3.54331 4.73574 3.54331 6.20787V17.7921C3.54331 19.2642 4.73577 20.4567 6.20789 20.4567H17.7921C19.2642 20.4567 20.4567 19.2642 20.4567 17.7921V6.20787ZM3.51498 20.485V3.51496H20.485V20.485H3.51498Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract49.displayName = "Abstract49";

Abstract49.metadata = {
  name: "Abstract49",
  category: "shapes/abstract",
  tags: ["abstract", "49", "icon"],
  description: "Abstract49 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract49;
