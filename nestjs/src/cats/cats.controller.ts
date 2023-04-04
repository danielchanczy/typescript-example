import { Controller, Get, Post, Param, Query, Body} from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats.dto';

@Controller('cats')
export class CatsController {
    @Get()
    getCats(@Query('type') type: string){
        return [{type}];
    }

    @Get(':id')
    getOneCats(@Param('id') id: string){
        return {
            id
        };
    }
    @Post()
    createCats(@Body() createCatsDto: CreateCatsDto){
        return{name: createCatsDto.name};
    }
}
