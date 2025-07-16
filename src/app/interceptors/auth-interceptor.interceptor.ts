import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = 'my-auth-token';

  const cloned = req.clone({
    setHeaders: {
      Authoriztation: `Bearer ${token}`
    }
  })

  return next(cloned)
};