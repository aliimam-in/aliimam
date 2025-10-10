import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MessageSquareDiffProps extends IconProps {
  type?: "stroke";
}

export const MessageSquareDiff: IconComponent<MessageSquareDiffProps> =
  React.forwardRef<SVGSVGElement, MessageSquareDiffProps>(
    function MessageSquareDiff(
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
              d="M22 17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H6.828C6.298 19 5.789 19.211 5.414 19.586L3.212 21.788C3.113 21.887 2.986 21.955 2.848 21.982 2.711 22.01 2.568 21.996 2.438 21.942 2.309 21.888 2.198 21.797 2.12 21.68 2.042 21.564 2 21.426 2 21.286V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H20C20.53 3 21.039 3.211 21.414 3.586 21.789 3.961 22 4.47 22 5V17ZM10 15H14M10 9H14M12 7V11"
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
              d="M22 17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H6.828C6.298 19 5.789 19.211 5.414 19.586L3.212 21.788C3.113 21.887 2.986 21.955 2.848 21.982 2.711 22.01 2.568 21.996 2.438 21.942 2.309 21.888 2.198 21.797 2.12 21.68 2.042 21.564 2 21.426 2 21.286V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H20C20.53 3 21.039 3.211 21.414 3.586 21.789 3.961 22 4.47 22 5V17ZM10 15H14M10 9H14M12 7V11"
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
              d="M22 17C22 17.53 21.789 18.039 21.414 18.414 21.039 18.789 20.53 19 20 19H6.828C6.298 19 5.789 19.211 5.414 19.586L3.212 21.788C3.113 21.887 2.986 21.955 2.848 21.982 2.711 22.01 2.568 21.996 2.438 21.942 2.309 21.888 2.198 21.797 2.12 21.68 2.042 21.564 2 21.426 2 21.286V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H20C20.53 3 21.039 3.211 21.414 3.586 21.789 3.961 22 4.47 22 5V17ZM10 15H14M10 9H14M12 7V11"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`MessageSquareDiff doesn't support ${type}`);
      return null;
    },
  );

MessageSquareDiff.displayName = "MessageSquareDiff";

MessageSquareDiff.metadata = {
  name: "MessageSquareDiff",
  category: "stroke/social",
  tags: ["message", "square", "diff", "icon"],
  description: "MessageSquareDiff icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareDiff;
