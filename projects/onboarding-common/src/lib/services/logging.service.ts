// projects/onboarding-common/src/lib/services/logging.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
