/**
 * Auto-generated logo component: Address Book Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AddressBookOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AddressBookOffOutlineLogo = React.forwardRef<SVGSVGElement, AddressBookOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" />
  <path d="M10 16h6" />
  <path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
  <path d="M4 8h3" />
  <path d="M4 12h3" />
  <path d="M4 16h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AddressBookOffOutlineLogo.displayName = "AddressBookOffOutlineLogo";

export const AddressBookOffOutlineLogoMetadata = {
  id: "address-book-off-outline",
  baseId: "address-book-off-outline",
  variant: "default",
  name: "Address Book Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AddressBookOffOutlineLogo;
