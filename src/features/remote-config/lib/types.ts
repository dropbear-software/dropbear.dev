export interface WebsiteConfiguration {
  hidden_feature_enabled?: boolean,
  remote_config_enabled?: boolean
}

export interface WebsiteConfigurationControllerSettings {
  minimumFetchIntervalMillis: number,
  fetchTimeoutMillis: number,
  dataSource: URL
}