/**
 * Auto-generated logo component: Angry (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AngryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AngryLogo = React.forwardRef<SVGSVGElement, AngryLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <path d="M7.5 8 10 9" />
  <path d="m14 9 2.5-1" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
    </svg>
  )
);

AngryLogo.displayName = "AngryLogo";

export const AngryLogoMetadata = {
  id: "angry",
  baseId: "angry",
  variant: "default",
  name: "Angry",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AngryLogo;
