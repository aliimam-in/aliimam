/**
 * Auto-generated logo component: Asterisk Simple Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AsteriskSimpleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AsteriskSimpleOutlineLogo = React.forwardRef<SVGSVGElement, AsteriskSimpleOutlineLogoProps>(
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
      <path d="M12 12v-9" />
  <path d="M12 12l-9 -2.5" />
  <path d="M12 12l9 -2.5" />
  <path d="M12 12l6 8.5" />
  <path d="M12 12l-6 8.5" />
    </svg>
  )
);

AsteriskSimpleOutlineLogo.displayName = "AsteriskSimpleOutlineLogo";

export const AsteriskSimpleOutlineLogoMetadata = {
  id: "asterisk-simple-outline",
  baseId: "asterisk-simple-outline",
  variant: "default",
  name: "Asterisk Simple Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AsteriskSimpleOutlineLogo;
