import { Component, Input } from '@angular/core';
export class SkeletonBlockComponent {
}
SkeletonBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'skeleton-block',
                template: `<ng-content></ng-content>`,
                host: {
                    class: 'skeleton-block',
                    '[class.skeleton-effect-fade]': 'effect === "fade"',
                    '[class.skeleton-effect-pulse]': 'effect === "pulse"',
                    '[class.skeleton-effect-wave]': 'effect === "blink" || effect === "wave"',
                    '[style.width]': 'width',
                    '[style.height]': 'height',
                    '[style.border-radius]': 'borderRadius',
                }
            },] }
];
SkeletonBlockComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    effect: [{ type: Input }],
    borderRadius: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24tYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW5ndWxhci9saWIvc2tlbGV0b24tYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlakQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBYmxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsOEJBQThCLEVBQUUsbUJBQW1CO29CQUNuRCwrQkFBK0IsRUFBRSxvQkFBb0I7b0JBQ3JELDhCQUE4QixFQUFFLHlDQUF5QztvQkFDekUsZUFBZSxFQUFFLE9BQU87b0JBQ3hCLGdCQUFnQixFQUFFLFFBQVE7b0JBQzFCLHVCQUF1QixFQUFFLGNBQWM7aUJBQ3hDO2FBQ0Y7OztvQkFFRSxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2tlbGV0b25FZmZlY3RzIH0gZnJvbSAnLi9za2VsZXRvbkVmZmVjdCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdza2VsZXRvbi1ibG9jaycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NrZWxldG9uLWJsb2NrJyxcbiAgICAnW2NsYXNzLnNrZWxldG9uLWVmZmVjdC1mYWRlXSc6ICdlZmZlY3QgPT09IFwiZmFkZVwiJyxcbiAgICAnW2NsYXNzLnNrZWxldG9uLWVmZmVjdC1wdWxzZV0nOiAnZWZmZWN0ID09PSBcInB1bHNlXCInLFxuICAgICdbY2xhc3Muc2tlbGV0b24tZWZmZWN0LXdhdmVdJzogJ2VmZmVjdCA9PT0gXCJibGlua1wiIHx8IGVmZmVjdCA9PT0gXCJ3YXZlXCInLFxuICAgICdbc3R5bGUud2lkdGhdJzogJ3dpZHRoJyxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnaGVpZ2h0JyxcbiAgICAnW3N0eWxlLmJvcmRlci1yYWRpdXNdJzogJ2JvcmRlclJhZGl1cycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFNrZWxldG9uQmxvY2tDb21wb25lbnQge1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgZWZmZWN0OiBTa2VsZXRvbkVmZmVjdHM7XG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1czogc3RyaW5nO1xufVxuIl19