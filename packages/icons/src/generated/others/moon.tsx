/**
 * Auto-generated logo component: Moon (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoonLogo = React.forwardRef<SVGSVGElement, MoonLogoProps>(
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
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  )
);

MoonLogo.displayName = "MoonLogo";

export const MoonLogoMetadata = {
  id: "moon",
  baseId: "moon",
  variant: "default",
  name: "Moon",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoonLogo;
