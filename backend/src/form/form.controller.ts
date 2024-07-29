import { Controller, Post, Get, Param, Put, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './form.model';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post(':username')
  async createForm(
    @Param('username') username: string,
    @Body() formData: Form,
  ): Promise<Form> {
    formData.username = username;
    return this.formService.createForm(formData);
  }

  @Get(':username')
  async getFormByUsername(
    @Param('username') username: string,
  ): Promise<Form | null> {
    return this.formService.getFormByUsername(username);
  }

  @Put(':username')
  async updateForm(
    @Param('username') username: string,
    @Body() formData: Form,
  ): Promise<Form | null> {
    return this.formService.updateForm(username, formData);
  }
}
