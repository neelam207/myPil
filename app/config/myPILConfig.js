import { environment } from "./environment";

export class AppConfig {
  api = {
    name: environment.api.name,
    url: environment.api.url,
  };
  signUpUrl = environment.signUpUrl;
  googleMapsApiKey = environment.googleMapsApiKey;
}
