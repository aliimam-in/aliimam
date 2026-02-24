/**
 * Auto-generated logo component: Code (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeLogo = React.forwardRef<SVGSVGElement, CodeLogoProps>(
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
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  )
);

CodeLogo.displayName = "CodeLogo";

export const CodeLogoMetadata = {
  id: "code",
  baseId: "code",
  variant: "default",
  name: "Code",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeLogo;
