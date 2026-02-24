/**
 * Auto-generated logo component: Box (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixBoxLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixBoxLogo = React.forwardRef<SVGSVGElement, MixBoxLogoProps>(
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  <path d="m3.3 7 8.7 5 8.7-5" />
  <path d="M12 22V12" />
    </svg>
  )
);

MixBoxLogo.displayName = "MixBoxLogo";

export const MixBoxLogoMetadata = {
  id: "box",
  baseId: "box",
  variant: "default",
  name: "Box",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixBoxLogo;
