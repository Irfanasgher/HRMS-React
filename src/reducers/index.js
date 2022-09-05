import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import CollectionsReducer from "./CollectionsReducer";
import ClaimsReducer from "./ClaimsReducer";
import GeneralSettingReducer from "./GeneralSettingReducer";
import UserLoggedIn from "./UserLoggedIn";
import OrganizationReducer from "./OrganizationReducer";
import { DashboardReducers } from "./DashboardReducers";
import { CompanyReducer } from "./CompanyReducer";
import PolicyReducer from "./policyReducer";
import PlanReducer from "./PlanReducer";
import EmployeeReducer from "./EmployeeReducer";
import AttendanceReducer from "./AttendanceReducer";
import AssetReducer from "./AssetReducer";
import LeaveReducer from "./LeaveReducer";
import DesignationReducer from "./DesignationReducer";
import PayrollReducer from "./PayrollReducer";
import RollReducer from "./RollReducer";
const rootReducers = combineReducers({
  ThemeOptions,
  CollectionsReducer,
  ClaimsReducer,
  GeneralSettingReducer,
  UserLoggedIn,
  OrganizationReducer,
  DashboardReducers,
  CompanyReducer,
  DesignationReducer,
  PolicyReducer,
  PlanReducer,
  EmployeeReducer,
  AttendanceReducer,
  AssetReducer,
  LeaveReducer,
  PayrollReducer,
  RollReducer
});

export default rootReducers;
