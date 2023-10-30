import { environment } from "./environment";

export const AppConfig ={
  api : {
    name: environment.api.name,
    base_url: environment.api.base_url,
  },
  signUpUrl : environment.signUpUrl,
}
