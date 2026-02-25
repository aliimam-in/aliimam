/**
 * Auto-generated logo component: Blur Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlurOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BlurOutlineLogo = React.forwardRef<SVGSVGElement, BlurOutlineLogoProps>(
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
      <path d="M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035" />
  <path d="M12 3v17" />
  <path d="M12 12h9" />
  <path d="M12 9h8" />
  <path d="M12 6h6" />
  <path d="M12 18h6" />
  <path d="M12 15h8" />
    </svg>
  )
);

BlurOutlineLogo.displayName = "BlurOutlineLogo";

export const BlurOutlineLogoMetadata = {
  id: "blur-outline",
  baseId: "blur-outline",
  variant: "default",
  name: "Blur Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BlurOutlineLogo;
