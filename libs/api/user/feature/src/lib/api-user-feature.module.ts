import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@sandbox-v4150/api/user/data-access'

import { ApiUserFeatureResolver } from './api-user-feature.resolver'
import { ApiUserFeatureAdminResolver } from './api-user-feature-admin.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [ApiUserFeatureResolver, ApiUserFeatureAdminResolver],
})
export class ApiUserFeatureModule {}
