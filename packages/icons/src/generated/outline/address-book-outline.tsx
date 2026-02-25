/**
 * Auto-generated logo component: Address Book Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AddressBookOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AddressBookOutlineLogo = React.forwardRef<SVGSVGElement, AddressBookOutlineLogoProps>(
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
      <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
  <path d="M10 16h6" />
  <path d="M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 8h3" />
  <path d="M4 12h3" />
  <path d="M4 16h3" />
    </svg>
  )
);

AddressBookOutlineLogo.displayName = "AddressBookOutlineLogo";

export const AddressBookOutlineLogoMetadata = {
  id: "address-book-outline",
  baseId: "address-book-outline",
  variant: "default",
  name: "Address Book Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AddressBookOutlineLogo;
