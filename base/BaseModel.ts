import axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import Utils from '@/common/utils';

export default class BaseModel {
  protected static MODEL_NAME: string;

  /**
   * Select All
   */
  public static async index(): Promise<Array<any>> {
    const options: AxiosRequestConfig = {
      url: `${Utils.getUrl()}/api/${this.MODEL_NAME}`,
      method: 'GET'
    };

    const result = await axios(options);

    return _.get(result, 'data', []);
  }

  /**
   * Select
   */
  public static async show(id: number): Promise<any | null> {
    const options: AxiosRequestConfig = {
      url: `${Utils.getUrl()}/api/${this.MODEL_NAME}/${id}`,
      method: 'GET'
    };

    const result = await axios(options);

    return _.get(result, 'data', null);
  }

  /**
   * Create
   */
  public static async store(data: any): Promise<void> {
    const options: AxiosRequestConfig = {
      url: `${Utils.getUrl()}/api/${this.MODEL_NAME}`,
      method: 'POST',
      data: data
    };

    await axios(options);

    return;
  }

  /**
   * Update
   */
  public static async update(id: number, data: any): Promise<void> {
    const options: AxiosRequestConfig = {
      url: `${Utils.getUrl()}/api/${this.MODEL_NAME}/${id}`,
      method: 'PUT',
      data: data
    };

    await axios(options);

    return;
  }

  /**
   * Delete
   */
  public static async destroy(id: number): Promise<void> {
    const options: AxiosRequestConfig = {
      url: `${Utils.getUrl()}/api/${this.MODEL_NAME}/${id}`,
      method: 'DELETE',
    };

    await axios(options);

    return;
  }
}
