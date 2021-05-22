import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IFooter } from '../footers/footer.interface';
import { DataItem } from '../models/dataitem';
import { ContainerRefDirective } from './containerRef.directive';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss'],
})
export class DataItemComponent implements OnInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @Input() item = <DataItem>{};

  @Input()
  data!: Map<string, any>;

  @ViewChild(ContainerRefDirective, { static: true })
  containerRef!: ContainerRefDirective;
  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const component = this.data.has(this.item.categoryType)
      ? this.data.get(this.item.categoryType)
      : this.data.get('Error');
    const componentData = this.data.get(this.item.categoryType)
      ? this.item
      : 'Category not found';
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory<IFooter>(component);
    const footer =
      this.containerRef.viewContainerRef.createComponent<IFooter>(
        componentFactory
      );
    footer.instance.data = componentData;
  }
}
