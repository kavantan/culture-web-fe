export default function toPascalCase(str: string | null): string {
  if (!str) return '';
  return (
    str
      .match(/[a-z]+/gi)
      ?.map(
        (word: string) =>
          word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
      )
      .join('') || ''
  );
}
