import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('dos')
  getDos():string{
    return this.appService.getDos();
  }
//parametro en la ruta 
  @Get('producto/:id')
  getProducto(@Param() params):string{
    return this.appService.getProducto(params.id);
  }
  //parametros en la ruta 
  @Get('buscar/:query/:page')
  getBuscarPage(@Param() params):string{
    return this.appService.getBuscarPage(params.query, params.page);
  }
  //parametros en la ruta retunr json
  @Get('buscarJson/:query/:page')
  getBuscarPageJson(@Param() params):string{
    return this.appService.getBuscarPageJson(params);
  }

  //parametros en la ruta return parametro en concreto
  @Get('buscarParam/:query/:page/:limit')
  getBuscarPageParam(
    @Param('query') query,
    @Param('page') page,
    @Param('limit') limit,
    ):string{
    return this.appService.getBuscarPageParam(query, page, limit);
  }
 }

