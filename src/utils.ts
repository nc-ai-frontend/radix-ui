export function cn(
  ...inputs: (string | undefined | null | boolean | Record<string, boolean>)[]
): string {
  const classSet = new Set<string>();

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      if (!input.includes(' ')) {
        classSet.add(input);
      } else {
        input
          .trim()
          .split(/\s+/)
          .forEach((cls) => classSet.add(cls));
      }
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classSet.add(key);
      });
    }
  }

  return Array.from(classSet).join(' ');
}

export const prefix = 'design-';
