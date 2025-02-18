import { Route } from "react-router-dom";
import { Page } from ".";

export function createTask() {
  return (
    <Route>
      <Route path="/create_task" element={<Page />} />
    </Route>
  );
}
