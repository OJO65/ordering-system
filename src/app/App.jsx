import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AppRoutes } from "./AppRoutes";
import { AppProviders } from "./AppProvider";
function App() {
  return (
    <div>
      <AppProviders>
        <BrowserRouter>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </BrowserRouter>
      </AppProviders>
    </div>
  );
}

export default App;
