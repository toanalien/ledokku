import React from 'react';

interface IconProps {
  size?: 24 | 40;
}

export const DigitalOceanIcon: React.FC<IconProps> = ({
  size = 24,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 40 40`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.39333 32.2751H1.38667V27.3001H6.36167V32.2751H12.3V24.5501H20.025V32.2501C28.2367 32.2401 34.575 24.1118 31.445 15.4735C30.2817 12.2735 27.7283 9.72347 24.5283 8.56347C15.8783 5.42514 7.745 11.7801 7.745 20.0001H0C0 6.9068 12.65 -3.2932 26.3733 0.991803C32.3733 2.8668 37.1333 7.62847 39.0067 13.6251C43.29 27.3501 33.0967 40.0001 20 40.0001V32.2751H12.295V38.2085H6.36167V32.2751H1.38833H1.39167H1.39333Z"
      fill="currentColor"
    />
  </svg>
);
