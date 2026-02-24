/**
 * Auto-generated logo component: Drizzle Orm (light)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DrizzleOrmLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DrizzleOrmLight = React.forwardRef<SVGSVGElement, DrizzleOrmLightProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="9.631" height="40.852" fill="#121212" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)" /><rect width="9.631" height="40.852" fill="#121212" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)" /><rect width="9.631" height="40.852" fill="#121212" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)" /><rect width="9.631" height="40.852" fill="#121212" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)" />
    </svg>
  )
);

DrizzleOrmLight.displayName = "DrizzleOrmLight";

export const DrizzleOrmLightMetadata = {
  id: "drizzle-orm_light",
  baseId: "drizzle-orm",
  variant: "light",
  name: "Drizzle Orm",
  category: "mix",
  tags: [],
  viewBox: "0 0 160 160",
} as const;

export default DrizzleOrmLight;
