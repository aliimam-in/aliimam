/**
 * Auto-generated logo component: Google (Colaboratory)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GoogleColaboratoryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GoogleColaboratory = React.forwardRef<SVGSVGElement, GoogleColaboratoryProps>(
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
      <path fill="#E8710A" d="M4.54 9.46 2.19 7.1a6.93 6.93 0 0 0 0 9.79l2.36-2.36a3.59 3.59 0 0 1-.01-5.07Z" /><path fill="#F9AB00" d="m2.19 7.1 2.35 2.36a3.59 3.59 0 0 1 5.08 0l1.71-2.93-.1-.08a6.93 6.93 0 0 0-9.04.65ZM11.34 17.46l-1.72-2.92a3.59 3.59 0 0 1-5.08 0L2.19 16.9a6.93 6.93 0 0 0 9 .65l.11-.09M12 7.1a6.93 6.93 0 0 0 0 9.79l2.36-2.36a3.59 3.59 0 1 1 5.08-5.08l2.37-2.35a6.93 6.93 0 0 0-9.81 0Z" /><path fill="#E8710A" d="m21.81 7.1-2.35 2.36a3.59 3.59 0 0 1-5.08 5.08L12 16.9a6.93 6.93 0 0 0 9.81-9.8Z" />
    </svg>
  )
);

GoogleColaboratory.displayName = "GoogleColaboratory";

export const GoogleColaboratoryMetadata = {
  id: "Google_Colaboratory",
  baseId: "Google",
  variant: "Colaboratory",
  name: "Google",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GoogleColaboratory;
