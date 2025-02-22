export function filterData(searchResto, allRestaurants) {
  return allRestaurants.filter((restaurants) =>
    restaurants?.info?.name?.toLowerCase()?.includes(searchResto.toLowerCase())
  );
}