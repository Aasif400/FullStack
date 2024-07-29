import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Form } from './form.model';

@Injectable()
export class FormService {
  constructor(@InjectModel('Form') private readonly formModel: Model<Form>) {}

  async createForm(data: Form): Promise<Form> {
    const createdForm = new this.formModel(data);
    return createdForm.save();
  }

  async getFormByUsername(username: string): Promise<Form | null> {
    return this.formModel.findOne({ username }).exec();
  }

  async updateForm(username: string, data: Form): Promise<Form | null> {
    return this.formModel
      .findOneAndUpdate({ username }, data, { new: true })
      .exec();
  }
}
