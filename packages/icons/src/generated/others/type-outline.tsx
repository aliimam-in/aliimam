/**
 * Auto-generated logo component: Type Outline (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TypeOutlineLogo = React.forwardRef<SVGSVGElement, TypeOutlineLogoProps>(
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
      <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
    </svg>
  )
);

TypeOutlineLogo.displayName = "TypeOutlineLogo";

export const TypeOutlineLogoMetadata = {
  id: "type-outline",
  baseId: "type-outline",
  variant: "default",
  name: "Type Outline",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypeOutlineLogo;
