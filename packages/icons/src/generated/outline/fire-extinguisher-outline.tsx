/**
 * Auto-generated logo component: Fire Extinguisher Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FireExtinguisherOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FireExtinguisherOutlineLogo = React.forwardRef<SVGSVGElement, FireExtinguisherOutlineLogoProps>(
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
      <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4" />
  <path d="M9 16h6" />
  <path d="M12 7v-3" />
  <path d="M16 5l-4 -1l4 -1" />
  <path d="M12 4h-3a3 3 0 0 0 -3 3" />
    </svg>
  )
);

FireExtinguisherOutlineLogo.displayName = "FireExtinguisherOutlineLogo";

export const FireExtinguisherOutlineLogoMetadata = {
  id: "fire-extinguisher-outline",
  baseId: "fire-extinguisher-outline",
  variant: "default",
  name: "Fire Extinguisher Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FireExtinguisherOutlineLogo;
