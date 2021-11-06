import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Hardware, HardwareRelations} from '../models';

export class HardwareRepository extends DefaultCrudRepository<
  Hardware,
  typeof Hardware.prototype.Id,
  HardwareRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Hardware, dataSource);
  }
}
