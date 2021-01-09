import { history } from "./history";

const navigateTo = (pathname: string): void => history.push({ pathname });

export { navigateTo };
