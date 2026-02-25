/**
 * Auto-generated logo component: Award Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AwardOutlineLogo = React.forwardRef<SVGSVGElement, AwardOutlineLogoProps>(
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
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
  <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
    </svg>
  )
);

AwardOutlineLogo.displayName = "AwardOutlineLogo";

export const AwardOutlineLogoMetadata = {
  id: "award-outline",
  baseId: "award-outline",
  variant: "default",
  name: "Award Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AwardOutlineLogo;
