/**
 * Auto-generated logo component: Biceps Flexed (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BicepsFlexedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BicepsFlexedLogo = React.forwardRef<SVGSVGElement, BicepsFlexedLogoProps>(
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
      <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
  <path d="M15 14a5 5 0 0 0-7.584 2" />
  <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
    </svg>
  )
);

BicepsFlexedLogo.displayName = "BicepsFlexedLogo";

export const BicepsFlexedLogoMetadata = {
  id: "biceps-flexed",
  baseId: "biceps-flexed",
  variant: "default",
  name: "Biceps Flexed",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BicepsFlexedLogo;
