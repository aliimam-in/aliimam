/**
 * Auto-generated logo component: Creative Commons Nc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsNcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsNcOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsNcOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" />
  <path d="M12 7v2" />
  <path d="M12 15v2" />
  <path d="M6 6l3 3" />
  <path d="M15 15l3 3" />
    </svg>
  )
);

CreativeCommonsNcOutlineLogo.displayName = "CreativeCommonsNcOutlineLogo";

export const CreativeCommonsNcOutlineLogoMetadata = {
  id: "creative-commons-nc-outline",
  baseId: "creative-commons-nc-outline",
  variant: "default",
  name: "Creative Commons Nc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsNcOutlineLogo;
