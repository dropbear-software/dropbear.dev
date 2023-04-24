import { WebsiteConfiguration, WebsiteConfigurationControllerSettings } from "./types.js";


export const defaultServiceSettings: WebsiteConfigurationControllerSettings = {
  minimumFetchIntervalMillis: 3600000,
  fetchTimeoutMillis: 1500,
  dataSource: new URL("../../../assets/data/fake_remote_config_settings.json", import.meta.url)
};

export const defaultConfiguration: WebsiteConfiguration = {
  hidden_feature_enabled: false,
  remote_config_enabled: true
}