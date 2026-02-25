/**
 * Auto-generated logo component: Accessibility (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AccessibilityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AccessibilityLogo = React.forwardRef<SVGSVGElement, AccessibilityLogoProps>(
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
      <circle cx="16" cy="4" r="1" />
  <path d="m18 19 1-7-6 1" />
  <path d="m5 8 3-3 5.5 3-2.36 3.5" />
  <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
  <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
);

AccessibilityLogo.displayName = "AccessibilityLogo";

export const AccessibilityLogoMetadata = {
  id: "accessibility",
  baseId: "accessibility",
  variant: "default",
  name: "Accessibility",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AccessibilityLogo;
