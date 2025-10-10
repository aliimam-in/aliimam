import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChurchProps extends IconProps {
  type?: "stroke";
}

export const Church: IconComponent<ChurchProps> = React.forwardRef<
  SVGSVGElement,
  ChurchProps
>(function Church(
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
          d="M10 9H14M12 7V12M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9L21.52 11.147C21.6665 11.2362 21.7877 11.3616 21.8717 11.5112C21.9558 11.6608 22 11.8294 22 12.001V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12.001C2.00003 11.8294 2.0442 11.6608 2.12826 11.5112C2.21232 11.3616 2.33345 11.2362 2.48 11.147L6 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 21V7.00002C5.99991 6.84981 6.03367 6.7015 6.09877 6.56612C6.16386 6.43074 6.25862 6.31176 6.376 6.21802L11.376 2.21902C11.5534 2.07741 11.7737 2.00037 12.0007 2.00055C12.2277 2.00073 12.4478 2.07813 12.625 2.22002L17.625 6.22002C17.7419 6.31365 17.8363 6.43235 17.9013 6.56736C17.9662 6.70236 17.9999 6.85023 18 7.00002V21"
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
          d="M10 9H14M12 7V12M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9L21.52 11.147C21.6665 11.2362 21.7877 11.3616 21.8717 11.5112C21.9558 11.6608 22 11.8294 22 12.001V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12.001C2.00003 11.8294 2.0442 11.6608 2.12826 11.5112C2.21232 11.3616 2.33345 11.2362 2.48 11.147L6 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 21V6.99996C5.99991 6.84975 6.03367 6.70144 6.09877 6.56606C6.16386 6.43068 6.25862 6.3117 6.376 6.21796L11.376 2.21896C11.5534 2.07735 11.7737 2.00031 12.0007 2.00049C12.2277 2.00067 12.4478 2.07807 12.625 2.21996L17.625 6.21996C17.7419 6.31359 17.8363 6.43229 17.9013 6.56729C17.9662 6.7023 17.9999 6.85016 18 6.99996V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Church doesn't support ${type}`);
  return null;
});

Church.displayName = "Church";

Church.metadata = {
  name: "Church",
  category: "stroke/navigation",
  tags: ["church", "icon"],
  description: "Church icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Church;
