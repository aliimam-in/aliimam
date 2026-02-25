/**
 * Auto-generated logo component: Logic Buffer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogicBufferOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogicBufferOutlineLogo = React.forwardRef<SVGSVGElement, LogicBufferOutlineLogoProps>(
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
      <path d="M22 12h-5" />
  <path d="M2 9h5" />
  <path d="M2 15h5" />
  <path d="M7 5l10 7l-10 7l0 -14" />
    </svg>
  )
);

LogicBufferOutlineLogo.displayName = "LogicBufferOutlineLogo";

export const LogicBufferOutlineLogoMetadata = {
  id: "logic-buffer-outline",
  baseId: "logic-buffer-outline",
  variant: "default",
  name: "Logic Buffer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogicBufferOutlineLogo;
