/**
 * Auto-generated logo component: Balloon (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BalloonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BalloonLogo = React.forwardRef<SVGSVGElement, BalloonLogoProps>(
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
      <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
  <path d="M12 6a2 2 0 0 1 2 2" />
  <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />
    </svg>
  )
);

BalloonLogo.displayName = "BalloonLogo";

export const BalloonLogoMetadata = {
  id: "balloon",
  baseId: "balloon",
  variant: "default",
  name: "Balloon",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BalloonLogo;
