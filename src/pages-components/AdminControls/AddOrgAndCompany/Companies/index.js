import React from "react";
import CompanyViews from "../../../../layout-components/CompanyViews";

export default function Company(props) {
  const org_id = props.match.params.id;
  return <CompanyViews orgIdPass={org_id} add={true} />;
}
