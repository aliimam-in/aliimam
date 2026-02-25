/**
 * Auto-generated logo component: Storyblocks Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StoryblocksIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const StoryblocksIcon = React.forwardRef<SVGSVGElement, StoryblocksIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <circle fill="#FFE121" cx="128" cy="128" r="128"></circle>
        <path d="M122.4,60.8 L122.4,147.2 C98.4,147.2 79.2,128 79.2,104 C79.2,80 98.4,60.8 122.4,60.8 Z M133.6,195.2 L133.6,108.8 C157.6,108.8 176.8,128 176.8,152 C176.8,175.612903 158.21436,194.579396 134.757484,195.185076 L133.6,195.2 Z M154,60.8 C165.2,60.8 174.4,70 174.4,81.2 C174.4,92.4 165.2,101.6 154,101.6 C142.8,101.6 133.6,92.4 133.6,81.2 C133.6,70 142.8,60.8 154,60.8 Z M102,154.4 C113.2,154.4 122.4,163.6 122.4,174.8 C122.4,186 113.2,195.2 102,195.2 C90.8,195.2 81.6,186 81.6,174.8 C81.6,163.6 90.8,154.4 102,154.4 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

StoryblocksIcon.displayName = "StoryblocksIcon";

export const StoryblocksIconMetadata = {
  id: "storyblocks-icon",
  baseId: "storyblocks-icon",
  variant: "default",
  name: "Storyblocks Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default StoryblocksIcon;
