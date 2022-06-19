import { App_RoutingForms_Form } from "@prisma/client";

import { zodFields, zodRoutes } from "./zod";

export function getSerializableForm<TForm extends App_RoutingForms_Form>(form: TForm) {
  const routesParsed = zodRoutes.safeParse(form.routes);
  if (!routesParsed.success) {
    throw new Error("Error parsing routes");
  }

  const fieldsParsed = zodFields.safeParse(form.fields);
  if (!fieldsParsed.success) {
    throw new Error("Error parsing fields");
  }
  return {
    ...form,
    fields: fieldsParsed.data,
    routes: routesParsed.data,
    createdAt: form.createdAt.toString(),
    updatedAt: form.updatedAt.toString(),
  };
}
