async function Meta() {
  return [
    {
      entity: "user",
      searchParameters: ["firstName", "lastName", "userName", "email"],
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
          relationName: "roles.rolesPermissions",
          alias: "rolesPermissions",
        },
        {
          relationName: "rolesPermissions.permissions",
          alias: "permissions",
        },
      ],
    },
    {
      entity: "permission",
      searchParameters: ["name"],
      relations: [
        {
          relationName: "permission.userRolesPermissions",
          alias: "userRolesPermissions",
        },
        {
          relationName: "userRolesPermissions.permissions",
          alias: "permissions",
        },
      ],
    },
    {
      entity: "role",
      searchParameters: ["name"],
      relations: [
        {
          relationName: "role.userRoles",
          alias: "userRoles",
        },
        {
          relationName: "role.rolesPermissions",
          alias: "rolesPermissions",
        },
        {
          relationName: "rolesPermissions.permissions",
          alias: "permissions",
        },
      ],
    },
  ];
}

export async function getMeta(entity: string) {
  const relationShips = await Meta();
  return relationShips.find((e) => e.entity == entity);
}
