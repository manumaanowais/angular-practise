import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsComponent } from './components/forms/forms.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/directives/attribute-directives/attribute-directives.component';
import { ComponentDirectivesComponent } from './components/directives/component-directives/component-directives.component';
import { CustomDirectivesComponent } from './components/directives/custom-directives/custom-directives.component';
import { BuiltInPipesComponent } from './components/pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './components/pipes/custom-pipes/custom-pipes.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ParentToChildComponent } from './components/communication/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './components/communication/child-to-parent/child-to-parent.component';
import { SiblingComponent } from './components/communication/sibling/sibling.component';
import { ComponentAComponent } from './components/communication/sibling/component-a/component-a.component';
import { ComponentBComponent } from './components/communication/sibling/component-b/component-b.component';
import { InterceptorComponent } from './components/interceptor/interceptor.component';
import { RouteGuardsComponent } from './components/route-guards/route-guards.component';
import { NavigateComponent } from './components/route-guards/navigate/navigate.component';
import { CanActivateComponent } from './components/route-guards/can-activate/can-activate.component';
import { CanActivateChildComponent } from './components/route-guards/can-activate-child/can-activate-child.component';
import { CanDeactivateComponent } from './components/route-guards/can-deactivate/can-deactivate.component';
import { ResolveComponent } from './components/route-guards/resolve/resolve.component';
import { Route1Component } from './components/route-guards/can-activate/route1/route1.component';
import { Route2Component } from './components/route-guards/can-activate/route2/route2.component';
import { RouteGuard } from './guards/router-guards.guard';
import { Route3Component } from './components/route-guards/can-activate-child/route3/route3.component';
import { Route4Component } from './components/route-guards/can-activate-child/route4/route4.component';
import { RouteChild1Component } from './components/route-guards/can-activate-child/route3/route-child1/route-child1.component';
import { RouteChild2Component } from './components/route-guards/can-activate-child/route3/route-child2/route-child2.component';
import { LoadRoute1Component } from './components/route-guards/can-load/load-route1/load-route1.component';
import { LoadRoute2Component } from './components/route-guards/can-load/load-route2/load-route2.component';
import { NgrxStateManagementComponent } from './components/ngrx-state-management/ngrx-state-management.component';
import { CreationOperatorsComponent } from './components/rxjs/creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './components/rxjs/transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './components/rxjs/filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './components/rxjs/combination-operators/combination-operators.component';
import { ErrorHandlingComponent } from './components/rxjs/error-handling/error-handling.component';

export const routes: Routes = [
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'forms', component: FormsComponent, children: [
        {path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
        {path: 'reactive-forms', component: ReactiveFormsComponent}
    ]},
    {path: 'directives', component: DirectivesComponent, children: [
        {path: 'structural-directives', component: StructuralDirectivesComponent},
        {path: 'attribute-directives', component: AttributeDirectivesComponent},
        {path: 'component-directives', component: ComponentDirectivesComponent},
        {path: 'custom-directives', component: CustomDirectivesComponent}
    ]},
    {path: 'pipes', component: PipesComponent, children: [
        {path: 'built-in-pipes', component: BuiltInPipesComponent},
        {path: 'custom-pipes', component: CustomPipesComponent}
    ]},
    {path: 'communication', component: CommunicationComponent, children: [
        {path: 'parent-to-child', component: ParentToChildComponent},
        {path: 'child-to-parent', component: ChildToParentComponent},
        {path: 'sibling', component: SiblingComponent, children: [
            {path: 'component-a', component: ComponentAComponent},
            {path: 'component-b', component: ComponentBComponent}
        ]}
    ]},
    {path: 'life-cycle-hooks', component: LifeCycleHooksComponent},
    {path: 'rxjs', component: RxjsComponent, children: [
        {path: 'creation-operators', component: CreationOperatorsComponent },
        {path: 'transformation-operators', component: TransformationOperatorsComponent },
        {path: 'filtering-operators', component: FilteringOperatorsComponent },
        {path: 'combination-operators', component: CombinationOperatorsComponent },
        {path: 'error-handling', component: ErrorHandlingComponent },
    ]},
    {path: 'http-client', component: HttpClientComponent},
    {path: 'interceptors', component: InterceptorComponent},
    {path: 'route-guards', component: RouteGuardsComponent, children: [
        {path: 'navigate', component: NavigateComponent},
        {path: 'can-activate', component: CanActivateComponent, children: [
            {path: 'route1', component: Route1Component, canActivate: [RouteGuard]},
            {path: 'route2', component: Route2Component, canActivate: [RouteGuard]}
        ]},
        {path: 'can-activate-child', component: CanActivateChildComponent, children: [
            {path: 'route3', component: Route3Component, children:[
                {path: 'route-child1', component: RouteChild1Component},
                {path: 'route-child2', component: RouteChild2Component}
            ], canActivateChild: [RouteGuard]},
            {path: 'route4', component: Route4Component, canActivateChild: [RouteGuard]}
        ]},
        {path: 'can-deactivate', component: CanDeactivateComponent, canDeactivate: [RouteGuard]},
        {path: 'resolve', component: ResolveComponent, resolve: {todos : RouteGuard}},
        {path: 'can-load', loadComponent: () => import('./components/route-guards/can-load/can-load.component').then(c => c.CanLoadComponent), children: [
            {path: 'load-route1', component: LoadRoute1Component, canLoad: [RouteGuard]},
            {path: 'load-route2', component: LoadRoute2Component},
        ]},
    ]},
    {path: 'ngrx-state-management', component: NgrxStateManagementComponent},
    {path: '', redirectTo: 'data-binding', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];
