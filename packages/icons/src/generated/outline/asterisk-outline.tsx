/**
 * Auto-generated logo component: Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AsteriskOutlineLogo = React.forwardRef<SVGSVGElement, AsteriskOutlineLogoProps>(
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
      <path d="M12 12l8 -4.5" />
  <path d="M12 12v9" />
  <path d="M12 12l-8 -4.5" />
  <path d="M12 12l8 4.5" />
  <path d="M12 3v9" />
  <path d="M12 12l-8 4.5" />
    </svg>
  )
);

AsteriskOutlineLogo.displayName = "AsteriskOutlineLogo";

export const AsteriskOutlineLogoMetadata = {
  id: "asterisk-outline",
  baseId: "asterisk-outline",
  variant: "default",
  name: "Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AsteriskOutlineLogo;
