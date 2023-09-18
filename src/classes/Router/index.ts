import type { TBlockConstructable } from '@classes/Block/types';
import { Route } from '@classes/Route';
import type { TRouteProps } from '@classes/Route/types';
import { store } from '@classes/Store';
import { authController } from '@controllers/AuthController';

export class Router {
  public routes: Route[] = [];
  public history!: History;
  private currentRoute!: Route | undefined;
  private instance!: Router;

  constructor() {
    if (this.instance) {
      return this.instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = undefined;

    this.instance = this;
  }

  use(pathname: string, block: TBlockConstructable, props?: TRouteProps) {
    const route = new Route(pathname, block, props);

    this.routes.push(route);
    this.instance = this;
    return this;
  }

  start() {
    window.onpopstate = event => {
      if (event.currentTarget instanceof Window) {
        this.onProtectedRoute(event.currentTarget.location.pathname);
      }
    };

    this.onProtectedRoute(window.location.pathname);
  }

  private async checkProtectedRoute() {
    let isProtectedRoute = true;

    switch (window.location.pathname) {
      case '/':
      case '/sign-up':
      case '/404':
      case '/5XX':
      case '/toc':
        isProtectedRoute = false;
        break;
    }

    if (!isProtectedRoute) {
      return true;
    }

    if (!store.getState().user) {
      try {
        await authController.fetchUser();

        if (store.getState().user) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.warn(e);
        return false;
      }
    }

    return true;
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (route !== this.currentRoute && this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    if (route) {
      route.render();
    }
  }

  private async onProtectedRoute(pathname: string) {
    const isAuthiorized = await this.checkProtectedRoute();

    if (!isAuthiorized) {
      window.location.pathname = '';
    }

    this.onRoute(pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this.onProtectedRoute(pathname);
  }

  public back() {
    history.back();
  }

  public forward() {
    history.forward();
  }

  public getRoute(pathname: string) {
    const foundRoute = this.routes.find(route => route.match(pathname));

    if (!foundRoute) {
      this.go('/404');
    }

    return foundRoute;
  }
}

export const router = new Router();
