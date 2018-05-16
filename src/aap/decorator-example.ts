
function MyCoursesDecorator(args): any {
   return function (target) {
        target.prototype.course = args.coursename
    }
       
   }

@MyCoursesDecorator({coursename: 'Angular 4'})
export class DecoratorExample {
    constructor(fname: String) {
        
    }
}
 



