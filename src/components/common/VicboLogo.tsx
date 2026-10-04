import React from 'react';

export interface VectioLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'default' | 'monochrome' | 'dark';
  interactive?: boolean;
}

export const VectioIcon: React.FC<{
  size?: number | string;
  className?: string;
  variant?: 'default' | 'monochrome' | 'dark';
  interactive?: boolean;
}> = ({
  size = 32,
  className = '',
  variant = 'default',
  interactive = true,
}) => {
  const pixelSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 32;

  return (
    <img
      src="/images/vectio-symbol.png"
      alt="Vectio - Posicionamento e Infraestrutura Digital"
      width={pixelSize}
      height={pixelSize}
      className={`shrink-0 transition-transform duration-300 ease-out select-none ${
        interactive ? 'group-hover:scale-105' : ''
      } ${className}`}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        objectFit: 'contain',
        filter: variant === 'dark' ? 'brightness(1.2)' : 'none',
      }}
      loading="eager"
    />
  );
};

export const VectioLogo: React.FC<VectioLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'default',
  interactive = true,
}) => {
  // Height and proportional width matrix (Source aspect ratio: 910 / 220 = 4.136)
  const sizeMap = {
    sm: { height: 26, width: 108 },
    md: { height: 32, width: 132 },
    lg: { height: 38, width: 157 },
    xl: { height: 46, width: 190 },
  };

  const current = sizeMap[size] || sizeMap.md;
  const logoSrc = variant === 'dark' ? '/images/vectio-logo-white.png' : '/images/vectio-logo.png';

  if (!showText) {
    return (
      <VectioIcon
        size={current.height}
        variant={variant}
        interactive={interactive}
        className={className}
      />
    );
  }

  return (
    <div
      className={`group inline-flex items-center select-none ${className}`}
    >
      <img
        src={logoSrc}
        alt="Vectio — Agência de E-commerce e Posicionamento Digital em Marília"
        width={current.width}
        height={current.height}
        className={`h-auto object-contain transition-transform duration-300 ease-out ${
          interactive ? 'group-hover:scale-[1.02]' : ''
        }`}
        style={{
          height: `${current.height}px`,
          width: 'auto',
          aspectRatio: '910 / 220',
        }}
        loading="eager"
      />
    </div>
  );
};

// Aliases for backwards compatibility with previous imports
export const VicboLogo = VectioLogo;
export const VicboIcon = VectioIcon;
export type VicboLogoProps = VectioLogoProps;

export default VectioLogo;
