import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from "class-validator";
  
  import { _User } from "../../database/entities/_users";
  
  @ValidatorConstraint({ async: true })
  export class IsEmailAlreadyExistConstraint
    implements ValidatorConstraintInterface {
    validate(email: string) {
      return _User.findOne({ where: { email } }).then((user) => {
        if (user) return false;
        return true;
      });
    }
  }
  
  export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsEmailAlreadyExistConstraint,
      });
    };
  }
  