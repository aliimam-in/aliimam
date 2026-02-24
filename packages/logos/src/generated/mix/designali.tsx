/**
 * Auto-generated logo component: Designali (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DesignaliLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DesignaliLogo = React.forwardRef<SVGSVGElement, DesignaliLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1440 1440"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M410.16 364.04h253.69c116.97 0 207.22 30.93 270.73 92.75 63.5 61.84 95.26 149.91 95.26 264.21s-31.08 201.22-93.25 262.71c-62.17 61.51-151.08 92.25-266.72 92.25h-259.7V364.04Z" style={{fill:"#d93739"}} />
    </svg>
  )
);

DesignaliLogo.displayName = "DesignaliLogo";

export const DesignaliLogoMetadata = {
  id: "designali",
  baseId: "designali",
  variant: "default",
  name: "Designali",
  category: "mix",
  tags: [],
  viewBox: "0 0 1440 1440",
} as const;

export default DesignaliLogo;
