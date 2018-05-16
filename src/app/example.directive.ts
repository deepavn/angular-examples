import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: 'p' })

export class Example1ElementDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'blue';
       el.nativeElement.style.color = 'white';
       el.nativeElement.style.padding = '10px';
    }
}

@Directive({ selector: 'myP' })

export class Example2ElementDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'black';
       el.nativeElement.style.color = 'white';
       el.nativeElement.style.padding = '10px';
    }
}

@Directive({ selector: 'input' })

export class Example3ElementDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'white';
       el.nativeElement.style.color = 'black';
       el.nativeElement.style.padding = '5px';
       el.nativeElement.style.margin = '2px';
    }
}

@Directive({ selector: '[myClick]' })

export class Example4AttributeDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'white';
       el.nativeElement.style.color = 'black';
       el.nativeElement.style.padding = '5px';
       el.nativeElement.style.margin = '2px';
    }
}

@Directive({ 
    selector: '[countClick]' ,
    host: {'(click)': 'forOnClick($event)'}
})

export class Example5EventDirective {
 numberOfClicks: number=0
    forOnClick() {
        console.log("Number of clicks: " + (++this.numberOfClicks))
   }
}

