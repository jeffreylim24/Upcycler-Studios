import { createLoader, parseAsArrayOf, parseAsString, parseAsStringLiteral } from 'nuqs/server';

export const sortingValues = ['curated', 'trending', 'hot_and_new'] as const;

const params = {
  search: parseAsString
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(""),
  sort: parseAsStringLiteral(sortingValues).withDefault('curated'),
  minPrice: parseAsString
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(""),
  maxPrice: parseAsString
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault(""),
  tags: parseAsArrayOf(parseAsString)
    .withOptions({
      clearOnDefault: true,
    })
    .withDefault([]),
}

export const loadProductFilters = createLoader(params);