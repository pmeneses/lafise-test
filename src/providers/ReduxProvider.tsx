"use client";

import React, { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  // create the store once on the client
  const [store] = useState(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}
