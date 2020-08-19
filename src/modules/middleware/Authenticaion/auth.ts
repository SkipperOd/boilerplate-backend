import { ApplicationContext } from "../../../utilities/types/application_context";
import { MiddlewareFn } from "type-graphql";
import { GetStatusText } from "../../../constants/respons_code";
export const IsAuthenticated: MiddlewareFn<ApplicationContext> = async (
  { context, info },
  next
) => {
  const anonymityList = ["register", "login"]

  if (anonymityList.includes(info.fieldName)) {
    return next();
  }
  if (!context.req.session!.userId)
    throw new Error(
      GetStatusText("208") + " " + GetStatusText("207").toLowerCase()
    );
  return next();
};
