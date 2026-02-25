/**
 * Auto-generated logo component: Focus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FocusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FocusLogo = React.forwardRef<SVGSVGElement, FocusLogoProps>(
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
      <circle cx="12" cy="12" r="3" />
  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
);

FocusLogo.displayName = "FocusLogo";

export const FocusLogoMetadata = {
  id: "focus",
  baseId: "focus",
  variant: "default",
  name: "Focus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FocusLogo;
