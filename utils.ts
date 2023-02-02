import { Router } from 'vue-router';

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

  /**
   * Change Page
   * @param router this.$router
   * @param name
   */
  public static changePage(router: Router, name: string): void {
    router.push({
      name: name
    });
  }
}
