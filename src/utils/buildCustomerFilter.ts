import { Prisma } from '@prisma/client';

export const buildCustomerFilters = (query: any): Prisma.CustomerWhereInput => {
  const {
    channel,
    isActive,
    tier,
    gender,
    flavor,
    flavors,
    companyName,
    contactPerson,
    createdFrom,
    createdTo
  } = query;

  const filters: Prisma.CustomerWhereInput = {};

  if (channel) filters.channel = channel as any;
  if (isActive !== undefined) filters.isActive = isActive === 'true';
  if (tier) filters.customerTier = tier as any;
  if (gender) filters.gender = gender;

  // Partial match
  if (companyName) filters.companyName = { contains: companyName, mode: 'insensitive' };
  if (contactPerson) filters.contactPerson = { contains: contactPerson, mode: 'insensitive' };

  // Single flavor match
  if (flavor) filters.favoriteFlavors = { has: flavor };

  // Multiple flavor match
  if (flavors) {
    const flavorArray = Array.isArray(flavors) ? flavors : flavors.split(',');
    filters.favoriteFlavors = { hasSome: flavorArray };
  }

  // Date range
  if (createdFrom || createdTo) {
    filters.createdAt = {};
    if (createdFrom) filters.createdAt.gte = new Date(createdFrom);
    if (createdTo) filters.createdAt.lte = new Date(createdTo);
  }

  return filters;
};