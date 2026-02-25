/**
 * Auto-generated logo component: Copyleft (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyleftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyleftFilledLogo = React.forwardRef<SVGSVGElement, CopyleftFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2.117 5.889a4.016 4.016 0 0 0 -5.543 -.23a1 1 0 0 0 1.32 1.502a2.016 2.016 0 0 1 2.783 .116a1.993 1.993 0 0 1 0 2.766a2.016 2.016 0 0 1 -2.783 .116a1 1 0 0 0 -1.32 1.501a4.016 4.016 0 0 0 5.543 -.23a3.993 3.993 0 0 0 0 -5.542z" />
    </svg>
  )
);

CopyleftFilledLogo.displayName = "CopyleftFilledLogo";

export const CopyleftFilledLogoMetadata = {
  id: "copyleft_filled",
  baseId: "copyleft",
  variant: "filled",
  name: "Copyleft",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyleftFilledLogo;
