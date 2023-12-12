import { Controller, Post, Get, Res, Body, HttpStatus, Delete, Param, Put } from "@nestjs/common";
import { Response } from 'express';
import { AddressDto } from "@models/address-dto";
import { AddressesService } from "./addresses.service";

@Controller('addresses')
export class AddressesController {
    constructor(private readonly adresseClubService:AddressesService) {}

    @Get('/')
    async getAddresses(@Res() res) {
        const divingClubs = await this.adresseClubService.getAddresses();
        return res.status(HttpStatus.OK).json(divingClubs);
    }

    @Post('/post')
    async addAddress (@Res() res, @Body() club: AddressDto) {
        const divingClubs = await this.adresseClubService.saveAdress(club);
        return res.status(HttpStatus.OK).json({
            message: 'Post Ok',
            item: divingClubs
        });
    }

    @Put('/:id')
    async updateAddress(@Param('id') id: number, @Body() updatedAddress: AddressDto, @Res() res: Response) {
        const updatedClub = await this.adresseClubService.patchAddress(updatedAddress);
        return res.status(HttpStatus.OK).json({
            message: 'Update Ok',
            item: updatedClub
        });
    }

    @Delete('/:id')
    async deleteAddress(@Param('id') id: number, @Res() res: Response) {
        const deletedClub = await this.adresseClubService.deleteAddress(id);
        return res.status(HttpStatus.OK).json({
            message: 'Delete Ok',
            item: deletedClub
        });
    }
}