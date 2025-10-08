import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ComputerProps extends IconProps {
  type?: "stroke";
}

export const Computer: IconComponent<ComputerProps> = React.forwardRef<
  SVGSVGElement,
  ComputerProps
>(function Computer(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M17 2H7C5.895 2 5 2.895 5 4V8C5 9.105 5.895 10 7 10H17C18.105 10 19 9.105 19 8V4C19 2.895 18.105 2 17 2ZM20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H8M12 18H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M17 2H7C5.895 2 5 2.895 5 4V8C5 9.105 5.895 10 7 10H17C18.105 10 19 9.105 19 8V4C19 2.895 18.105 2 17 2ZM20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H8M12 18H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M17 2H7C5.895 2 5 2.895 5 4V8C5 9.105 5.895 10 7 10H17C18.105 10 19 9.105 19 8V4C19 2.895 18.105 2 17 2ZM20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H8M12 18H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Computer doesn't support ${type}`);
  return null;
});

Computer.displayName = "Computer";

Computer.metadata = {
  name: "Computer",
  category: "stroke/gaming",
  tags: ["computer", "icon"],
  description: "Computer icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Computer;
