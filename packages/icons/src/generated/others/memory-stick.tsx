/**
 * Auto-generated logo component: Memory Stick (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MemoryStickLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MemoryStickLogo = React.forwardRef<SVGSVGElement, MemoryStickLogoProps>(
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
      <path d="M12 12v-2" />
  <path d="M12 18v-2" />
  <path d="M16 12v-2" />
  <path d="M16 18v-2" />
  <path d="M2 11h1.5" />
  <path d="M20 18v-2" />
  <path d="M20.5 11H22" />
  <path d="M4 18v-2" />
  <path d="M8 12v-2" />
  <path d="M8 18v-2" />
  <rect x="2" y="6" width="20" height="10" rx="2" />
    </svg>
  )
);

MemoryStickLogo.displayName = "MemoryStickLogo";

export const MemoryStickLogoMetadata = {
  id: "memory-stick",
  baseId: "memory-stick",
  variant: "default",
  name: "Memory Stick",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MemoryStickLogo;
