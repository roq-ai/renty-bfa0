const mapping: Record<string, string> = {
  applications: 'application',
  properties: 'property',
  reviews: 'review',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
