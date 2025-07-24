export const convertMsToMinutes = (ms: string): string => {
  const milliseconds = Number(ms);
  const minutes = Math.floor(milliseconds / 60000);
  return `${minutes} min`;
};
