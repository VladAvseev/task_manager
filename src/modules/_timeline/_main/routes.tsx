import { Route } from "react-router-dom";
import { Page } from ".";

export function main() {
  return (
    <Route>
      <Route path="/main_timeline" element={<Page />} />
    </Route>
  );
}
