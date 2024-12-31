import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

/* Extra */
import { lastValueFrom } from 'rxjs';

/* Project */
import { EnvironmentService } from '@app/services/environment.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private token?: string | null;
  constructor(
    private readonly http: HttpClient,
    private readonly environmentService: EnvironmentService,
  ) {}

  get(
    url: string,
    options?: {
      headers?: HttpHeaders | any;
      context?: HttpContext;
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [p: string]:
              | string
              | number
              | boolean
              | readonly (string | number | boolean)[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
      transferCache?: { includeHeaders?: string[] } | boolean;
    },
  ): Promise<any> {
    this.token = this.environmentService.getToken();

    return lastValueFrom(
      this.http.get(url, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization:
            options?.headers?.Authorization || `Bearer ${this.token}`,
        },
      }),
    );
  }
}
