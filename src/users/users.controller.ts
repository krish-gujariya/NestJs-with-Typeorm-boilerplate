import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Logger } from '@nestjs/common';
import { Response } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FindUser } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isPromise } from 'typeorm-extension';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('login')
  async findOne(@Body() userData:FindUser, @Res() res:Response) {
    Logger.log(userData)
    const data = await  this.usersService.findUserByEmail(userData);
      console.log(data);
      

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
