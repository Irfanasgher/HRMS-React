import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import DualListBox from "react-dual-listbox";
import { withRouter } from "react-router-dom";
import { store } from "../../../../../store";

import {
  createPolicyGroup,
  CreateMappingPolicyGroup,
} from "../../../../../actions";

class DualListBox1 extends Component {
  state = {
    selected: [],
  };

  onChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    const policies = this.props.policy.map((policy) => ({
      value: policy.id_policy,
      label: policy.name_policy,
    }));
    const { selected } = this.state;

    const addPolicyGroup = () => {
      const data = {
        name_policy_group: this.props.groupName,
      };

      // console.log("dataaaaaaaaaaa", data);
      if (this?.props?.groupName?.length > 0) {
        if (selected.length > 0) {
          store.dispatch(createPolicyGroup(data)).then((e) => {
            const selectedData = {
              policy_group_id: e.id_policy_group,
              policy_id: selected,
            };

            e?.id_policy_group > 0 &&
              store
                .dispatch(CreateMappingPolicyGroup(selectedData))
                .then(() => {
                  this.props.history.push("/dashboard/Policies");
                });
          });
        } else {
          alert("Please Drag Values");
        }
      } else {
        alert("Please Fill All Fields");
      }
    };
    // console.log("dataaaaaaaaaaa", selected);
    return (
      <>
        <div className="">
          <DualListBox
            options={policies}
            selected={selected}
            onChange={this.onChange}
            // canFilter
            // filterCallback={(option, filterInput) => {
            //   if (filterInput === "") {
            //     return true;
            //   }

            //   return new RegExp(filterInput, "i").test(option.label);
            // }}
            // filterPlaceholder="Filter..."
            icons={{
              moveLeft: <FontAwesomeIcon icon={["fas", "chevron-left"]} />,
              moveAllLeft: [
                <FontAwesomeIcon key={0} icon={["fas", "chevron-left"]} />,
                <FontAwesomeIcon key={1} icon={["fas", "chevron-left"]} />,
              ],
              moveRight: <FontAwesomeIcon icon={["fas", "chevron-right"]} />,
              moveAllRight: [
                <FontAwesomeIcon key={0} icon={["fas", "chevron-right"]} />,
                <FontAwesomeIcon key={1} icon={["fas", "chevron-right"]} />,
              ],
              moveDown: <FontAwesomeIcon icon={["fas", "chevron-down"]} />,
              moveUp: <FontAwesomeIcon icon={["fas", "chevron-up"]} />,
            }}
          />
        </div>
        <br />
        <br />
        <div className="d-flex align-items-center justify-content-end">
          <Button
            color="primary"
            type="submit"
            className="ml-auto"
            onClick={addPolicyGroup}
          >
            Save
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(DualListBox1);
