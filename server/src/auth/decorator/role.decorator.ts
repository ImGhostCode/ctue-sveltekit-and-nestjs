import { SetMetadata } from "@nestjs/common";
import { AUTH_TYPES } from "../../global/globalEnum";

export const Roles = (...roles: AUTH_TYPES[]) => SetMetadata('roles', roles)