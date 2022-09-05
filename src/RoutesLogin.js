import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import { ClimbingBoxLoader } from 'react-spinners';
// import Cookies from 'js-cookie';
import { withRouter } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Login = lazy(() => import("./pages-components/Login/Login"));
const SignUp = lazy(() => import("./pages-components/SignUp/SignUpProcess"));
const OrganizationProcess = lazy(() =>
  import("./pages-components/SignUp/OrganizationProcess")
);

const RoutesLogin = () => {
  const SuspenseLoading = () => {
    return (
      <>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ScaleLoader color={"#128C7E"} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/SignUp" component={SignUp} exact />
          <Route
            path="/OrganizationProcess"
            component={OrganizationProcess}
            exact
          />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default withRouter(RoutesLogin);
