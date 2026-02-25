/**
 * Auto-generated logo component: Send Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SendOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SendOffOutlineLogo = React.forwardRef<SVGSVGElement, SendOffOutlineLogoProps>(
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
      <path d="M10 14l2 -2m2 -2l7 -7" />
  <path d="M10.718 6.713l10.282 -3.713l-3.715 10.289m-1.063 2.941l-1.722 4.77a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l4.772 -1.723" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SendOffOutlineLogo.displayName = "SendOffOutlineLogo";

export const SendOffOutlineLogoMetadata = {
  id: "send-off-outline",
  baseId: "send-off-outline",
  variant: "default",
  name: "Send Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SendOffOutlineLogo;
