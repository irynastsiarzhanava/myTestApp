import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {

        transform(items: any, input: any, searchableList : any) {
          if (input) {
           input = input.toLowerCase();
           return items.filter(function (el: any) {
           var isTrue = false;
           for(var k in searchableList ){
             if(el[searchableList[k]].toString().toLowerCase().indexOf(input) > -1){
              isTrue = true;
             }
             if(isTrue){
              return el
             }
            }
          })
         }
         return items;
         }
  }

