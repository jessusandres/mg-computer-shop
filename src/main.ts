import { bootstrapApplication } from '@angular/platform-browser';

/* Project */
import { appConfig } from '@app/app.config';
import { AppComponent } from '@app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
