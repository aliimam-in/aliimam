/**
 * Auto-generated logo component: Info Triangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfoTriangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfoTriangleOutlineLogo = React.forwardRef<SVGSVGElement, InfoTriangleOutlineLogoProps>(
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
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
    </svg>
  )
);

InfoTriangleOutlineLogo.displayName = "InfoTriangleOutlineLogo";

export const InfoTriangleOutlineLogoMetadata = {
  id: "info-triangle-outline",
  baseId: "info-triangle-outline",
  variant: "default",
  name: "Info Triangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfoTriangleOutlineLogo;
