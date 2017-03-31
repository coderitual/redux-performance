import * as React from "react";

interface AppProps { compiler: string; framework: string; }
export const App: React.StatelessComponent<AppProps> = (props: AppProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;