import { Controller, Post, Get, Res, Body, HttpStatus, Delete, Param, Put } from "@nestjs/common";
import { Response } from 'express';
import { DivingClub } from "src/@models/diving-club";
import { DivingClubsService } from "./diving-clubs.service";
import { DivingClubDto } from "src/@models/diving-club-dto";

@Controller('diving-clubs')
export class DivingClubsController {
    constructor(private readonly divingClubService:DivingClubsService) {}

    @Get('/')
    async getDivingClubs(@Res() res) {
        const divingClubs = await this.divingClubService.getDivingClubs();
        return res.status(HttpStatus.OK).json(divingClubs);
    }

    @Post('/post')
    async addDivingClub (@Res() res, @Body() club: DivingClubDto) {
        const divingClubs = await this.divingClubService.addDivingClub(club);
        return res.status(HttpStatus.OK).json({
            message: 'Post Ok',
            item: divingClubs
        });
    }


    @Put('/:id')
    async updateDivingClub(@Param('id') id: number, @Body() updatedDivingClub: DivingClubDto, @Res() res: Response) {
        const updatedClub = await this.divingClubService.updateDivingClub(updatedDivingClub);
        return res.status(HttpStatus.OK).json({
            message: 'Update Ok',
            item: updatedClub
        });
    }


    @Delete('/:id')
    async deleteDivingClub(@Param('id') id: number, @Res() res: Response) {
        const deletedClub = await this.divingClubService.deleteDivingClub(id);
        return res.status(HttpStatus.OK).json({
            message: 'yeeees',
            item: deletedClub
        });
    }
}