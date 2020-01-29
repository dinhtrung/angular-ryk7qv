import { HttpParams } from '@angular/common/http';
import * as _ from 'lodash';

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }
  return options;
};


export const plainToFlattenObject = (object: any) => {
  const result = {};

  function flatten(obj: any, prefix = ''): any {
    _.forEach(obj, (value, key) => {
      if (_.isObject(value)) {
        flatten(value, `${prefix}${key}.`);
      } else {
        result[`${prefix}${key}`] = value;
      }
    });
  }
  flatten(object);

  return result;
};
