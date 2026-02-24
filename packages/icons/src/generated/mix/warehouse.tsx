/**
 * Auto-generated logo component: Warehouse (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WarehouseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WarehouseLogo = React.forwardRef<SVGSVGElement, WarehouseLogoProps>(
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
      <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
  <path d="M6 13h12" />
  <path d="M6 17h12" />
    </svg>
  )
);

WarehouseLogo.displayName = "WarehouseLogo";

export const WarehouseLogoMetadata = {
  id: "warehouse",
  baseId: "warehouse",
  variant: "default",
  name: "Warehouse",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WarehouseLogo;
