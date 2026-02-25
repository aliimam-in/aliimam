/**
 * Auto-generated logo component: Luggage (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LuggageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LuggageLogo = React.forwardRef<SVGSVGElement, LuggageLogoProps>(
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
      <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
  <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
  <path d="M10 20h4" />
  <circle cx="16" cy="20" r="2" />
  <circle cx="8" cy="20" r="2" />
    </svg>
  )
);

LuggageLogo.displayName = "LuggageLogo";

export const LuggageLogoMetadata = {
  id: "luggage",
  baseId: "luggage",
  variant: "default",
  name: "Luggage",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LuggageLogo;
