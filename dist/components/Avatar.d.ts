import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
declare const AvatarRoot: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const Avatar: React.ForwardRefExoticComponent<AvatarPrimitive.AvatarProps & AvatarPrimitive.AvatarImageProps & AvatarPrimitive.AvatarFallbackProps & {
    fallbackText?: string;
} & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarRoot, AvatarImage, AvatarFallback };
//# sourceMappingURL=Avatar.d.ts.map