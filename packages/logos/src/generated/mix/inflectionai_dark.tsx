/**
 * Auto-generated logo component: Inflectionai (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InflectionaiDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const InflectionaiDark = React.forwardRef<SVGSVGElement, InflectionaiDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M11.97 31c-.61 0-.97-.386-.97-1.03v-.34c0-.642.286-.942.817-1.156L13 28.045c.817-.34 1.101-.729 1.101-1.629V5.584c0-.9-.284-1.286-1.101-1.63l-1.191-.428c-.53-.214-.809-.51-.809-1.157v-.34c0-.643.367-1.029.979-1.029h8.04c.614 0 .981.386.981 1.03v.34c0 .642-.286.942-.817 1.156l-1.19.425c-.858.34-1.145.729-1.145 1.63v20.828c0 .9.287 1.286 1.144 1.63l1.183.428c.53.214.817.51.817 1.157v.34c0 .643-.367 1.03-.98 1.03L11.97 31Z" />
    </svg>
  )
);

InflectionaiDark.displayName = "InflectionaiDark";

export const InflectionaiDarkMetadata = {
  id: "inflectionai_dark",
  baseId: "inflectionai",
  variant: "dark",
  name: "Inflectionai",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default InflectionaiDark;
