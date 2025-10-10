import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TypeOutline: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TypeOutline(
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
        d="M14 16.5C14 16.6326 14.0527 16.7598 14.1464 16.8536C14.2402 16.9473 14.3674 17 14.5 17H15C15.5304 17 16.0391 17.2107 16.4142 17.5858C16.7893 17.9609 17 18.4696 17 19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17H9.5C9.63261 17 9.75979 16.9473 9.85355 16.8536C9.94732 16.7598 10 16.6326 10 16.5V7.5C10 7.36739 9.94732 7.24021 9.85355 7.14645C9.75979 7.05268 9.63261 7 9.5 7H6.5C6.36739 7 6.24021 7.05268 6.14645 7.14645C6.05268 7.24021 6 7.36739 6 7.5V8C6 8.53043 5.78929 9.03914 5.41421 9.41421C5.03914 9.78929 4.53043 10 4 10C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8V7.5C18 7.36739 17.9473 7.24021 17.8536 7.14645C17.7598 7.05268 17.6326 7 17.5 7H14.5C14.3674 7 14.2402 7.05268 14.1464 7.14645C14.0527 7.24021 14 7.36739 14 7.5V16.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TypeOutline.displayName = "TypeOutline";

TypeOutline.metadata = {
  name: "TypeOutline",
  category: "stroke/textFormatting",
  tags: ["type", "outline", "icon"],
  description: "TypeOutline icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TypeOutline;
