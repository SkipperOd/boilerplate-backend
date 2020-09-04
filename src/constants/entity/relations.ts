async function relationMeta() {
   return [
     {
       entity: "user",
       relations: [
         {
           relationName: "user.profile",
           alias: "profile",
         },
         {
           relationName: "user.userRoles",
           alias: "userRoles",
         },
         {
           relationName: "userRoles.roles",
           alias: "roles",
         },
         {
           relationName: "userRoles.userRolesPermissions",
           alias: "userRolesPermissions",
         },
         {
           relationName: "userRolesPermissions.permissions",
           alias: "permissions",
         },
       ],
     },
   ];
}

export async function getRelations(entity: string) {
  const relationShips = await relationMeta();
  return relationShips.find((e) => e.entity == entity);
}
