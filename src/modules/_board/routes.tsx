import { Route } from "react-router-dom";
import { Page } from ".";

export function board() {
  return (
    <Route>
      <Route path="/board" element={<Page />} />
    </Route>
  );
}
