/**
 * Auto-generated logo component: Hashnode (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HashnodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HashnodeLogo = React.forwardRef<SVGSVGElement, HashnodeLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#2563EB" fillRule="evenodd" d="M68.692 334.16c-91.59 91.589-91.59 240.085 0 331.674L334.16 931.302c91.589 91.588 240.085 91.588 331.674-.001l265.468-265.467c91.588-91.59 91.588-240.085-.001-331.674L665.834 68.692c-91.59-91.59-240.085-91.59-331.674 0L68.692 334.16Zm431.302 330.06c90.694 0 164.216-73.522 164.216-164.216s-73.522-164.216-164.216-164.216-164.216 73.522-164.216 164.216S409.3 664.22 499.994 664.22Z" clipRule="evenodd" />
    </svg>
  )
);

HashnodeLogo.displayName = "HashnodeLogo";

export const HashnodeLogoMetadata = {
  id: "hashnode",
  baseId: "hashnode",
  variant: "default",
  name: "Hashnode",
  category: "mix",
  tags: [],
  viewBox: "0 0 1000 1000",
} as const;

export default HashnodeLogo;
