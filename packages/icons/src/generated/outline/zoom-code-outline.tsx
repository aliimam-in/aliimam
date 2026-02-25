/**
 * Auto-generated logo component: Zoom Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomCodeOutlineLogo = React.forwardRef<SVGSVGElement, ZoomCodeOutlineLogoProps>(
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
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
  <path d="M8 8l-2 2l2 2" />
  <path d="M12 8l2 2l-2 2" />
    </svg>
  )
);

ZoomCodeOutlineLogo.displayName = "ZoomCodeOutlineLogo";

export const ZoomCodeOutlineLogoMetadata = {
  id: "zoom-code-outline",
  baseId: "zoom-code-outline",
  variant: "default",
  name: "Zoom Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomCodeOutlineLogo;
