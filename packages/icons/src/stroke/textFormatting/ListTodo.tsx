import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListTodo: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListTodo(
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
        d="M13 5H21M13 12H21M13 19H21M3 17 5 19 9 15M8 4H4C3.448 4 3 4.448 3 5V9C3 9.552 3.448 10 4 10H8C8.552 10 9 9.552 9 9V5C9 4.448 8.552 4 8 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListTodo.displayName = "ListTodo";

ListTodo.metadata = {
  name: "ListTodo",
  category: "stroke/textFormatting",
  tags: ["list", "todo", "icon"],
  description: "ListTodo icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListTodo;
