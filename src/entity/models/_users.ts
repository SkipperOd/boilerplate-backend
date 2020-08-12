import { Entity, Column, OneToMany} from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
@Entity()
export class _User extends Base{

  @Column()
  authToken: string;

  @Column()
  resetToken: string;  

  @Column()
  firstName: string;
 
  @Column()
  lastName: string;

  @Column("text", { unique: true })
  userName: string;

  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;

  @Column("bool", { default: false })
  confirmed: boolean;

  @OneToMany(() => _User_Roles, userRoles => userRoles.users)
  userRoles: _User_Roles[];
}
