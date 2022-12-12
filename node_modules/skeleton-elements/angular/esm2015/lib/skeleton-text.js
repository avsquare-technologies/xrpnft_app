import { Directive, Input } from '@angular/core';
export class SkeletonTextDirective {
    constructor() { }
}
SkeletonTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skeleton-text]',
                host: {
                    class: 'skeleton-text',
                    '[class.skeleton-effect-fade]': 'effect === "fade"',
                    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
                    '[class.skeleton-effect-wave]': 'effect === "blink" || effect === "wave"',
                },
            },] }
];
SkeletonTextDirective.ctorParameters = () => [];
SkeletonTextDirective.propDecorators = {
    effect: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24tdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL2xpYi9za2VsZXRvbi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV2pELE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsZ0JBQWUsQ0FBQzs7O1lBWmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLDhCQUE4QixFQUFFLG1CQUFtQjtvQkFDbkQsK0JBQStCLEVBQUUsb0JBQW9CO29CQUNyRCw4QkFBOEIsRUFBRSx5Q0FBeUM7aUJBQzFFO2FBQ0Y7Ozs7cUJBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNrZWxldG9uRWZmZWN0cyB9IGZyb20gJy4vc2tlbGV0b25FZmZlY3QnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NrZWxldG9uLXRleHRdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnc2tlbGV0b24tdGV4dCcsXG4gICAgJ1tjbGFzcy5za2VsZXRvbi1lZmZlY3QtZmFkZV0nOiAnZWZmZWN0ID09PSBcImZhZGVcIicsXG4gICAgJ1tjbGFzcy5za2VsZXRvbi1lZmZlY3QtcHVsc2VdJzogJ2VmZmVjdCA9PT0gXCJwdWxzZVwiJyxcbiAgICAnW2NsYXNzLnNrZWxldG9uLWVmZmVjdC13YXZlXSc6ICdlZmZlY3QgPT09IFwiYmxpbmtcIiB8fCBlZmZlY3QgPT09IFwid2F2ZVwiJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgU2tlbGV0b25UZXh0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZWZmZWN0OiBTa2VsZXRvbkVmZmVjdHM7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19