/**
 * Auto-generated logo component: Zeppelin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZeppelinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZeppelinOutlineLogo = React.forwardRef<SVGSVGElement, ZeppelinOutlineLogoProps>(
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
      <path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6 -8.5 6c-2.13 0 -4.584 -.926 -7.364 -2.777l-2.136 1.777v-3.33a46.07 46.07 0 0 1 -2 -1.67a46.07 46.07 0 0 1 2 -1.67v-3.33l2.135 1.778c2.78 -1.852 5.235 -2.778 7.365 -2.778" />
  <path d="M10 15.5v4.5h6v-4" />
    </svg>
  )
);

ZeppelinOutlineLogo.displayName = "ZeppelinOutlineLogo";

export const ZeppelinOutlineLogoMetadata = {
  id: "zeppelin-outline",
  baseId: "zeppelin-outline",
  variant: "default",
  name: "Zeppelin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZeppelinOutlineLogo;
