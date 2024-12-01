interface SearchResult {
    name: string;
    local_names: {
      en: string;
      fa: string;
    };
    lat: number;
    lon: number;
    country: string;
    state: string;
  }
  