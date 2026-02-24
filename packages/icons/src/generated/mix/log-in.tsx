/**
 * Auto-generated logo component: Log In (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixLogInLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixLogInLogo = React.forwardRef<SVGSVGElement, MixLogInLogoProps>(
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
      <path d="m10 17 5-5-5-5" />
  <path d="M15 12H3" />
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    </svg>
  )
);

MixLogInLogo.displayName = "MixLogInLogo";

export const MixLogInLogoMetadata = {
  id: "log-in",
  baseId: "log-in",
  variant: "default",
  name: "Log In",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixLogInLogo;
