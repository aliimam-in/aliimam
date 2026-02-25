/**
 * Auto-generated logo component: Facebook (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FacebookLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FacebookLogo = React.forwardRef<SVGSVGElement, FacebookLogoProps>(
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
);

FacebookLogo.displayName = "FacebookLogo";

export const FacebookLogoMetadata = {
  id: "facebook",
  baseId: "facebook",
  variant: "default",
  name: "Facebook",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FacebookLogo;
