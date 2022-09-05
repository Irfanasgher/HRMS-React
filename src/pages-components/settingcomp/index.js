import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Card, Button } from "reactstrap";
export default function Setting() {
  const history = useHistory();
  return (
    <>
      <Card className="p-4 shadow-xxl mb-5">
        {/*-----------------Div for Designation Start From Here--------------------- */}
        <div className="table-responsive-md">
          <Table className="table-alternate-spaced">
            <thead>
              {/* <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th style={{ width: '400px' }} scope="col">
                fff
                </th>
               
                
               
                <th scope="col"></th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Designations</b>
                </td>

                <td className="text-right">
                  <Button
                    onClick={() => {
                      history.push({
                        pathname: "/Designation",
                      });
                    }}
                    color="neutral-first"
                    className="rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40"
                  >
                    View Designation
                  </Button>
                  <Button
                    color="neutral-primary"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      className="font-size-sm"
                    />
                  </Button>
                  <Button
                    color="neutral-first"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "edit"]}
                      className="font-size-sm"
                    />
                  </Button>
                  <Button
                    color="neutral-danger"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "times"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/*-----------------Div for Designation Ends Here--------------------- */}

        {/*-----------------Div for Policy Start From Here---------------------------- */}
        <div className="table-responsive-md">
          <Table className="table-alternate-spaced">
            <thead>
              {/* <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th style={{ width: '400px' }} scope="col">
                fff
                </th>
               
                
               
                <th scope="col"></th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Policy</b>
                </td>

                <td className="text-right">
                  <Button
                    onClick={() => {
                      history.push({
                        pathname: "/Policy",
                      });
                    }}
                    color="neutral-first"
                    className="rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40"
                  >
                    View Policy
                  </Button>
                  <Button
                    color="neutral-primary"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "search"]}
                      className="font-size-sm"
                    />
                  </Button>
                  <Button
                    color="neutral-first"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "edit"]}
                      className="font-size-sm"
                    />
                  </Button>
                  <Button
                    color="neutral-danger"
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["fas", "times"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/*----------------Div for Policy Ends Here-------------------------- */}
      </Card>
    </>
  );
}
