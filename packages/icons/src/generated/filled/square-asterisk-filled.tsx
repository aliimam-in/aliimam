/**
 * Auto-generated logo component: Square Asterisk Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareAsteriskFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareAsteriskFilledLogo = React.forwardRef<SVGSVGElement, SquareAsteriskFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5.5a1 1 0 0 0 -1 1v1.631l-1.445 -.963l-.101 -.06a1 1 0 0 0 -1.009 1.724l1.75 1.168l-1.75 1.169l-.093 .07a1 1 0 0 0 1.203 1.594l1.445 -.965v1.632l.007 .117a1 1 0 0 0 1.993 -.117v-1.631l1.445 .963l.101 .06a1 1 0 0 0 1.009 -1.724l-1.752 -1.169l1.752 -1.167l.093 -.07a1 1 0 0 0 -1.203 -1.594l-1.445 .962v-1.63l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);

SquareAsteriskFilledLogo.displayName = "SquareAsteriskFilledLogo";

export const SquareAsteriskFilledLogoMetadata = {
  id: "square-asterisk-filled",
  baseId: "square-asterisk-filled",
  variant: "default",
  name: "Square Asterisk Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareAsteriskFilledLogo;
