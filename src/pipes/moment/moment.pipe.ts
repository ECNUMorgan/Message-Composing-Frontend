import { Pipe, PipeTransform } from '@angular/core';
//import { Pipe } from '@angular/core';
import moment from 'moment';
/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name:'moment',
})
 export class MomentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {
    // return value.toLowerCase();
    args=args || '';
    return args === 'ago' ? moment(value).fromNow() : moment(value).format(args);
  }
}
