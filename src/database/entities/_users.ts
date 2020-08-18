import { Entity, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { Base } from "../base";
import { _User_Roles } from "./_users_roles";
import { _Profile } from "./_profiles";
import { ObjectType, Field, Root } from "type-graphql";
@ObjectType()
@Entity()
export class _User extends Base {
  @Column({ nullable: true })
  authToken: string;

  @Column({ nullable: true })
  resetToken: string;
  @Field({ nullable: true })
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column("text", { unique: true })
  userName: string;
  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;
  @Field()
  @Column()
  gender: string;

  @Field()
  name(@Root() parent: _User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Column("bool", { default: false })
  confirmed: boolean;

  @OneToOne(() => _Profile, (profile) => profile.user)
  @Field(() => _Profile)
  @JoinColumn()
  profile: _Profile;

  @OneToMany(() => _User_Roles, (ur) => ur.users)
  @Field(() => [_User_Roles])
  userRoles: _User_Roles[];
}
