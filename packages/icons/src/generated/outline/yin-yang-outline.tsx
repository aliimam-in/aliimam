/**
 * Auto-generated logo component: Yin Yang Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface YinYangOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const YinYangOutlineLogo = React.forwardRef<SVGSVGElement, YinYangOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
  <path d="M11.5 7.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M11.5 16.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
    </svg>
  )
);

YinYangOutlineLogo.displayName = "YinYangOutlineLogo";

export const YinYangOutlineLogoMetadata = {
  id: "yin-yang-outline",
  baseId: "yin-yang-outline",
  variant: "default",
  name: "Yin Yang Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default YinYangOutlineLogo;
