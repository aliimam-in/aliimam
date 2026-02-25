/**
 * Auto-generated logo component: Amplication Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmplicationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AmplicationIcon = React.forwardRef<SVGSVGElement, AmplicationIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 262"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,130.518701 C0,197.83555 49.3153402,253.132039 112.769137,260.859786 L112.769137,0.176731449 C49.3153402,7.90446661 0,63.2009562 0,130.518701 Z M256,130.513477 C256,62.8525172 206.179726,7.21258138 142.053231,0 L142.053231,261.198598 L255.832087,261.198598 L255.832087,134.11951 C256,132.917996 256,131.715737 256,130.513477 Z" fill="#7950ED"></path>
    </g>
    </svg>
  )
);

AmplicationIcon.displayName = "AmplicationIcon";

export const AmplicationIconMetadata = {
  id: "amplication-icon",
  baseId: "amplication-icon",
  variant: "default",
  name: "Amplication Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 262",
} as const;

export default AmplicationIcon;
