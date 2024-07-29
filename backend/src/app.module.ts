import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { FormSchema } from './form/form.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aasif:Aasif123@cluster0.5jgpgal.mongodb.net/mydb1',
      {},
    ),
    MongooseModule.forFeature([{ name: 'Form', schema: FormSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class AppModule {}
