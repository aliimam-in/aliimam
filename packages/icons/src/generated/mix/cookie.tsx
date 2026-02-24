/**
 * Auto-generated logo component: Cookie (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CookieLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CookieLogo = React.forwardRef<SVGSVGElement, CookieLogoProps>(
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
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
  <path d="M8.5 8.5v.01" />
  <path d="M16 15.5v.01" />
  <path d="M12 12v.01" />
  <path d="M11 17v.01" />
  <path d="M7 14v.01" />
    </svg>
  )
);

CookieLogo.displayName = "CookieLogo";

export const CookieLogoMetadata = {
  id: "cookie",
  baseId: "cookie",
  variant: "default",
  name: "Cookie",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CookieLogo;
