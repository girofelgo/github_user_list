interface route {
    route: string,
    routeWithParams?: any,
}

export const USER_LIST: route = {
    route:  '/user-list',
};
export const USER_DETAILS: route = {
    route: '/user-details/:id',
    routeWithParams: (userId: number) => `/user-details/${userId}`
}