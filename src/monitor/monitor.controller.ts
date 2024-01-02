import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Res,
  } from '@nestjs/common';
    import { MonitorService } from './monitor.service';
    import { MonitorDto } from 'src/@model-dto/monitor-dto';
  
  @Controller('monitors')
  export class MonitorController {
    constructor(private readonly service: MonitorService) {}
  
    @Get('/')
    async getMonitors(@Res() res) {
      const result = await this.service.getMonitors();
      return res.status(HttpStatus.OK).json(result);
    }
  
    @Get('/:id')
    async getMonitor(@Res() res, @Param('id', ParseIntPipe) id: number) {
      const result = await this.service.getMonitor(id);
      if (!result) {
        throw new NotFoundException('Monitor does not exist!');
      }
      return res.status(HttpStatus.OK).json(result);
    }
    
    @Post('/')
    async create(@Res() res, @Body() createItem: MonitorDto) {
      const newItem = await this.service.saveMonitor(createItem);
      return res.status(HttpStatus.OK).json({
        message: 'Monitor has been submitted successfully!',
        item: newItem,
      });
    }
  
    @Put('/:id')
    async editTodo(
      @Res() res,
      @Param('id', ParseIntPipe) id: number,
      @Body() updatedItem: MonitorDto,
    ) {
      if (updatedItem.id !== id) {
        throw new NotFoundException('Id is different');
      }
      const editedItem = await this.service.saveMonitor({
        ...updatedItem,
        id,
      });
      if (!editedItem) {
        throw new NotFoundException('Monitor does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Monitor has been successfully updated',
        todo: editedItem,
      });
    }
  }
  