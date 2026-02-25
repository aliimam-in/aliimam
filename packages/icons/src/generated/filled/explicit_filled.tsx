/**
 * Auto-generated logo component: Explicit (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExplicitFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExplicitFilledLogo = React.forwardRef<SVGSVGElement, ExplicitFilledLogoProps>(
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
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zm-5 4h-4a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-2h3a1 1 0 0 0 0 -2h-3v-2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);

ExplicitFilledLogo.displayName = "ExplicitFilledLogo";

export const ExplicitFilledLogoMetadata = {
  id: "explicit_filled",
  baseId: "explicit",
  variant: "filled",
  name: "Explicit",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExplicitFilledLogo;
