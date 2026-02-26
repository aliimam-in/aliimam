/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BlobFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BlobFilled = React.forwardRef<SVGSVGElement, BlobFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 3c2.779 0 5.349 1.556 7.243 4.082c1.728 2.306 2.757 5.259 2.757 8.016c0 1.47 -.293 2.718 -.903 3.745c-.603 1.014 -1.479 1.758 -2.582 2.257c-1.593 .718 -3.335 .9 -6.515 .9c-3.175 0 -4.92 -.183 -6.514 -.9c-1.012 -.457 -1.833 -1.12 -2.426 -2.01l-.157 -.247c-.61 -1.028 -.903 -2.274 -.903 -3.745c0 -2.757 1.03 -5.71 2.757 -8.016c1.893 -2.526 4.463 -4.082 7.243 -4.082" />
    </svg>
  )
);
BlobFilled.displayName = "BlobFilled";
export const BlobFilledMetadata = { 
  id: "blob_filled", 
  baseId: "blob", 
  variant: "filled", 
  name: "Blob", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BlobFilled;
