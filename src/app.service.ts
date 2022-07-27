import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Jhoan 8A';
  }

  getDos(): string{
    return 'Pepe 8A';
  }

  getProducto(id:number):string{
    if(id == 1){
      return 'PRODUCTO 1';
    }else if(id == 2){
      return 'PRODUCTO 2';
    }else{
      return 'PRODUCTO NO ENCONTRADO';
    }
    
  }
  getBuscarPage(query:string, page:number):string{
   
      return `Buscar: ${query} -- pagina: ${page}`;
    
    
  }
  getBuscarPageJson(params:string){  
    return params;
  }
  getBuscarPageParam(query:string, page:number, limit:number){  
    return `Buscar: ${query} -- Page: ${page} -- limit: ${limit}`;
  }
}
