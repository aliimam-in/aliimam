/**
 * Auto-generated logo component: Cone (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConeLogo = React.forwardRef<SVGSVGElement, ConeLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
  <ellipse cx="12" cy="19" rx="9" ry="3" />
    </svg>
  )
);

ConeLogo.displayName = "ConeLogo";

export const ConeLogoMetadata = {
  id: "cone",
  baseId: "cone",
  variant: "default",
  name: "Cone",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConeLogo;
