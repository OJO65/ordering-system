import { ProductProvider } from "../context/Context";

export function AppProviders({ children }) {
  return <ProductProvider>{children}</ProductProvider>;
}
