import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Item } from '../item.model';
import { empty } from 'rxjs';
import { ItemService } from '../item.service';


@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private ItemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id =  route.params['id'];
    if(id){
      return this.ItemService.pesquisarPorId(id);
    }
    return empty();
  }
}
