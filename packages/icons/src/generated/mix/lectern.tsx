/**
 * Auto-generated logo component: Lectern (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LecternLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LecternLogo = React.forwardRef<SVGSVGElement, LecternLogoProps>(
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
      <path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
  <path d="M18 6V3a1 1 0 0 0-1-1h-3" />
  <rect width="8" height="12" x="8" y="10" rx="1" />
    </svg>
  )
);

LecternLogo.displayName = "LecternLogo";

export const LecternLogoMetadata = {
  id: "lectern",
  baseId: "lectern",
  variant: "default",
  name: "Lectern",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LecternLogo;
