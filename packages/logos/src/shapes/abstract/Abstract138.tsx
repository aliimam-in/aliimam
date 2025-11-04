import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract138: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract138(
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
      viewBox="0 0 23 24"
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
        d="M15.744 10.3058H15.7459L11.5037 11.999V11.9952L16.5235 0.270463L16.33 2.7655C16.1292 5.34815 18.1189 7.54226 20.6014 7.4756L23 7.41085L15.744 10.3039V10.3058ZM11.5 11.999H11.4982L0.261042 6.75755L2.63586 6.95755C5.10015 7.16515 7.19755 5.10817 7.15009 2.52933L7.10445 0L9.87722 7.57083V7.56701L11.5 11.9952V11.999ZM22.7408 17.2405L20.3751 17.0253C17.8907 16.7987 15.7696 18.8785 15.8335 21.4802L15.8955 24L11.5018 12.0048H11.5037L22.7408 17.2424V17.2405ZM6.4765 23.7257L6.66635 21.2136C6.86167 18.6309 4.86652 16.4425 2.38398 16.5149L0 16.5834L11.4982 11.9971H11.5018V12.001L6.4765 23.7238V23.7257Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract138.displayName = "Abstract138";

Abstract138.metadata = {
  name: "Abstract138",
  category: "shapes/abstract",
  tags: ["abstract", "138", "icon"],
  description: "Abstract138 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract138;
