import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from "class-validator";
  
  import { _User } from "../../database/entities/_users";
  
  @ValidatorConstraint({ async: true })
  export class userNameConstraint
    implements ValidatorConstraintInterface {
    validate(userName: string) {
      console.log("Username : ",userName)
      return _User.findOne({ where: { userName } }).then((user) => {
        if (user) return false;
        return true;
      });
    }
  }
  
  export function IsUserNameAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: userNameConstraint,
      });
    };
  }
  