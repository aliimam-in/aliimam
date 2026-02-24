/**
 * Auto-generated logo component: Asterisk (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AsteriskLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AsteriskLogo = React.forwardRef<SVGSVGElement, AsteriskLogoProps>(
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
      <path d="M12 6v12" />
  <path d="M17.196 9 6.804 15" />
  <path d="m6.804 9 10.392 6" />
    </svg>
  )
);

AsteriskLogo.displayName = "AsteriskLogo";

export const AsteriskLogoMetadata = {
  id: "asterisk",
  baseId: "asterisk",
  variant: "default",
  name: "Asterisk",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AsteriskLogo;
