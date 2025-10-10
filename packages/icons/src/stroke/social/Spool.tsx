import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SpoolProps extends IconProps {
  type?: "stroke";
}

export const Spool: IconComponent<SpoolProps> = React.forwardRef<
  SVGSVGElement,
  SpoolProps
>(function Spool(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M17.0001 13.44L4.44208 17.082C3.98304 17.2175 3.58782 17.5131 3.32818 17.9152C3.06854 18.3173 2.96169 18.7991 3.02703 19.2732C3.09238 19.7474 3.32559 20.1824 3.68432 20.4992C4.04305 20.816 4.5035 20.9937 4.98208 21H19.0001C19.4819 21.0004 19.9477 20.8267 20.3118 20.511C20.6758 20.1954 20.9137 19.7588 20.9816 19.2818C21.0495 18.8047 20.9428 18.3192 20.6813 17.9145C20.4198 17.5098 20.0209 17.2131 19.5581 17.079L18.4431 16.759C18.0268 16.6383 17.6609 16.3856 17.4007 16.0389C17.1404 15.6923 16.9998 15.2705 17.0001 14.837V7.66"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99998 10.56L19.558 6.918C20.017 6.7825 20.4122 6.48687 20.6719 6.08481C20.9315 5.68274 21.0384 5.20089 20.973 4.72676C20.9077 4.25263 20.6745 3.81765 20.3157 3.50081C19.957 3.18397 19.4966 3.00628 19.018 3H4.99998C4.51812 2.99965 4.05233 3.17329 3.68828 3.48897C3.32422 3.80465 3.08638 4.24116 3.01849 4.71822C2.9506 5.19527 3.05723 5.6808 3.31876 6.08551C3.5803 6.49023 3.97915 6.78691 4.44198 6.921L5.55698 7.241C5.9733 7.36172 6.33913 7.61443 6.59938 7.96107C6.85964 8.30772 7.00023 8.72953 6.99998 9.163V16.341"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M17.0001 13.44L4.44208 17.082C3.98304 17.2175 3.58782 17.5131 3.32818 17.9152C3.06854 18.3172 2.96169 18.7991 3.02703 19.2732C3.09238 19.7473 3.32559 20.1823 3.68432 20.4992C4.04305 20.816 4.5035 20.9937 4.98208 21H19.0001C19.4819 21.0003 19.9477 20.8267 20.3118 20.511C20.6758 20.1953 20.9137 19.7588 20.9816 19.2818C21.0495 18.8047 20.9428 18.3192 20.6813 17.9145C20.4198 17.5097 20.0209 17.2131 19.5581 17.079L18.4431 16.759C18.0268 16.6383 17.6609 16.3855 17.4007 16.0389C17.1404 15.6923 16.9998 15.2704 17.0001 14.837V7.65997"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99998 10.56L19.558 6.918C20.017 6.7825 20.4122 6.48687 20.6719 6.08481C20.9315 5.68274 21.0384 5.20089 20.973 4.72676C20.9077 4.25263 20.6745 3.81765 20.3157 3.50081C19.957 3.18397 19.4966 3.00628 19.018 3H4.99998C4.51812 2.99965 4.05233 3.17329 3.68828 3.48897C3.32422 3.80465 3.08638 4.24116 3.01849 4.71822C2.9506 5.19527 3.05723 5.6808 3.31876 6.08551C3.5803 6.49023 3.97915 6.78691 4.44198 6.921L5.55698 7.241C5.9733 7.36172 6.33913 7.61443 6.59938 7.96107C6.85964 8.30772 7.00023 8.72953 6.99998 9.163V16.341"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M17 13.44L4.44195 17.082C3.98292 17.2175 3.5877 17.5132 3.32806 17.9152C3.06841 18.3173 2.96157 18.7991 3.02691 19.2733C3.09226 19.7474 3.32547 20.1824 3.6842 20.4992C4.04292 20.8161 4.50338 20.9938 4.98195 21H19C19.4818 21.0004 19.9476 20.8267 20.3117 20.5111C20.6757 20.1954 20.9136 19.7589 20.9814 19.2818C21.0493 18.8048 20.9427 18.3192 20.6812 17.9145C20.4196 17.5098 20.0208 17.2131 19.558 17.079L18.443 16.759C18.0266 16.6383 17.6608 16.3856 17.4006 16.039C17.1403 15.6923 16.9997 15.2705 17 14.837V7.66003"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99998 10.56L19.558 6.918C20.017 6.7825 20.4122 6.48687 20.6719 6.08481C20.9315 5.68274 21.0384 5.20089 20.973 4.72676C20.9077 4.25263 20.6745 3.81765 20.3157 3.50081C19.957 3.18397 19.4966 3.00628 19.018 3H4.99998C4.51812 2.99965 4.05233 3.17329 3.68828 3.48897C3.32422 3.80465 3.08638 4.24116 3.01849 4.71822C2.9506 5.19527 3.05723 5.6808 3.31876 6.08551C3.5803 6.49023 3.97915 6.78691 4.44198 6.921L5.55698 7.241C5.9733 7.36172 6.33913 7.61443 6.59938 7.96107C6.85964 8.30772 7.00023 8.72953 6.99998 9.163V16.341"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Spool doesn't support ${type}`);
  return null;
});

Spool.displayName = "Spool";

Spool.metadata = {
  name: "Spool",
  category: "stroke/social",
  tags: ["spool", "icon"],
  description: "Spool icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Spool;
