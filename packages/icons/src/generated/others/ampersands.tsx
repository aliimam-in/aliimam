/**
 * Auto-generated logo component: Ampersands (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmpersandsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AmpersandsLogo = React.forwardRef<SVGSVGElement, AmpersandsLogoProps>(
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
      <path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
  <path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
    </svg>
  )
);

AmpersandsLogo.displayName = "AmpersandsLogo";

export const AmpersandsLogoMetadata = {
  id: "ampersands",
  baseId: "ampersands",
  variant: "default",
  name: "Ampersands",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmpersandsLogo;
