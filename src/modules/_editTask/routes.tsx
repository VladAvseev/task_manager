import { Route } from "react-router-dom";
import { Page } from ".";

export function editTask() {
  return (
    <Route>
      <Route path="/edit_task/:id" element={<Page />} />
    </Route>
  );
}
