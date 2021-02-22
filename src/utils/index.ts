import { intersection } from "lodash";

export function isLoggedIn() {
  /*
   * Note:
   *  This app assume if local storage have roles it means
   *  user is authenticated you can update this logic as per your app.
   */
  return !!localStorage.getItem("roles");
}

export function isArrayWithLength(arr: any[]) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes: any[]) {
  const roles = JSON.parse(localStorage.getItem("roles") as any);

  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
}
