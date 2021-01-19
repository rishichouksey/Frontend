
import { AppCommonService } from './app-common.service';
import { AuthInterceptor } from './auth.interceptor';
import { LocalStorageService } from './common-local-storage.service';

export const services = [AppCommonService,LocalStorageService, AuthInterceptor];

export * from './app-common.service';
