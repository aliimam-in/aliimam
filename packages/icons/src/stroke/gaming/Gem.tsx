import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GemProps extends IconProps {
  type?: "stroke";
}

export const Gem: IconComponent<GemProps> = React.forwardRef<
  SVGSVGElement,
  GemProps
>(function Gem(
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
          d="M10.5 3L8 9L12 22L16 9L13.5 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3C17.311 3 17.617 3.072 17.894 3.211 18.172 3.35 18.414 3.552 18.6 3.8L21.6 7.8C21.857 8.143 21.997 8.56 22 8.989 22.002 9.418 21.867 9.836 21.613 10.182L13.623 21.168C13.438 21.426 13.194 21.635 12.912 21.78 12.629 21.925 12.317 22 12 22 11.682 22 11.37 21.925 11.087 21.78 10.805 21.635 10.561 21.426 10.376 21.168L2.386 10.182C2.133 9.836 1.997 9.418 2 8.989 2.002 8.56 2.143 8.143 2.4 7.8L5.398 3.803C5.584 3.554 5.826 3.351 6.104 3.212 6.382 3.073 6.689 3 7 3H17ZM2 9H22"
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
          d="M10.5 3L8 9L12 22L16 9L13.5 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3C17.311 3 17.617 3.072 17.894 3.211 18.172 3.35 18.414 3.552 18.6 3.8L21.6 7.8C21.857 8.143 21.998 8.56 22 8.989 22.002 9.418 21.867 9.836 21.613 10.182L13.623 21.168C13.438 21.426 13.194 21.635 12.912 21.78 12.629 21.925 12.317 22 12 22 11.682 22 11.37 21.925 11.087 21.78 10.805 21.635 10.561 21.426 10.376 21.168L2.386 10.182C2.133 9.836 1.997 9.418 2 8.989 2.002 8.56 2.143 8.143 2.4 7.8L5.398 3.803C5.584 3.554 5.826 3.351 6.104 3.212 6.382 3.073 6.689 3 7 3H17ZM2 9H22"
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
          d="M10.5 3L8 9L12 22L16 9L13.5 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3C17.311 3 17.617 3.072 17.895 3.211 18.172 3.35 18.414 3.552 18.6 3.8L21.6 7.8C21.857 8.143 21.998 8.56 22 8.989 22.002 9.418 21.867 9.836 21.613 10.182L13.623 21.168C13.438 21.426 13.194 21.635 12.912 21.78 12.629 21.925 12.317 22 12 22 11.682 22 11.37 21.925 11.088 21.78 10.805 21.635 10.561 21.426 10.376 21.168L2.386 10.182C2.133 9.836 1.997 9.418 2 8.989 2.002 8.56 2.143 8.143 2.4 7.8L5.398 3.803C5.584 3.554 5.826 3.351 6.104 3.212 6.382 3.073 6.689 3 7 3H17ZM2 9H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gem doesn't support ${type}`);
  return null;
});

Gem.displayName = "Gem";

Gem.metadata = {
  name: "Gem",
  category: "stroke/gaming",
  tags: ["gem", "icon"],
  description: "Gem icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gem;
