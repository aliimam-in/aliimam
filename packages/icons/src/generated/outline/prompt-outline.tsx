/**
 * Auto-generated logo component: Prompt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PromptOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PromptOutlineLogo = React.forwardRef<SVGSVGElement, PromptOutlineLogoProps>(
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
      <path d="M5 7l5 5l-5 5" />
  <path d="M13 17l6 0" />
    </svg>
  )
);

PromptOutlineLogo.displayName = "PromptOutlineLogo";

export const PromptOutlineLogoMetadata = {
  id: "prompt-outline",
  baseId: "prompt-outline",
  variant: "default",
  name: "Prompt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PromptOutlineLogo;
