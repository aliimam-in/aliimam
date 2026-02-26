/**
 * Auto-generated logo component: Abstract11 (shapes)
 * Category: abstract
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Abstract11ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract11Shapes = React.forwardRef<SVGSVGElement, Abstract11ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M12.1829 20.7276C12.1829 17.1867 13.6133 14.6762 16.4343 13.259C18.5524 12.1962 20.7067 12.1809 20.7276 12.1809V20.7276H12.181H12.1829ZM3.27429 16.2495V12.1829C3.29714 12.1829 5.44953 12.1981 7.56762 13.261C10.3886 14.6762 11.819 17.1886 11.819 20.7295H7.75238C5.2781 20.7295 3.27429 18.7238 3.27429 16.2514V16.2495ZM11.819 3.27238C11.819 6.81333 10.3886 9.32381 7.56762 10.7409C5.44953 11.8038 3.29524 11.819 3.27429 11.819V3.27238H11.821H11.819ZM20.7276 7.75048V11.8171C20.7048 11.8171 18.5524 11.8019 16.4343 10.739C13.6133 9.32381 12.1829 6.81143 12.1829 3.27047H16.2495C18.7238 3.27047 20.7276 5.27619 20.7276 7.74857V7.75048ZM0 0V24H24V0H0Z" />
    </svg>
  )
);

Abstract11Shapes.displayName = "Abstract11Shapes";

export const Abstract11ShapesMetadata = {
  id: "abstract11_shapes",
  baseId: "abstract11",
  variant: "shapes",
  name: "Abstract11",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Abstract11Shapes;
