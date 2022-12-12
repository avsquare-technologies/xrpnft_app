import { NgModule } from '@angular/core';
import { SkeletonBlockComponent } from './skeleton-block';
import { SkeletonAvatarComponent } from './skeleton-avatar';
import { CommonModule } from '@angular/common';
import { SkeletonTextDirective } from './skeleton-text';
import { SkeletonImageComponent } from './skeleton-image';
export class SkeletonElementsModule {
}
SkeletonElementsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkeletonBlockComponent,
                    SkeletonAvatarComponent,
                    SkeletonTextDirective,
                    SkeletonImageComponent,
                ],
                exports: [
                    SkeletonBlockComponent,
                    SkeletonAvatarComponent,
                    SkeletonTextDirective,
                    SkeletonImageComponent,
                ],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24tZWxlbWVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvbGliL3NrZWxldG9uLWVsZW1lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlCMUQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBZmxDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2tlbGV0b25CbG9ja0NvbXBvbmVudCB9IGZyb20gJy4vc2tlbGV0b24tYmxvY2snO1xuaW1wb3J0IHsgU2tlbGV0b25BdmF0YXJDb21wb25lbnQgfSBmcm9tICcuL3NrZWxldG9uLWF2YXRhcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2tlbGV0b25UZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9za2VsZXRvbi10ZXh0JztcbmltcG9ydCB7IFNrZWxldG9uSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3NrZWxldG9uLWltYWdlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2tlbGV0b25CbG9ja0NvbXBvbmVudCxcbiAgICBTa2VsZXRvbkF2YXRhckNvbXBvbmVudCxcbiAgICBTa2VsZXRvblRleHREaXJlY3RpdmUsXG4gICAgU2tlbGV0b25JbWFnZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNrZWxldG9uQmxvY2tDb21wb25lbnQsXG4gICAgU2tlbGV0b25BdmF0YXJDb21wb25lbnQsXG4gICAgU2tlbGV0b25UZXh0RGlyZWN0aXZlLFxuICAgIFNrZWxldG9uSW1hZ2VDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbkVsZW1lbnRzTW9kdWxlIHt9XG4iXX0=