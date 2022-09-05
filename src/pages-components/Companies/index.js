import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyList } from "../../actions";
import CompanyViews from "../../layout-components/CompanyViews";

export default function Company(props) {
  const dispatch = useDispatch();

  const org_id = props.match.params.id;
  // console.log("org_id",org_id)

  useEffect(() => {
    if (org_id !== null) {
      dispatch(getCompanyList(org_id));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { company } = useSelector((state) => state.CompanyReducer);

  // console.log("data in company", company)
  return (
    <CompanyViews
      companyData={company?.length > 0 ? company : []}
      orgIdPass={org_id}
    />
  );
}
