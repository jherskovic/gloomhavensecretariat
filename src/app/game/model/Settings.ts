export class Settings {
  calculate: boolean = true;
  calculateStats: boolean = true;
  abilityNumbers: boolean = true;
  eliteFirst: boolean = true;
  expireConditions: boolean = true;
  applyConditions: boolean = true;
  moveElements: boolean = true;
  hideStats: boolean = true;
  randomStandees: boolean = false;
  initiativeRequired: boolean = true;
  fullscreen: boolean = false;
  hints: boolean = true;
  zoom: number = 100;
  locale: string = "en";
  editionDataUrls: string[] = [];
  excludeEditionDataUrls: string[] = [];
  spoilers: string[] = [];
  browserNavigation: boolean = false;
  serverUrl: string | undefined;
  serverPort: number | undefined;
  serverPassword: string | undefined;
  serverAutoconnect: boolean = true;
  serverSettings: boolean = false;
  serverWss: boolean = false;
  maxUndo: number = 50;
}