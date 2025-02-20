import { DaysForCompleteField } from "../DaysForCompleteField";
import { DeadlineField } from "../DeadlineField";
import { DependenciesForm } from "../DependenciesForm";
import { DescriptionField } from "../DescriptionField";
import { NameField } from "../NameField";
import { ResponsibleSelect } from "../ResponsibleSelect";

export const Form = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <NameField />
      <DescriptionField />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ResponsibleSelect />
        <DeadlineField />
        <DaysForCompleteField />
      </div>
      <DependenciesForm />
    </div>
  );
};
