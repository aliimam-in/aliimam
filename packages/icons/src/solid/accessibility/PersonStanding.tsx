import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PersonStandingProps extends IconProps {
  type?: "solid" | "stroke";
}

export const PersonStanding: IconComponent<PersonStandingProps> =
  React.forwardRef<SVGSVGElement, PersonStandingProps>(function PersonStanding(
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
    if (type === "solid") {
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
            d="M17.5254 6.57715C18.3112 6.31522 19.1607 6.73972 19.4229 7.5254C19.6848 8.31121 19.2603 9.16077 18.4746 9.42286L13.5 11.0811V13.6455L16.3418 19.3291C16.7123 20.0701 16.4119 20.9713 15.6709 21.3418C14.93 21.7121 14.0286 21.4118 13.6582 20.6709L12 17.3545L10.3418 20.6709C9.97125 21.4118 9.07001 21.7123 8.32907 21.3418C7.58828 20.9713 7.28779 20.07 7.65817 19.3291L10.5 13.6455V11.0811L5.52535 9.42286C4.73979 9.16069 4.31524 8.31112 4.57711 7.5254C4.83917 6.73974 5.68882 6.31537 6.47457 6.57715L12 8.41895L17.5254 6.57715ZM12 2.5C13.3807 2.5 14.5 3.61929 14.5 5C14.5 6.38072 13.3807 7.50001 12 7.50001C10.6194 7.49987 9.49997 6.38063 9.49997 5C9.49997 3.61937 10.6194 2.50013 12 2.5Z"
            fill="currentColor"
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
            d="M12 6C12.552 6 13 5.552 13 5 13 4.448 12.552 4 12 4 11.448 4 11 4.448 11 5 11 5.552 11.448 6 12 6ZM9 20 12 14 15 20M6 8 12 10 18 8M12 10V14"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`PersonStanding doesn't support ${type}`);
    return null;
  });

PersonStanding.displayName = "PersonStanding";

PersonStanding.metadata = {
  name: "PersonStanding",
  category: "solid/accessibility",
  tags: ["person", "standing", "icon"],
  description: "PersonStanding icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PersonStanding;
