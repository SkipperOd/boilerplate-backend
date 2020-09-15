import { ApplicationContext } from "../../../utilities/types/applicationContext";
import { MiddlewareFn } from "type-graphql";
import { GetStatusText } from "../../../constants/responses/responsCode";
export const IsAuthenticated: MiddlewareFn<ApplicationContext> = async (
  { context, info},
  next
) => {
  const anonymityList = ["register", "login"]
  // console.log(anonymityList.includes(info.fieldName),info.fieldName)
  if (anonymityList.includes(info.fieldName)) {
    return next();
  }
  if (!context.req.session!.userId)
    throw new Error(
      GetStatusText("208") + " " + GetStatusText("207").toLowerCase()
    );
  return next();
};
