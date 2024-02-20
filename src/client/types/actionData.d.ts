import { ActionFunction } from "react-router-dom";

export type ActionData<TActionFn extends ActionFunction> = Awaited<
  ReturnType<TActionFn>
> extends Response | infer D
  ? D
  : never;
