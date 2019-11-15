import titlize from 'titlize';

export const rentalType = isShared => isShared ? 'shared' : 'whole';

export const makeTitle = value => value ? titlize(value) : '';