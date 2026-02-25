/**
 * Auto-generated logo component: Castle (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CastleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CastleLogo = React.forwardRef<SVGSVGElement, CastleLogoProps>(
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
      <path d="M10 5V3" />
  <path d="M14 5V3" />
  <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
  <path d="M18 3v8" />
  <path d="M18 5H6" />
  <path d="M22 11H2" />
  <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
  <path d="M6 3v8" />
    </svg>
  )
);

CastleLogo.displayName = "CastleLogo";

export const CastleLogoMetadata = {
  id: "castle",
  baseId: "castle",
  variant: "default",
  name: "Castle",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CastleLogo;
