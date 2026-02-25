/**
 * Auto-generated logo component: Heart Handshake Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartHandshakeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartHandshakeOutlineLogo = React.forwardRef<SVGSVGElement, HeartHandshakeOutlineLogoProps>(
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
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
  <path d="M12.5 15.5l2 2" />
  <path d="M15 13l2 2" />
    </svg>
  )
);

HeartHandshakeOutlineLogo.displayName = "HeartHandshakeOutlineLogo";

export const HeartHandshakeOutlineLogoMetadata = {
  id: "heart-handshake-outline",
  baseId: "heart-handshake-outline",
  variant: "default",
  name: "Heart Handshake Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartHandshakeOutlineLogo;
