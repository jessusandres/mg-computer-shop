import { Injectable } from '@angular/core';

/* Project */
import { HttpService } from '@app/services/http.service';
import { TUser } from '@app/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendUrl = import.meta.env['NG_APP_BACKEND_URL'];

  constructor(private readonly httpService: HttpService) {}

  async fetchProfile(): Promise<TUser | null> {
    return await this.httpService
      .get(`${this.backendUrl}/users/profile`)
      .then((result) => {
        return result?.user || null;
      });
  }
}
