/**
 * Auto-generated logo component: Crown Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrownOutlineLogo = React.forwardRef<SVGSVGElement, CrownOutlineLogoProps>(
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
      <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6" />
    </svg>
  )
);

CrownOutlineLogo.displayName = "CrownOutlineLogo";

export const CrownOutlineLogoMetadata = {
  id: "crown-outline",
  baseId: "crown-outline",
  variant: "default",
  name: "Crown Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrownOutlineLogo;
