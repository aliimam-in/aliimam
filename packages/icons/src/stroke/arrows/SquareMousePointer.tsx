import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareMousePointer: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareMousePointer(
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
        d="M12.034 12.681C11.9979 12.5906 11.9892 12.4915 12.0088 12.3962C12.0285 12.3008 12.0756 12.2133 12.1445 12.1445C12.2133 12.0756 12.3008 12.0285 12.3962 12.0088C12.4915 11.9892 12.5906 11.9979 12.681 12.034L21.681 15.534C21.7775 15.5717 21.8599 15.6384 21.9168 15.725C21.9737 15.8116 22.0023 15.9137 21.9987 16.0172C21.9951 16.1207 21.9594 16.2206 21.8966 16.3029C21.8337 16.3853 21.7469 16.4461 21.648 16.477L18.204 17.545C18.0486 17.593 17.9073 17.6783 17.7923 17.7933C17.6773 17.9083 17.592 18.0496 17.544 18.205L16.477 21.648C16.4461 21.7469 16.3853 21.8337 16.3029 21.8966C16.2206 21.9594 16.1207 21.9951 16.0172 21.9987C15.9137 22.0023 15.8116 21.9737 15.725 21.9168C15.6384 21.8599 15.5717 21.7775 15.534 21.681L12.034 12.681Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareMousePointer.displayName = "SquareMousePointer";

SquareMousePointer.metadata = {
  name: "SquareMousePointer",
  category: "stroke/arrows",
  tags: ["square", "mouse", "pointer", "icon"],
  description: "SquareMousePointer icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareMousePointer;
