import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EclipseProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Eclipse: IconComponent<EclipseProps> = React.forwardRef<
  SVGSVGElement,
  EclipseProps
>(function Eclipse(
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
        viewBox="0 0 22 22"
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
          d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM10.5732 3.00098C9.02909 3.0845 7.54195 3.61296 6.29199 4.52344C5.04201 5.43403 4.08229 6.6876 3.5293 8.13184C2.97636 9.57603 2.85364 11.1496 3.17578 12.6621C3.49799 14.1746 4.25125 15.5618 5.34473 16.6553C6.43825 17.7487 7.82542 18.5021 9.33789 18.8242C10.8505 19.1463 12.4249 19.0238 13.8691 18.4707C15.3132 17.9176 16.5661 16.9579 17.4766 15.708C18.3871 14.4579 18.9157 12.9701 18.999 11.4258C19.0184 11.0657 18.5911 10.8782 18.2852 11.0693C17.2617 11.709 16.0516 11.9832 14.8525 11.8467C13.6534 11.7101 12.536 11.1708 11.6826 10.3174C10.8292 9.464 10.2899 8.34658 10.1533 7.14746C10.0168 5.94835 10.291 4.73825 10.9307 3.71484C11.1219 3.40977 10.9334 2.98149 10.5732 3.00098Z"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C10.6739 3.32608 9.92896 5.12464 9.92896 7C9.92896 8.87536 10.6739 10.6739 12 12C13.3261 13.3261 15.1247 14.0711 17 14.0711C18.8754 14.0711 20.6739 13.3261 22 12"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9998 2C10.6737 3.32608 9.92871 5.12464 9.92871 7C9.92871 8.87536 10.6737 10.6739 11.9998 12C13.3259 13.3261 15.1244 14.0711 16.9998 14.0711C18.8751 14.0711 20.6737 13.3261 21.9998 12"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C10.6739 3.32608 9.92896 5.12464 9.92896 7C9.92896 8.87536 10.6739 10.6739 12 12C13.3261 13.3261 15.1247 14.0711 17 14.0711C18.8754 14.0711 20.6739 13.3261 22 12"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C10.6739 3.32608 9.92896 5.12464 9.92896 7C9.92896 8.87536 10.6739 10.6739 12 12C13.3261 13.3261 15.1247 14.0711 17 14.0711C18.8754 14.0711 20.6739 13.3261 22 12"
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C10.6739 3.32608 9.92892 5.12464 9.92892 7C9.92892 8.87536 10.6739 10.6739 12 12C13.3261 13.3261 15.1246 14.0711 17 14.0711C18.8754 14.0711 20.6739 13.3261 22 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Eclipse doesn't support ${type}`);
  return null;
});

Eclipse.displayName = "Eclipse";

Eclipse.metadata = {
  name: "Eclipse",
  category: "solid/accessibility",
  tags: ["eclipse", "icon"],
  description: "Eclipse icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Eclipse;
