export default class Utils {
  /**
   * Get URL
   * @param domain
   * @returns url
   */
  public static getUrl(domain?: string): string {
    switch (process.env.NODE_ENV) {
      case 'development': {
        return 'http://localhost';
      }

      case 'production': {
        return `https://${domain}`;
      }

      default: {
        return 'http://localhost';
      }
    }
  }
}
