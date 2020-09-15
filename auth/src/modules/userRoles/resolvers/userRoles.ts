// import { Resolver, Mutation, Arg } from "type-graphql";
import { UserRolesInput } from "../models/userRoles";
import { _User_Roles } from "../../../database/entities/_users_roles";
// import {
//   Create,
//   Update,
//   Delete,
//   SoftDelete,
//   Restore,
// } from "../../../utilities/commonResolvers/mutation";
// // import { Resolver, Mutation, Arg } from "type-graphql";
// import { Search, Get } from "../../../utilities/commonResolvers/query";
// import { Pagination } from "../../common/input/pagination";
// import { getMeta } from "../../../constants/entity/metaData";
// import { Property } from "../../common/input/property";
import { Resolver, Mutation, Arg } from "type-graphql";
import { _User } from "../../../../src/database/entities/_users";
import { _Roles } from "../../../../src/database/entities/_roles";
import { getManager } from "typeorm";

// export const SearchUserRoles = Search(
//   "UserRole", // suffix
//   _User_Roles, // return type
//   Pagination, // input type
//   _User_Roles, // entity
//   getMeta("userRole") // meta data
// );
// export const GetUserRoles = Get(
//   "UserRole", //suffix
//   _User_Roles, // return type
//   Property, // input type
//   _User_Roles, // entity
//   getMeta("userRole") //meta data
// );

// // export const CreateUserRoles = Create(
// //   "UserRole", //suffix
// //   _User_Roles, // return type
// //   UserRolesInput, // input type
// //   _User_Roles // entity
// // );
// export const UpdateUserRoles = Update(
//   "UserRole", //suffix
//   _User_Roles, // return type
//   UserRolesInput, // input type
//   _User_Roles // entity
// );

// export const DeleteUserRoles = Delete(
//   "UserRole", //suffix
//   UserRolesInput, // input type
//   _User_Roles // entity
// );

// export const SoftDeleteUserRoles = SoftDelete(
//   "UserRole", //suffix
//   UserRolesInput, // input type
//   _User_Roles // entity
// );
// export const RestoreDeletedUserRoles = Restore(
//   "UserRole", //suffix
//   UserRolesInput, // input type
//   _User_Roles // entity
// );
@Resolver()
export class UserRolesResolver {
  @Mutation(() => _User_Roles)
  async createUserRoles(
    @Arg("data") data: UserRolesInput
  ) {
    const userRoles = new _User_Roles();

    const user = (await _User.findOne(
      data.userId
    )) as _User;

    const role = (await _Roles.findOne(
      data.roleId
    )) as _Roles;

    userRoles.roles = role;
    userRoles.users = user;

    await getManager()
      .connection.createEntityManager()
      .save(userRoles);
    console.log(userRoles);
    // userRoles.userRolesPermissions = [userRolePermissions];
    await getManager().connection.createEntityManager().save(user);
    console.log(role);
    return userRoles;
  }
}