import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface JoystickProps extends IconProps {
  type?: "stroke";
}

export const Joystick: IconComponent<JoystickProps> = React.forwardRef<
  SVGSVGElement,
  JoystickProps
>(function Joystick(
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
          d="M21 17C21 16.47 20.789 15.961 20.414 15.586 20.039 15.211 19.53 15 19 15H5C4.47 15 3.961 15.211 3.586 15.586 3.211 15.961 3 16.47 3 17V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19V17ZM6 15V13M12 15V9M12 9C13.657 9 15 7.657 15 6 15 4.343 13.657 3 12 3 10.343 3 9 4.343 9 6 9 7.657 10.343 9 12 9Z"
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
          d="M21 17C21 16.47 20.789 15.961 20.414 15.586 20.039 15.211 19.53 15 19 15H5C4.47 15 3.961 15.211 3.586 15.586 3.211 15.961 3 16.47 3 17V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19V17ZM6 15V13M12 15V9M12 9C13.657 9 15 7.657 15 6 15 4.343 13.657 3 12 3 10.343 3 9 4.343 9 6 9 7.657 10.343 9 12 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Joystick doesn't support ${type}`);
  return null;
});

Joystick.displayName = "Joystick";

Joystick.metadata = {
  name: "Joystick",
  category: "stroke/gaming",
  tags: ["joystick", "icon"],
  description: "Joystick icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Joystick;
