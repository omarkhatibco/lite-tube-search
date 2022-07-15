let formatter = Intl.NumberFormat('en', { notation: 'compact' });

export const formatNumber = (number: number) => formatter.format(number);
