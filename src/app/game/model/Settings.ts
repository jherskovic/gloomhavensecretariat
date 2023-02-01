
export class Settings {
  calculate: boolean = true;
  calculateStats: boolean = true;
  abilityNumbers: boolean = true;
  eliteFirst: boolean = true;
  expireConditions: boolean = true;
  applyConditions: boolean = true;
  activeApplyConditions: boolean = true;
  moveElements: boolean = true;
  hideStats: boolean = true;
  randomStandees: boolean = false;
  activeStandees: boolean = true;
  alwaysAllyAttackModifierDeck: boolean = false;
  alwaysHazardousTerrain: boolean = false;
  initiativeRequired: boolean = true;
  disableStandees: boolean = false;
  abilityReveal: boolean = true;
  showFullAbilityCard: boolean = false;
  applyLoot: boolean = true;
  alwaysLootApplyDialog = false;
  alwaysLootDeck: boolean = false;
  fullscreen: boolean = false;
  fhStyle: boolean = false;
  theme: string = "";
  autoscroll: boolean = true;
  scenarioRules: boolean = true;
  scenarioRooms: boolean = true;
  automaticStandees: boolean = true;
  scenarioNumberInput: boolean = false;
  disableColumns: boolean = false;
  disableAnimations: boolean = false;
  dragValues: boolean = true;
  hideAbsent: boolean = false;
  hints: boolean = true;
  zoom: number = 100;
  automaticAttackModifierFullscreen: boolean = true;
  barsize: number = 1;
  fontsize: number = 1;
  locale: string = "en";
  editions: string[] = [];
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
  debugRightClick: boolean = false;
  feedback: boolean = true;
}