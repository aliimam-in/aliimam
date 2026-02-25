/**
 * Auto-generated logo component: Ai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AiOutlineLogo = React.forwardRef<SVGSVGElement, AiOutlineLogoProps>(
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
      <path d="M8 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M8 13h4" />
  <path d="M16 8v8" />
    </svg>
  )
);

AiOutlineLogo.displayName = "AiOutlineLogo";

export const AiOutlineLogoMetadata = {
  id: "ai-outline",
  baseId: "ai-outline",
  variant: "default",
  name: "Ai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AiOutlineLogo;
