import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BotMessageSquareProps extends IconProps {
  type?: "stroke";
}

export const BotMessageSquare: IconComponent<BotMessageSquareProps> =
  React.forwardRef<SVGSVGElement, BotMessageSquareProps>(
    function BotMessageSquare(
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
              d="M12 6V2H8M15 11V13M2 12H4M20 12H22"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16C20 16.53 19.789 17.039 19.414 17.414 19.039 17.789 18.53 18 18 18H8.828C8.298 18 7.789 18.211 7.414 18.586L5.212 20.788C5.113 20.887 4.986 20.955 4.848 20.982 4.711 21.01 4.568 20.996 4.438 20.942 4.309 20.888 4.198 20.797 4.12 20.68 4.042 20.564 4 20.426 4 20.286V8C4 7.47 4.211 6.961 4.586 6.586 4.961 6.211 5.47 6 6 6H18C18.53 6 19.039 6.211 19.414 6.586 19.789 6.961 20 7.47 20 8V16ZM9 11V13"
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
              d="M12 6V2H8M15 11V13M2 12H4M20 12H22"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16C20 16.53 19.789 17.039 19.414 17.414 19.039 17.789 18.53 18 18 18H8.828C8.298 18 7.789 18.211 7.414 18.586L5.212 20.788C5.113 20.887 4.986 20.955 4.848 20.982 4.711 21.01 4.568 20.996 4.438 20.942 4.309 20.888 4.198 20.797 4.12 20.68 4.042 20.564 4 20.426 4 20.286V8C4 7.47 4.211 6.961 4.586 6.586 4.961 6.211 5.47 6 6 6H18C18.53 6 19.039 6.211 19.414 6.586 19.789 6.961 20 7.47 20 8V16ZM9 11V13"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BotMessageSquare doesn't support ${type}`);
      return null;
    },
  );

BotMessageSquare.displayName = "BotMessageSquare";

BotMessageSquare.metadata = {
  name: "BotMessageSquare",
  category: "stroke/social",
  tags: ["bot", "message", "square", "icon"],
  description: "BotMessageSquare icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BotMessageSquare;
