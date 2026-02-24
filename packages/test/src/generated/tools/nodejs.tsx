/**
 * Auto-generated logo component: Nodejs
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NodejsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NodejsLogo = React.forwardRef<SVGSVGElement, NodejsLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2c-5.33 0-9.75 2.3-9.75 5.13v9.74c0 2.83 4.42 5.13 9.75 5.13s9.75-2.3 9.75-5.13v-9.74C21.75 4.3 17.33 2 12 2zm0 2c4.41 0 8 1.79 8 4v4H4v-4c0-2.21 3.59-4 8-4z" fill="#68A063"/>
    </svg>
  )
);

NodejsLogo.displayName = "NodejsLogo";

export const NodejsLogoMetadata = {
  id: "nodejs",
  name: "Nodejs",
  category: "tools",
  tags: ["bjb"],
  viewBox: "0 0 24 24",
} as const;

export default NodejsLogo;
